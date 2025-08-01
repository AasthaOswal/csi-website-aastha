const About = () => {
    return (
        <section className="text-white px-6 py-12 about-section" id="about">
            <div className="max-w-5xl mx-auto about-wrapper">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 text-center">
                    About CSI-DMCE 2025
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 text-center">
                    The Computer Society of India CSI-DMCE Chapter under CATT 2025 is a
                    student-led initiative focused on building a culture of innovation and
                    collaboration. We aim to connect tech enthusiasts, coders, designers,
                    and thinkers at Datta Meghe College of Engineering.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-transparent hover:border-teal-400">
                        <h3 className="text-xl font-semibold text-teal-400 mb-2">
                            🚀 Our Mission
                        </h3>
                        <p className="text-slate-300">
                            To nurture future engineers through impactful tech events,
                            real-world projects, and knowledge-sharing sessions.
                        </p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-teal-400 mb-2">
                            👨‍💻 Who We Are
                        </h3>
                        <p className="text-slate-300">
                            A dedicated student committee promoting emerging tech fields like
                            AI, Web Dev, Cybersecurity, and IoT.
                        </p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-teal-400 mb-2">
                            📚 What We Do
                        </h3>
                        <p className="text-slate-300">
                            Organize workshops, launch collaborative projects, mentor juniors,
                            and foster a culture of open-source.
                        </p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-teal-400 mb-2">
                            📍 Where to Find Us
                        </h3>
                        <p className="text-slate-300">
                            Follow us on Instagram and LinkedIn for the latest updates,
                            events, and team announcements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
