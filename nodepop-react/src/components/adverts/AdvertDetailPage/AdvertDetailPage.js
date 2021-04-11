import React from 'react';

import Layout from '../../layout/Layout';
import DeleteAdvert from './DeleteAdvert';
import { getAdvertDetail, deleteAdvertDetail } from '../../../api/adverts';
import { Redirect } from 'react-router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const AdvertDetailPage = props => {
  const { match } = props;
  const [error, setError] = React.useState(null);
  const [advert, setAdvert] = React.useState(null);
  
  React.useEffect(() => {
    getAdvertDetail(match.params.advertId).then(setAdvert);
  }, []);

  const handleSubmit = async deleteAdvert => {
    const result = window.confirm("Are you sure?");
    if(result) {
        try {
        await deleteAdvertDetail(deleteAdvert.id);
      } catch (error) {
        setError(true);
      }
    }
  }

  if (error && error.status === 401) {
    return <Redirect to="/404" />;
  }

  if(advert){
    const { id, createdAt, name, sale, price, tags } = advert;
  
    let saleLabel;
    if (sale) {
      saleLabel = 'Send'
    }else{
      saleLabel = 'Buy'
    }
          
    return (
      <Layout title="Advert Detail">
        <div>
        <span className="advert-title">Advert: {name}</span><br/>
        <span className="advert-data">State: {saleLabel}</span><br/>
        <span className="advert-data">Price: {price}</span><br/>
        <span className="advert-data">Tags: {tags}</span><br/>
        <span className="advert-data">Created: </span>
        <time dateTime={createdAt}>
          {formatDistanceToNow(new Date(createdAt))}
        </time>
        <br/>
          <DeleteAdvert onSubmit={handleSubmit(id)} />
        </div>
      </Layout>
    );
  }else {return (<Layout/>)}
}

export default AdvertDetailPage;
