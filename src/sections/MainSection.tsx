import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import { getBrowser } from "../components/sub-components/browser";  // Adjust the import path as needed

export default function MainSection() {
    const [browser, setBrowser] = useState('other');

    useEffect(() => {
        setBrowser(getBrowser());
    }, []);

    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    Ergo Wallet. Fast, Secure, Easy to use!
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    Built-in secrecy, sourcing parts from unnamed sources. Roams the seas
                    beyond the reach of land-based governments.
                </span>
                <div className="row gap-4">
                    {browser === 'chrome' && (
                        <a
                            href="https://chromewebstore.google.com/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="flex items-center">
                                <img
                                    src="/assets/chrome.png"
                                    alt="Download chrome"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: "8px",
                                    }}
                                />
                                <span>Download</span>
                            </Button>
                        </a>
                    )}
                    {browser === 'firefox' && (
                        <a
                            href="https://addons.mozilla.org/en-US/firefox/addon/nautilus/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="flex items-center">
                                <img
                                    src="/assets/firefox.svg"
                                    alt="Download firefox"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: "8px",
                                    }}
                                />
                                <span>Download</span>
                            </Button>
                        </a>
                    )}
                    {browser !== 'chrome' && browser !== 'firefox' && (
                        <Button className="flex items-center cursor-not-allowed" disabled>
                            <img
                                src="/assets/chrome.png"
                                alt="Download chrome"
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    marginRight: "8px",
                                    filter: "grayscale(100%)"
                                }}
                            />
                            <span>Download (Unavailable)</span>
                        </Button>
                    )}
                    <a
                        href="https://github.com/nautls/nautilus-wallet"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button outline={true}>Github</Button>
                    </a>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/m-512.png"
                    alt="NAUTILUS"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
