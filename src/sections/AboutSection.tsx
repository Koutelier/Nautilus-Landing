import Heading from "../components/Heading";
import { SectionProps } from "../types";

const tags = [
    "Ergo",
    "Secure",
    "Private",
    "Fast payments",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Captain Nemo: Innovating the Future of Digital Finance."
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                Captain Nemo is at the forefront of the digital finance revolution, pioneering advancements in Web3 wallet development. With a keen focus on security, usability, and interoperability, Nemo is shaping the way users interact with decentralized finance, making blockchain technology more accessible and efficient for everyone.
                </span>
                <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/nemo.jpeg"
                    alt="nemo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
