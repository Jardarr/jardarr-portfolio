"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/">
                                <h1 className="text-2xl font-medium">
                                    Dmitry<span className="text-teal-500">Pligin</span>
                                </h1>
                            </Link>
                        </div>

                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                            <Link
                                href="/"
                                prefetch
                                className={`${
                                    pathname === "/"
                                        ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                }`}>
                                Home
                            </Link>
                            <Link
                                href="/guestbook"
                                prefetch
                                className={`${
                                    pathname === "/guestbook"
                                        ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                }`}>
                                Guestbook
                            </Link>
                            <Link
                                href="/projects"
                                prefetch
                                className={`${
                                    pathname === "/projects"
                                        ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                }`}>
                                Projects
                            </Link>
                            <ThemeButton />
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <ThemeButton />
                        </div>
                    </div>
                </div>
                <div className="sm:hidden">
                    <Link
                        href="/"
                        className="flex sm:hidden items-center justify-center text-base sm:text-xl font-bold my-2 bg-neutral-500/30 dark:bg-teal-500/30 text-neutral-500 dark:text-teal-500 rounded-lg py-2">
                        Home
                    </Link>
                    <Link
                        href="/guestbook"
                        className="flex sm:hidden items-center justify-center text-base sm:text-xl font-bold my-2 bg-neutral-500/30 dark:bg-teal-500/30 text-neutral-500 dark:text-teal-500 rounded-lg py-2">
                        Guestbook
                    </Link>
                    <Link
                        href="/projects"
                        className="flex sm:hidden items-center justify-center text-base sm:text-xl font-bold my-2 bg-neutral-500/30 dark:bg-teal-500/30 text-neutral-500 dark:text-teal-500 rounded-lg py-2">
						Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
}
