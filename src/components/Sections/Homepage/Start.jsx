import Clients from "./Clients";
import Hero from "./Hero";

const Start = () => {
    return (
        <section
            style={{ backgroundImage: 'url("images/backs/start_background.png")' }}
        >
            <Hero/>
            <Clients/>
        </section>
    );
};

export default Start;
