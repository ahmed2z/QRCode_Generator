// script.js
function generateQRCode() {
    var url = document.getElementById("urlInput").value;
    var errorMessage = document.getElementById("errorMessage");
    var qrcodeContainer = document.getElementById("qrcode");
    var conOfQrCode = document.getElementById("con-of-qrcode");
    
    // Clear previous QR code and error message
    qrcodeContainer.innerHTML = "";
    errorMessage.style.display = "none";
    conOfQrCode.style.display = "none";
    
    if (url.trim() === "") {
        // Show error message if the URL is empty
        errorMessage.style.display = "block";
    } else {
        // Show QR code container and generate QR code
        conOfQrCode.style.display = "block";
        new QRCode(qrcodeContainer, {
            text: url,
            width: 128,
            height: 128,
        });
    }
}
