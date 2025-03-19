import Link from 'next/link';

const FooterLink = ({ children, 'aria-label': ariaLabel, href }) => {
  return (
    <Link className='hover:text-white transition-all' aria-label={ariaLabel} href={href}>
      {children}
    </Link>
  );
};

export default FooterLink;
