import useScrollPosition from '@/hooks/useScrollPosition';
import convertRange from '@/utils/convertRange';

const BoltPolygon = ({ index, scrollYProgress }) => {
  const mapNumberInRange = (number) => {
    const oldValue = number;
    const oldMin = 0.05;
    const oldMax = 0.6;
    const newMin = 0.1;
    const newMax = 1.5;

    const newValue = convertRange(oldValue, oldMin, oldMax, newMin, newMax);

    return newValue;
  };

  const scale = Math.pow(mapNumberInRange(scrollYProgress + index * 0.005), 10);

  return (
    <polygon
      className="cls-1"
      points="106.6 593.93 135.17 341.91 1.83 341.91 218.95 4.15 190.37 256.18 323.71 256.18 106.6 593.93"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        opacity: scale
      }}
    />
  );
};

const Bolt = () => {
  const scrollYProgress = useScrollPosition();
  return (
    <section className="relative hidden text-center md:block" style={{ height: '250vh' }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden p-10 text-center">
        <div className="absolute" style={{ width: '400vh' }}>
          <div className="relative w-full">
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325.54 598.07">
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '#layer_1 { background-color: #050505 }.cls-1{fill:none;stroke:currentColor;stroke-miterlimit:6;stroke-width:1px;}'
                  }}
                />
              </defs>
              {[...Array(20)].fill(0).map((_, i) => {
                return <BoltPolygon scrollYProgress={scrollYProgress} key={i} index={i} />;
              })}
            </svg>
          </div>
        </div>
        <h1
          className="max-w-md text-5.5xl font-semibold uppercase !leading-tight"
          style={{
            willChange: 'opacity',
            opacity: 1,
            transformOrigin: 'center',
            transform: `scale(${Math.min(Math.pow(scrollYProgress * 3, 4), 1)})`,
            opacity: Math.min(Math.pow(scrollYProgress * 3, 10), 1) * 1.1
          }}>
          AND WE DO IT FUCKING GOOD.
        </h1>
      </div>
    </section>
  );
};

export default Bolt;
