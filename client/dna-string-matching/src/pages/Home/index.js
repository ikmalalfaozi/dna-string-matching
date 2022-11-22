import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSideBarValue } from "../../reducer/sideBarReducer";
import { DashboardBackground1, DashboardBackground2, DashboardBackground3, DNASequence } from "../../assets";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSideBarValue({ value: [1, 0, 0, 0, 0, 0], showSidebar: true }));
    });
    return (
        <div className="mt-4">
            <div className="mb-4 font-serif font-bold text-xl text-shadow-xl text-white">DASHBOARD</div>
            <div className="flex-col flex-wrap mr-3">
                <div className="mb-4 flex-col md:block sm:p-4 rounded-lg bg-no-repeat bg-cover shadow-lg shadow-gray-500" style={{ backgroundImage: `url(${DashboardBackground1})` }}>
                    <div className="mb-4 mx-auto max-w-[100%] max-h-[200px] sm:mb-0 sm:ml-3 sm:max-w-[200px] sm:float-right rounded-t-md sm:rounded-md overflow-hidden">
                        <img src={DNASequence} alt="dna-sequence" className="object-cover" />
                    </div>
                    <p className="px-4 pb-4 text-sm sm:p-0 md:text-base  lg:text-lg text-justify text-slate-900 font-medium">
                        Manusia umumnya memiliki 46 kromosom di dalam setiap selnya. Kromosom-kromosom tersebut tersusun dari DNA (deoxyribonucleic acid) atau asam deoksiribonukleat. DNA tersusun atas dua zat basa purin, yaitu Adenin (A)
                        dan Guanin (G), serta dua zat basa pirimidin, yaitu sitosin (C) dan timin (T). Masing-masing purin akan berikatan dengan satu pirimidin. DNA merupakan materi genetik yang menentukan sifat dan karakteristik seseorang,
                        seperti warna kulit, mata, rambut, dan bentuk wajah. Ketika seseorang memiliki kelainan genetik atau DNA, misalnya karena penyakit keturunan atau karena faktor lainnya, ia bisa mengalami penyakit tertentu. Oleh
                        karena itu, tes DNA penting untuk dilakukan untuk mengetahui struktur genetik di dalam tubuh seseorang serta mendeteksi kelainan genetik. Ada berbagai jenis tes DNA yang dapat dilakukan, seperti uji pra implantasi,
                        uji pra kelahiran, uji pembawa atau carrier testing, uji forensik, dan DNA sequence analysis.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-3">
                    <div className="text-sm md:text-base  lg:text-lg text-justify text-slate-900 p-3 bg-no-repeat bg-cover rounded-md shadow-lg shadow-gray-500" style={{ backgroundImage: `url(${DashboardBackground2})` }}>
                        <p className="font-medium">
                            Salah satu jenis tes DNA yang sangat berkaitan dengan dunia bioinformatika adalah DNA sequence analysis. DNA sequence analysis adalah sebuah cara yang dapat digunakan untuk memprediksi berbagai macam penyakit
                            yang tersimpan pada database berdasarkan urutan sekuens DNA-nya. Sebuah sekuens DNA adalah suatu representasi string of nucleotides yang disimpan pada suatu rantai DNA, sebagai contoh: ATTCGTAACTAGTAAGTTA.
                        </p>
                    </div>
                    <div className="text-sm md:text-base  lg:text-lg text-justify text-slate-900 p-3 bg-no-repeat bg-cover rounded-md shadow-lg shadow-gray-500" style={{ backgroundImage: `url(${DashboardBackground3})` }}>
                        <p className="font-medium">
                            Teknik pattern matching memegang peranan penting untuk dapat menganalisis sekuens DNA yang sangat panjang dalam waktu singkat. Oleh karena itu, kami menyediakan suatu aplikasi web berupa DNA Sequence Matching
                            yang menerapkan algoritma String Matching dan Regular Expression untuk membantu penyedia jasa kesehatan dalam memprediksi penyakit pasien. Hasil prediksi juga dapat ditampilkan dalam tabel dan dilengkapi dengan
                            kolom pencarian untuk membantu dalam melakukan filtering dan pencarian.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
