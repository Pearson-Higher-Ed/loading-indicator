import React              from 'react';
import { injectIntl }     from 'react-intl';
import { messages }       from './translations/defaultMessages';
import { LoadingIndicator } from '../index';


const IntlInjection = (props) => {

  const { intl } = props;

  // do the string replacement...
  const intlText = {
    chipText  : intl.formatMessage(messages.chipText)
  }

  // add text to config data...
  let data  = {};
  data.text = intlText;

  return <LoadingIndicator data={data} />
}


export default injectIntl(IntlInjection);
