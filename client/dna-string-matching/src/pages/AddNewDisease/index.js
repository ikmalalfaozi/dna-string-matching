import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setSideBarValue } from "../../reducer/sideBarReducer";
import readFile from "../../utils/readfile";
import { getDiseaseById, postDisease, updateDisease } from "../../api";

const AddNewDisease = () => {
    const dispatch = useDispatch();
    const [diseaseName, setDiseaseName] = useState("");
    const [file, setFile] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const dnaSequence = useRef("");

    useEffect(() => {
        dispatch(setSideBarValue({ value: [0, 1, 0, 0, 0, 0], showSidebar: true }));
        if (params.id) {
            setIsUpdate(true);
            getDiseaseById(params.id)
                .then((data) => {
                    setDiseaseName(data.name);
                    dnaSequence.current = data["dna-sequence"];
                })
                .catch((error) => console.log(error));
        }
    }, [dispatch, params.id]);

    const handleSubmit = () => {
        if (isUpdate) {
            updateDisease(params.id, { name: diseaseName, "dna-sequence": dnaSequence.current })
                .then(() => navigate(`../disease-list/${params.id}`, { replace: true }))
                .catch((error) => alert(`Error: ${error.response.data.message}`));
        } else {
            postDisease(params.id, { name: diseaseName, "dna-sequence": dnaSequence.current })
                .then((result) => {
                    alert(result.data.message);
                    setDiseaseName("");
                    setFile("");
                })
                .catch((error) => alert(`Error: ${error.response.data.message}`));
        }
    };

    return (
        <div className="pt-4 h-fit w-full mb-8">
            <div className="mb-4 font-serif font-bold text-xl text-shadow-xl text-white">ADD NEW DISEASE</div>
            <div className="mt-10 flex items-center justify-center">
                <div className="w-[80%] h-fit bg-white rounded-lg">
                    <div className="md:flex">
                        <div className="w-full">
                            <div className="p-4 border-b-2">
                                <span className="text-serif text-lg font-bold text-slate-800">Tambahkan Penyakit</span>
                            </div>

                            <div className="p-3">
                                <div className="mb-2">
                                    <label htmlFor="nama-penyakit" className="text-sm text-serif">
                                        Nama Penyakit
                                    </label>
                                    <input
                                        type="text"
                                        id="nama-penyakit"
                                        value={diseaseName}
                                        onChange={(e) => setDiseaseName(e.target.value)}
                                        className="h-12 px-3 w-full border-gray-400 border rounded focus:outline-none focus:border-gray-500"
                                    />
                                    <p className={`${diseaseName ? "hidden" : ""} text-red-700`}>Please fill out this field!</p>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="sequence-dna" className="text-sm text-serif">
                                        Sequence DNA
                                    </label>
                                    <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-300 bg-white flex justify-center items-center hover:cursor-pointer">
                                        <div className="absolute">
                                            <div className="flex flex-col items-center ">
                                                <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
                                                <span className="block text-gray-400 font-normal">Attach you files here</span>
                                                <span className="block text-gray-400 font-normal">or</span>

                                                <span className="block text-blue-400 font-normal">Browse files</span>
                                                <span className="mt-3">{file ? file.name : ""}</span>
                                            </div>
                                        </div>
                                        <input
                                            type="file"
                                            accept=".txt"
                                            id="sequence-dna"
                                            onChange={(e) => {
                                                setFile(e.target.files[0]);
                                            }}
                                            onClick={(e) => {
                                                e.target.value = null;
                                            }}
                                            onDrop={(e) => {
                                                e.target.value = null;
                                            }}
                                            className="h-full w-full opacity-0"
                                            name=""
                                        />
                                    </div>
                                    <div className="flex-col justify-between items-center text-gray-400">
                                        <p className={`${file || isUpdate ? "hidden" : ""} text-red-700`}>Please fill out this field!</p>
                                        <span>Accepted file type:.txt only</span>
                                    </div>
                                </div>

                                <div className="mt-3 text-center pb-3">
                                    <button
                                        className="w-full h-12 text-lg max-w-[sm] bg-blue-600 rounded text-white hover:bg-blue-700"
                                        onClick={() => {
                                            if (diseaseName && file) {
                                                readFile(file)
                                                    .then((result) => {
                                                        dnaSequence.current = result;
                                                        handleSubmit();
                                                    })
                                                    .catch((error) => {
                                                        console.log(error);
                                                    });
                                            } else if (isUpdate && diseaseName) {
                                                handleSubmit();
                                            }
                                        }}
                                    >
                                        {isUpdate ? "Update" : "Save"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewDisease;
