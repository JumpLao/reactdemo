/**
 *
 * SocialAccountListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSocialAccountListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { listSocialAccountRequest } from './actions';

const { Meta } = Card;
export class SocialAccountListPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    result: [],
  }
  async componentWillMount() {
    try {
      await this.props.dispatch(listSocialAccountRequest());
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <Row>
        {_.get(this.props.socialaccountlistpage, 'socialAccounts.result', []).map((socialAccount) => (
          <Col xs={12} sm={8} md={8} lg={6} xl={4}>
            <Link to={`/socialAccount/${socialAccount.name}`}>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title={socialAccount.name}
                  description="www.instagram.com"
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}

SocialAccountListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  socialaccountlistpage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  socialaccountlistpage: makeSelectSocialAccountListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'socialAccountListPage', reducer });
const withSaga = injectSaga({ key: 'socialAccountListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SocialAccountListPage);
