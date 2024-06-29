import Button from "../components/Button";
import Heading from "../components/Heading";

export default function CollectionSection() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start col gap-4 items-start pr-4">
                <Heading heading="Simple Yet Powerfull" subHeading="Easy UI with powerfull capabilities " />
                <span className="text-app_gray/80">
                Nautilus Wallet features a simple yet powerful user interface that caters to both basic users and developers alike. Whether you're an everyday user or a developer, Nautilus offers versatile functionality that adapts to your needs.                </span>
             </div>
            <div className="flex-[2] overflow-x-scroll flex-grow max-w-[90vw] no-scrollbar inline-flex flex-row gap-4">
                {[1, 2, 3, 1, 2].map((n, i) => (
                    <div className="min-w-[200px] rounded-md" key={i}>
                        <img
                            className="object-cover"
                            src={`/assets/ergo-${n}.png`}
                            alt="avatar"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
