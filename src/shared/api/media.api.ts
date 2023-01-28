import { axiosInstance } from './connection';

export const moviesAPI = {
  getSimilar(mediaId: string, mediaType: string) {
    return axiosInstance.get<any>(`/${mediaType}/${mediaId}/similar`);
  },
  // DETAILS
  getMediaDetails(mediaId: string, mediaType: string) {
    return axiosInstance.get<any>(`/${mediaType}/${mediaId}`);
  },
  getFullMediaDetails(mediaId: string, mediaType: string) {
    return axiosInstance.get<any>(
      `/${mediaType}/${mediaId}&append_to_response=videos,credits`,
    );
  },
};
