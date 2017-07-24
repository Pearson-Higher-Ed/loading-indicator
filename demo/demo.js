import React         from 'react';
import ReactDOM      from 'react-dom';
import IntlInjection from './IntlInjection';

import { addLocaleData, IntlProvider } from 'react-intl';

// Import Translations...
import frJson       from './translations/fr.json';
import frLocaleData from 'react-intl/locale-data/fr';

import enUSJson       from './translations/en-US.json';
import enUSLocaleData from 'react-intl/locale-data/en';

// Associate Language Abbreviation with json filename...
const translations = {
  'fr'    : frJson,
  'en-US' : enUSJson
};

// Add Language
addLocaleData(frLocaleData);
addLocaleData(enUSLocaleData);

// Determining the User's Locale
const locale = (navigator.language) ? navigator.language : navigator.browserLanguage;

ReactDOM.render(
  <IntlProvider locale={locale || 'en'} key={locale} messages={translations[locale]}>
    <IntlInjection>
      <p><a href="https://www.google.com">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus mollis mattis. Donec posuere dictum tortor. Duis sodales ex in urna molestie feugiat. Nulla et odio molestie lacus placerat rutrum. Phasellus pretium molestie mauris a bibendum. Mauris risus nunc, mattis et sodales vel, auctor vel tellus. Nunc vehicula luctus mauris quis euismod. Mauris ut faucibus metus. Nunc at tortor mi. Sed semper lacus ac diam eleifend, quis malesuada nisi malesuada. Vivamus condimentum commodo quam, in porta libero placerat vel. Suspendisse at sollicitudin nulla. Nunc finibus velit odio, nec ultrices erat iaculis non.</p>
      <p>Aliquam ornare lobortis massa id gravida. Donec pulvinar, urna et imperdiet euismod, magna velit vestibulum neque, vel aliquam sapien est ac velit. Maecenas a hendrerit lacus. Quisque accumsan libero et odio malesuada tristique. Vivamus congue nulla in volutpat egestas. Cras in finibus libero. Aenean blandit tristique orci. Sed dapibus purus et ultrices venenatis. Curabitur eu arcu accumsan, imperdiet nisl et, viverra ante. Cras a odio vitae libero tempor porta. Aenean porttitor, felis vitae placerat hendrerit, neque mi maximus felis, ac lacinia nulla justo suscipit odio. Integer malesuada vitae urna ut tempus. Maecenas non velit tincidunt, tincidunt massa at, iaculis turpis. Suspendisse erat erat, tempus ac fermentum quis, iaculis eu est.</p>
    </IntlInjection>
  </IntlProvider>,
  document.getElementById('app')
)
