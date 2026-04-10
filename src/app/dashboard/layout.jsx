"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }) => {
    const pathName = usePathname();
    // console.log("path name from dashboard",pathName)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <main>{children}</main>
                    <label
                        htmlFor="my-drawer-3"
                        className="btn drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <Link
                                className={
                                    pathName === "/dashboard"
                                        ? "text-blue-600 font-black"
                                        : ""
                                }
                                href="/dashboard"
                            >
                                {/* This is common (i mean its from layout) */}
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    pathName === "/dashboard/profile"
                                        ? "text-blue-600 font-black"
                                        : ""
                                }
                                href="/dashboard/profile"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    pathName === "/dashboard/revenue"
                                        ? "text-blue-600 font-black"
                                        : ""
                                }
                                href="/dashboard/revenue"
                            >
                                Revenue
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
