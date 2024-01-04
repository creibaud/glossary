import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My App",
    description: "This is my app",
};

type Props = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
    return (
        <html>
            <body>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default RootLayout;