import BannerRing from "../Global/BannerRing";
import Concept from "./Concept/Concept";
import CultureCode from "./CultureCode/CultureCode";
import Industries from "./Industries";
import Statistics from "./Statistics";

const End = () => {
    return (
        <section
            style={{
                background:
                    'linear-gradient(142.29deg, rgba(0, 0, 0, 0) 13.57%, #1D1F28 110.49%), linear-gradient(153.8deg, #1D1F28 0%, #000000 61.67%)'
            }}
        >
            <Concept />
            <CultureCode />
            <Statistics />
            <Industries/>
            <BannerRing />
        </section>
    );
};

export default End;
