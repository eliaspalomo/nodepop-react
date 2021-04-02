import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './Adverts.css';

const Advert = ({ name, sale, price, tags, createdAt}) => {
  let saleLabel;
  if (sale) {
    saleLabel = 'Send'
  }else{
    saleLabel = 'Buy'
  }
  return (
    <article className="advert bordered">
      <div className="left">
      </div>
      <div className="right">
        <div className="advert-header">
          <span className="advert-title">Advert: {name}</span><br/>
          <span className="advert-data">State: {saleLabel}</span><br/>
          <span className="advert-data">Price: {price}</span><br/>
          <span className="advert-data">Tags: {tags}</span><br/>
          <span className="advert-data">Created: </span>
          <time dateTime={createdAt}>
            {formatDistanceToNow(new Date(createdAt))}
          </time>
        </div>
      </div>
    </article>
  );
};

export const advertType = {
  user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
    .isRequired,
  updatedAt: T.string.isRequired,
  name: T.string,
  sale: T.bool,
  price: T.number, 
  tags: T.array, 
  photo: T.string,
};

Advert.propTypes = advertType;

Advert.defaultProps = {
  name: '',
  sale: false,
  price: 0, 
  tags: [], 
  photo: '',
};

export default Advert;
