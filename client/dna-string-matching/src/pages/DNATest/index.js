import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSideBarValue } from "../../reducer/sideBarReducer";
import readFile from "../../utils/readfile";
import formatDate from "../../utils/formatDate";
import { dnaTest } from "../../api";

const DNATest = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [diseaseName, setDiseaseName] = useState("");
    const [file, setFile] = useState("");
    let dnaSequence = "";
    let [testResult, setTesResult] = useState({});

    useEffect(() => {
        dispatch(setSideBarValue({ value: [0, 0, 0, 1, 0, 0], showSidebar: true }));
    });

    const handleSubmit = () => {
        dnaTest({ username: username, "disease-name": diseaseName, "dna-sequence": dnaSequence })
            .then((result) => {
                setTesResult(result.data.data);
                alert(result.data.message);
                setUsername("");
                setDiseaseName("");
                setFile("");
            })
            .catch((error) => {
                alert(`Error: ${error.response.data.message}`);
            });
    };

    return (
        <div className="pt-4 h-fit w-full mb-8">
            <div className="mb-4 font-serif font-bold text-xl text-shadow-xl text-white">DNA TEST</div>
            <div className="mt-10 flex flex-col gap-4 items-center justify-center">
                <div className="w-[80%] h-fit bg-white rounded-lg">
                    <div className="md:flex">
                        <div className="w-full">
                            <div className="p-4 border-b-2 border-slate-300">
                                <span className="text-serif text-lg font-bold text-slate-800">Uji DNA</span>
                            </div>

                            <div className="p-3">
                                <div className="mb-2">
                                    <label htmlFor="nama-penyakit" className="text-sm text-serif">
                                        Nama Pengguna
                                    </label>
                                    <input type="text" id="nama-penyakit" value={username} onChange={(e) => setUsername(e.target.value)} className="h-12 px-3 w-full border-gray-400 border rounded focus:outline-none focus:border-gray-500" />
                                    <p className={`${username ? "hidden" : ""} text-red-700`}>Please fill out this field!</p>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="nama-penyakit" className="text-sm text-serif">
                                        Prediksi Penyakit
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
                                            onChange={(e) => setFile(e.target.files[0])}
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
                                        <p className={`${file ? "hidden" : ""} text-red-700`}>Please fill out this field!</p>
                                        <span>Accepted file type:.txt only</span>
                                    </div>
                                </div>

                                <div className="mt-3 text-center pb-3">
                                    <button
                                        className="w-full h-12 text-lg max-w-[sm] bg-blue-600 rounded text-white hover:bg-blue-700"
                                        onClick={(e) => {
                                            if (username && diseaseName && file) {
                                                readFile(file)
                                                    .then((result) => {
                                                        dnaSequence = result;
                                                        handleSubmit();
                                                    })
                                                    .catch((error) => {
                                                        console.log(error);
                                                    });
                                            }
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 w-[80%] h-fit bg-white rounded-lg overflow-hidden text-center">
                    <div className="pb-2 text-serif text-lg font-bold text-slate-800 border-b-2 border-slate-300 mb-3">Hasil Uji</div>
                    <div className={`text-md text-serif ${testResult ? (testResult["percentage-of-similarity"] >= 80 ? "text-red-600" : "text-green-600") : ""}`}>
                        {testResult.username ? `${formatDate(new Date(testResult.createdAt))} - ${testResult.username} - ${testResult["disease-name"]} - ${testResult["percentage-of-similarity"].toFixed(2)}% - ${testResult.status}` : " "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DNATest;
