'use client'
import { useState } from "react";
import { posts, tb_body, tb_header } from "./values"
import { FaRegCalendarPlus } from "react-icons/fa";

export default function Credits() {

    const [modalFlag, setModalFlag] = useState(false)

    const handleHideModal = () => {
        setModalFlag(false)
    }

    const handleShowModal = () =>{
        setModalFlag(true)
    }

    return (
        
        <main style={{ padding: "15px" }} className="min-h-[calc(100vh-140px)]">
            <section className="project-showcase-section">
                <div className={`${modalFlag ? 'flex md:pl-[570px] md:pt-[250px] fixed padding-auto w-full h-full bg-[#0E0C13] bg-opacity-20 backdrop-blur' : 'hidden'}`}>
                    <div className="flex backdrop-blur-md items-center justify-center bg-[#1F1F1F] bg-opacity-90 rounded-[16px] max-w-[353px] max-h-[353px] px-5 pt-9 pb-8">
                        <div className="flex flex-col items-center justify-center text-white ">
                            <div className="flex flex-col justify-center">
                                <div className="text-[32px] text-center"> Top-up your balance</div>
                                <span className="text-[16px] mt-4 w-full text-[#7A7A7D]">Add funds to your balance with just a few clicks, you can choose a stable coin that aligns with your preferences.</span>
                                <div className=" mt-3">
                                    <p className="text-[14px] text-[#7A7A7D]">Amount to add</p>
                                    <select className="mt-2 w-full bg-[black] p-2 rounded-[8px]">
                                    </select>
                                </div>
                                <div className="flex flex-col items-center justify-center mt-3">
                                    <button className="w-full mt-3 flex items-center justify-center h-[38px] bg-[#BFED0C] rounded-[8px] text-[12px] gap-2 font-bold font-sanz font-semibold text-[black]">Confirm</button>
                                    <button className="w-full mt-3 flex items-center justify-center h-[38px] border border-[#7A7A7D4D] rounded-[8px] text-[12px] gap-2 font-bold font-sanz text-[#7A7A7D] font-semibold" onClick={handleHideModal}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <div className="w-full p-3">
                            <table className="text-white w-full">
                                <tbody>
                                    <tr>
                                        {
                                            posts && posts.map((one, index) => (
                                                <th key={index}>{one.desc}</th>
                                            ))
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            posts && posts.map((one, index) => (
                                                <th key={index}>{one.value}</th>
                                            ))
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className="flex items-center justify-center w-[173px] h-[38px] bg-[#BFED0C] rounded-[8px] text-[12px] gap-2 font-bold font-sanz font-semibold" onClick={handleShowModal}> <FaRegCalendarPlus className="text-[14px]" /> Top up your Credits </button>
                        </div>
                    </div>
                    <div className="border border-[#7A7A7D3D] rounded-[16px] mt-4">
                        <div className="flex-wrap text-[#EEEEEE] font-bold  w-full    ">
                            <div>
                                <div className="flex">
                                    {
                                        tb_header && tb_header.map((one, index) => (
                                            <p key={index} className="flex items-center justify-center w-full text-[#7A7A7D] text-[16px] p-2 font-bold">{one.desc}</p>
                                        ))
                                    }
                                </div>
                                {
                                    tb_body && tb_body.map((one, index) => (
                                        <div className="flex text-[14px] font-sans border border-l-[black] border-t-[black]  border-r-[black] border-b-[#7A7A7D3D] border-1 items-center justify-center">
                                            <p className="flex p-2 w-full items-center justify-center">{one.desc}</p>
                                            <p className="flex p-2 w-full items-center justify-center">{one.time}</p>
                                            <p className="flex p-2 w-full items-center justify-center">{one.cost}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#28272C] w-full text-[white] px-6 pt-3 pb-3 rounded-[16px] text-[18px] mt-6">
                        <p>Total:</p>
                        <p>$165</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
