"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div></div>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/about">
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                About
                            </li>
                        </Link>
                        <Link href="/projects">
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Projects
                            </li>
                        </Link>
                        <Link href="/experience">
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Experience
                            </li>
                        </Link>
                        <Link href="/blog">
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Blog
                            </li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer p1-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href="/about">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                About
                            </li>
                        </Link>
                        <Link href="/projects">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Projects
                            </li>
                        </Link>
                        <Link href="/experience">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Experience
                            </li>
                        </Link>
                        <Link href="/blog">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Blog
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;