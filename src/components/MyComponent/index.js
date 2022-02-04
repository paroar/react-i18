import React from 'react';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import user from '../../constants/user';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('es')}>ES</button>
          <h1>{t('flag')}</h1>
      </div>

      <section>
        <p>{t('title')}</p>
        <p>{t('subtitle')}</p>
      </section>

      <section>
        <h1>{t('nested.header')}</h1>
        <p>{t('nested.title')}</p>
        <p>{t('nested.subtitle')}</p>
      </section>

      <section>
        <h1>{t('default.header')}</h1>
        <p>{t('somekeythatdoesnotexists', '🚧 Oooops this key does not exists 🚧')}</p>
      </section>

      <section>
        <h1>{t('interpolation.header')}</h1>
        <p>{t('interpolation.simple', {what: 'i18next', how: 'cool'})}</p>
        <p>{t('interpolation.complex', {user})}</p>
      </section>

      <section>
        <h1>{t('plural.header')}</h1>
        <p>{t('plural.apple', { count: 0 })}</p>
        <p>{t('plural.apple', { count: 1 })}</p>
        <p>{t('plural.apple', { count: 100 })}</p>
      </section>

    </div>
  )
};

export default MyComponent;