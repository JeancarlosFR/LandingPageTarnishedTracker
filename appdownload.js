document.addEventListener("DOMContentLoaded", function () {
  const userAgent = navigator.userAgent.toLowerCase();
  const downloadContainer = document.getElementById("download-container");

  // URL para APP
  const tarnishedTrackerApplUrl =
    "https://drive.google.com/drive/folders/1GXkqpHH7Rn7R1NJ50VSCP2K-hp5ZoVFM";

  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    )
  ) {
    // Muestra boton si es movil
    downloadContainer.innerHTML = `
        <h1>Descarga nuestra app aquí</h1>
        <a href="${tarnishedTrackerApplUrl}" class="btn btn-primary btn-lg mt-3">
          ¡Descarga Ya!
        </a>
      `;
  } else {
    // Mostrar un código QR si es escritorio
    downloadContainer.innerHTML = `
        <h1>Descarga nuestra app aquí</h1>
        <div id="qrcode"></div>
      `;

    // Generar el QR dinámicamente
    new QRCode(document.getElementById("qrcode"), {
      text: tarnishedTrackerApplUrl,
      width: 150, // Ancho del QR
      height: 150, // Altura del QR
    });
  }
});
