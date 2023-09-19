var hari new Array("Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu");
var bulan new Array("Januari","Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus","September", "Oktober", "November", "Desember");
var t= new Date(); var hari ini-hari[t.getDay ()-1);
var tanggal-t.getDate();
var bulan ini-bulan (t.getMonth()17
var tahun-t.getYear();
var jan t.getHours();
var menit t.getMinutes();
var detik-t.getSeconds();
document.write("<font size 5 face-arial>");
document.write("<b><center>Sekarang adalah hari :"+hari ini+", tanggal : "+tanggal +" "+ bulan ini." "+tahun);
document.write("<hr width=700>"); document.write("</font>");
document.write("<font size=3 face-arial>");
document.write("<b><center>Jam sekarang "+ jan +
menit+":"+detik);
document.write("</font>");