import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DiseaseListItem from "../../components/DiseaseListItem";
import { setSideBarValue } from "../../reducer/sideBarReducer";
import { getAllDisease } from "../../reducer/diseasesReducer";
import { useSelector } from "react-redux";

const DiseaseList = () => {
    const dispatch = useDispatch();
    const diseases = useSelector((state) => state.diseases);
    let totalPage = Math.ceil(diseases.total_data / 12);
    const [page, setPage] = useState(1);

    const previous = () => {
        setPage(page <= 1 ? 1 : page - 1);
    };

    const next = () => {
        setPage(totalPage === page ? page : page + 1);
    };

    useEffect(() => {
        dispatch(setSideBarValue({ value: [0, 0, 1, 0, 0, 0], showSidebar: true }));
        dispatch(getAllDisease(page));
    }, [dispatch, page]);

    return (
        <div className="mt-4 mr-3 mb-8">
            <div className="mb-4 font-serif font-bold text-xl text-shadow-xl text-white">DISEASE LIST</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-center">
                {diseases.data.map((disease) => {
                    return <DiseaseListItem key={disease._id} id={disease._id} diseaseName={disease.name} dnaSequence={disease["dna-sequence"]} />;
                })}
            </div>
            <div className="flex mt-8 justify-center gap-3">
                <button className="px-3 py-1 bg-blue-300 hover:bg-blue-400 rounded-md" onClick={previous}>
                    Prev
                </button>
                <p className="text-md mx-1">
                    {page} / {totalPage}
                </p>
                <button className="px-3 py-1 bg-blue-300 hover:bg-blue-400 rounded-md" onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default DiseaseList;
