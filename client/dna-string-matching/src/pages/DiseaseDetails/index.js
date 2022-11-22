import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { setSideBarValue } from "../../reducer/sideBarReducer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import moment from "moment";
import { deleteDiease, getDiseaseById } from "../../api";

const DiseaseDetails = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        dispatch(setSideBarValue({ value: [0, 0, 1, 0, 0, 0], showSidebar: true }));
        getDiseaseById(params.id)
            .then((data) => {
                setData(data);
            })
            .catch((err) => console.log(err));
    }, [params, dispatch]);

    const confirmDelete = (id) => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Apakah Anda yakin akan menghapus post ini?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        deleteDiease(id)
                            .then(() => {
                                navigate(-1);
                            })
                            .catch((error) => {
                                alert(`Error: ${error.response.data.message}`);
                            });
                    },
                },
                {
                    label: "No",
                },
            ],
        });
    };

    return (
        <div className="mt-4 mr-3 mb-8">
            <div className="mb-4 font-sans font-bold text-xl text-shadow-xl text-white">DNA SEQUENCE DETAILS</div>
            <div className="flex gap-3 justify-between  text-white font-medium">
                <button className="px-3 py-1 bg-blue-400 hover:bg-blue-500 rounded-md" onClick={() => navigate(-1)}>
                    Kembali
                </button>
                <div className="flex gap-2">
                    <button
                        className="px-3 py-1 bg-green-400 hover:bg-green-500 rounded-md"
                        onClick={() => {
                            navigate(`../add-new-disease/${params.id}`, { replace: true });
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="px-3 py-1 bg-red-400 hover:bg-red-500 rounded-md"
                        onClick={() => {
                            confirmDelete(params.id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="mt-3 p-4 sm:p-8 font-sans text-slate-800 bg-gradient-to-br from-slate-200 to-blue-400 rounded-md">
                <div className="font-bold">{data ? data.name : ""}</div>
                <div className="font-extralight font-base mb-3">{data ? `updated ${moment(data.updatedAt).fromNow()}` : ""}</div>
                <div className="break-all">{data ? data["dna-sequence"] : ""}</div>
            </div>
        </div>
    );
};

export default DiseaseDetails;
