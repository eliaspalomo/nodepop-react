import client from './client';

const advertsBaseUrl = '/api/v1';

export const getLatestTags = () => {
  const url = `${advertsBaseUrl}/adverts/tags`;
  return client.get(url);
};
