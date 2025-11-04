import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Events from "../components/Home/Events";
import Hero from "../components/Home/Hero";

const Home=()=>{
    return (
        <div className="w-full  min-h-screen text-neutral-200 bg-neutral-900" id="home">
            <Hero/>
            <About/>
            <Events/>
            <Contact/>
        </div>
    );
}

export default Home;