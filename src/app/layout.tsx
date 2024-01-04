import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Glossary",
    description: "A glossary of terms used in IT.",
};

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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

export default Layout;