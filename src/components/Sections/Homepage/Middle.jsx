import Brand from "./Brand/Brand";
import MidBrand from "./Brand/MidBrand";
import Measure from "./Measure";
import Mockup from "./Mockup";
import Office from "./Office";
import Tools from "./Tools";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Middle = () => {
    return (
        <section
            style={{ backgroundImage: 'url("images/backs/mid_background.png")', backgroundSize:'100% 100%' }}
        >
            <WhoWeAre />
            <Brand />
            <Measure />
            <Office />
            <Mockup />
            <MidBrand/>
            <Tools />
        </section>
    );
};

export default Middle;
