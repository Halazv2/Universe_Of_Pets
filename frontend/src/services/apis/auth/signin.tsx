import { AuthUser } from '@/types/models/AuthUser';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '@/shared/constants/AppConst';

interface Credentials {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
}

export const signIn = async (credentials: Credentials): Promise<SignInResponse> => {
  try {
    const response: AxiosResponse<SignInResponse> = await axios.post(
      `${API_URL}/admin/signin`,
      credentials
    );

    if (response.data) {
      localStorage.setItem('access_token', response.data.token);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
