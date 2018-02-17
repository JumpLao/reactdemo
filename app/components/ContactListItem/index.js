/**
*
* ContactListItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContactListItem() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ContactListItem.propTypes = {

};

export default ContactListItem;
