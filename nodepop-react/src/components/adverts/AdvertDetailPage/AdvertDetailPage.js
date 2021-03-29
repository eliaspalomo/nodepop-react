import React from 'react';
import Layout from '../../layout/Layout';

import { getAdvertDetail } from '../../../api/adverts';
import { Redirect } from 'react-router';

class AdvertDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      advert: null,
      error: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    getAdvertDetail(match.params.advertId)
      .then(advert => this.setState({ advert }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { advert, error } = this.state;
    if (error && error.status === 404) {
      return <Redirect to="/404" />;
    }
    return (
      <Layout title="Advert Detail" {...this.props}>
        <div>{JSON.stringify(advert)}</div>
      </Layout>
    );
  }
}

export default AdvertDetailPage;
