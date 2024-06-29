import Button from "../components/Button";

export default function PromoSection() {
    return (
        <section className="relative w-full min-h-[400px] row items-end justify-around gap-4">
            <img
                className="object-scale-down max-w-[200px] sm:max-w-sm max-h-[inherit] overflow-hidden"
                src="/assets/score.png"
                alt="vr_person"
            />
            <div className="bg-gradient-to-bl from-yellow-700 via-yellow-500 to-yellow-200 rounded-3xl p-3 md:p-0 w-full sm:h-[420px] h-full absolute bottom-0 z-[-1] shadow-lg"></div>
            <article className="col gap-6 items-start justify-center h-[inherit] md:max-w-[40%] m-2 lg:-translate-y-10">
                <h4 className="font-redzone text-6xl">Support us with a Review</h4>
                <span className="text-gray-200">
                    Nautilus Wallet has so many downloads but so few reviews. So us your support by dropping a positive review!
                </span>
                <a  href="https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai/reviews"
                        target="_blank"
                        rel="noopener noreferrer">
                    <Button outline>Review</Button>
                    </a>
            </article>
        </section>
    );
}

export function PromoSectionV2() {
    return (
        <section className="w-full">
            <div className="relative bg-gradient-to-bl from-sky-700 via-purple-700 to-blue-800 rounded-3xl p-3 md:p-0 min-h-[394px] row justify-around">
                <img
                    className="object-scale-down max-w-[200px] sm:max-w-sm max-h-[inherit] overflow-hidden"
                    src="/assets/score.png"
                    alt="vr_person"
                />
                <article className="col gap-6 items-start justify-center h-[inherit] md:max-w-[40%] m-2">
                    <h4 className="font-redzone text-6xl">Support us with a Review</h4>
                    <span className="text-app_gray">
                    Nautilus Wallet has so many downloads but so few reviews. So us your support by dropping a positive review!

                    </span>
                    <a  href="https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai/reviews"
                        target="_blank"
                        rel="noopener noreferrer">
                    <Button outline>Review</Button>
                    </a> 
               </article>
            </div>
        </section>
    );
}

export function PromoSectionV1() {
    return (
        <section className="w-full pt-28">
            <div className="relative bg-gradient-to-bl from-sky-700 via-purple-700 to-blue-800 rounded-3xl h-[394px]">
                <img
                    className="object-scale-down max-w-[200px] sm:max-w-sm max-h-[inherit] absolute left-4 md:left-32 scale-150 -top-24 "
                    src="/assets/score.png"
                    alt="vr_person"
                />
                <article className="absolute col gap-6 items-start justify-center h-[inherit] right-1 max-w-[50%]">
                    <h4 className="font-redzone text-6xl">Support us with a Review</h4>
                    <span className="text-gray-100">
                    Nautilus Wallet has so many downloads but so few reviews. So us your support by dropping a positive review!
                    </span>
                    <a  href="https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai/reviews"
                        target="_blank"
                        rel="noopener noreferrer">
                    <Button outline>Review</Button>
                    </a>                 </article>
            </div>
        </section>
    );
}
