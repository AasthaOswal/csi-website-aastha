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
    ];

    return (
        <section className="bg-slate-950 py-12 max-w-5xl mx-auto" id="events">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-10">
                Our Events
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-teal-400 hover:scale-105 transition duration-300"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {event.title}
                            </h3>
                            <p className="text-white text-sm">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
