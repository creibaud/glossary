import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Guardia | Glossary",
    description: "IT Glossary"
};

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap"
});

type Props = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
    return (
        <html>
            <body className={poppins.className}>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default RootLayout;