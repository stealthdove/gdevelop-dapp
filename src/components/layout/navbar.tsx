"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import userImage from '../../../public/images/user.png';

import {
  metamaskWallet,
  useAddress,
  useAuth,
  useConnect,
  useConnectionStatus,
  useLogin,
  useUser,
  useLogout
} from "@thirdweb-dev/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Power } from "lucide-react";

const metamaskConfig = metamaskWallet();

export const Navbar = () => {
  const profile = "/images/navbar/profile.svg";
  const router = useRouter();
  const connect = useConnect();
  const connectionStatus = useConnectionStatus();
  const { login } = useLogin();
  const { logout, isLoading } = useLogout();
  const { isLoggedIn } = useUser();
  const address = useAddress();
  const copy = (str: string) => {
    navigator.clipboard.writeText(str);
  };

  return (
    <nav className="z-50 fixed flex-between bg-dark-1 px-6 lg:px-10 py-4 w-full">
      <div className="flex items-center text-[13px]">
        <Link href="/" className="flex items-center gap-1">
          <div className="flex items-center w-[12rem]">
            <div className="flex items-center bg-[#C1EF0C] w-[30px] h-[30px] text-center justify-center rounded-[8px] font-semibold text-[13px] mr-4">M</div>
            <div className="font-semibold text-[13px] ml-4 bg-transparent text-white">My Workspace</div>
          </div>
        </Link>

        <div className="flex justify-between w-full">
          <div className="bg-[#16151B] px-4 py-2 rounded-full" >
              <FontAwesomeIcon icon={faSearch} className="text-white text-[16px]" />
              <input type='edit' placeholder='Search' className="border-none bg-transparent text-[13px] text-white px-2 py-2 ml-2 outline-none" />
          </div>
          <div className="flex items-center">
            <button className="font-semibold rounded-full cursor-pointer text-white text-[13px] px-4 py-2 bg-[#7A7A7D] ">Import Game</button>
            <button className="font-semibold rounded-full cursor-pointer text-white text-[13px] px-4 py-2 bg-[#C1EF0C] ml-2">New Game</button>
            {
              isLoggedIn ?
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>

                        <div className="flex items-center border-[1px] rounded-full border-solid border-[#243c5a] ml-2 text-white p-2 cursor-pointer">
                          {
                            address
                            ? 
                            address?.substring(0, 6) + "..." + address?.substring(address.length - 4)
                            : 
                            "Loading..."
                          }
                          <Image src={userImage} alt="user-icon" className="w-4 h-4 rounded-full ml-4" />
                        </div> 
                        
                    
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col gap-3 border-[#242835] bg-[#01050E] p-4 border rounded-[12px] w-56">
                    <p className="flex justify-between items-center font-semibold text-[#A1ACC2] text-base leading-6">
                      {address
                        ? address?.substring(0, 6) +
                          "..." +
                          address?.substring(address.length - 4)
                        : "Loading..."}
                      <Copy
                        size={16}
                        className="text-white translate-y-[-1px] cursor-pointer"
                        onClick={() => copy(address as string)}
                      />
                    </p>
                    <DropdownMenuSeparator className="bg-[#181D24]" />
                    <button
                      // onClick={() => {
                      //   router.push("/dashboard/billing");
                      // }}
                      className="hover:bg-[#0E1117] px-3 py-2 rounded-[4px] font-semibold text-[#DADFEA] text-base leading-6 text-start"
                    >
                      Billing
                    </button>
                    <p
                      onClick={() => {
                        logout();
                      }}
                      className="flex items-center gap-[5px] hover:bg-[#0E1117] px-3 py-2 rounded-[4px] font-semibold text-[#DADFEA] text-base leading-6 cursor-pointer"
                    >
                      <Power size={16} className="translate-y-[-1px]" /> Log out
                    </p>
                  </DropdownMenuContent>
                </DropdownMenu>
                :
                connectionStatus === "connected" ? (
                  <Button
                    onClick={() => login()}
                    className="font-semibold rounded-full cursor-pointer text-white text-[13px] px-4 py-2 bg-[#C1EF0C] ml-2"
                  >
                    {"Sign in with Wallet"}
                  </Button>  
                ) : (
                  <Button 
                    onClick={() => connect(metamaskConfig)} 
                    className="font-semibold rounded-full cursor-pointer text-white text-[13px] px-4 py-2 bg-[#C1EF0C] ml-2">
                      {"Connect Wallet"} 
                  </Button>
                )
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
