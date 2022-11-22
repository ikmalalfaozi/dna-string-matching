import React from "react";
import { useNavigate } from "react-router-dom";

const DiseaseListItem = ({ id, diseaseName, dnaSequence }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full p-3 font-sans text-slate-800 bg-gradient-to-br from-slate-200 to-blue-400 rounded-md">
            <p className="font-bold">{diseaseName}</p>
            <p className="break-all">{dnaSequence.length > 50 ? dnaSequence.slice(0, 50) : dnaSequence}...</p>
            <p className="text-right font-medium text-blue-800 cursor-pointer hover:text-blue-900" onClick={() => navigate(`${id}`)}>
                view detail
            </p>
        </div>
    );
};

export default DiseaseListItem;
