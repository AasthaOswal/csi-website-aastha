const Events = () => {
    const events = [
        {
            title: "SIH Guide Event",
            description:
                "An insightful session guiding students on how to participate in Smart India Hackathon.",
            image: "/hero-image.png",
        },
        {
            title: "Code-a-thon",
            description:
                "A 24-hour hackathon organized by CSI-DMCE to encourage innovation and teamwork.",
            image: "/hero-image.png",
        },
        {
            title: "Hacktoberfest",
            description:
                "An open-source celebration with global contributions, hosted annually by CSI-DMCE.",
            image: "/hero-image.png",
        },
        {
            title: "JS BootCamp",
            description:
                "An amazing bootcamp to master the art of javascript, held by Tech Team Members.",
            image: "/hero-image.png",
        },
    ];

    return (
        <section className="bg-slate-950 px-6 sm:px-8 md:px-12 py-12  scroll-mt-16" id="events">
          
            <div className="max-w-5xl mx-auto about-wrapper">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-10">
                    Our Events
                </h2>

                <div className="grid  sm:grid-cols-2 gap-8 md:gap-12">
                    {events.map((event, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl border hover:border-teal-400 active:border-teal-400 transition-all duration-200 ease cursor-pointer">
                            <img src={event.image} alt={event.title} className="w-full h-56 md:h-64 object-cover p-5"/>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-white text-sm">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
