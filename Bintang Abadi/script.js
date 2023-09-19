function hitungtotal() {
    var tujuan = document.fform.itujuan.value;
    var jumlahtiket = parseFloat(document.fform.ijumlah.value);
    var ht = 0.0;
    var sub = 0.0;
    var diskon = 0.0;
    var total = 0.0;

    if (tujuan == "Jakarta") {
        ht = 100_000;
    } else if (tujuan == "Cirebon") {
        ht = 150_000;
    } else {
        ht = 200_000;
    }
    sub = jumlahtiket * ht;

    if (document.fform.imember.checked == true) {
        diskon = 0.10 * sub;
    } else {
        diskon = 0.0;
    }

    total = sub - diskon;
    document.fform.otiket.value = jumlahtiket;
    document.fform.osub.value = sub;
    document.fform.odiskon.value = diskon;
    document.fform.ototal.value = total;
    alert(total);
}
