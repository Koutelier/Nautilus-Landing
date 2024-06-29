import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function AppLogo({ className, ...props }: Props) {
    return (
        <h2 {...props} className={`text-4xl font-redzone app-logo ${className}`}>
            Nautilus
        </h2>
    );
    return (
        <h2 className="font-redzone text-4xl bg-gradient-to-br from-app via-yellow-300/80 bg-clip-text text-transparent">
            Nautilus
        </h2>
    );
}
