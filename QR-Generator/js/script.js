
			var qr;
			(function() {
                    qr = new QRious({
                    element: document.getElementById('qr-code'),
                    size: 200,
                    value: 'https://github.com/joshiujjawal22'
                });
            })();
            
            function generateQRCode() {
                var qrtext = document.getElementById("qr-text").value;
                document.getElementById("qr-result").innerHTML = "QR code for " + qrtext +":";
                alert(qrtext);
                qr.set({
                    foreground: 'black',
                    size: 200,
                    value: qrtext
                });
            }