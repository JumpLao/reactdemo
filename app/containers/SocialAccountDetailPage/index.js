/**
 *
 * SocialAccountDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import _ from 'lodash';
import { Card, Row, Col } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSocialAccountDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { listSocialPostRequest } from './actions';

const { Meta } = Card;
export class SocialAccountDetailPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const name = _.get(this.props.match, 'params.id', '');
    const query = {
      filter: JSON.stringify({
        where: {
          name,
        },
        order: 'date DESC',
      }),
    };
    this.props.dispatch(listSocialPostRequest(query));
  }
  render() {
    return (
      <Row>
        {_.get(this.props.socialaccountdetailpage, 'socialPosts.result', []).map((socialPost) => (
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <a href={socialPost.link}>
              <Card
                title={socialPost.socialType}
                hoverable
                cover={socialPost.picture && (<img alt="example" src={socialPost.picture} />)}
              >
                <Meta
                  title={socialPost.name}
                  description={socialPost.message}
                />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    );
  }
}

SocialAccountDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
  socialaccountdetailpage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  socialaccountdetailpage: makeSelectSocialAccountDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'socialAccountDetailPage', reducer });
const withSaga = injectSaga({ key: 'socialAccountDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SocialAccountDetailPage);
