// Objeto con los porcentajes de comisión por país de destino
const comisiones = {
    'Paypal (USD)' : 10,
    'Estados Unidos (USD)': 20,
    'Chile (CLP) RUT': 15,
    'España (EUR)': 10,
    // Agrega más países y porcentajes según sea necesario
};

function redondearDosDecimales(numero) {
    return Math.round(numero * 100) / 100;
}


function selectCountryOrigen(country) {
    document.getElementById("countryDropdownOrigen").innerText = country;
    let currencyOrigen = obtenerCurrency(country);
    document.getElementById("currencyLabelOrigen").innerText = 'Envias ' + currencyOrigen;

    let imageUrl = obtenerUrlImagen(country);
    let imagen = document.querySelector(".origen-imagen img");

    imagen.classList.add("slide-in-out");

    setTimeout(() => {
        imagen.src = imageUrl;
        imagen.classList.add("active");
        setTimeout(() => {
            imagen.classList.remove("slide-in-out", "active");
        }, 100);
    }, 10);
}

function selectCountryDestino(country2) {
    document.getElementById("countryDropdownDestino").innerText = country2;
    let currencyDestino = obtenerCurrency(country2);
    document.getElementById("currencyLabelDestino").innerText = 'Recibes ' + currencyDestino;

    let imageUrl = obtenerUrlImagen(country2);
    let imagen = document.querySelector(".destino-imagen img");

    imagen.classList.add("slide-in-out");

    setTimeout(() => {
        imagen.src = imageUrl;
        imagen.classList.add("active");
        setTimeout(() => {
            imagen.classList.remove("slide-in-out", "active");
        }, 100);
    }, 10);
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


//------------DECLARACION DE LA VARIABLE DE CANTIDAD DESTINO---------------
let cantidadDestino = 0.00;

//------------FUNCION REDONDEAR------------------------
function redondear(numero, decimales) {
    const factor = Math.pow(10, decimales);
    return Math.floor(numero * factor) / factor;
}


//------------FUNCION CALCULAR COMISION-------------------
function calcularComision(cantidadOrigen, paisOrigen, paisDestino) {

    //DECLARACION DE VARIABLES DE FUNCION CALCULAR
    let comision = 0;
    let resultado = 0.00;
    let comisionNuestra = 0.00;

    
    //DECLARACION DE VARIABLE DE COMISION DE CASA DE CAMBIO SIN PAYPAL
    let porcentajeComision = 0.16;
    //DECLARACION DE VARIABLE DE COMISION DE CASA DE CAMBIO CON PAYPAL
    let porcentajeComisionPaypal = 0.20;

    //DECLARACION DE VARIABLE TAKENOS
    let takenos = 0.93605;

    //DECLARACION DE VARIABLE DE ARS A USDT
    let precioArsUsdt = 1200;

    //DECLARACION DE VARIABLE DE ARS A USDT OPERACION COLOMBIA (EURO A BOLIVAR ---ESP-VENEZUELA--)
    let precioArsUsdtCol = 1250;

    //DECLARACION DE VARIABLE DE PRECIO DE USDT EN ARS
    let PrecioUsdtArs = 1200;   

    //DECLARACION DE VARIABLE DE PRECIO DE USDT EN ARS
    let PrecioUsdtCop = 3770;

    //DECLARACION DE VARIABLE DE MXN A ARS
    let precioMxnArs = 1000;

    //DECLARACION DE VARIABLE DE MXN A COP
    let precioMxnCop = 3770;

    //DECLARACION DE VARIABLE DE MXN A USDT (MXN A USDT --------- MEXICO-USDT-----------)
    let precioMxnUsdt = 18.5;

    //DECLARACION DE VARIABLE DE MXN A VES

    let precioMxnVes = 35.5;

    //DECLARACION DE VARIABLE DE EUR A ARS
    let precioEuroArs = 1000;

    //DECLARACION DE VARIABLE DE EUR A VES (EURO A BOLIVAR -----VENEZUELA--------------)
    let precioEuroVes = 35.5;
    

    //DECLARACION DE VARIABLE DE EUR A COP (EURO A $ COLOMBIANOS -----COLOMBIA--------------)
    let precioEuroCop = 3770;

    


    //DECLARACION DE VARIABLE DE PRECIO DE USDT EN ARS
    let PrecioPaypalArs = 1000;
    
    //DECLARACION DE VARIABLE DE PRECIO PAYPAL A MXN
    let precioPaypalMXN = 17.26;

    //DECLARACION DE VARIABLE DE PRECIO DE USDT A PAYPAL
    let PrecioUsdtPaypal = 0.93605;


    if (isNaN(cantidadOrigen)) {
        return '';
    }

    if (paisOrigen === 'ARGENTINA (ARS)') {

        if (paisDestino === 'PAYPAL (USD)') {
        

            resultado = cantidadOrigen / PrecioUsdtArs;

            resultado = resultado - (resultado * porcentajeComisionPaypal);
    

            return resultado.toFixed(2); // Redondeo a 0 decimales
        } 
         else if (paisDestino === 'COLOMBIA (COP)') {
            
            resultado = cantidadOrigen / precioArsUsdtCol;

            resultado = resultado * porcentajeComision;

        }
        else if (paisDestino === 'USDT (USDT)'){
            resultado = cantidadOrigen / precioArsUsdt;

            console.log("cantidadOrigen / 18,5: " + resultado);

            comisionNuestra = resultado * porcentajeComision;
            
            console.log("resultado / 0.16: " + resultado);

            resultado = resultado - comisionNuestra;

            console.log(" comisionNuestra = resultado * 0.16: " + resultado)


            return resultado.toFixed(2);
        }
        // Agrega más casos según sea necesario para Argentina como origen
    } 
    else if (paisOrigen === 'Brasil (R$)') {
        // Evaluar casos para Brasil como origen
    }
    else if (paisOrigen === 'ESPAÑA (EUR)'){

        if      (paisDestino === 'ARGENTINA (ARS)'){

            resultado = cantidadOrigen - (cantidadOrigen * porcentajeComision);

            console.log("resultado de EURO: " + resultado);

            

            resultado = resultado * precioEuroArs;

            console.log("resultado de EURO A ARS: " + resultado);

            return resultado.toFixed(2);
        }
        else if (paisDestino === 'VENEZUELA (VES)'){
            
            resultado = cantidadOrigen - (cantidadOrigen * porcentajeComision);

            console.log("resultado de EURO: " + resultado);

            

            resultado = resultado * precioEuroVes;

            console.log("resultado de EURO A ARS: " + resultado);

            return resultado;

        }

        else if (paisDestino === 'COLOMBIA (COP)'){
            resultado = cantidadOrigen - (cantidadOrigen * porcentajeComision);

            console.log("resultado de EURO: " + resultado);

            

            resultado = resultado * precioEuroCop;

            console.log("resultado de EURO A ARS: " + resultado);

            return resultado;
        }
        else if (paisDestino === 'PAYPAL (USD)'){
            resultado = cantidadOrigen - (cantidadOrigen * porcentajeComisionPaypal);

            console.log("resultado de EURO-PAYPAL: " + resultado);

            

            resultado = resultado * PrecioUsdtPaypal;

            console.log("resultado de EURO A PAYPAL ES: " + resultado);

            return resultado.toFixed(2);
        }

        else if (paisDestino === 'USDT (USDT)'){
            resultado = cantidadOrigen - (cantidadOrigen * porcentajeComision);

            return resultado;
        }
    }
    else if (paisOrigen === 'MEXICO (MXN)') {

        console.log("estoy aca en mexico de origen")

        if(paisDestino === 'ARGENTINA (ARS)')
        {


            
            console.log("cantidad de origen: " + cantidadOrigen);
            //pasaje de MXN a USDT
            resultado = cantidadOrigen / precioMxnUsdt;

            console.log("cantidadOrigen / 18,5: " + resultado);

            comisionNuestra = resultado * porcentajeComision;
            
            console.log("resultado / 0.16: " + resultado);

            resultado = resultado - comisionNuestra;

            console.log(" comisionNuestra = resultado * 0.16: " + resultado)

            resultado = resultado * precioMxnArs;

            console.log("resultado * precioMxnArs: " + resultado)

            return resultado.toFixed(2);
        }
        else if(paisDestino === 'COLOMBIA (COP)')
        {
            console.log("cantidad de origen: " + cantidadOrigen);
            //pasaje de MXN a USDT
            resultado = cantidadOrigen / precioMxnUsdt;

            console.log("cantidadOrigen / 18,5: " + resultado);


            resultado = resultado - (resultado * porcentajeComision)
            console.log("resultado / 0.16: " + resultado);


            console.log(" comisionNuestra = resultado * 0.16: " + resultado)

            resultado = resultado * precioMxnCop;

            console.log("resultado * precioMxnCop: " + resultado)

            return resultado.toFixed(2);
        }
        else if (paisDestino === 'VENEZUELA (VES)')
        {
                        //pasaje de MXN a USDT
                        resultado = cantidadOrigen / precioMxnUsdt;

                        console.log("cantidadOrigen / 18,5: " + resultado);
            
            
                        resultado = resultado - (resultado * porcentajeComision)
                        console.log("resultado / 0.16: " + resultado);
            
            
                        console.log(" comisionNuestra = resultado * 0.16: " + resultado)
            
                        resultado = resultado * precioMxnVes;
            
                        console.log("resultado * precioMxnCop: " + resultado)
            
                        return resultado.toFixed(2);
        }

        else if (paisDestino === 'USDT (USDT)')
        {
                        //pasaje de MXN a USDT
                        resultado = cantidadOrigen / precioMxnUsdt;

                        console.log("cantidadOrigen / 18,5: " + resultado);
            
            
                        resultado = resultado - (resultado * porcentajeComision)
                        console.log("resultado / 0.16: " + resultado);

                        return resultado;
        }

    } 
    else if (paisOrigen === 'PAYPAL (USD)') {

        //DECLARACION DE VARIABLES DE COMISIONES DE PAYPAL DE LA FUNCION CALCULAR
        const comisionPaypalPorcentaje = 5.4;
        const comisionPayPalFija = 0.30; // Comisión fija de PayPal
        const comisionPorcentajeDecimal = comisionPaypalPorcentaje / 100; // Convertir el porcentaje a decimal
        // Cálculo de la comisión de PayPal
        const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
        const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionPayPalFija;

        console.log("estoy en PAYPAL");
        if (paisDestino === 'ARGENTINA (ARS)') {

            // Cálculo de USDT
            resultado = cantidadConComisionTotal * PrecioUsdtPaypal;
            // Cálculo de la comisión de nuestro servicio
            comisionNuestra = resultado * porcentajeComisionPaypal;
            resultado = resultado - comisionNuestra;
            
            // Pasaje a pesos y redondeo
            resultado = resultado * PrecioPaypalArs;
            return resultado.toFixed(0);
        }
        
        else if (paisDestino === 'COLOMBIA (COP)') {

            // Cálculo de USDT
            resultado = cantidadConComisionTotal * PrecioUsdtPaypal;
            // Cálculo de la comisión de nuestro servicio
            
            comisionNuestra = resultado * porcentajeComisionPaypal;
            
            resultado = resultado - comisionNuestra;
            
            // Pasaje a pesos colombianos y redondeo
            resultado = resultado * PrecioUsdtCop;

            return resultado.toFixed(0);

        } 
        
        else if (paisDestino === 'MEXICO (MXN)') {
            // Cálculo de la comisión de PayPal
            // Cálculo de USDT
            resultado = cantidadConComisionTotal * PrecioUsdtPaypal;

            // Cálculo de la comisión de nuestro servicio
            comisionNuestra = resultado * porcentajeComisionPaypal;

            resultado = resultado - comisionNuestra;
            
            // Pasaje a pesos mexicanos y redondeo
            resultado = resultado * precioPaypalMXN;
            return resultado.toFixed(2);
        } 
        else if (paisDestino === 'USDT (USDT)') {

            // Cálculo de USDT
            resultado = cantidadConComisionTotal * 0.93605;

            // Cálculo de la comisión de nuestro servicio
            comisionNuestra = resultado * porcentajeComisionPaypal;
            resultado = resultado - comisionNuestra;
            // Redondeo a 2 decimales
            return resultado.toFixed(2);
        }
        else if (paisDestino === 'VENEZUELA (VES)') {
            
            // Cálculo de USDT
            resultado = cantidadConComisionTotal * 0.93605;
            // Cálculo de la comisión de nuestro servicio
            let comisionNuestra = resultado * porcentajeComisionPaypal;
            resultado = resultado - comisionNuestra;
            // Pasaje a bolívares y redondeo
            resultado = resultado * 35.5;
            return resultado.toFixed(0);
        }
    }
    // Agrega más casos para otros países como origen

    // Return al final de los casos de validación
    return '';
}

//-------VALIDACION CUANDO CAMBIA UN NUMERO DEL INPUT 1----------------




// Cambia el selector según el ID de tu segundo input
const inputCantidadDestino = document.getElementById('cantidad-destino');


//event listener de cuando se modifica el input
document.getElementById('cantidad-origen').addEventListener('input', function() {
    let cantidadOrigen = parseFloat(this.value);
    let paisOrigen = document.getElementById('countryDropdownOrigen').innerText.trim();
    console.log(paisOrigen);
    let paisDestino = document.getElementById('countryDropdownDestino').innerText.trim();
    console.log(paisDestino);

    if(paisOrigen.includes('SELECCIONE ORIGEN') || paisDestino.includes('SELECCIONE DESTINO')){
        console.log("ingresar opciones validas");
        return 0;
    }

    cantidadDestino = calcularComision(cantidadOrigen, paisOrigen, paisDestino);

    console.log(typeof(cantidadDestino));
    console.log(cantidadDestino);

    cantidadDestino = parseFloat(cantidadDestino);

    console.log(typeof(cantidadDestino));
    
    console.log(cantidadDestino);



    if (typeof cantidadDestino === 'number') {

        if(paisOrigen === 'PAYPAL (USD)' && paisDestino === 'USDT (USDT)')
        inputCantidadDestino.value = cantidadDestino.toFixed(2);
        else
        inputCantidadDestino.value = cantidadDestino;
    } else {
        // Manejo del caso en el que calcularComision no devuelve un número
        console.log('calcularComision no devolvió un número');
    }
});


/*     if (typeof cantidadDestino === 'number') {
        inputCantidadDestino.value = cantidadDestino.toFixed(2);
    } else {
        // Manejo del caso en el que calcularComision no devuelve un número
        console.log('calcularComision no devolvió un número');
    } */


// Deshabilita la edición del segundo input
inputCantidadDestino.readOnly = true;

// Escucha el evento show.bs.dropdown del dropdown para ejecutar la función de cálculo




//event listener de cuando se cierra la lista de opciones de origen
document.getElementById('countryDropdownOrigen').addEventListener('hidden.bs.dropdown', function() {

    let cantidadOrigen = 0;



    
     cantidadOrigen = parseFloat(document.getElementById('cantidad-origen').value);
    let paisOrigen = document.getElementById('countryDropdownOrigen').innerText.trim();
    console.log(paisOrigen);
    let paisDestino = document.getElementById('countryDropdownDestino').innerText.trim();
    console.log(paisDestino);

    if(paisOrigen.includes('SELECCIONE ORIGEN') || paisDestino.includes('SELECCIONE DESTINO')){
        console.log("ingresar opciones validas");
        return 0;
    }

    //-----------inicio de calculos del evento-------------------
    cantidadDestino = calcularComision(cantidadOrigen, paisOrigen, paisDestino);

    console.log(typeof(cantidadDestino));

    cantidadDestino = parseFloat(cantidadDestino);

    console.log(typeof(cantidadDestino));



    if (typeof cantidadDestino === 'number') {
        inputCantidadDestino.value = cantidadDestino.toFixed(0);
    } else {
        // Manejo del caso en el que calcularComision no devuelve un número
        console.log('calcularComision no devolvió un número');
    }
});



//event listener de cuando se cierra la lista de opciones de destino
document.getElementById('countryDropdownDestino').addEventListener('hidden.bs.dropdown', function() {


    
     cantidadOrigen = parseFloat(document.getElementById('cantidad-origen').value);
    let paisOrigen = document.getElementById('countryDropdownOrigen').innerText.trim();
    console.log(paisOrigen);
    let paisDestino = document.getElementById('countryDropdownDestino').innerText.trim();
    console.log(paisDestino);

    if(paisOrigen.includes('SELECCIONE ORIGEN') || paisDestino.includes('SELECCIONE DESTINO')){
        console.log("ingresar opciones validas");
        return 0;
    }

    cantidadDestino = calcularComision(cantidadOrigen, paisOrigen, paisDestino);

    console.log(typeof(cantidadDestino));

    cantidadDestino = parseFloat(cantidadDestino);

    console.log(typeof(cantidadDestino));



    if (typeof cantidadDestino === 'number') {
        inputCantidadDestino.value = cantidadDestino;
    } else {
        // Manejo del caso en el que calcularComision no devuelve un número
        console.log('calcularComision no devolvió un número');
    }
});


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