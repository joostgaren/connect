import { ActionReducer, Action } from '@ngrx/store';
import { FirebaseAuthState } from 'angularfire2';

export const BOOTSTRAP_REQUESTED = 'BOOTSTRAP_REQUESTED';
export const BOOTSTRAP_FINISHED = 'BOOTSTRAP_FINISHED';
export const BOOTSTRAP_FAILED = 'BOOTSTRAP_FAILED';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_FINISHED = 'LOGOUT_FINISHED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_FINISHED = 'LOGIN_FINISHED';
export const LOGIN_FAILED = 'LOGIN_FAILED';


export interface State {
    isBootstrapFinished: boolean;
    isAuthenticationRunning: boolean;
    isUserLoggedIn: boolean;
    isAuthenticationFailed: boolean,
};

const initialState: State = {
    isBootstrapFinished: false,
    isAuthenticationRunning: false,
    isUserLoggedIn: false,
    isAuthenticationFailed: false,
};

export function AuthReducer(state = initialState, action: Action): State {

    console.log("Action " + action.type);
    console.log("Payload " + JSON.stringify(action.payload));

    switch (action.type) {

        case BOOTSTRAP_REQUESTED:
            return state;

        case BOOTSTRAP_FINISHED:
            return Object.assign({}, state, {
                isBootstrapFinished: true,
                isUserLoggedIn: action.payload ? true : false,
            })

        case BOOTSTRAP_FAILED:
            return state;

        case LOGOUT_REQUESTED:
            return state;

        case LOGOUT_FINISHED:
            return Object.assign({}, state, {
                isUserLoggedIn: false,
            })

        case LOGOUT_FAILED:
            return state;

        case LOGIN_REQUESTED:
            return Object.assign({}, state, {
                isAuthenticationRunning: true,
                isAuthenticationFailed: false,
            })

        case LOGIN_FINISHED:
            return Object.assign({}, state, {
                isAuthenticationRunning: false,
                isUserLoggedIn: true,
            })            

        case LOGIN_FAILED:
            return Object.assign({}, state, {
                isAuthenticationRunning: false,
                isUserLoggedIn: false,
                isAuthenticationFailed: true,
            })            

        default:
            return state;
    }
};
