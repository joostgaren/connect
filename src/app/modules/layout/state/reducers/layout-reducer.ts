import { ActionReducer, Action } from '@ngrx/store';
import { FirebaseAuthState } from 'angularfire2';

export const BOOTSTRAP_REQUESTED = 'BOOTSTRAP_REQUESTED';
export const BOOTSTRAP_FINISHED = 'BOOTSTRAP_FINISHED';
export const BOOTSTRAP_FAILED = 'BOOTSTRAP_FAILED';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_FINISHED = 'LOGOUT_FINISHED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export interface State {
    isBootstrapFinished: boolean;
    isUserLoggedIn: false;
};

const initialState: State = {
    isBootstrapFinished: false,
    isUserLoggedIn: false,
};

export function LayoutReducer(state = initialState, action: Action): State {

    console.log("Action " + action.type);
    console.log("Payload " + action.payload);

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

        default:
            return state;
    }
};
