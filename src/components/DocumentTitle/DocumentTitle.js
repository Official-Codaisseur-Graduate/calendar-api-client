import React from 'react';
import { Helmet } from 'react-helmet';

import { DOCUMENT_TITLE } from '../../constants';

export default function DocumentTitle(props) {
  return (
    <Helmet>
      <title>
        {props.title} | {DOCUMENT_TITLE}
      </title>
    </Helmet>
  );
}
