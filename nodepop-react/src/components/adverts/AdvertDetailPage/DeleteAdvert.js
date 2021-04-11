import React from 'react';
import Button from '../../shared/Button';
import {deleteAdvertDetail } from '../../../api/adverts';
import { Redirect } from 'react-router';
import useForm from '../../../hooks/useForm';

const DeleteAdvert = ({onSubmit}) => {
  const [advert, handleChange, handleChangeChecked, handleChangeSelect, handleSubmit] = useForm({});
  const [error, setError] = React.useState(null);
  const [deletedAdvert, setDeletedAdvert] = React.useState(null);
  
  if (error && error.status === 401) {
    return <Redirect to="/404" />;
  }

  if (deletedAdvert) {
    return <Redirect to={`/adverts`} />;
  }

  const afterPreventDefault = ev => {
    onSubmit(advert);
  };

  if(advert){
    const { id, createdAt, name, sale, price, tags } = advert;
    
    const handle = handleSubmit(afterPreventDefault);

    return (
        <form onSubmit={handle}>
          <div className="delete">
            <Button
              type="submit"
              className="delete-submit"
              variant="primary"
            >
              Delete
            </Button>
          </div>
        </form>
    );
  }else {return (<form/>)}
}

export default DeleteAdvert;
