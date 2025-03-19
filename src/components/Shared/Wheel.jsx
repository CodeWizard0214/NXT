import useInterval from '@/hooks/useInterval';
import Image from 'next/image';
import { useState } from 'react';

const Wheel = () => {
  const [degree, setDegree] = useState(40);
  const [selected, setSelected] = useState(8);

  let counter = 8;

  const stopInterval = useInterval(() => {
    counter--;
    if (counter < 0) {
      counter = 8;
    }
    setSelected(counter);
    setDegree(elements[counter].deg);
  }, 3000);

  const elements = [
    {
      title: 'Self-Learning',
      description: 'Einspielen der Test-ergebnisse in den Prio-risierungsalgorithmus',
      style: { left: '680px', top: '340px' },
      deg: 360
    },
    {
      title: 'Learnings',
      description: 'Schlussfolgerungen über Änderungen im Nutzerverhalten',
      style: { left: '600px', top: '559px' },
      deg: 320
    },
    {
      title: 'Test Analyse',
      description: 'Statistische Auswertung von jedem Experiment',
      style: { left: '399px', top: '675px' },
      deg: 280
    },
    {
      title: 'Monitoring',
      description: 'Automatisches Risk Management durch statistisches Monitoring',
      style: { left: '170px', top: '634px' },
      deg: 240
    },
    {
      title: 'Qualitätssicherung',
      description: 'Technisches QA vor Test Go-Live, um Fehler zu vermeiden',
      style: { left: '21px', top: '456px' },
      deg: 200
    },
    {
      title: 'Test Entwicklung',
      description: 'Technische Umsetzung des Tests im Testing Tool',
      style: { left: '21px', top: '224px' },
      deg: 160
    },
    {
      title: 'UI/ UX Design',
      description: 'Designumsetzung und Prototying der priorisierten Testideen',
      style: { left: '170px', top: '46px' },
      deg: 120
    },
    {
      title: 'Priorisierung',
      description: 'Identifizierung von Optimierungspotenzialen im Shop',
      style: { left: '399px', top: '5px' },
      deg: 80
    },
    {
      title: 'Research',
      description: 'Identifizierung von Optimierungspotenzialen im Shop',
      style: { left: '600px', top: '121px' },
      deg: 40
    }
  ];

  return (
    <div
      className="relative h-[40rem] w-[40rem] font-manrope lg:h-[61.25rem] lg:w-[61.25rem]"
      style={{ '--degree': `${degree}deg` }}>
      <div className="absolute top-0 left-0 h-full w-full opacity-30">
        <Image
          src="/images/mockups/back-circle.png"
          alt="img"
          width="980"
          height="980"
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Image src="/images/mockups/circle-pulse.svg" width="201" height="201" alt="img" />
      </div>
      <div
        style={{
          transform: 'translate(-50%, -50%) rotate(var(--degree))'
        }}
        className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-[ease] lg:h-[42.5rem] lg:w-[42.5rem]">
        <Image
          className="w-full"
          src="/images/mockups/circle-animation.svg"
          width="633"
          height="633"
          alt="img"
        />
        <ul style={{ listStyle: 'none' }} className="circle__items">
          {elements.map(({ title, description, style, deg }, i) => (
            <li
              key={i}
              onClick={() => {
                stopInterval();
                setDegree(deg);
                setSelected(i);
              }}
              className={`box-shadow-semi-light absolute cursor-pointer rounded-lg overflow-hidden bg-white/5 text-center text-white backdrop-blur-sm transition-all duration-500 ease-[ease] md:rounded-xl ${selected === i ? 'actiy flex' : 'block py-1.5 px-4 md:py-2 md:px-8'
                }`}
              style={{
                ...style,
                transform: 'translate(-50%, -50%) rotate(calc(var(--degree) * -1))'
              }}
            >
              {i !== selected ? <strong className="whitespace-nowrap text-xs font-extrabold md:text-sm">
                {(9-i)+'. '+title}
              </strong> :
                <p className='flex justify-center items-center px-5 text-[26px] text-white'
                  style={{
                    background: 'linear-gradient(267.84deg, #B1BFD80B -18.18%, #6782B40B 101.71%)',
                  }}
                >
                  {9 - i}
                </p>
              }
              {i === selected && <span className='px-4 py-4 w-[10em] md:w-[13.75em] h-auto'>
                <p className="text-[0.625em] text-start font-Bank-Sans font-medium md:text-sm text-white">
                  {title}
                </p>
                <p className="text-[0.5rem] text-start md:text-xs mt-2 text-[#A6A6A6]">
                  {description}
                </p>
              </span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Wheel;
