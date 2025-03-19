import Image from 'next/image';
import { useEffect, useState } from 'react';

const GetInContact = ({}) => {
    const [isPortalActive, setIsPortalActive] = useState(false);

    function inputChange(e) {
      if (e.target.value != '') {
        e.target.classList.add("has-value")
      } else {
        e.target.classList.remove("has-value")
      }
    }

    useEffect(() => {

        const portalContainer = document.querySelector('.portal-container');
        const portalClose = document.querySelector('.portal-close');
        const selectPlaceholder = document.querySelector(".select-placeholder");
        const selectField = document.querySelector(".select-field")
    
        const handlePress = (e) => {
            if (e.key == 'a') {
                setIsPortalActive(true);
            }
        }

        const handleDown = (e) => {
            if (e.key == 'Escape') {
                setIsPortalActive(false);
            }
        }

        function selectChange(e) {

          selectPlaceholder.textContent = e.target.value;
          selectPlaceholder.classList.add("value-selected")
        };

        selectField.addEventListener("change",selectChange)
        
        portalContainer.addEventListener('click', (e)=> {if (e.target == portalContainer) setIsPortalActive(false);})
        portalClose.addEventListener('click',()=> {setIsPortalActive(false);})
        window.addEventListener('keypress', handlePress)
        window.addEventListener('keydown', handleDown)
      }, [])
    return (

        <div className={`${isPortalActive ? '' : 'hidden'} left-0 top-0 fixed z-[1000] md:pb-[8vh] w-screen h-screen backface-hidden flex portal-container`}>
          <div className='inline-block mx-auto self-end md:self-center w-full md:w-auto'>
            <div className='request-access'>
              <div className="sc-a421c43f-1 bWRFCJ">
                <button className="sc-a421c43f-4 cCIA-DU portal-close">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.707 7.70742C18.0975 7.3169 18.0975 6.68374 17.707 6.29322C17.3165 5.90271 16.6833 5.90271 16.2928 6.29322L12.0001 10.5859L7.7071 6.29289C7.31659 5.90237 6.68343 5.90237 6.29291 6.29289C5.90239 6.68341 5.90239 7.31656 6.29291 7.70708L10.5859 12.0001L6.29294 16.2931C5.90242 16.6836 5.90242 17.3168 6.29294 17.7073C6.68346 18.0978 7.31662 18.0978 7.70713 17.7073L12.0001 13.4143L16.2928 17.7069C16.6833 18.0975 17.3164 18.0975 17.707 17.7069C18.0975 17.3164 18.0975 16.6833 17.707 16.2927L13.4143 12.0001L17.707 7.70742Z" fill="#fff">
                      </path>
                  </svg>
                </button>
                <div className="sc-a421c43f-3 cfVKyO">
                  <Image src="/images/logos/logo-contact.png" alt="NXT YOU Logo" width="48" height="48" loading="eager" className="sc-5b600b70-0 jJKnTo" />
                </div>
                <div className="sc-a421c43f-5 cUZOrp">
                  <h2 className="sc-a421c43f-6 etUYyc">Get in Contact!</h2>
                  <p className="sc-a421c43f-7 hSmKaV">Send us a message and our team will reach out to you as soon as possible.</p>
                </div>
                <form autoComplete="off" className="sc-a421c43f-8 crIopC">
                  <div>
                    <div className="sc-75871522-0 jevceB">
                      <input id="name" type="text" autoComplete="off" mode="light" className="sc-75871522-3 kcRRJs" onChange={inputChange} />
                      <span mode="light" className="sc-75871522-2 WgJSD">
                        <label htmlFor="name" mode="light" className="sc-75871522-1 dFennU">Your Name</label>
                      </span>
                      <div className="sc-75871522-4 dspljn">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.6875 3.4375H2.625C2.19402 3.4375 1.7807 3.6087 1.47595 3.91345C1.1712 4.2182 1 4.63152 1 5.0625V12.375C1 12.806 1.1712 13.2193 1.47595 13.524C1.7807 13.8288 2.19402 14 2.625 14H14C14.431 14 14.8443 13.8288 15.149 13.524C15.4538 13.2193 15.625 12.806 15.625 12.375V5.0625C15.625 4.63152 15.4538 4.2182 15.149 3.91345C14.8443 3.6087 14.431 3.4375 14 3.4375H9.9375M6.6875 3.4375V2.625C6.6875 2.19402 6.85871 1.7807 7.16345 1.47595C7.4682 1.1712 7.88152 1 8.3125 1C8.74348 1 9.1568 1.1712 9.46155 1.47595C9.76629 1.7807 9.9375 2.19402 9.9375 2.625V3.4375M6.6875 3.4375C6.6875 3.86848 6.85871 4.2818 7.16345 4.58655C7.4682 4.8913 7.88152 5.0625 8.3125 5.0625C8.74348 5.0625 9.1568 4.8913 9.46155 4.58655C9.76629 4.2818 9.9375 3.86848 9.9375 3.4375M5.875 9.9375C6.30598 9.9375 6.7193 9.76629 7.02405 9.46155C7.32879 9.1568 7.5 8.74348 7.5 8.3125C7.5 7.88152 7.32879 7.4682 7.02405 7.16345C6.7193 6.85871 6.30598 6.6875 5.875 6.6875C5.44402 6.6875 5.0307 6.85871 4.72595 7.16345C4.4212 7.4682 4.25 7.88152 4.25 8.3125C4.25 8.74348 4.4212 9.1568 4.72595 9.46155C5.0307 9.76629 5.44402 9.9375 5.875 9.9375ZM5.875 9.9375C6.93612 9.9375 7.83881 10.6159 8.17437 11.5625M5.875 9.9375C5.37075 9.93735 4.87885 10.0935 4.46706 10.3846C4.05526 10.6756 3.74382 11.0871 3.57563 11.5625M10.75 7.5H13.1875M10.75 10.75H12.375" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="sc-75871522-0 jevceB">
                      <input id="email" type="email" autoComplete="off" mode="light" className="sc-75871522-3 kcRRJs" onChange={inputChange} />
                      <span mode="light" className="sc-75871522-2 WgJSD">
                        <label htmlFor="email" mode="light" className="sc-75871522-1 dFennU">Email address</label>
                      </span>
                      <div className="sc-75871522-4 dspljn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.5624 18H6.366C5.3354 18 4.49993 17.1207 4.49993 16.0361L4.48752 8.06081C4.48752 6.97617 5.32299 6.09689 6.35359 6.09689H18.1721C18.7303 6.06319 19.2414 6.42564 19.4212 6.98287C19.6011 7.54009 19.4056 8.15516 18.9434 8.48633L13.1585 13.167C12.4587 13.7332 11.4777 13.7059 10.8073 13.1015L7.21821 9.86761C7.04931 9.71559 6.97031 9.48029 7.01096 9.25034C7.05161 9.0204 7.20573 8.83074 7.41528 8.75282C7.62482 8.67489 7.85794 8.72054 8.02684 8.87256L11.6159 12.1065C11.8443 12.3015 12.1713 12.3015 12.3997 12.1065L18.1845 7.42581L6.35359 7.40617C6.01006 7.40617 5.73157 7.69926 5.73157 8.06081L5.74398 16.0361C5.74398 16.3976 6.02247 16.6907 6.366 16.6907H17.5624C17.906 16.6907 18.1845 16.3976 18.1845 16.0361L18.1845 10.6918C18.1845 10.3303 18.463 10.0372 18.8065 10.0372C19.15 10.0372 19.4285 10.3303 19.4285 10.6918L19.4285 16.0361C19.4285 17.1207 18.593 18 17.5624 18Z" fill="#fff"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="sc-a8fef133-0 bFgPeY">
                      <span className="select-placeholder">Preferred broker</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.524 10.1127C15.8446 10.4395 16.3644 10.4395 16.685 10.1127C17.0056 9.78589 17.0056 9.25604 16.685 8.92924L12.5801 4.7451C12.4262 4.58817 12.2173 4.5 11.9996 4.5C11.7819 4.5 11.573 4.58817 11.4191 4.7451L7.31418 8.92924C6.99357 9.25604 6.99357 9.78589 7.31418 10.1127C7.63479 10.4395 8.15461 10.4395 8.47522 10.1127L11.9996 6.52028L15.524 10.1127ZM8.4748 14.0128C8.15419 13.6935 7.63438 13.6935 7.31376 14.0128C6.99315 14.3322 6.99315 14.85 7.31376 15.1694L11.4187 19.2584C11.5726 19.4118 11.7814 19.498 11.9992 19.498C12.2169 19.498 12.4257 19.4118 12.5797 19.2584L16.6846 15.1694C17.0052 14.85 17.0052 14.3322 16.6846 14.0128C16.364 13.6935 15.8442 13.6935 15.5235 14.0128L11.9992 17.5236L8.4748 14.0128Z" fill="#fff"></path>
                      </svg>
                      <select className="select-field">
                        <option value="" disabled>Select Broker</option>
                        <option value="TD Ameritrade">TD Ameritrade</option>
                        <option value="Robinhood">Robinhood</option>
                        <option value="Charles Schwab">Charles Schwab</option>
                        <option value="E*Trade">E*Trade</option>
                        <option value="Fidelity">Fidelity</option>
                        <option value="Vanguard">Vanguard</option>
                        <option value="Webull">Webull</option>
                      </select>
                    </div>
                  </div>
                  <div className="sc-a421c43f-2 bNtkpm">
                    <button aria-label="Submit request" className="sc-feac3b56-2 dPEIQb">
                      <span>Submit request</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
export default GetInContact;