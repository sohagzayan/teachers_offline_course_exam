"use client"
import { navMenu } from '@/utils/data'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import {
    CreditCard,
    Keyboard,
    LogOut,
    Mail,
    MessageSquare,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { Twirl as Hamburger } from 'hamburger-react'


const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const router = useRouter()

    return (
        <div className='bg-primary py-4'>
            <div onClick={() => setIsOpenMenu(false)} className={`transition-all duration-300 ease-in-out ${isOpenMenu ? 'bg-black/60 fixed top-0 left-0 h-screen w-full z-40 cursor-pointer' : 'bg-black/60 fixed top-0 left-0 h-screen w-full z-40 pointer-events-none invisible opacity-0 '} `}></div>
            <div className={`3xl:hidden  2xl:hidden xl:hidden   mt-10 gap-6 lg:hidden md:block sm:block tiny:block`}>
                <ul className={`flex transition-all duration-300 ease-in-out items-center flex-col bg-primary absolute top-0 left-0 w-full py-8 z-50 text-white gap-6 uppercase  text-[14px] ${isOpenMenu ? ' translate-y-0' : ' -translate-y-full'}`}>
                    {navMenu.map((menu) => <li onClick={() => router.push(menu.path)} className='cursor-pointer' key={menu.label}>{menu.label}
                    </li>
                    )}

                </ul>
            </div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Image src="/assets/images/assessment-logo 3.svg" width={200} height={200} alt='logo' />
                    </div>
                    <div className='3xl:block 2xl:block xl:block lg:block md:hidden sm:hidden tiny:hidden'>
                        <ul className='flex items-center text-white gap-6 uppercase  text-[14px]'>
                            {navMenu.map((menu) => <li onClick={() => router.push(menu.path)} className='cursor-pointer' key={menu.label}>{menu.label}
                            </li>
                            )}
                        </ul>
                    </div>
                    <div className=' gap-3 3xl:block 2xl:block xl:block lg:block md:hidden sm:hidden tiny:hidden'>
                        <div className='flex items-center'>
                            <div>
                                <p className='bg-rich_navy_blue w-10 h-10 rounded-full flex items-center justify-center text-white'><Search size={22} /></p>
                            </div>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <p className='inline-block cursor-pointer'>
                                            <Image src="/assets/images/Ellipse 16.png" width={40} height={40} alt='logo' />
                                        </p>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <User className="mr-2 h-4 w-4" />
                                                <span>Profile</span>
                                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <CreditCard className="mr-2 h-4 w-4" />
                                                <span>Billing</span>
                                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Settings className="mr-2 h-4 w-4" />
                                                <span>Settings</span>
                                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Keyboard className="mr-2 h-4 w-4" />
                                                <span>Keyboard shortcuts</span>
                                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <Users className="mr-2 h-4 w-4" />
                                                <span>Team</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuSub>
                                                <DropdownMenuSubTrigger>
                                                    <UserPlus className="mr-2 h-4 w-4" />
                                                    <span>Invite users</span>
                                                </DropdownMenuSubTrigger>
                                                <DropdownMenuPortal>
                                                    <DropdownMenuSubContent>
                                                        <DropdownMenuItem>
                                                            <Mail className="mr-2 h-4 w-4" />
                                                            <span>Email</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <MessageSquare className="mr-2 h-4 w-4" />
                                                            <span>Message</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem>
                                                            <PlusCircle className="mr-2 h-4 w-4" />
                                                            <span>More...</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuSubContent>
                                                </DropdownMenuPortal>
                                            </DropdownMenuSub>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Log out</span>
                                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div className='3xl:hidden 2xl:hidden xl:hidden lg:hidden md:block sm:block tiny:block'>
                        <Hamburger toggle={setIsOpenMenu} toggled={isOpenMenu} color='#fff' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header