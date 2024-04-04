"use client"
import BottomHeader from "@/components/common/BottomHeader/BottomHeader";
import Header from "@/components/common/Header/Header";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import { Rotate as Hamburger } from 'hamburger-react'
import { useState } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    return (


        <main className="bg-off_white min-h-screen overflow-x-hidden">
            <div onClick={() => setIsOpenSidebar(false)} className={`transition-all duration-300 ease-in-out ${isOpenSidebar ? 'bg-black/60 fixed top-0 left-0 h-screen w-full z-40 cursor-pointer' : 'bg-black/60 fixed top-0 left-0 h-screen w-full z-40 pointer-events-none invisible opacity-0 '} `}></div>

            <Header />
            <BottomHeader />
            <div className="container ml-4 3xl:hidden 2xl:hidden lg:hidden xl:hidden md:block sm:block tiny:block">
                <div className="">
                    <Hamburger toggled={isOpenSidebar} toggle={setIsOpenSidebar} />
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-12">
                <div className="xl:col-span-2 2xl:col-span-2 3xl:col-span-2 lg:col-span-3  md:hidden sm:hidden tiny:hidden">
                    <Sidebar />
                </div>
                <div className={`bg-white xl:hidden 2xl:hidden 3xl:hidden lg:hidden md:block sm:block tiny:block shadow-sm fixed top-0 left-0 z-50 h-screen transition-all duration-300 ease-in-out ${isOpenSidebar ? '-translate-x-0' : '-translate-x-full'}`}>
                    <Sidebar />
                </div>
                <div className="xl:col-span-10 3xl:col-span-10 2xl:col-span-10 lg:col-span-9 md:col-span-12 sm:col-span-12 tiny:col-span-12 overflow-y-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}
