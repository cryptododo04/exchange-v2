
    function selectCountryOrigen(country) {
        

        document.getElementById("countryDropdownOrigen").innerText = country;


        let currencyOrigen = obtenerCurrency(country);
        document.getElementById("currencyLabelOrigen").innerText = 'Envias ' + currencyOrigen;


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

        let currencyDestino = obtenerCurrency(country2);
        document.getElementById("currencyLabelDestino").innerText = 'Recibes ' + currencyDestino;

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

    function obtenerCurrency(countryName) {
        let currencies = {
            'Argentina (ARS)': '(ARS)',
            'Brasil (R$)': '(R$)',
            'Chile (CLP)': 'CLP',
            'Chile (CLP) RUT': 'CLP', // Reutilizando la misma imagen que para 'Chile (CLP)'
            'Colombia (COP)': 'COP',
            'Costa Rica (CRC)': 'CRC',
            'Ecuador (USD)': 'USD',
            'España (EUR)': 'EUR',
            'Estados Unidos (USD): (20% de comision)': 'USD',
            'Estados Unidos (USD)': 'USD',
            'Mexico (MXN)': 'MXN',
            'Peru (SOL)': 'SOL',
            'Republica Dominicana (POP)': 'POp',
            'Venezuela (VES)': 'VES',
            'Paypal (USD)': 'USD',
            'Prex (ARS-USD)': 'ARS-USD',
            'Revolut (USD)': 'USD',
            'Skrill (USD)': 'USD',
            'Bitcoin (BTC)': 'BTC',
            'Ethereum (ETH)': 'ETH',
            'USDT (USDT)': 'USDT'
        };
        return currencies[countryName] || '';
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