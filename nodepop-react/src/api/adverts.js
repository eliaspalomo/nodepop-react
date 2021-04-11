import client from './client';

const advertsBaseUrl = '/api/v1';

export const getLatestAdverts = () => {
  const url = `${advertsBaseUrl}/adverts`;
  return client.get(url);
};

export const getAdvertDetail = advertId => {
  const url = `${advertsBaseUrl}/adverts/${advertId}`;
  return client.get(url);
};

export const createAdvert = advert => {
  const url = `${advertsBaseUrl}/adverts`;
  return client.post(url, advert);
};

export const deleteAdvertDetail = advertId => {
  const url = `${advertsBaseUrl}/adverts/${advertId}`;
  return client.delete(url);
};