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

  /* ---------- PERTANYAAN UMUM ---------- */
  faq: [
    { t: 'Guru datang ke rumah?', j: 'Ya. Tentor datang ke rumah sesuai jadwal yang disepakati, di area layanan kami.' },
    { t: 'Berapa biayanya?', j: 'Biaya menyesuaikan jenjang dan kebutuhan belajar. Chat kami lewat WhatsApp, kami jelaskan rincinya dan Anda bebas bertanya dulu.' },
    { t: 'Bagaimana cara memilih gurunya?', j: 'Setelah Anda mendaftar, tim kami mencocokkan tentor dengan mapel, jenjang, dan lokasi. Anda juga boleh meminta pergantian bila kurang cocok.' },
    { t: 'Kalau anak berhalangan hadir?', j: 'Jadwal bisa diatur ulang dengan pemberitahuan sebelum hari belajar. Ketentuan lengkapnya kami jelaskan saat pendaftaran.' },
    { t: 'Bagaimana saya tahu perkembangan anak?', j: 'Setiap pertemuan dicatat, dan perkembangan belajar disampaikan kepada orang tua.' },
    { t: 'Berapa lama menunggu sampai mulai belajar?', j: 'Setelah mendaftar, kami hubungi Anda lewat WhatsApp untuk mengatur tentor dan jadwal.' }
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
