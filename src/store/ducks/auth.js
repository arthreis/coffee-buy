import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
    signInRequest: ['email', 'password'],
    signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    signedIn: false,
    token: null,
});

/* Reducers */

export const success = (state, { _id }) => {
    console.log(_id);
    return state.merge({ signedIn: true, _id });
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGN_IN_SUCCESS]: success,
});
