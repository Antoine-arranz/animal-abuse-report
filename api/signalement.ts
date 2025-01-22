import { api } from './client';

export interface SignalementData {
  type: string;
  description: string;
  location: string;
  // ... autres champs
}

export const signalementService = {
  create: async (data: SignalementData) => {
    return await api.post('/signalements', data);
  },
  
  getAll: async () => {
    return await api.get('/signalements');
  },
  
  getById: async (id: string) => {
    return await api.get(`/signalements/${id}`);
  },
}; 