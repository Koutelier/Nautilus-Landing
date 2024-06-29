import Heading from "../components/Heading";

const cards = [
    {
        id: 1,
        title: "Mobile App",
        desc: "Nautilus Team is working on delivering a mobile wallet in the near feature.",
    },
    {
        id: 2,
        title: "MultiChain support",
        desc: "The overall plan of Nautilus is to have one wallet for everything.",
    },
    {
        id: 3,
        title: "Mempool chaining support",
        desc: "We have been experimenting with mempool chaining for some time , it will improve the user's perception of performance and fluidity",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full col center gap-4">
            <Heading
                heading="Roadmap"
                subHeading="Coming Soon"
                className="text-center"
            />
            <div className="row w-full justify-center gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
                    >
                        <img
                            className="w-16 h-w-16"
                            src={`/assets/${card.id}.png`}
                            alt={card.title}
                        />
                        <h4 className="font-redzone text-2xl">{card.title}</h4>
                        <span className="text-app_gray/70">{card.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
