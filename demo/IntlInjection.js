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
  const data  = {
    text: intlText
  };

  return (
    <LoadingIndicator data={data} active="true" id="ex1">
      {props.children}
    </LoadingIndicator>
  )
}


export default injectIntl(IntlInjection);
