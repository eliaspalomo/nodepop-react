import React from 'react';
import T from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './Adverts.css';

const Advert = ({ content, updatedAt, user, likes }) => {
  return (
    <article className="advert bordered">
      <div className="left">
      </div>
      <div className="right">
        <div className="advert-header">
          <span className="advert-name">{user.name}</span>
          <span className="advert-username">{user.username}</span>
          <span className="advert-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
          </time>
        </div>
        <div>
          {content}
        </div>
      </div>
    </article>
  );
};

export const advertType = {
  user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
    .isRequired,
  updatedAt: T.string.isRequired,
  content: T.string,
  likes: T.arrayOf(T.shape({ userId: T.string.isRequired }).isRequired)
    .isRequired,
};

Advert.propTypes = advertType;

Advert.defaultProps = {
  content: 'Nothing here!',
};

export default Advert;
