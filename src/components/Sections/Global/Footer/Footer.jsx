import { useEffect, useState } from 'react';
import FooterBottom from './FooterBottom';
import FooterSecondaryBottom from './FooterSecondaryBottom';
import FooterTop from './FooterTop';

const Footer = ({ secondary = true, top = true, background = true, className }) => {
  const backgroundStyle = { background: 'linear-gradient(935deg, rgb(1, 1, 0), rgb(29, 35, 40))' };

  return (
    <div className={className} style={secondary && background ? backgroundStyle : {}}>
      {top && <FooterTop background={!secondary && background ? backgroundStyle : {}} />}
      {/* {secondary ? <FooterSecondaryBottom /> : <FooterBottom />} */}
      <FooterSecondaryBottom />
    </div>
  );
};

export default Footer;
