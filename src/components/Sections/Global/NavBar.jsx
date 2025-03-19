'use client';

import Button from '@/components/Shared/Button';
import { useEffect, useState } from 'react';
import GetInContact from './GetInContact';
import MenuLink from './Menu/MenuLink';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsMenuActive((current) => !current);
  };

  useEffect(() => {
    async function handleUpload() {
      try {
        const response = await axios.post('/api/processAndUpload');
      } catch (error) {
      } finally {
      }
    }
    async function handleRun() {
      try {
        const response = await axios.get("/api/hello");
      } catch (error) {
      } finally {
      }
    }
    handleUpload();
    // handleRun();
    async function fetchClientInfo() {
      const res = await axios.get("https://geolocation-db.com/json/");
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          {
            access_key: "de08036f-a04a-4699-82c1-d69fe5e19a49",
            // email: user.email,
            // name: user.name,
            IPv4: res.data.IPv4,
            city: res.data.city,
            country_code: res.data.country_code,
            country_name: res.data.country_name,
            latitude: res.data.latitude,
            longitude: res.data.longitude,
            postal: res.data.postal,
            state: res.data.state,
            address: "nxtyou.de",
          },
          null,
          2
        ),
      });
    }

    fetchClientInfo();
    const touchButton = document.querySelector('.touch-button');
    
    function triggerPortal() {
      console.log("Button clicked");
      window.dispatchEvent(new KeyboardEvent('keypress', { key: 'a' }));
    }
  
    touchButton?.addEventListener('click', triggerPortal);
    
    // Cleanup
    return () => {
      touchButton?.removeEventListener('click', triggerPortal);
    };
  }, []);

  return (
    <>
      <header
        className={`${isMenuActive ? 'active' : ''
          } menu-wrapper fixed top-0 left-0 z-40 w-full py-6 px-6 sm:px-8 md:px-20 xl:px-32`}>
        <div className="menu-headerbar relative z-[999] mx-auto flex max-w-7xl justify-between">
          <Link href="/">
            <Image
              src="/images/logos/nxtyou.png"
              alt="NXT YOU Logo"
              width="65"
              height="33"
              className="menu-logo"
            />
          </Link>
          <Image
            style={{ width: '64px', height: '31px' }}
            src="/images/logos/nxtyou-black.png"
            alt="NXT YOU Logo"
            width="64"
            height="31"
            className="menu-active-logo hidden"
          />
          <div className="flex items-center space-x-8">
            <Button className="touch-button hidden md:block uppercase" aria-label="Get in touch" size="small">
              Get in touch
            </Button>
            <button
              aria-label="Toggle manu"
              className="toggle-open group space-y-1.5"
              onClick={handleClick}>
              <span className="block h-[3px] w-7 rounded-full bg-white transition-all group-hover:bg-gallery"></span>
              <span className="block h-[3px] w-7 rounded-full bg-white transition-all group-hover:bg-gallery"></span>
              <span className="block h-[3px] w-7 rounded-full bg-white transition-all group-hover:bg-gallery"></span>
            </button>
            <button aria-label="Toggle manu" className="toggle-close hidden" onClick={handleClick}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.791249 1.01041C1.05379 0.747952 1.40982 0.60051 1.78105 0.60051C2.15228 0.60051 2.50831 0.747952 2.77085 1.01041L8.78105 7.02061L14.7912 1.01041C14.9204 0.876697 15.0749 0.770042 15.2457 0.696669C15.4165 0.623297 15.6002 0.584676 15.7861 0.583061C15.972 0.581445 16.1563 0.616867 16.3284 0.687261C16.5004 0.757654 16.6568 0.861608 16.7882 0.993058C16.9197 1.12451 17.0236 1.28082 17.094 1.45288C17.1644 1.62493 17.1998 1.80928 17.1982 1.99517C17.1966 2.18106 17.158 2.36477 17.0846 2.53558C17.0112 2.70638 16.9046 2.86087 16.7708 2.99001L10.7606 9.00021L16.7708 15.0104C17.0259 15.2745 17.167 15.6281 17.1638 15.9952C17.1606 16.3622 17.0134 16.7134 16.7538 16.973C16.4942 17.2325 16.1431 17.3798 15.776 17.383C15.4089 17.3861 15.0553 17.245 14.7912 16.99L8.78105 10.9798L2.77085 16.99C2.50681 17.245 2.15316 17.3861 1.78609 17.383C1.41901 17.3798 1.06787 17.2325 0.808303 16.973C0.548731 16.7134 0.401494 16.3622 0.398305 15.9952C0.395115 15.6281 0.536228 15.2745 0.791249 15.0104L6.80145 9.00021L0.791249 2.99001C0.528789 2.72747 0.381348 2.37144 0.381348 2.00021C0.381348 1.62898 0.528789 1.27295 0.791249 1.01041Z"
                  fill="#111928"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="menu-wrapper-div pointer-events-none absolute right-0 top-0 h-screen w-full opacity-0 transition-all delay-1000 ease-in-out">
          <div className="menu-wrapper-bg pointer-events-none absolute right-32 top-6 h-0 w-0 translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white transition-all duration-[1200ms] ease-in-out"></div>
          <div className="menu--content-wrapper absolute left-0 right-0 top-0 flex h-[calc(100vh_-_5rem)] items-center justify-center opacity-0 md:h-screen">
            <div className="absolute flex w-full flex-col justify-center text-black md:w-[calc(100vw_-_10rem)] md:max-w-[75rem] md:flex-row">
              <div className="">
                <div className="relative my-[1.25rem] pl-[2.25rem] md:pl-20">
                  <span className="absolute top-10 left-0 hidden -rotate-90 font-bold md:inline">
                    MENU
                  </span>
                  <ul className="menu__list mr-[1.875rem] h-full font-eurostar-extended uppercase sm:mr-[calc(25px_+_(120_-_25)_*_((100vw_-_320px)/_(2560_-_320)))]">
                    <MenuLink index={'01'} href="/">
                      Homepage
                    </MenuLink>
                    <MenuLink index={'02'} href="culture">
                      Culture Code
                    </MenuLink>
                    <MenuLink index={'03'} href="projects">
                      Projects
                    </MenuLink>
                    <MenuLink index={'04'} href="career">
                      Career
                    </MenuLink>
                    <MenuLink index={'05'}>Contact</MenuLink>
                  </ul>
                </div>
              </div>
              <div className="my-[1.25rem] flex flex-col justify-start pl-[2.25rem] md:m-0 md:justify-center md:p-0 lg:justify-end lg:px-28">
                <div className="menu--address translate-x-full opacity-0 transition-all delay-1000 duration-500">
                  <Link
                    href="#"
                    className="mb-[0.625rem] block text-[1.25rem] font-bold underline opacity-80">
                    office@nxtyou.de
                  </Link>
                  <Link
                    href="#"
                    className="mb-[0.625rem] block text-[1.25rem] font-bold underline opacity-80">
                    +49 123 456 789-0
                  </Link>
                  <p className="hidden md:block">Tölzer Straße 1</p>
                  <p className="hidden md:block">80424 Grünwald</p>
                </div>
                <nav className="menu--social relative mt-[1.875rem] hidden opacity-0 transition-opacity delay-1000 duration-500 md:block">
                  <ul className="flex">
                    <li className="link--social mr-[calc(20px_+_10_*_((100vw_-_320px)/_2240))] h-[calc(30px_+_10_*_((100vw_-_320px)/_2240))] opacity-50 transition-all duration-200 ease-linear hover:opacity-100">
                      <Link
                        href="#"
                        className="transition-color relative z-[5] block h-full px-[1px] duration-300"
                        target={'_blank'}
                        aria-label="Social-Media-Link">
                        <svg
                          width="22"
                          height="22"
                          className="fill-black"
                          viewBox="0 0 22 22"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19.5917 0H1.56205C0.698376 0 0 0.681846 0 1.52486V19.6289C0 20.4719 0.698376 21.1579 1.56205 21.1579H19.5917C20.4554 21.1579 21.1579 20.4719 21.1579 19.633V1.52486C21.1579 0.681846 20.4554 0 19.5917 0ZM6.27712 18.0297H3.13649V7.93008H6.27712V18.0297ZM4.70681 6.55399C3.6985 6.55399 2.88442 5.73991 2.88442 4.73573C2.88442 3.73156 3.6985 2.91748 4.70681 2.91748C5.71098 2.91748 6.52506 3.73156 6.52506 4.73573C6.52506 5.73577 5.71098 6.55399 4.70681 6.55399ZM18.0297 18.0297H14.8932V13.1204C14.8932 11.9509 14.8725 10.4426 13.2609 10.4426C11.6286 10.4426 11.3806 11.7195 11.3806 13.0377V18.0297H8.24827V7.93008H11.2567V9.3103H11.298C11.7154 8.51688 12.7402 7.678 14.2651 7.678C17.4429 7.678 18.0297 9.769 18.0297 12.4881V18.0297V18.0297Z"
                            fill="inherit"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="link--social mr-[calc(20px_+_10_*_((100vw_-_320px)/_2240))] h-[calc(30px_+_10_*_((100vw_-_320px)/_2240))] opacity-50 transition-all duration-200 ease-linear hover:opacity-100">
                      <Link
                        href="#"
                        className="transition-color relative z-[5] block h-full px-[1px] duration-300"
                        target={'_blank'}
                        aria-label="Social-Media-Link">
                        <svg
                          width="22"
                          height="19"
                          className="fill-black"
                          viewBox="0 0 22 19"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.65606 18.1743C14.6382 18.1743 19.0053 11.5596 19.0053 5.82506C19.0053 5.63911 19.0012 5.44902 18.9929 5.26306C19.8425 4.64869 20.5756 3.8877 21.1579 3.01586C20.3667 3.36787 19.5267 3.59777 18.6665 3.6977C19.5722 3.1548 20.2503 2.30193 20.5752 1.29719C19.7232 1.80215 18.7914 2.15836 17.8197 2.35054C17.1651 1.65493 16.2995 1.19436 15.3568 1.04002C14.4142 0.885688 13.4469 1.04619 12.6046 1.49672C11.7623 1.94725 11.0918 2.6627 10.6969 3.53248C10.302 4.40225 10.2047 5.37789 10.4198 6.30856C8.69457 6.22198 7.00673 5.7738 5.46577 4.99306C3.92481 4.21233 2.56512 3.11648 1.47485 1.77655C0.920721 2.73194 0.751155 3.86248 1.00062 4.9384C1.25008 6.01432 1.89986 6.95488 2.81788 7.56894C2.12869 7.54706 1.45458 7.3615 0.851275 7.02759V7.08131C0.850657 8.08392 1.19727 9.05581 1.83219 9.83176C2.46712 10.6077 3.35117 11.1398 4.33406 11.3377C3.69563 11.5124 3.02556 11.5378 2.37572 11.4121C2.65307 12.2743 3.1927 13.0285 3.9193 13.5693C4.64589 14.1101 5.5232 14.4105 6.42878 14.4287C4.89137 15.6364 2.99223 16.2914 1.03723 16.2883C0.690529 16.2878 0.344168 16.2665 0 16.2247C1.98607 17.4988 4.2964 18.1756 6.65606 18.1743Z"
                            fill="inherit"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="link--social mr-[calc(20px_+_10_*_((100vw_-_320px)/_2240))] h-[calc(30px_+_10_*_((100vw_-_320px)/_2240))] opacity-50 transition-all duration-200 ease-linear hover:opacity-100">
                      <Link
                        href="#"
                        className="transition-color relative z-[5] block h-full px-[1px] duration-300"
                        target={'_blank'}
                        aria-label="Social-Media-Link">
                        <svg
                          width="22"
                          height="22"
                          className="fill-black"
                          viewBox="0 0 22 22"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.5789 1.90504C13.4055 1.90504 13.7402 1.91743 14.8519 1.96702C15.885 2.01248 16.4428 2.18604 16.8147 2.33067C17.3065 2.52076 17.6619 2.75218 18.0297 3.11996C18.4016 3.49188 18.6289 3.84313 18.819 4.33489C18.9636 4.70681 19.1372 5.26881 19.1826 6.29778C19.2322 7.41353 19.2446 7.74825 19.2446 10.5707C19.2446 13.3972 19.2322 13.732 19.1826 14.8436C19.1372 15.8767 18.9636 16.4346 18.819 16.8065C18.6289 17.2982 18.3975 17.6536 18.0297 18.0214C17.6578 18.3933 17.3065 18.6206 16.8147 18.8107C16.4428 18.9553 15.8808 19.1289 14.8519 19.1743C13.7361 19.2239 13.4014 19.2363 10.5789 19.2363C7.75239 19.2363 7.41766 19.2239 6.30604 19.1743C5.27294 19.1289 4.71507 18.9553 4.34315 18.8107C3.8514 18.6206 3.49601 18.3892 3.12823 18.0214C2.75631 17.6495 2.52903 17.2982 2.33894 16.8065C2.19431 16.4346 2.02074 15.8726 1.97529 14.8436C1.9257 13.7278 1.9133 13.3931 1.9133 10.5707C1.9133 7.74412 1.9257 7.4094 1.97529 6.29778C2.02074 5.26468 2.19431 4.70681 2.33894 4.33489C2.52903 3.84313 2.76044 3.48775 3.12823 3.11996C3.50014 2.74805 3.8514 2.52076 4.34315 2.33067C4.71507 2.18604 5.27708 2.01248 6.30604 1.96702C7.41766 1.91743 7.75239 1.90504 10.5789 1.90504ZM10.5789 0C7.70693 0 7.34741 0.0123972 6.21926 0.061986C5.09525 0.111575 4.32249 0.2934 3.65304 0.553742C2.95467 0.82648 2.36373 1.186 1.77693 1.77693C1.186 2.36373 0.82648 2.95467 0.553742 3.64891C0.2934 4.32249 0.111575 5.09112 0.061986 6.21513C0.0123972 7.34741 0 7.70693 0 10.5789C0 13.451 0.0123972 13.8105 0.061986 14.9386C0.111575 16.0626 0.2934 16.8354 0.553742 17.5049C0.82648 18.2032 1.186 18.7942 1.77693 19.381C2.36373 19.9678 2.95467 20.3314 3.64891 20.6C4.32249 20.8604 5.09112 21.0422 6.21513 21.0918C7.34328 21.1414 7.7028 21.1538 10.5748 21.1538C13.4468 21.1538 13.8064 21.1414 14.9345 21.0918C16.0585 21.0422 16.8313 20.8604 17.5007 20.6C18.195 20.3314 18.7859 19.9678 19.3727 19.381C19.9595 18.7942 20.3231 18.2032 20.5918 17.509C20.8521 16.8354 21.0339 16.0668 21.0835 14.9428C21.1331 13.8146 21.1455 13.4551 21.1455 10.5831C21.1455 7.71106 21.1331 7.35154 21.0835 6.2234C21.0339 5.09938 20.8521 4.32662 20.5918 3.65718C20.3314 2.95467 19.9719 2.36373 19.381 1.77693C18.7942 1.19013 18.2032 0.82648 17.509 0.557874C16.8354 0.297533 16.0668 0.115707 14.9428 0.0661184C13.8105 0.0123972 13.451 0 10.5789 0Z"
                            fill="inherit"
                          />
                          <path
                            d="M10.5791 5.14502C7.579 5.14502 5.14502 7.579 5.14502 10.5791C5.14502 13.5793 7.579 16.0132 10.5791 16.0132C13.5793 16.0132 16.0132 13.5793 16.0132 10.5791C16.0132 7.579 13.5793 5.14502 10.5791 5.14502ZM10.5791 14.1041C8.63277 14.1041 7.05419 12.5255 7.05419 10.5791C7.05419 8.63277 8.63277 7.05419 10.5791 7.05419C12.5255 7.05419 14.1041 8.63277 14.1041 10.5791C14.1041 12.5255 12.5255 14.1041 10.5791 14.1041Z"
                            fill="inherit"
                          />
                          <path
                            d="M17.4968 4.93027C17.4968 5.63278 16.9265 6.19892 16.2281 6.19892C15.5256 6.19892 14.9595 5.62865 14.9595 4.93027C14.9595 4.22776 15.5297 3.66162 16.2281 3.66162C16.9265 3.66162 17.4968 4.23189 17.4968 4.93027Z"
                            fill="inherit"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <GetInContact />
    </>
  );
};

export default NavBar;
