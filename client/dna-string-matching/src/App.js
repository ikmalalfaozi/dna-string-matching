import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Background } from "./assets";
import { Sidebar } from "./components";
import { AddNewDisease, DiseaseList, DNATest, Help, History, Home, NoMatch, DiseaseDetails } from "./pages";

const App = () => {
    const showSidebar = useSelector((state) => state.sideBar.showSidebar);
    return (
        <div className="flex gap-4 h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Background})` }}>
            <div className="absolute lg:basis-1/4 lg:relative lg:max-w-[370px] lg:min-w-[250px] h-screen bg-blue-500 rounded-r-lg overflow-auto shadow-lg shadow-gray-500" style={{ display: `${showSidebar ? "block" : "none"}` }}>
                <Sidebar />
            </div>
            <div className={`w-full ${showSidebar ? "lg:basis-3/4" : ""} ml-20 lg:ml-0 h-screen overflow-auto`}>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/add-new-disease" exact element={<AddNewDisease />} />
                    <Route path="/add-new-disease/:id" exact element={<AddNewDisease />} />
                    <Route path="/disease-list" exact element={<DiseaseList />} />
                    <Route path="/disease-list/:id" exact element={<DiseaseDetails />} />
                    <Route path="/dna-test" exact element={<DNATest />} />
                    <Route path="/history" exact element={<History />} />
                    <Route path="/help" exact element={<Help />} />
                    <Route path="*" exact element={<NoMatch />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
