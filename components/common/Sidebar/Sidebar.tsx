import navItems from '@/constants/nav-items'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { MdNotificationsActive } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb';


const commonSidebarMenu = [
    {
        label: "Notification",
        key: `/discover`,
        icon: <MdNotificationsActive />,
    },
    {
        label: "My Profile",
        key: `/discover`,
        icon: <FaUser />,
    },
    {
        label: "Setting",
        key: `/discover`,
        icon: <IoMdSettings />,
    },
    {
        label: "Sign Out",
        key: `/discover`,
        icon: <TbLogout2 />,
    },
];

interface SidebarMenuType {
    label: string,
    key: string,
    icon: any
}

const Sidebar = () => {

    const sideBarItems = navItems("user")
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className='bg-white  rounded-2xl py-6'>
            <div className=''>
                <div>
                    <div>
                        <div className='bg-[#8280A0]/40 w-[190px] h-[190px] rounded-full flex items-center justify-center mx-auto'>
                            <div className='bg-[#DEDEE6] w-[180px] h-[180px] rounded-full flex items-center justify-center'>
                                <div className='bg-[#cfcfd1] w-[170px] h-[170px] rounded-full flex items-center justify-center'>
                                    <div className='bg-[#BCBBCC] w-[162px] h-[162px] rounded-full flex items-center justify-center'>
                                        <Image src="/assets/images/user profile.png" width={160} height={160} alt="profile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center '>
                            <h3 className='text-2xl font-bold text-primary my-5'>Adil Rashid</h3>
                            <p className='text-gray-500 my-5'>Sr. Karate Teacher</p>
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-1'>
                            {sideBarItems.map((menu: SidebarMenuType) =>
                                <li onClick={() => router.push(menu.key)} key={menu.key} className={`flex cursor-pointer items-center  p-2 text-[14px] gap-3 ${pathname == menu.key ? 'bg-secondary text-white' : "bg-light_gray"}`}>
                                    <span className=' text-[18px]'>{menu.icon}</span>
                                    {menu.label}
                                </li>
                            )}
                        </ul>
                        <ul className='flex flex-col gap-1 mt-5'>
                            {commonSidebarMenu.map((menu: SidebarMenuType) =>
                                <li key={menu.key} className={`flex items-center bg-light_gray p-2 text-[14px] gap-3 hover:bg-primary hover:text-white group transition-all duration-200 ease-in-out cursor-pointer`}>
                                    <span className='text-gray-500 text-[18px] group-hover:text-white transition-all duration-200 ease-in-out'>{menu.icon}</span>
                                    {menu.label}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar