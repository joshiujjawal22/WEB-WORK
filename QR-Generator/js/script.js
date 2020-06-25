// Function for QR Code
var qr;
(function() {
        qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 250,
        foreground: '#3B3B98',
        value: 'https://github.com/joshiujjawal22'
    });
})();

// To generate custom QR COde
function generateQRCode() {
    var qrtext = document.getElementById("qr-text").value;
    document.getElementById("result").innerHTML = "This is QR code for " + qrtext +":";
    alert(qrtext);
    // To change the value of QR
    qr.set({
        size: 300,
        value: qrtext
    });
}