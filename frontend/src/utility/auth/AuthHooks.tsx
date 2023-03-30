import React from 'react';
import { jwtAxios } from '../../services/auth/jwt-auth';
import { useNavigate } from 'react-router';

export const useAuthUser = () => {
  const [authUser, setAuthUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      jwtAxios.defaults.headers.common['x-access-token'] = access_token;
    }

    jwtAxios
      .get('/verifytoken')
      .then((res) => {
        setAuthUser(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        navigate('/signin', { replace: true });
      });
  }, []);

  return { authUser, isLoading };
};
