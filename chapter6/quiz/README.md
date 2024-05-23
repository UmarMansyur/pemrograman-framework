1. Umar adalah seorang programmer yang sedang menekuni bidang BACK END. Setelah dia lama belajar, dia menemukan kasus dimana dia kebingunan dalam membuat sebuah API. Umar meminta bantuanmu untuk membuatkan API tersebut. 

---

### Quiz
| NO | Kode Transaksi | Nama Customer | Total Pembelian | Detail Pembelian |
|----|----------------|---------------|-----------------|------------------|
| 1  | 1              | Budi          | 100000          | Baju, Celana     |
| 2  | 2              | Andi          | 200000          | Baju, Celana, Sepatu, Topi |
| 3  | 3              | Caca          | 300000          | Baju, Celana, Sepatu, Topi, Kacamata |
| 4  | 4              | Dedi          | 400000          | Baju, Celana, Sepatu, Topi, Kacamata, Jam |
| 5  | 5              | Eko           | 500000          | Baju, Celana, Sepatu, Topi, Kacamata, Jam, Tas |
| 6  | 6              | Fajar         | 600000          | Baju, Celana, Sepatu, Topi, Kacamata, Jam, Tas, Dompet |
| 7  | 7              | Gita          | 700000          | Baju, Celana, Sepatu, Topi, Kacamata, Jam, Tas, Dompet, Koper |


| NO | Kode Product | Nama Product | Harga | Stok |
|----|--------------|--------------|-------|------|
| 1  | 1            | Baju         | 50000 | 10   |
| 2  | 2            | Celana       | 50000 | 19   |
| 3  | 3            | Sepatu       | 50000 | 76   |
| 4  | 4            | Topi         | 50000 | 8    |
| 5  | 5            | Kacamata     | 50000 | 5    |
| 6  | 6            | Jam          | 50000 | 3    |
| 7  | 7            | Tas          | 50000 | 14   |
| 8  | 8            | Dompet       | 50000 | 7    |
| 9  | 9            | Koper        | 50000 | 2    |
| 10 | 10           | Kemeja       | 50000 | 1    |

| NO | Nama Customer | Alamat | Jenis Kelamin | Umur |
|----|---------------|--------|---------------|------|
| 1  | Budi          | Jl. A  | Laki-laki     | 20   |
| 2  | Andi          | Jl. B  | Laki-laki     | 21   |
| 3  | Caca          | Jl. C  | Perempuan     | 22   |
| 4  | Dedi          | Jl. D  | Laki-laki     | 23   |
| 5  | Eko           | Jl. E  | Laki-laki     | 24   |
| 6  | Fajar         | Jl. F  | Laki-laki     | 25   |
| 7  | Gita          | Jl. G  | Perempuan     | 26   |


Intruksi:
#### Ubahlah data di atas menjadi database dengan menggunakan Prisma dengan database MariaDB.

1. Dari database yang telah dibuat, tersebut umar ingin membuat API yang bisa menambah data product, menghapus data product, mengubah data product, dan menampilkan data product.
2. Setelah data product berhasil dibuat, Umar ingin mencatat transaksi yang dilakukan oleh customer. Umar ingin membuat API yang bisa menambah data transaksi, menghapus data transaksi, dan mengubah data transaksi. Setiap transaksi yang dilakukan oleh customer akan berpengaruh pada stok product. Jika customer membeli product, maka stok product akan berkurang. Jika customer membatalkan transaksi, maka stok product akan bertambah.
3. Umar ingin mengetahui berapa jumlah pembelian yang dilakukan oleh customer. Kemudian dia akan membuat api dengan endpoint `/total-pembelian` yang akan mengembalikan data berupa JSON yang berisi nama customer dan total pembelian yang dilakukan oleh customer tersebut.
4. Umar juga ingin menampilkan data product apa yang paling sering dibeli, berapa jumlah frekuensi yang dibeli, serta berapa total dari product tersebut. Kemudian dia akan membuat api dengan endpoint `/product-favorit` yang akan mengembalikan data berupa JSON yang berisi nama product, jumlah frekuensi pembelian, dan total dari product tersebut.
5. Umar juga ingin menampilkan 3 data customer yang paling banyak melakukan pembelian.
6. Karena stok product terbatas, umar ingin menampilkan product yang berdasarkan product yang telah dipilih oleh customer. Jika stok product kurang dari 5, maka product tersebut akan ditampilkan dalam api dengan endpoint `/product-kurang`.
7. Karena aplikasi yang akan dikembangkan memiliki fitur dashboard maka Umar membutuhkan satu endpoint yang bisa mengembalikan data sebagai berikut:

| Total Pembelian | Total Product | Total Customer | Total Product Kurang dari 5 | Product Favorit |
|-----------------|---------------|----------------|-----------------------------|------------------|
| Nilai berdasarkan database | Nilai berdasarkan database | Nilai berdasarkan database | Nilai berdasarkan database | Nilai berdasarkan database |

8. Tampilkan rata-rata usia pembeli yang melakukan transaksi.
9. Customer berjenis kelamin apa yang paling banyak melakukan transaksi. Tampilkan data berupa nama jenis kelamin serta frekuensi pembelian.

| Jenis Kelamin | Frekuensi Pembelian |
|---------------|---------------------|
| Nilai berdasarkan database | Nilai berdasarkan database |

10. Kumpulkan tugas yang telah dibuat ke dalam sebuah repository github dengan nama `chapter6-quiz`. Kemudian berikan link repository github tersebut kepada Umar.


### Kriteria Penilaian
1. Struktur folder yang rapi dan jelas.
2. Kode yang dibuat mudah dipahami.
3. Menggunakan Prisma sebagai ORM.
4. Menggunakan MariaDB sebagai database.
5. API yang dibuat sesuai dengan instruksi yang diberikan.

### Waktu pengerjaan
Anda boleh mengerjakan quiz ini mulai dari sekarang sampai besok jam 15.00.

### Penyerahan
1. Link github letakkan di google spreadsheet yang telah disediakan.

### Dari Umar
Umar dengan senang hati akan membantu anda jika anda mengalami kesulitan dalam mengerjakan quiz ini. Umar akan memberikan bantuan berupa hint dan arahan yang diperlukan. Umar juga akan memberikan penjelasan jika anda mengalami kesulitan dalam mengerjakan quiz ini. Namun perlu diingat, Umar tidak akan memberikan jawaban dari quiz ini. Umar hanya akan membantu anda dalam menyelesaikan quiz ini. Anda tidak perlu sungkan untuk bertanya kepada Umar jika anda mengalami kesulitan dalam mengerjakan quiz ini.

---
```
Anda belajar disini mengikuti arahan yang diberikan. Anda jangan membuka project lain, fokus dong! Saya juga punya project lain juga kok. Jadi, fokus ya!
```

