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
  console.log(advert)
  return client.post(url, advert);
};
