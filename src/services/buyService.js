import api from '~/services/api';

export const buyService = {
    getAllOrders() {
        return api.get('/orders');
    },
};
