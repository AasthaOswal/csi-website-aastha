
const Hero=()=>{
    return (
        <section className="text-neutral-200 flex items-center justify-center px-6 sm:px-8 md:px-12 py-12 scroll-mt-16 h-[calc(100dvh-4rem)]" id="hero">
            <div className="flex max-w-5xl flex-col-reverse  md:flex-row items-center justify-around gap-x-8">
                <div className="text-center md:text-left mt-16 md:mt-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    CSI-DMCE: Ignite. Innovate. Inspire.
                    </h1>
                    <p className="text-md md:text-base mb-8 text-neutral-300">
                    Empowering developers, designers, and dreamers at Datta Meghe College of Engineering through
                    collaborative projects, hands-on learning, and tech-driven innovation.
                    </p>
                    <div className="flex flex-row flex-wrap md:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-violet-400 text-neutral-950 font-semibold px-6 py-3 rounded-xl hover:bg-violet-500 active:bg-violet-500 active:scale-95 transition-all duration-200 ease w-fit self-center cursor-pointer">
                            <a href="#events">Explore Events</a>
                        </button>
                        <button className="font-semibold border border-violet-400 text-violet-400 px-6 py-3 rounded-xl  hover:bg-violet-400 hover:text-neutral-950 active:scale-95 transition-all duration-200 ease w-fit self-center cursor-pointer">
                            Join Our Community
                        </button>
                    </div>
                </div>
                <img src="/csi-website-new-hero-image.png" alt="" className="w-11/12 sm:w-3/5 md:w-2/5 "/>
            </div>
        </section>

    );
}

export default Hero;