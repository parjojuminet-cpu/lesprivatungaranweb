/* =====================================================================
   SEMUA ISI WEB ADA DI FILE INI.
   Cukup ubah teks/angka di bawah, simpan, lalu muat ulang halaman.
   Semua yang bertanda "CONTOH" hanyalah data dummy, silakan ganti.
   Jangan hapus tanda kutip (' ') dan koma (,) di akhir baris.
   ===================================================================== */
window.SITE = {

  /* ---------- IDENTITAS ---------- */
  nama: 'Les Privat Ungaran',
  domain: 'lesprivatungaran.my.id',
  // Nomor WhatsApp: tanpa +, tanpa spasi, awali 62 (bukan 0)
  wa: '6285727707500',
  nomorTampil: '0857-2770-7500',
  email: '',   // isi bila punya email resmi, contoh: 'halo@lesprivatungaran.my.id' (kosong = tidak ditampilkan)
  alamat: 'Ungaran Barat, Kabupaten Semarang, Jawa Tengah',   // tambahkan nama jalan bila ingin lebih lengkap
  jamLayanan: 'Senin sampai Sabtu, 08.00 sampai 20.00 WIB',                     // CONTOH
  // Peta: ganti "Ungaran" dengan alamat lengkapmu, atau tempel link embed dari Google Maps
  petaUrl: 'https://www.google.com/maps?q=Ungaran+Barat,+Kabupaten+Semarang&output=embed',
  sosmed: {                                       // kosongkan '' jika tidak punya
    instagram: 'https://instagram.com/lesprivat_ungaran',
    tiktok: '',
    facebook: '',
    youtube: ''
  },

  /* ---------- ANGKA KEPERCAYAAN ---------- */
  sejak: 2019,
  murid: 150,      // murid aktif
  tentor: 50,

  /* ---------- LAYANAN ---------- */
  area: ['Ungaran Timur', 'Ungaran Barat', 'Bergas', 'Bawen', 'Gunungpati (sekitar)'],   // CONTOH
  jenjang: [
    { nama: 'PAUD & TK',  isi: 'Belajar sambil bermain: mengenal huruf, angka, warna, dan siap masuk SD.', warna: 'kuning' },
    { nama: 'SD',         isi: 'Pendampingan PR, penguatan dasar, calistung, sampai persiapan ujian.', warna: 'hijau' },
    { nama: 'SMP',        isi: 'Matematika, IPA, bahasa, dan persiapan ujian sekolah.', warna: 'biru' },
    { nama: 'SMA',        isi: 'Pendalaman mapel, latihan soal, dan persiapan masuk perguruan tinggi.', warna: 'kuning' }
  ],
  mapel: {
    'Dasar & akademik': ['Calistung', 'Matematika', 'IPA', 'IPS', 'Bahasa Indonesia', 'Fisika', 'Kimia', 'Biologi'],
    'Bahasa':           ['English', 'Bahasa Jawa', 'Bahasa Arab'],
    'Agama':            ['Ngaji Iqro', 'Ngaji Al-Qur\'an', 'Hafalan', 'Fiqih'],
    'Lainnya':          ['Pendampingan PR', 'Persiapan ujian', 'Persiapan masuk SD']
  },

  /* ---------- LEGALITAS (CONTOH, isi dengan data aslimu) ---------- */
  legalitas: [
    { nama: 'Nomor Induk Berusaha (NIB)', nomor: '0000000000000' },
    { nama: 'Izin Lembaga Kursus / Pelatihan', nomor: 'No. 000/XXX/2019' },
    { nama: 'NPWP Usaha', nomor: '00.000.000.0-000.000' }
  ],

  /* ---------- PERJALANAN (halaman Tentang, CONTOH) ---------- */
  perjalanan: [
    { tahun: 2019, isi: 'Mulai dari beberapa murid di sekitar Ungaran.' },
    { tahun: 2021, isi: 'Tim tentor bertambah dan layanan makin rapi dengan jadwal serta absensi.' },
    { tahun: 2023, isi: 'Melayani murid PAUD sampai SMA di beberapa kecamatan.' },
    { tahun: 2026, isi: 'Lebih dari 150 murid aktif dan 50 tentor bergabung.' }
  ],
  tim: [   // CONTOH
    { nama: 'Nama Pendiri',  peran: 'Pendiri & Pengelola', foto: 'assets/img/tim/tim-1.svg' },
    { nama: 'Nama Admin',    peran: 'Admin & Penjadwalan', foto: 'assets/img/tim/tim-2.svg' },
    { nama: 'Nama Koordinator', peran: 'Koordinator Tentor', foto: 'assets/img/tim/tim-3.svg' },
    { nama: 'Nama Tentor',   peran: 'Tentor Unggulan', foto: 'assets/img/tim/tim-4.svg' }
  ],

  /* ---------- FAQ ----------
     {area} dan {mapel} otomatis diisi dari daftar `area` dan `mapel` di atas,
     jadi tidak perlu diubah dua kali. Pastikan setiap jawaban sesuai praktik usahamu. */
  faq: [
    { kategori: 'Informasi umum', t: 'Apa itu Les Privat Ungaran?', j: 'Layanan les privat untuk anak PAUD, TK, SD, SMP, dan SMA di Ungaran dan sekitarnya. Tentor datang ke rumah, dan kami sudah melayani keluarga di sini sejak 2019.' },
    { kategori: 'Informasi umum', t: 'Apakah tentor datang ke rumah?', j: 'Ya. Tentor datang ke rumah sesuai jadwal dan area yang disepakati.' },
    { kategori: 'Informasi umum', t: 'Wilayah mana saja yang dilayani?', j: 'Saat ini kami melayani {area}. Di luar area itu, tanyakan saja lewat WhatsApp, kami cek apakah ada tentor yang bisa datang.' },
    { kategori: 'Informasi umum', t: 'Apakah melayani semua jenjang sekolah?', j: 'Ya, dari PAUD, TK, SD, SMP, sampai SMA. Ceritakan kebutuhan anak saat konsultasi, kami carikan tentor yang sesuai.' },
    { kategori: 'Informasi umum', t: 'Apakah bisa konsultasi sebelum mendaftar?', j: 'Tentu. Hubungi admin lewat WhatsApp dan ceritakan jenjang, mata pelajaran, lokasi, serta kebutuhan belajar anak. Konsultasi tidak mengikat.' },

    { kategori: 'Layanan dan mata pelajaran', t: 'Mata pelajaran apa saja yang tersedia?', j: 'Pilihan kami meliputi {mapel}. Ketersediaan tentor untuk tiap mapel dan area kami konfirmasi saat Anda mendaftar.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah tersedia bimbingan membaca, menulis, dan berhitung?', j: 'Ya, Calistung tersedia untuk anak PAUD, TK, dan kelas awal SD yang masih membangun dasar belajarnya.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah tersedia les mengaji?', j: 'Ya, tersedia ngaji Iqro dan Al-Qur\'an, hafalan, serta Fiqih. Tanyakan ketersediaan tentor di area Anda lewat WhatsApp.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah bisa meminta mata pelajaran di luar daftar?', j: 'Bisa ditanyakan dulu. Admin akan memeriksa apakah ada tentor yang cocok dengan mapel dan jenjang anak.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah pembelajaran disesuaikan dengan kebutuhan anak?', j: 'Ya. Sampaikan target atau kesulitan belajar anak saat konsultasi, supaya bisa dicocokkan dengan tentor dan materinya.' },

    { kategori: 'Pendaftaran dan biaya', t: 'Bagaimana cara mendaftar les privat?', j: 'Buka halaman Daftar, pilih Murid, isi data yang diminta, lalu tekan Kirim lewat WhatsApp. Pesan pendaftaran sudah tersusun, Anda tinggal mengirimnya ke admin.' },
    { kategori: 'Pendaftaran dan biaya', t: 'Berapa biaya les privat?', j: 'Biaya menyesuaikan jenjang, mata pelajaran, lokasi, dan jumlah pertemuan. Admin menjelaskan rinciannya lewat WhatsApp sebelum Anda memutuskan mendaftar.' },
    { kategori: 'Pendaftaran dan biaya', t: 'Apakah ada biaya pendaftaran?', j: 'Admin akan menjelaskan seluruh komponen biaya, termasuk biaya pendaftaran bila ada, saat konsultasi. Tidak ada biaya yang disembunyikan.' },
    { kategori: 'Pendaftaran dan biaya', t: 'Bagaimana cara dan jadwal pembayarannya?', j: 'Cara dan jadwal pembayaran dijelaskan admin saat konsultasi, sebelum les dimulai.' },

    { kategori: 'Tentor dan proses belajar', t: 'Bagaimana tentor dipilih untuk anak saya?', j: 'Kami mencocokkan tentor berdasarkan mata pelajaran, jenjang, dan lokasi. Kebutuhan khusus atau preferensi Anda bisa disampaikan saat konsultasi.' },
    { kategori: 'Tentor dan proses belajar', t: 'Apakah saya bisa meminta pergantian tentor?', j: 'Jika merasa kurang cocok, sampaikan kepada admin. Kami bantu mencarikan solusi, termasuk tentor pengganti bila memungkinkan.' },
    { kategori: 'Tentor dan proses belajar', t: 'Bagaimana orang tua mengetahui kehadiran tentor?', j: 'Setiap pertemuan dicatat lewat absensi tentor, jadi kehadiran dan sesi belajar tercatat.' },
    { kategori: 'Tentor dan proses belajar', t: 'Bagaimana perkembangan belajar anak dilaporkan?', j: 'Perkembangan belajar disampaikan kepada orang tua. Tanyakan kepada admin bentuk dan waktu laporannya saat menyusun program belajar.' },
    { kategori: 'Tentor dan proses belajar', t: 'Apakah orang tua boleh menyampaikan target belajar anak?', j: 'Tentu. Target, materi yang perlu diperkuat, atau kesulitan anak sangat membantu kami memilih tentor dan menyusun cara belajarnya.' },

    { kategori: 'Jadwal dan ketentuan', t: 'Apakah jadwal les bisa disesuaikan?', j: 'Bisa. Hari dan jam dibicarakan bersama admin dan tentor sesuai ketersediaan dan kebutuhan anak.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Berapa kali pertemuan dalam seminggu?', j: 'Menyesuaikan kebutuhan belajar dan kesepakatan. Admin akan membahas pilihan jadwal yang tersedia untuk anak Anda.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Berapa lama durasi setiap pertemuan?', j: 'Durasi disesuaikan dengan jenjang dan kebutuhan anak, dan dijelaskan admin saat konsultasi.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Bagaimana jika anak berhalangan hadir?', j: 'Beri tahu admin sebelum jadwal belajar. Jadwal dapat diatur ulang sesuai ketentuan yang kami jelaskan saat pendaftaran.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Bagaimana jika tentor berhalangan hadir?', j: 'Hubungi admin. Kami bantu mengatur jadwal pengganti sesuai kondisi dan kesepakatan.' }
  ],

  /* ---------- PENGUMUMAN (mading) ----------
     kategori: 'Info' | 'Kompetisi' | 'Prestasi' | 'Jadwal'
     tanggal : TAHUN-BULAN-TANGGAL
     sematkan: true  -> selalu tampil di paling atas
     Tambah pengumuman baru dengan menyalin satu blok { ... }, lalu ganti isinya. */
  pengumuman: [
    { tanggal: '2026-11-20', kategori: 'Kompetisi', sematkan: true,
      judul: 'CONTOH: Lomba mewarnai & cerdas cermat antar murid',
      isi: 'CONTOH. Pendaftaran dibuka sampai akhir bulan. Hubungi admin untuk informasi dan cara mendaftar.' },
    { tanggal: '2026-11-15', kategori: 'Prestasi',
      judul: 'CONTOH: Selamat untuk Murid Terbaik bulan ini!',
      isi: 'CONTOH. Murid terbaik dipilih dari kehadiran, kemajuan belajar, dan semangatnya. Foto dan nama hanya ditampilkan dengan izin orang tua.' },
    { tanggal: '2026-11-10', kategori: 'Jadwal',
      judul: 'CONTOH: Jadwal belajar saat libur semester',
      isi: 'CONTOH. Selama libur semester jadwal les dapat disesuaikan. Silakan konfirmasi ke admin paling lambat 3 hari sebelumnya.' },
    { tanggal: '2026-10-28', kategori: 'Prestasi',
      judul: 'CONTOH: Murid kami juara 1 lomba tingkat kecamatan',
      isi: 'CONTOH. Terima kasih kepada orang tua dan tentor yang mendampingi. Semoga jadi semangat untuk teman-teman lainnya.' },
    { tanggal: '2026-10-20', kategori: 'Info',
      judul: 'CONTOH: Pelatihan tentor baru',
      isi: 'CONTOH. Seluruh tentor mengikuti pembekalan agar cara mengajar tetap seragam dan menyenangkan.' }
  ],

  /* ---------- LOWONGAN TENTOR ----------
     status: 'Dibuka' atau 'Ditutup' (yang ditutup tampil abu-abu)
     area  : nama kecamatan (dipakai untuk filter di halaman Lowongan) */
  lowongan: [
    { judul: 'CONTOH: Tentor Calistung PAUD/TK', area: 'Ungaran Barat', status: 'Dibuka',
      mapel: 'Calistung, Mewarnai',
      syarat: ['Sabar dan suka anak-anak', 'Pendidikan minimal SMA/sederajat', 'Domisili sekitar Ungaran Barat', 'Tersedia sore hari'] },
    { judul: 'CONTOH: Tentor Matematika SD', area: 'Ungaran Timur', status: 'Dibuka',
      mapel: 'Matematika',
      syarat: ['Menguasai materi SD', 'Mahasiswa atau lulusan', 'Komunikatif dengan orang tua murid'] },
    { judul: 'CONTOH: Tentor IPA SMP', area: 'Bergas', status: 'Dibuka',
      mapel: 'IPA',
      syarat: ['Menguasai materi IPA SMP', 'Mahasiswa atau lulusan', 'Punya kendaraan pribadi'] },
    { judul: 'CONTOH: Tentor English SD-SMP', area: 'Bawen', status: 'Dibuka',
      mapel: 'English',
      syarat: ['Lancar berbahasa Inggris dasar', 'Metode mengajar yang menyenangkan', 'Tersedia sore sampai malam'] },
    { judul: 'CONTOH: Tentor Ngaji Iqro/Al-Qur\'an', area: 'Pringapus', status: 'Dibuka',
      mapel: 'Iqro, Al-Qur\'an, Hafalan',
      syarat: ['Bacaan baik dan lancar', 'Berpengalaman mengajar ngaji', 'Berakhlak baik'] },
    { judul: 'CONTOH: Tentor Matematika SMP-SMA', area: 'Ambarawa', status: 'Dibuka',
      mapel: 'Matematika',
      syarat: ['Menguasai materi SMP sampai SMA', 'Mahasiswa atau lulusan eksakta', 'Punya kendaraan pribadi'] },
    { judul: 'CONTOH: Tentor Calistung & Pendampingan PR SD', area: 'Bandungan', status: 'Dibuka',
      mapel: 'Calistung, Pendampingan PR',
      syarat: ['Sabar dan telaten', 'Domisili sekitar Bandungan', 'Tersedia sore hari'] },
    { judul: 'CONTOH: Tentor Bahasa Indonesia SD-SMP', area: 'Tuntang', status: 'Dibuka',
      mapel: 'Bahasa Indonesia',
      syarat: ['Menguasai tata bahasa dan membaca pemahaman', 'Mahasiswa atau lulusan', 'Komunikatif'] },
    { judul: 'CONTOH: Tentor Fisika SMA', area: 'Pabelan', status: 'Dibuka',
      mapel: 'Fisika',
      syarat: ['Menguasai Fisika SMA', 'Mahasiswa atau lulusan eksakta', 'Bersedia latihan soal bersama murid'] },
    { judul: 'CONTOH: Tentor Matematika & IPA SD', area: 'Tengaran', status: 'Dibuka',
      mapel: 'Matematika, IPA',
      syarat: ['Menguasai materi SD', 'Suka mengajar anak-anak', 'Punya kendaraan pribadi'] },
    { judul: 'CONTOH: Tentor Ngaji & Hafalan', area: 'Suruh', status: 'Dibuka',
      mapel: 'Iqro, Al-Qur\'an, Hafalan',
      syarat: ['Bacaan baik dan lancar', 'Sabar menghadapi anak', 'Domisili sekitar Suruh'] },
    { judul: 'CONTOH: Tentor English SMA', area: 'Banyubiru', status: 'Ditutup',
      mapel: 'English',
      syarat: ['Lancar berbahasa Inggris', 'Mahasiswa atau lulusan'] }
  ],
  syaratUmum: ['Berpenampilan rapi dan sopan', 'Bersedia mengisi absensi setiap pertemuan', 'Menjaga komunikasi dengan orang tua murid', 'Datang tepat waktu'],
  prosesLamar: ['Isi formulir lamaran', 'Kami hubungi lewat WhatsApp', 'Wawancara singkat', 'Mulai mengajar'],

  /* ---------- GALERI (CONTOH: 24 foto) ----------
     Cara mengganti: taruh fotomu di folder assets/img/galeri/ lalu ubah nama file di bawah.
     kategori: 'Belajar di rumah' | 'Calistung' | 'Ngaji' | 'English' | 'Kompetisi' | 'Kegiatan' */
  galeri: (function () {
    var kat = ['Belajar di rumah', 'Calistung', 'Ngaji', 'English', 'Kompetisi', 'Kegiatan'];
    var judul = ['Belajar bersama tentor', 'Calistung seru', 'Belajar ngaji', 'Praktik bahasa Inggris', 'Hari lomba', 'Kegiatan akhir pekan'];
    var out = [];
    for (var i = 1; i <= 24; i++) {
      out.push({
        file: 'assets/img/galeri/foto-' + (i < 10 ? '0' + i : i) + '.svg',
        judul: 'CONTOH: ' + judul[(i - 1) % 6],
        kategori: kat[(i - 1) % 6]
      });
    }
    return out;
  })(),

  /* ---------- TESTIMONI ----------
     Biarkan tampilkan:false sampai kamu punya testimoni ASLI dan sudah izin orang tua. */
  testimoni: {
    tampilkan: false,
    daftar: [
      { nama: 'Nama Orang Tua (izin sudah ada)', anak: 'Murid SD', isi: 'Tulis testimoni asli di sini.' }
    ]
  }
};
