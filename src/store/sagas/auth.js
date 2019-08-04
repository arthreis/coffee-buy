import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email }) {
    try {
        const headers = {
            headers: {
                'user-email': email,
            },
        };

        const response = yield call(api.get, 'users', headers);

        localStorage.setItem('@coffeeBuy:token', response.data._id);

        yield put(AuthActions.signInSuccess(response.data._id));
    } catch (error) {
        console.log(error);
    }
}
