import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import React, { useState } from 'react';

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    axios
      .get('http://127.0.0.1:4000/api/admin/verifyToken', {
        headers: {
          'x-access-token': token
        }
      })
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        navigate('/signin');
      });
  }, []);

  return isLoading ? <div>Loading...</div> : <>{children}</>;
};

export default ProtectedRoutes;
