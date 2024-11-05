"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerItems } from "@/config/headerItems.config";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/auth";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [alreadyLoggedin, setAlreadyLoggedin] = useState<boolean>(false);

  useEffect(() => {
    setAlreadyLoggedin(isAuthenticated());
  }, [pathname]);

  const handleLogout = () => {
    logout();
    setAlreadyLoggedin(false);
  };

  return (
    // border-b shadow-md add this to down after removing the homepage
    <div className="flex justify-around px-10 mb-6  items-end  bg-white text-black">
      <Link href={"/"}>
        <img
          src="/images/Sidian-bank-Logo-1.png"
          alt="sidian-bank-logo"
          className="h-[65px]"
        />
      </Link>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-6 mr-6">
          {headerItems.map((items) => {
            let currentPathname = "/" + items.title.toLowerCase();
            if (currentPathname === "/home") currentPathname = "/";
            if (currentPathname === "/contact us")
              currentPathname = "/contact-us";

            const isActive =
              items.link === "/"
                ? pathname === "/"
                : pathname.startsWith(items.link);

            return (
              <Link
                href={items.link}
                key={items.title}
                className={`hover:text-primary  ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {items.title}
              </Link>
            );
          })}

          <Select defaultValue="Kenya">
            <SelectTrigger className="w-[100px] bg-gray-100">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kenya">Kenya</SelectItem>
              <SelectItem value="Uganda">Uganda</SelectItem>
              <SelectItem value="Tanzania">Tanzania</SelectItem>
              <SelectItem value="Rwanda">Rwanda</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {!alreadyLoggedin ? (
          <>
            <Button
              onClick={() => router.push("/login")}
              className="font-semibold border-black text-black hover:bg-primary"
              variant={"outline"}
            >
              Login
            </Button>
            <Button
              onClick={() => router.push("/login")}
              className="font-semibold"
            >
              Sign Up
            </Button>
          </>
        ) : (
          <Button
            onClick={handleLogout}
            className="font-semibold border-primary text-primary hover:border-red-500 hover:bg-red-500 hover:text-white"
            variant={"outline"}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
