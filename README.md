# Web Les Privat Ungaran (situs statis)

Semua isi web (nomor WA, alamat, angka, pengumuman, lowongan, galeri, FAQ) ada di **satu file: `data/site.js`**.
Tanda **CONTOH** = data dummy, ganti dengan datamu.

## Cara mengganti isi
1. Buka `data/site.js` dengan Notepad / VS Code.
2. Ubah teks di antara tanda kutip `' '`. Jangan hapus koma di ujung baris.
3. Simpan, lalu muat ulang halaman di browser.

| Yang ingin diubah | Bagian di `data/site.js` |
|---|---|
| Nomor WhatsApp (WAJIB) | `wa` (awali 62, tanpa + dan spasi) dan `nomorTampil` |
| Alamat, jam, peta, sosmed | `alamat`, `jamLayanan`, `petaUrl`, `sosmed` |
| Angka 150 murid, 50 tentor, 2019 | `murid`, `tentor`, `sejak` |
| Legalitas | `legalitas` |
| Pengumuman baru | `pengumuman`: salin satu blok `{ ... }`, ganti isinya |
| Lowongan tentor | `lowongan`: ubah `status` jadi `'Ditutup'` bila sudah penuh |
| Foto galeri | taruh foto di `assets/img/galeri/`, ubah nama file di `galeri` |
| Foto tim | `assets/img/tim/` dan bagian `tim` |
| Testimoni | `testimoni.tampilkan` (jangan aktifkan sebelum ada testimoni asli) |

Tips foto: kecilkan dulu (lebar sekitar 1200 px, format JPG) supaya web cepat dibuka di HP.
Ganti nama file di `galeri` dari `.svg` menjadi `.jpg`.

## Pasang di GitHub Pages (untuk tes)
1. Buat repository baru di GitHub, unggah **seluruh isi folder ini** (bukan folder induknya).
2. Settings, Pages, Source: *Deploy from a branch*, pilih `main` dan `/ (root)`.
3. Tunggu 1-2 menit, alamatnya `https://namakamu.github.io/namarepo/`.

## Pasang di domain lesprivatungaran.my.id (cPanel)
1. Tambahkan domain sebagai Addon Domain, lalu aktifkan SSL (AutoSSL).
2. Unggah seluruh isi folder ke folder domain tersebut (mis. `public_html`).

Catatan: `sitemap.xml` dan `robots.txt` memakai alamat `https://lesprivatungaran.my.id`. Ubah bila domain berbeda.

## Catatan
- Formulir tidak menyimpan data di web ini. Setelah diperiksa, WhatsApp terbuka dengan pesan yang sudah tertata dan kode referensi (M-... untuk murid, T-... untuk tentor).
- Foto dan nama murid hanya ditampilkan dengan izin orang tua.
- Huruf (Fredoka, Caveat, Plus Jakarta Sans) dimuat dari Google Fonts, jadi perlu internet.


## Penyempurnaan UI & FAQ
- FAQ kini dikelompokkan menjadi 5 kategori dengan 25 pertanyaan.
- Informasi biaya pendaftaran, pembayaran, dan durasi sesi yang belum terkonfirmasi diarahkan untuk dikonfirmasi melalui WhatsApp. Website tidak menampilkan promo yang sedang tidak berlaku.
- Tampilan dirapikan untuk layar ponsel: navigasi, kartu, formulir, galeri, FAQ, tombol WhatsApp, dan jarak antarbagian.
- Identitas warna hijau-kuning dan struktur HTML/CSS/JavaScript asli tetap dipertahankan.
- Semua data bisnis yang bertanda CONTOH tetap perlu diganti dengan informasi resmi sebelum situs dipublikasikan.

## Formulir pendaftaran
- Pilihan di formulir (kecamatan, tujuan belajar, sumber info, status tentor, aturan keselamatan anak) ada di `data/site.js`.
- Di layar HP formulir tampil bertahap (3 langkah), di desktop tampil sekaligus.
- Seluruh 19 kecamatan Kabupaten Semarang ada di `kecamatan`. Pastikan daftar `area` (area layanan) sesuai dengan yang benar-benar kamu layani.
- Aturan keselamatan anak (`aturanTentor`) hanyalah contoh. Sesuaikan dengan aturan usahamu.

## Rekap otomatis ke Google Sheet (opsional)
Tujuannya agar setiap pendaftar tercatat rapi di spreadsheet, tidak hanya di chat WhatsApp.
1. Buat Google Sheet baru, lalu buka Extensions, Apps Script.
2. Hapus isi bawaan, tempel isi file `apps-script/rekap.gs`, simpan.
3. Deploy, New deployment, jenis *Web app*. Execute as: *Me*. Who has access: *Anyone*. Salin URL yang berakhiran `/exec`.
4. Tempel URL itu di `data/site.js` pada `rekap: { url: '...' }`.
5. Coba kirim satu pendaftaran. Sheet "Murid" dan "Tentor" terbentuk otomatis.

Catatan: URL itu bisa dipanggil siapa saja yang mengetahuinya, jadi anggap Sheet sebagai catatan bantu dan WhatsApp sebagai sumber utama. Jangan taruh data sensitif (KTP, dokumen) di formulir. Saat rekap aktif, teks di halaman Daftar otomatis berubah menjadi "data juga dicatat admin".
