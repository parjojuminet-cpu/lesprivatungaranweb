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
| Bar promo kuning di atas | `promo` |
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
- Formulir tidak menyimpan data. Saat klik kirim, WhatsApp terbuka dengan pesan yang sudah tertata.
- Foto dan nama murid hanya ditampilkan dengan izin orang tua.
- Huruf (Fredoka, Caveat, Plus Jakarta Sans) dimuat dari Google Fonts, jadi perlu internet.
