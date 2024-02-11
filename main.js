
    function selectCountryOrigen(country) {
        document.getElementById("countryDropdownOrigen").innerText = country;
        let imageUrl = obtenerUrlImagen(country);
        let imagen = document.querySelector(".origen-imagen img");
    
        // Agregar clase de animación
        imagen.classList.add("slide-in-out");
    
        setTimeout(() => {
            // Cambiar la URL de la imagen después de que termine la animación
            imagen.src = imageUrl;
    
            // Activar la clase de animación
            imagen.classList.add("active");
    
            // Eliminar clase de animación después de un breve retraso
            setTimeout(() => {
                imagen.classList.remove("slide-in-out", "active");
            }, 100); // Duración de la animación
        }, 10); // Retraso antes de cambiar la URL
    }


    function selectCountryDestino(country2) {
        document.getElementById("countryDropdownDestino").innerText = country2;
    let imageUrl = obtenerUrlImagen(country2);
    let imagen = document.querySelector(".destino-imagen img");

    // Agregar clase de animación
    imagen.classList.add("slide-in-out");

    setTimeout(() => {
        // Cambiar la URL de la imagen después de que termine la animación
        imagen.src = imageUrl;

        // Activar la clase de animación
        imagen.classList.add("active");

        // Eliminar clase de animación después de un breve retraso
        setTimeout(() => {
            imagen.classList.remove("slide-in-out", "active");
        }, 500); // Duración de la animación
    }, 50); // Retraso antes de cambiar la URL
}

    function obtenerUrlImagen(countryName) {
        let imageUrls = {
            'Argentina (ARS)': 'images/argentina.png',
            'Brasil (R$)': 'images/brazil.png',
            'Chile (CLP)': 'images/chile.png',
            'Chile (CLP) RUT': 'images/chile.png', // Reutilizando la misma imagen que para 'Chile (CLP)'
            'Colombia (COP)': 'images/colombia.png',
            'Costa Rica (CRC)': 'images/costa-rica.png',
            'Ecuador (USD)': 'images/ecuador.png',
            'España (EUR)': 'images/spain.png',
            'Estados Unidos (USD): (20% de comision)': 'images/usa.png',
            'Estados Unidos (USD)': 'images/usa.png',
            'Mexico (MXN)': 'images/mexico.png',
            'Peru (SOL)': 'images/peru.png',
            'Republica Dominicana (POP)': 'images/dominican-republic.png',
            'Venezuela (VES)': 'images/venezuela.png',
            'Paypal (USD)': 'images/paypal.png',
            'Prex (ARS-USD)': 'images/prex.png',
            'Revolut (USD)': 'images/revolut.png',
            'Skrill (USD)': 'images/skrill.png',
            'Bitcoin (BTC)': 'images/bitcoin.png',
            'Ethereum (ETH)': 'images/ethereum.png',
            'USDT (USDT)': 'images/usdt.png'
        };
        return imageUrls[countryName] || ''; // Si no se encuentra la URL, devuelve una cadena vacía
    }

  /*
Argentina
Bitcoin
Brasil
Chile
Colombia
Costa Rica
Ecuador
España
Estados Unidos
Ethereum
Mexico
Paypal
Peru
Republica Dominicana
Revolut
Skrill
USDT
Venezuela


*/

/*
•  Colombia (COP) :  “BANCOLOMBIA”, “NEQUI”
•  Chile (CLP) :           “ BANCO BCI” , “RUT “
•  Argentina (ARS):    “TRASNFERENCIAS, “MERCADOPAGO”
•  Mexico (MXN):    “BANAMEX”, “7ELEVEN”, “MERCADOPAGO”
•  Peru (SOL):            “TRANSFERENCIAS”, “YAPE”
•  Ecuador (USD):      “BANCO PICHINCHA”   ,  “ BANCO PACIFICO  “
•  Brasil                        “PIX”
•  Venezuela        “Banesco”   ,  ”pago móvil”
•  Costa rica        “Banco de Costa rica”
•  España   :       “Bizum”  "Transferencias"
•  Estados Unidos  “zelle” "cashapp" "venmo"   (20% de comision)
• republica dominicana "banreservas"




*/