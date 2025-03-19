import FacebookIcon from '@/components/Shared/Icons/Facebook';
import InstagramIcon from '@/components/Shared/Icons/Instagram';
import LinkedinIcon from '@/components/Shared/Icons/LInkedin';
import TwitterIcon from '@/components/Shared/Icons/Twitter';
import Link from 'next/link';
import FooterLink from './FooterLink';
import Image from 'next/image';

const FooterBottom = () => {
  return (
    <footer className="border-t border-[#8293A7]/30 bg-black px-6 py-16 font-manrope sm:px-8 md:px-20 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex flex-col items-center justify-around lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              className="lg:w-16"
              src="/images/logos/nxtyou.png"
              alt="NXT YOU Logo"
              width="83"
              height="40"
            />
            <p className="mt-6 text-center text-sm font-medium lg:mt-2 lg:text-left lg:text-base">
              The smartest account in the game.
              <br />
              Designed for freelancers.
            </p>
            <ul className="mt-7 flex items-center space-x-9">
              <li>
                <Link aria-label="Visit NXT YOU Facebook page" href="/">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link aria-label="Visit NXT YOU Instagram page" href="/">
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link aria-label="Visit NXT YOU Twitter page" href="/">
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link aria-label="Visit NXT YOU Linkedin page" href="/">
                  <LinkedinIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 flex w-full max-w-lg justify-around md:justify-between lg:mt-0">
            <ul className="space-y-2 text-cadet-blue">
              <li>
                <h2 className="text-xl font-medium !leading-loose text-white">Company</h2>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Lance Pro
                </FooterLink>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Community
                </FooterLink>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Stacks
                </FooterLink>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Blog
                </FooterLink>
              </li>
            </ul>
            <ul className="hidden space-y-2 text-cadet-blue lg:block">
              <li>
                <h2 className="text-xl font-medium !leading-loose text-white">Support</h2>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  FAQ&apos;s
                </FooterLink>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Help Center
                </FooterLink>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Contact Us
                </FooterLink>
              </li>
            </ul>
            <ul className="space-y-2 text-cadet-blue">
              <li>
                <h2 className="text-xl font-medium !leading-loose text-white">Legal</h2>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Privacy Policy
                </FooterLink>
              </li>
              <li>
                <FooterLink aria-label="" href="/">
                  Terms of Service
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-cadet-blue/50 md:mt-12 md:text-sm">
          © Lance Global Inc. 2021. Bank account with Debit Card. Banking services provided by Blue
          Ridge Bank N.A.; Member FDIC. The Lance Visa® Debit Card is issued by Blue Ridge Bank N.A.
          pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards
          are accepted.
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
