import React from 'react';
import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is Nautilus Wallet?",
        answer: "Nautilus is a cryptocurrency wallet supported by Ergo Foundation",
    },
    {
        question: "In which platforms can I download Nautilus Wallet?",
        answer: "So far Nautilus is supported as an extension on browser but the devs are working on delivering a new mobile version as well.",
    },
    {
        question: "Is it safe to use Nautilus?",
        answer:`Nautilus is safe to use, you can even check the <a href="https://github.com/nautls/nautilus-wallet" style="color: #1e90ff;">Open Source</a> code.`,
    },
    {
        question: "Is Nautilus multichain?",
        answer: `Nautilus isn't a multichain <strong> YET </strong>, the team has a plan on integrating more than one chain in the near feature.`
    },
    {
        question: "Is my data saved?",
        answer: "Captain nemo has high standards about security and personal data , so you can rest assure that nautilus wallets doesn't trace or store personal data!",
    },
    {
        question: "Does Nautilus have fees?",
        answer: "Nautilus wallet has no fees, you can use it completely free with no hidden fees.",
    },
    {
        question: "Can I use Ledger?",
        answer: `Yes, you can in developer mode. There is a simple <strong>tutorial</strong> for this: <a href="https://medium.com/@koutelier/how-to-install-ergo-on-ledger-device-developer-mode-72de2bcd1055" style="color: #1e90ff;">How to install Ergo on Ledger Device (Developer Mode)</a>.`
    },
    {
        question: "Can i recover my yoroi wallet?",
        answer: `There is an open source <a href="https://github.com/satsen/yoroi-ergo-wallet-recover" style="color: #1e90ff;">Tool</a> for that reason. <strong>Use it on your own Risk</strong>`,
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently Asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>
        </section>
    );
}
