import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { getLatestAdverts, getLatestAdvertsFilter } from '../../../api/adverts';
import scopedStyles from './AdvertsPage.module.css';
import Layout from '../../layout/Layout';
import AdvertsList from './AdvertsList';
import FilterAdvertForm from './FilterAdvertForm';

import { Button } from '../../shared';
import './AdvertsPage.css';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first advert!</p>
    <Button as={Link} to="/newadvert" variant="primary">
      Advert
    </Button>
  </div>
);


const AdvertsPage = ({ className, ...props }) => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);

  const handleSubmit = async advert => {
     await getLatestAdvertsFilter(advert);
  }

  return (
    <Layout title="Advert..." {...props}>
      <FilterAdvertForm  onSubmit={handleSubmit}/>
      <div className={classnames(scopedStyles.advertsPage, className)}>
        {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </div>
    </Layout>
  );
};

export default AdvertsPage;
