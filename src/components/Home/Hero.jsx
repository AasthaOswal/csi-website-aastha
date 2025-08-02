
const Hero=()=>{
    return (
        <section className="bg-slate-950 text-white flex items-center justify-center px-6 py-16 scroll-mt-16" id="hero">
            <div className="flex max-w-5xl flex-col-reverse  md:flex-row items-center justify-around gap-x-8">
                <div className="text-center md:text-left mt-16 md:mt-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    CSI-DMCE: Ignite. Innovate. Inspire.
                    </h1>
                    <p className="text-md md:text-base mb-8 text-slate-300">
                    Empowering developers, designers, and dreamers at Datta Meghe College of Engineering through
                    collaborative projects, hands-on learning, and tech-driven innovation.
                    </p>
                    <div className="flex flex-row flex-wrap md:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-teal-400 text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-teal-300 transition w-fit self-center">
                            <a href="#events">Explore Events</a>
                        </button>
                        <button className="border border-teal-400 text-teal-400 px-6 py-3 rounded-xl hover:bg-teal-400 hover:text-slate-900 transition w-fit self-center">
                            Join Our Community
                        </button>
                    </div>
                </div>
                <img src="/hero-image.png" alt="" className="w-11/12 sm:w-3/5 md:w-2/5 "/>
            </div>
        </section>

    );
}

export default Hero;