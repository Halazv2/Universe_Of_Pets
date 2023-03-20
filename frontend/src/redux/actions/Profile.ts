import {appIntl} from '../../@crema/utility/helper/Utils';
import {Dispatch} from 'redux';
import {AppActions} from '../../types';
import {fetchError, fetchStart, fetchSuccess, showMessage} from './Common';
import jwtAxios from '../../@crema/services/auth/jwt-auth';
import {GET_CONNECTIONS_LIST} from '../../types/actions/Chat.actions';

export const saveProfile = () => {
  const {messages} = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    console.log('fetchStart: ', fetchStart);
    jwtAxios
      .get('/api/chatApp/connections')
      .then((data) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch(showMessage('HI , I am working'));
          dispatch({type: GET_CONNECTIONS_LIST, payload: data.data});
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};
