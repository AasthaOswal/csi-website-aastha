
const Hero=()=>{
    return (
        <section className="bg-slate-950 text-white flex items-center justify-center px-6 py-16" id="hero">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                CSI-DMCE: Ignite. Innovate. Inspire.
                </h1>
                <p className="text-lg md:text-xl mb-8 text-slate-300">
                Empowering developers, designers, and dreamers at Datta Meghe College of Engineering through
                collaborative projects, hands-on learning, and tech-driven innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-teal-400 text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-teal-300 transition">
                    Explore Projects
                </button>
                <button className="border border-teal-400 text-teal-400 px-6 py-3 rounded-xl hover:bg-teal-400 hover:text-slate-900 transition">
                    Join Our Community
                </button>
                </div>
            </div>
        </section>

    );
}

export default Hero;