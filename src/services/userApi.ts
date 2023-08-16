import api from './api';

export const getUserByUsername = async (username: string) => {
    const response = await api.get(`/${username}`);
    return response.data;
}