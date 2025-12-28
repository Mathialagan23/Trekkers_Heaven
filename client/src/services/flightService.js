import api from './api.js';

export const getFlights = async () => {
  const response = await api.get('/flights');
  return response.data;
};

export const getFlight = async (id) => {
  const response = await api.get(`/flights/${id}`);
  return response.data;
};

export const createFlight = async (data) => {
  const response = await api.post('/flights', data);
  return response.data;
};

export const updateFlight = async (id, data) => {
  const response = await api.put(`/flights/${id}`, data);
  return response.data;
};

export const deleteFlight = async (id) => {
  const response = await api.delete(`/flights/${id}`);
  return response.data;
};

