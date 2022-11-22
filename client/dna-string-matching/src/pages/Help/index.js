import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSideBarValue } from "../../reducer/sideBarReducer";

const Help = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSideBarValue({ value: [0, 0, 0, 0, 0, 1], showSidebar: true }));
    });
    return (
        <div className="mt-4 mb-8 mr-3">
            <div className="mb-4 font-serif font-bold text-xl text-shadow-xl text-white">HELP</div>
            <div className="flex flex-wrap text-serif text-white">
                <div className="flex flex-col w-full p-4 sm:p-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div className="flex">
                        <p className="text-lg font-bold mb-3">Fitur-Fitur Aplikasi</p>
                    </div>
                    <div className="sm:text-justify">
                        <ol className="ml-2 list-decimal">
                            <li>
                                Aplikasi dapat menerima input penyakit baru berupa nama penyakit dan sequence DNA-nya pada halaman <span className="font-semibold">Add Disease List</span>.
                                <ul className="ml-4 list-disc">
                                    <li>
                                        Implementasi <i>input sequence</i> DNA dalam bentuk file txt.
                                    </li>
                                    <li>
                                        Dilakukan sanitasi <i>input</i> untuk memastikan bahwa masukan merupakan <i>sequence</i> DNA yang valid (tidak boleh ada huruf kecil, tidak boleh ada karakter selain AGCT, dan tidak ada spasi maupun
                                        enter).
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Aplikasi dapat menampilkan list nama penyakit dan <i>sequence</i> DNA-nya pada halaman <span className="font-semibold">Disease List</span>.
                            </li>
                            <li>
                                Aplikasi dapat memprediksi seseorang menderita penyakit tertentu berdasarkan <i>sequence</i> DNA-nya pada halaman <span className="font-semibold">DNA Test</span>.
                                <ul className="ml-4 list-disc">
                                    <li>
                                        Tes DNA dilakukan dengan menerima <i>input</i> nama pengguna, <i>sequence</i> DNA pengguna, dan nama penyakit yang diuji. Asumsi <i>sequence</i> DNA pengguna {">"} <i>sequence</i> DNA penyakit.
                                    </li>
                                    <li>
                                        Dilakukan sanitasi <i>input</i> untuk memastikan bahwa masukan merupakan <i>sequence</i> DNA yang valid (tidak boleh ada huruf kecil, tidak boleh ada karakter selain AGCT, dan tidak ada spasi maupun
                                        enter).
                                    </li>
                                    <li>
                                        Hasil dari tes DNA berupa tanggal tes, nama pengguna, nama penyakit yang diuji, dan status, serta persentase kemiripan DNA hasil tes.{" "}
                                        <span className="font-semibold">Contoh: 1 April 2022 - Robert - HIV - 75% - False</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Aplikasi dapat menampilkan urutan hasil prediksi dengan kolom pencarian di dalamnya pada halaman <span className="font-semibold">History</span>.
                                <ul className="ml-4 list-disc">
                                    <li>
                                        Kolom pencarian dapat menerima masukan dengan struktur:
                                        {"<tanggal_prediksi><spasi><nama_penyakit>"}, contoh “13 April 2022 HIV” atau “13/04/2022 HIV” atau “13-04-2022 HIV”.
                                    </li>
                                    <li>Kolom pencarian dapat menerima masukan hanya tanggal ataupun hanya nama penyakit.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
