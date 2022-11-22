import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const activeSideBar = useSelector((state) => state.sideBar.value);
    const [displaySideBarText, setDisplaySideBarText] = useState("hidden");
    const navigate = useNavigate();
    return (
        <nav className="flex-row font-serif text-xl text-gray-100 p-3 lg:p-5">
            <div className="flex my-4 lg:p-3 gap-3">
                <div className={`font-semibold ${displaySideBarText} lg:inline-block text-shadow-xl`}>DNA STRING MATCHING</div>
                <div className="p-3 -mt-3 cursor-pointer lg:hidden hover:bg-blue-600 rounded-lg" onClick={() => setDisplaySideBarText(displaySideBarText === "hidden" ? "inline-block" : "hidden")}>
                    {displaySideBarText === "hidden" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>
            </div>
            <div
                className={`flex my-4 p-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 cursor-pointer ${activeSideBar[0] ? "bg-blue-700" : ""} shadow-sm shadow-gray-200`}
                onClick={() => {
                    navigate("/");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <div className={`ml-3 ${displaySideBarText} lg:inline-block`}>Dashboard</div>
            </div>
            <div
                className={`flex my-4 p-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 cursor-pointer ${activeSideBar[1] ? "bg-blue-700" : ""} shadow-sm shadow-gray-200`}
                onClick={() => {
                    navigate("/add-new-disease");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <div className={`ml-3 ${displaySideBarText} lg:inline-block`}>Add New Disease</div>
            </div>
            <div
                className={`flex my-4 p-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 cursor-pointer ${activeSideBar[2] ? "bg-blue-700" : ""} shadow-sm shadow-gray-200`}
                onClick={() => {
                    navigate("/disease-list");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <div className={`ml-3 ${displaySideBarText} lg:inline-block`}>Disease list</div>
            </div>
            <div
                className={`flex my-4 p-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 cursor-pointer ${activeSideBar[3] ? "bg-blue-700" : ""} shadow-sm shadow-gray-200`}
                onClick={() => {
                    navigate("/dna-test");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <div className={`ml-3 ${displaySideBarText} lg:inline-block`}>DNA Test</div>
            </div>
            <div
                className={`flex my-4 p-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 cursor-pointer ${activeSideBar[4] ? "bg-blue-700" : ""} shadow-sm shadow-gray-200`}
                onClick={() => {
                    navigate("/history");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className={`ml-3 ${displaySideBarText} lg:inline-block`}>History</div>
            </div>
            <div
                className={`flex my-4 p-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 cursor-pointer ${activeSideBar[5] ? "bg-blue-700" : ""} shadow-sm shadow-gray-200`}
                onClick={() => {
                    navigate("/help");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className={`ml-3 ${displaySideBarText} lg:inline-block`}>Help</div>
            </div>
        </nav>
    );
};

export default Sidebar;
