import { CommonActionTypes } from './actions/Common.action';
import { EcommerceActionTypes } from './actions/Ecommerce.action';
import { AuthActions } from './actions/Auth.actions';

export type AppActions = CommonActionTypes | EcommerceActionTypes | AuthActions;
