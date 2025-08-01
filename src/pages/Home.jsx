import About from "../components/Home/About";
import Hero from "../components/Home/Hero";

const Home=()=>{
    return (
        <div className="w-full  min-h-screen  bg-slate-950" id="home">
            <Hero/>
            <About/>
        </div>
    );
}

export default Home;