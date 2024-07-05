import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaCoins, FaTelegramPlane } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";

const socialIcons = [
    { Icon: AiOutlineTwitter, link: "https://x.com/nautiluswallet" },
    { Icon: FaCoins, link: "https://explorer.ergoplatform.com/en/addresses/9iPgSVU3yrRnTxtJC6hYA7bS5mMqZtjeJHrT3fNdLV7JZVpY5By" },
    { Icon: RiDiscordFill, link: "https://discord.gg/2BxVr8M9xW" },
    { Icon: FaTelegramPlane, link: "hhttps://t.me/+TA9m2R6BEfwxMjRh" },
    { Icon: FaGithub, link: "https://github.com/nautls/nautilus-wallet" },
];

const links = [
    ["About", "Donate"],
    ["Nautilus", "Download Chrome", "Download Firefox","Github"],
    ["Social", "Discord", "Telegram"],
];

const linkUrls: { [key: string]: string } = {
    "About us": "#about",
    "Donate": "https://explorer.ergoplatform.com/en/addresses/9iPgSVU3yrRnTxtJC6hYA7bS5mMqZtjeJHrT3fNdLV7JZVpY5By",
    "Download Chrome": "https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai",
    "Download Firefox": "https://addons.mozilla.org/en-US/firefox/addon/nautilus/",
    "Github": "https://github.com/nautls/nautilus-wallet",
    "Discord": "https://discord.gg/2BxVr8M9xW",
    "Telegram": "https://t.me/+TA9m2R6BEfwxMjRh",
};

export default function FooterSection() {
    return (
        <footer className="relative w-full row gap-4 justify-between">
            {/* Left Section */}
            <div className="col gap-4 min-w-[200px] justify-between">
                <div className="space-y-6">
                    <h3 className="font-redzone text-4xl">Nautilus Wallet - Supported by Ergo</h3>
                    <div className="row gap-4">
                        {socialIcons.map(({ Icon, link }, i) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white/50 text-white"
                            >
                                <Icon size={18} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>

                <span className="text-app_gray text-sm">
      All rights reserved &#169; <b>{new Date().getFullYear()}.</b> Made by 
      <a 
        href="https://github.com/Koutelier" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-highlight font-bold ml-1"
      >
        Koutelier
      </a>
    </span>
            </div>
            {/* Right Section */}
            <div className="row md:gap-24 gap-6">
                {links.map((group, idx) => (
                    <ul key={idx + 1} className="col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2">{link}</span>
                                ) : (
                                    <a
                                        href={linkUrls[link as keyof typeof linkUrls] || "#"}
                                        className={`font-nominee text-app_gray text-xs hover:text-white`}
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
    );
}
