# DNA STRING MATCHING

**DNA STRING MATCHING** adalah aplikasi web yang bisa digunakan untuk mencocokkan sequence DNA yang dikirimkan oleh pengguna dengan sequence DNA pengidentifikasi penyakit yang berada di database. Jika segmen DNA yang dikirimkan cocok dengan sequence DNA yang berada di database, sampel DNA akan ditandai sebagai positif, dan sebaliknya. Riwayat pencocokan sequence DNA (uji DNA) akan disimpan ke dalam database sehingga pengguna bisa melihat kembali hasil pengujian DNA tersebut.

## FITUR - FITUR APLIKASI

-   Aplikasi dapat menerima input penyakit baru berupa nama penyakit dan sequence DNA-nya (dan dimasukkan ke dalam database).

    -   Implementasi input sequence DNA dalam bentuk file.
    -   Dilakukan sanitasi input menggunakan regex untuk memastikan bahwa masukan merupakan sequence DNA yang valid (tidak boleh ada huruf kecil, tidak boleh ada huruf selain AGCT, dan tidak ada spasi).

-   Aplikasi dapat menampilkan list nama penyakit dan sequence DNA-nya.
-   Aplikasi dapat mengubah dan menghapus nama penyakit dan sequence DNA-nya.
-   Aplikasi dapat memprediksi seseorang menderita penyakit tertentu berdasarkan sequence DNA-nya.

    -   Tes DNA dilakukan dengan menerima input nama pengguna, sequence DNA pengguna, dan nama penyakit yang diuji. Asumsi sequence DNA pengguna > sequence DNA penyakit.
    -   Dilakukan sanitasi input menggunakan regex untuk memastikan bahwa masukan merupakan sequence DNA yang valid (tidak boleh ada huruf kecil, tidak boleh ada huruf selain AGCT, tidak ada spasi, dll).
    -   Pencocokan sequence DNA dilakukan dengan menggunakan algoritma string matching.
    -   Hasil dari tes DNA berupa tanggal tes, nama pengguna, nama penyakit yang diuji, dan status, serta presentase kemiripan DNA hasil tes. Contoh: 1 April 2022 - Robert - HIV - 75% - False. Kemiripan DNA hasil tes dihitung dengan menggunakan algoritma LCS (Longest Common Subsequence).
    -   Semua komponen hasil tes ini dapat ditampilkan pada halaman web dan disimpan pada sebuah tabel database.

-   Aplikasi memiliki halaman yang menampilkan urutan hasil prediksi dengan kolom pencarian di dalamnya. Kolom pencarian bekerja sebagai filter dalam menampilkan hasil.
    -   Kolom pencarian dapat menerima masukan dengan struktur: \<tanggal_prediksi\>\<spasi\>\<nama_penyakit\>, contoh "13 April 2022 HIV". Ada tiga format penanggalan yaitu, \<tanggal\>-\<bulan\>-\<tahun\>, \<tanggal\>/\<bulan\>/\<tahun\>,
        \<tanggal\>\<spasi\>\<nama bulan\>\<spasi\>\<tahun\>
    -   Kolom pencarian dapat menerima masukan hanya tanggal ataupun hanya nama penyakit. Fitur ini diimplementasikan menggunakan regex.

## CARA MENGINSTAL DAN MENJALANKAN APLIKASI

1. Instal Node.js
2. Instal MongoDB
3. Buat database dengan nama "dna-string-matching".
4. Unduh project dna-string-matching di github, lalu extract project tersebut.
5. Buka terminal, lalu ubah direktori ke server dan jalankan perintah `npm install` untuk menginstal seluruh <i>dependencies</i>-nya. Setelah selesai, jalankan perintah `npm start` atau `npm run start` untuk mengaktifkan server.
6. Buka terminal lain, lalu ubah direktori ke client/dna-string-matcing dan jalankan perintah `npm install` untuk menginstal seluruh <i>dependencies</i>-nya. Setelah selesai, jalankan perintah `npm start` untuk menampilkan tampilan web browser di sisi client.

## CARA MENGGUNAKAN APLIKASI

### Menambahkan Penyakit Baru

1. Masuk ke halaman `Add New Disease`.
2. Masukkan nama penyakit dan sequence dna-nya (sequence dna ditulis ke dalam file dengan ekstensi .txt) lalu tekan `save` untuk menyimpan data penyakit tersebut ke database. Pastikan sequence dna hanya terdiri dari karakter "AGCT".

### Melihat Daftar Penyakit yang Ada

1. Masuk ke halaman `Disease List`.
2. Klik `view detail` pada penyakit tertentu untuk melihat keseluruhan sequence DNA penyakit tersebut.

### Mengubah dan Menghapus Penyakit

1. Masuk ke halaman `Disease List`.
2. Klik `view detail` pada penyakit yang ingin diubah atau dihapus.
3. Klik `Edit` untuk mengubah data penyakit dan klik `hapus` untuk menghapus penyakit.

### Melakukan Tes DNA

1. Masuk ke halaman `DNA Test`.
2. Masukkan nama pengguna, nama penyakit yang ingin diperiksa, dan sequence dna pengguna (sequence dna ditulis ke dalam file dengan ekstensi txt) lalu tekan `submit`. Pastikan sequence dna hanya terdiri dari karakter "AGCT".
3. Jika proses pencocokan dna sudah selesai, maka aplikasi akan menampilkan hasil tes dna-nya.

### Melihat Riwayat Tes DNA

1. Masuk ke halaman `History`.
2. Masukan tanggal dan nama penyakit, atau tanggal, atau nama penyakit pada field yang disediakan untuk mencari nama penyakit dan/atau tanggal yang diinginkan.
