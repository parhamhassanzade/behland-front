"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Drawer,

    DrawerContent,

    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

export function MenuMobile() {
    return (
        <Drawer className="">
            <DrawerTrigger asChild className="md:hidden">
                <Button variant="outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full text-white bg-gradient-to-l from-[#4c7798] to-[#263b4d]">
                    <DrawerHeader className="bg-transparent">
                        <DrawerTitle>BehLand</DrawerTitle>
                    </DrawerHeader>
                    <nav className="py-6">
                        <ul className="flex flex-col gap-3 px-6">
                            <li>
                                <a
                                    href="#home"
                                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-gray-200 focus:bg-white/20 focus:outline-none"
                                >
                                    خانه
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-gray-200 focus:bg-white/20 focus:outline-none"
                                >
                                    خدمات ما
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#team"
                                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-gray-200 focus:bg-white/20 focus:outline-none"
                                >
                                    تیم ما
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#roadmap"
                                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-gray-200 focus:bg-white/20 focus:outline-none"
                                >
                                    نقشه راه پروژه
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#whyus"
                                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-gray-200 focus:bg-white/20 focus:outline-none"
                                >
                                    چرا بهلند
                                </a>
                                <a
                                    href="#news"
                                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-white/10 hover:text-gray-200 focus:bg-white/20 focus:outline-none"
                                >
                                    اخبار
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter> */}
                </div>
            </DrawerContent>
        </Drawer>
    );
}
