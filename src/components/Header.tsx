import { appLinks } from "../constants";
import Button from "./Button";
import AppLogo from "./sub-components/AppLogo";
import ThemeControl from "./sub-components/ThemeControl";

const links = ["Home", "About", "Roadmap", "FAQ"];
const sectionIds = ["home", "about", "features", "faq"];

export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-between gap-2">
            <div className="row items-center gap-2">
                <AppLogo
                    onClick={() => window.location.assign("/")}
                    className="cursor-pointer"
                />
                <div className="ml-24 hidden lg:flex flex-row flex-wrap gap-8">
                    {links.map((li, i) => (
                        <span
                            key={i}
                            onClick={() => scrollToSection(sectionIds[i])}
                            className={`uppercase font-redzone cursor-pointer`}
                        >
                            {li}
                        </span>
                    ))}
                </div>
            </div>
            <div className="row items-center gap-12">
                <ThemeControl />
                <div className="hidden sm:block">
                    <a
                        href="https://explorer.ergoplatform.com/en/addresses/9iPgSVU3yrRnTxtJC6hYA7bS5mMqZtjeJHrT3fNdLV7JZVpY5By"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Donate</Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
