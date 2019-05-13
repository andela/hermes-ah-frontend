import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  return (
    <CookieConsent
      hideOnAccept
      location="bottom"
      buttonText="I understand"
      buttonStyle={{ background: 'green', color: '#fff' }}
      enableDeclineButton
      acceptOnScroll={false}
      flipButtons
      debug
      declineButtonText="Decline"
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default CookieBanner;
