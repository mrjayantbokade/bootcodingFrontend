import React from "react";
import { Outlet } from "react-router-dom";
// import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const RootLayout: React.FC = () => {
    return (
        <main className="bg-black w-full min-h-screen">
             {/*<Banner />*/}
            <div className={`sticky top-0  w-full lg:w-full  z-[99999]  `}>
                <Navbar />
            </div>
            <main className="flex-grow ">
                <Outlet />
            </main>
            <Footer />


        </main>
    )
}
export default RootLayout;