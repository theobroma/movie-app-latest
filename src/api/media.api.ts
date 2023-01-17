import { axiosInstance } from './connection';

export const moviesAPI = {
  getSimilar(mediaId: string, mediaType: string) {
    return axiosInstance.get<any>(`/${mediaType}/${mediaId}/similar`);
  },
};
