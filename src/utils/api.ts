import apiClient from './axios';
import { useQuery } from '@tanstack/react-query';

const categoriesApi = {
    getProducts: async () => {
        const response = await apiClient.get('/categories');
        return response.data;
    },
};

const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: categoriesApi.getProducts,
    });
};

export { categoriesApi, useCategories };
