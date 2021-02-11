import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;