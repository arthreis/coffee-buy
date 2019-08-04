import api from './api';

export const buyService = {
    getAllOrders() {
        return api.get('/orders');
    },
};
