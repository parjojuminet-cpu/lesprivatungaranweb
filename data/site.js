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
  // Nomor WhatsApp: tanpa +, tanpa spasi, awali 62 (bukan 0). CONTOH, WAJIB DIGANTI
  wa: '6281234567890',
  nomorTampil: '0812-3456-7890',
  email: 'halo@lesprivatungaran.my.id',          // CONTOH
  alamat: 'Jl. Contoh No. 12, Ungaran, Kabupaten Semarang, Jawa Tengah 50511', // CONTOH
  jamLayanan: 'Senin sampai Sabtu, 08.00 sampai 20.00 WIB',                     // CONTOH
  // Peta: ganti "Ungaran" dengan alamat lengkapmu, atau tempel link embed dari Google Maps
  petaUrl: 'https://www.google.com/maps?q=Ungaran,+Kabupaten+Semarang&output=embed',
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

  /* ---------- PROMO (bar kuning di paling atas) ---------- */
  promo: {
    tampilkan: true,
    teks: 'Promo bulan ini: gratis 1x pertemuan percobaan untuk murid baru!'   // CONTOH
  },

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

  /* ---------- FAQ: jawaban yang belum menjadi kebijakan resmi diarahkan ke WhatsApp ---------- */
  faq: [
    { kategori: 'Informasi umum', t: 'Apa itu Les Privat Ungaran?', j: 'Les Privat Ungaran menyediakan layanan pendampingan belajar privat untuk anak jenjang PAUD, TK, SD, SMP, dan SMA di Ungaran dan area sekitarnya.' },
    { kategori: 'Informasi umum', t: 'Apakah tentor datang ke rumah?', j: 'Ya. Model layanan yang ditampilkan saat ini adalah les privat dengan tentor datang ke rumah sesuai jadwal dan area yang disepakati.' },
    { kategori: 'Informasi umum', t: 'Wilayah mana saja yang dilayani?', j: 'Area yang tercantum saat ini meliputi Ungaran Timur, Ungaran Barat, Bergas, Bawen, dan sekitar Gunungpati. Untuk lokasi lain, silakan tanyakan ketersediaan tentor melalui WhatsApp.' },
    { kategori: 'Informasi umum', t: 'Apakah melayani semua jenjang sekolah?', j: 'Layanan yang tercantum meliputi PAUD, TK, SD, SMP, dan SMA. Kebutuhan belajar dapat disampaikan saat konsultasi.' },
    { kategori: 'Informasi umum', t: 'Apakah bisa konsultasi sebelum mendaftar?', j: 'Tentu. Silakan hubungi admin melalui WhatsApp dan ceritakan jenjang, mata pelajaran, lokasi, serta kebutuhan belajar anak.' },

    { kategori: 'Layanan dan mata pelajaran', t: 'Mata pelajaran apa saja yang tersedia?', j: 'Pilihan yang tercantum meliputi Calistung, Matematika, IPA, IPS, Bahasa Indonesia, Fisika, Kimia, Biologi, English, Bahasa Jawa, Bahasa Arab, Iqro, Al-Qur’an, hafalan, Fiqih, pendampingan PR, dan persiapan ujian. Ketersediaan tentor dikonfirmasi oleh admin.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah tersedia bimbingan membaca, menulis, dan berhitung?', j: 'Ya, Calistung tercantum sebagai salah satu layanan untuk anak usia PAUD/TK dan kebutuhan belajar dasar.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah tersedia les mengaji?', j: 'Ya. Daftar layanan mencantumkan Ngaji Iqro, Ngaji Al-Qur’an, hafalan, dan Fiqih. Silakan konsultasikan kebutuhan dan ketersediaan tentor.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah bisa meminta mata pelajaran di luar daftar?', j: 'Bisa ditanyakan terlebih dahulu. Admin akan membantu memeriksa apakah tersedia tentor yang sesuai dengan mata pelajaran dan jenjang anak.' },
    { kategori: 'Layanan dan mata pelajaran', t: 'Apakah pembelajaran mengikuti kebutuhan anak?', j: 'Materi pembelajaran disesuaikan dengan jenjang dan kebutuhan anak. Sampaikan target atau kesulitan belajar anak saat konsultasi agar dapat dicocokkan dengan tentor.' },

    { kategori: 'Pendaftaran dan biaya', t: 'Bagaimana cara mendaftar les privat?', j: 'Buka halaman Daftar, pilih pendaftaran Murid, isi data yang diperlukan, lalu tekan tombol Kirim lewat WhatsApp. Pesan pendaftaran akan disiapkan untuk dikirim ke admin.' },
    { kategori: 'Pendaftaran dan biaya', t: 'Berapa biaya les privat?', j: 'Biaya menyesuaikan jenjang, mata pelajaran, lokasi, dan kebutuhan pertemuan. Hubungi admin melalui WhatsApp untuk memperoleh rincian biaya sebelum memutuskan mendaftar.' },
    { kategori: 'Pendaftaran dan biaya', t: 'Apakah ada biaya pendaftaran?', j: 'Informasi biaya pendaftaran belum dicantumkan sebagai ketentuan tetap di website. Silakan konfirmasi langsung kepada admin melalui WhatsApp.' },
    { kategori: 'Pendaftaran dan biaya', t: 'Bagaimana cara dan jadwal pembayarannya?', j: 'Ketentuan pembayaran belum dirinci di website. Admin akan menjelaskan metode dan jadwal pembayaran saat konsultasi pendaftaran.' },
    { kategori: 'Pendaftaran dan biaya', t: 'Apakah tersedia pertemuan percobaan gratis?', j: 'Ketersediaan program percobaan perlu dikonfirmasi terlebih dahulu kepada admin karena promo dapat berubah. Silakan tanyakan melalui WhatsApp sebelum mendaftar.' },

    { kategori: 'Tentor dan proses belajar', t: 'Bagaimana tentor dipilih untuk anak saya?', j: 'Tim mencocokkan tentor berdasarkan mata pelajaran, jenjang, dan lokasi belajar. Kebutuhan khusus atau preferensi dapat disampaikan saat konsultasi.' },
    { kategori: 'Tentor dan proses belajar', t: 'Apakah saya bisa meminta pergantian tentor?', j: 'Bisa. Jika tentor dirasa kurang cocok, orang tua dapat menyampaikan permintaan pergantian kepada admin untuk ditindaklanjuti.' },
    { kategori: 'Tentor dan proses belajar', t: 'Bagaimana orang tua mengetahui kehadiran tentor?', j: 'Setiap pertemuan dicatat melalui absensi tentor sehingga kehadiran dan sesi belajar dapat dipantau.' },
    { kategori: 'Tentor dan proses belajar', t: 'Bagaimana perkembangan belajar anak dilaporkan?', j: 'Perkembangan belajar disampaikan kepada orang tua. Bentuk dan frekuensi laporan dapat ditanyakan kepada admin saat menyusun program belajar.' },
    { kategori: 'Tentor dan proses belajar', t: 'Apakah orang tua boleh menyampaikan target belajar anak?', j: 'Tentu. Orang tua dapat menyampaikan target, materi yang perlu diperkuat, atau kesulitan anak kepada admin agar menjadi bahan pencocokan tentor dan pembelajaran.' },

    { kategori: 'Jadwal dan ketentuan', t: 'Apakah jadwal les bisa disesuaikan?', j: 'Hari dan jam belajar dibicarakan bersama admin dan tentor sesuai ketersediaan. Jadwal dapat diatur berdasarkan kesepakatan.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Berapa kali pertemuan dalam seminggu?', j: 'Frekuensi pertemuan disesuaikan dengan kebutuhan belajar dan kesepakatan. Hubungi admin untuk membahas pilihan jadwal yang tersedia.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Berapa lama durasi setiap pertemuan?', j: 'Durasi sesi belum ditetapkan secara rinci di website. Silakan konfirmasi kepada admin berdasarkan jenjang dan kebutuhan anak.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Bagaimana jika anak berhalangan hadir?', j: 'Jika anak berhalangan, segera beri tahu admin sebelum jadwal belajar. Pengaturan ulang mengikuti ketentuan yang disepakati saat pendaftaran.' },
    { kategori: 'Jadwal dan ketentuan', t: 'Bagaimana jika tentor berhalangan hadir?', j: 'Silakan hubungi admin agar dapat dibantu koordinasi jadwal pengganti atau penjadwalan ulang sesuai kondisi dan kesepakatan.' }
  ],

  /* ---------- PENGUMUMAN (mading) ----------
     kategori: 'Info' | 'Kompetisi' | 'Prestasi' | 'Jadwal'
     tanggal : TAHUN-BULAN-TANGGAL
     sematkan: true  -> selalu tampil di paling atas
     Tambah pengumuman baru dengan menyalin satu blok { ... }, lalu ganti isinya. */
  pengumuman: [
    { tanggal: '2026-11-20', kategori: 'Kompetisi', sematkan: true,
      judul: 'CONTOH: Lomba mewarnai & cerdas cermat antar murid',
      isi: 'CONTOH. Pendaftaran dibuka sampai akhir bulan. Hadiah menarik untuk juara dan semua peserta mendapat sertifikat. Hubungi admin untuk mendaftar.' },
    { tanggal: '2026-11-15', kategori: 'Prestasi',
      judul: 'CONTOH: Selamat untuk Murid Terbaik bulan ini!',
      isi: 'CONTOH. Murid terbaik dipilih dari kehadiran, kemajuan belajar, dan semangatnya. Foto dan nama hanya ditampilkan dengan izin orang tua.' },
    { tanggal: '2026-11-10', kategori: 'Jadwal',
      judul: 'CONTOH: Jadwal belajar saat libur semester',
      isi: 'CONTOH. Selama libur semester jadwal les dapat disesuaikan. Silakan konfirmasi ke admin paling lambat 3 hari sebelumnya.' },
    { tanggal: '2026-11-05', kategori: 'Info',
      judul: 'CONTOH: Kelas percobaan gratis untuk murid baru',
      isi: 'CONTOH. Murid baru dapat mencoba satu kali pertemuan tanpa biaya untuk mengenal tentor dan cara belajarnya.' },
    { tanggal: '2026-10-28', kategori: 'Prestasi',
      judul: 'CONTOH: Murid kami juara 1 lomba tingkat kecamatan',
      isi: 'CONTOH. Terima kasih kepada orang tua dan tentor yang mendampingi. Semoga jadi semangat untuk teman-teman lainnya.' },
    { tanggal: '2026-10-20', kategori: 'Info',
      judul: 'CONTOH: Pelatihan tentor baru',
      isi: 'CONTOH. Seluruh tentor mengikuti pembekalan agar cara mengajar tetap seragam dan menyenangkan.' }
  ],

  /* ---------- LOWONGAN TENTOR ----------
     status: 'Dibuka' atau 'Ditutup' (yang ditutup tampil abu-abu) */
  lowongan: [
    { judul: 'CONTOH: Tentor Calistung PAUD/TK', area: 'Ungaran Timur', status: 'Dibuka',
      mapel: 'Calistung, Mewarnai',
      syarat: ['Sabar dan suka anak-anak', 'Pendidikan minimal SMA/sederajat', 'Domisili sekitar Ungaran', 'Tersedia sore hari'] },
    { judul: 'CONTOH: Tentor Matematika SD-SMP', area: 'Ungaran Barat & Bergas', status: 'Dibuka',
      mapel: 'Matematika',
      syarat: ['Menguasai materi SD sampai SMP', 'Mahasiswa atau lulusan', 'Punya kendaraan pribadi', 'Komunikatif dengan orang tua'] },
    { judul: 'CONTOH: Tentor Ngaji Iqro/Al-Qur\'an', area: 'Seluruh area', status: 'Dibuka',
      mapel: 'Iqro, Al-Qur\'an, Hafalan',
      syarat: ['Bacaan baik dan lancar', 'Berpengalaman mengajar ngaji', 'Berakhlak baik'] },
    { judul: 'CONTOH: Tentor English SMP-SMA', area: 'Ungaran Timur', status: 'Ditutup',
      mapel: 'English',
      syarat: ['Lancar berbahasa Inggris', 'Mahasiswa/lulusan'] }
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
