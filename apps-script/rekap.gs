/**
 * Rekap pendaftaran ke Google Sheet.
 * Cara pasang: lihat README bagian "Rekap otomatis ke Google Sheet".
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    if (!d || !d.data || !d.kode) return out('ignored');

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var name = d.jenis === 'TENTOR' ? 'Tentor' : 'Murid';
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);

    // Kolom otomatis mengikuti isi formulir
    var headers = sh.getLastRow() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0] : ['Waktu', 'Kode', 'Status'];
    Object.keys(d.data).forEach(function (k) { if (headers.indexOf(k) < 0) headers.push(k); });
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');

    var row = headers.map(function (h) {
      if (h === 'Waktu') return new Date();
      if (h === 'Kode') return d.kode;
      if (h === 'Status') return 'Baru';
      return clean(d.data[h]);
    });
    sh.appendRow(row);
    return out('ok');
  } catch (err) {
    return out('error');
  } finally {
    lock.releaseLock();
  }
}

// Batasi panjang dan cegah "formula injection" (nilai diawali = + - @)
function clean(v) {
  if (v == null) return '';
  v = String(v).substring(0, 500);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}
function out(s) { return ContentService.createTextOutput(s); }
