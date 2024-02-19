
/*HASTA AHORA TENEMOS:

        ARGENTINA(COLOMBIA-PAYPAL-USDT)
        CHILE (ARGENTINA-USDT)
        COSTA RICA (ARGENTINA-USDT)
        COLOMBIA(ARGENTINA-USDT)
        ECUADOR (ARGENTINA-USDT)
        ESPAÑA (ARGENTINA-USDT)
        ESTADOS UNIDOS (ARGENTINA-USDT)
        MEXICO(ARGENTINA
        ECUADOR (ARGENTINA-USDT)
        ESPAÑA (ARGENTINA-USDT)
        ESTADOS UNIDOS (ARGENTINA-USDT)
        PERU (ARGENTINA-USDT)
        REPUBLICA DOMINACA(ARGENTINA-USDT)
        VENEZUELA () 
        ECUADOR (ARGENTINA-USDT)
        ESPAÑA (ARGENTINA-USDT)
        ESTADOS UNIDOS (ARGENTINA-USDT)
        PERU (ARGENTINA-USDT)
        REPUBLICA DOMINACA(ARGENTINA-USDT)
        VENEZUELA () )
        PERU (ARGENTINA-USDT)
        REPUBLICA DOMINACA(ARGENTINA-USDT)
        VENEZUELA () 

    CUALES FALTAN:
    ARGENTINA()
    BRASIL()
    CHILE()
    ECUADOR()
    ESPAÑA()
    ESTADOS UNIDOS()
*/

// LOGICA DE MENSAJE COPY CLIPBOARD Y CHAT DE TELEGRAM

let imageNameOrigen = 'earth.png';
let imageNameDestino = 'transfer.png';

function seleccionarPaisesYCopiar() {
    let paisOrigen = document.getElementById("countryDropdownOrigen").innerText.trim();
    let paisDestino = document.getElementById("countryDropdownDestino").innerText.trim();
    let cantidadOrigen = document.getElementById("cantidad-origen").value;
    let cantidadDestino = document.getElementById("cantidad-destino").value;
    selectCountryOrigen(paisOrigen);
    selectCountryDestino(paisDestino);
    setTimeout(() => {
        copiarAlPortapapeles(paisOrigen, paisDestino, cantidadOrigen, cantidadDestino);
    }, 0); // Ejecutar después de las operaciones actuales para evitar el problema de las imágenes
}

function copiarAlPortapapeles(paisOrigen, paisDestino, cantidadOrigen, cantidadDestino) {
    let texto = document.getElementById("texto");

    if (paisOrigen === 'SELECCIONE ORIGEN' || paisDestino ==='SELECCIONE DESTINO') {
        alert("ERROR, Seleccione pais de origen y de destino");
    } else {
        
        texto.value = `Hola, quisiera cambiar ${cantidadOrigen} de ${paisOrigen} a ${cantidadDestino} de ${paisDestino}`;
        
        // Restablecer la imagen y el país de origen antes de copiar al portapapeles
        document.querySelector(".origen-imagen img").src = 'images/earth.png';
        document.getElementById("countryDropdownOrigen").innerText = 'Seleccione origen';

        // Restablecer la imagen y el país de destino antes de copiar al portapapeles
        document.querySelector(".destino-imagen img").src = 'images/transfer.png';
        document.getElementById("countryDropdownDestino").innerText = 'Seleccione destino';

        texto.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles: " + texto.value);
    }



    // Restaurar las imágenes después de copiar al portapapeles
    document.querySelector(".origen-imagen img").src = 'images/' + imageNameOrigen;
    document.querySelector(".destino-imagen img").src = 'images/' + imageNameDestino;

    // Restablecer los valores de los inputs de números y los labels

    document.getElementById("cantidad-origen").value = parseFloat(0).toFixed(2);
document.getElementById("cantidad-destino").value = parseFloat(0).toFixed(2);
    document.getElementById("currencyLabelOrigen").innerText = 'Tu envias';
    document.getElementById("currencyLabelDestino").innerText = 'Tu recibes';
}

//LINK Y BOTON PARA ABRIR TELEGRAM


document.getElementById('telegramButton').addEventListener('click', function() {
    window.location.href = 'tg://resolve?domain=cambiosvip&text=Hola%2C%20aqu%C3%AD%20tienes%20la%20informaci%C3%B3n%20que%20viste%20en%20la%20p%C3%A1gina%20anterior';
  });


//LOGICA DE FUNCION DE SELECCION DE PAISES DE ORIGEN Y DESTINO
function selectCountryOrigen(country) {
    document.getElementById("countryDropdownOrigen").innerText = country;
    let currencyOrigen = obtenerCurrency(country);
    document.getElementById("currencyLabelOrigen").innerText = 'Envias ' + currencyOrigen;

    let imageUrl = obtenerUrlImagen(country);
    document.querySelector(".origen-imagen img").src = imageUrl;
}

function selectCountryDestino(country2) {
    document.getElementById("countryDropdownDestino").innerText = country2;
    let currencyDestino = obtenerCurrency(country2);
    document.getElementById("currencyLabelDestino").innerText = 'Recibes ' + currencyDestino;

    let imageUrl = obtenerUrlImagen(country2);
    document.querySelector(".destino-imagen img").src = imageUrl;
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
        'Bitcoin (BTC)': 'images/bitcoin2.png',
        'Ethereum (ETH)': 'images/ethereum.png',
        'USDT (USDT)': 'images/usdt.png',
        'SELECCIONE ORIGEN': 'images/earth.png',
        'SELECCIONE DESTINO': 'images/transfer.png'

    };
    return imageUrls[countryName] || ''; // Si no se encuentra la URL, devuelve una cadena vacía
}

function obtenerCurrency(countryName) {
    let currencies = {
        'Argentina (ARS)': '(ARS)',
        'Brasil (R$)': '(R$)',
        'Chile (CLP)': '(CLP)',
        'Chile (CLP) RUT': '(CLP)', // Reutilizando la misma imagen que para 'Chile (CLP)'
        'Colombia (COP)': '(COP)',
        'Costa Rica (CRC)': '(CRC)',
        'Ecuador (USD)': '(USD)',
        'España (EUR)': '(EUR)',
        'Estados Unidos (USD): (20% de comision)': 'USD',
        'Estados Unidos (USD)': 'USD',
        'Mexico (MXN)': '(MXN)',
        'Peru (SOL)': '(SOL)',
        'Republica Dominicana (POP)': '(POP)',
        'Venezuela (VES)': '(VES)',
        'Paypal (USD)': '(USD)',
        'Prex (ARS-USD)': '(ARS-USD)',
        'Revolut (USD)': '(USD)',
        'Skrill (USD)': '(USD)',
        'Bitcoin (BTC)': '(BTC)',
        'Ethereum (ETH)': '(ETH)',
        'USDT (USDT)': '(USDT)'
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

        //DECLARACION DE VARIABLE DE ARS A USDT OPERACION COLOMBIA (EURO A BOLIVAR ---ESP-VENEZUELA--)
        let precioArsUsdtVes = 1250;

    //DECLARACION DE VARIABLE DE CLP A USDT  (CLP A USDT ---CHILE-USDT--)
    let precioClpUsdt = 1020;

    //DECLARACION DE VARIABLE DE CLP A USDT Y DESPUES A ARS (CLP A ARS ---CHILE-ARGENTINA-----)
    let precioClpArs = 1000;

    //DECLARACION DE VARIABLE DE COP A USDT (COLOMBIA A ARGENTINA ------COLOMBIA-ARGENTINA----)
    let precioCopUsdt = 3950;


    //DECLARACION DE VARIABLE DE COP A ARS (COLOMBIA A ARGENTINA ------COLOMBIA-ARGENTINA----)
    let precioCopArs = 1000;

    //DECLARACION DE VARIABLE DE COP A VES (COLOMBIA A VENEZUELA ------COLOMBIA-USDT-VENEZUELA)
    let precioCopVes = 35.5; 

    //DECLARACION DE VARIABLE A CRC A USDT A ARS (CRC A USDT A ARS ---COSTA RICA-USDT-ARGENTINA---) 
    let precioCrcUsdtArs = 1000;

    //DECLARACION DE VARIABLE A CRC A USDT
    let precioCrcUsdt = 580;

    //DECLARACION DE VARIABLE DE PRECIO DE USDT EN ARS
    let PrecioUsdtArs = 1200;   

    //DECLARACION DE VARIABLE DE PRECIO DE COP A USDT A ARS(COP A USDT A ARS --COLOMBIA-USDT-ARGENTINA--) 
    let PrecioUsdtCop = 3770;

    //DECLARACION DE VARIABLE DE MXN A ARS
    let precioMxnArs = 1000;

    //DECLARACION DE VARIABLE DE MXN A COP
    let precioMxnCop = 3770;

    //DECLARACION DE VARIABLE DE MXN A USDT (MXN A USDT --------- MEXICO-USDT-----------)
    let precioMxnUsdt = 18.5;

    //DECLARACION DE VARIABLE DE MXN A VES

    let precioMxnVes = 35.5;

    //DECLARACION DE VARIABLE DE USD (ECUADOR) a USDT (USD A USDT -----ECUADOR-USDT--------------)
    let precioUsdEcuUsdt = 1.04;

       //DECLARACION DE VARIABLE DE USD (ECUADOR) a USDT (USD A ARS -----ECUADOR-ARGENTINA--------------)
    let precioUsdEcuArs = 1000;

    //DECLARACION DE VARIABLE DE EUR A ARS
    let precioEuroArs = 1000;

    //DECLARACION DE VARIABLE DE EUR A VES (EURO A BOLIVAR -----VENEZUELA--------------)
    let precioEuroVes = 35.5;
    

    //DECLARACION DE VARIABLE DE EUR A COP (EURO A $ COLOMBIANOS -----COLOMBIA--------------)
    let precioEuroCop = 3770;

    //DECLARACION DE VARIABLE DE POP A USDT(------REPUBLICA DOM A USDT------POP-USDT )
    let precioPopUsdt = 62;

    //DECLARACION DE VARIABLE DE POP A USDT A ARS (------REPUBLICA DOM A USDT A ARS----POP-USDT-ARS---)
    let precioPopUsdtArs = 1000;

    //DECLARACION DE VARIABLE DE SOL A USDT (SOLES A USDT -----PERU-USDT-----------)
    let precioSolUsdt = 4.1;

    //DECLARACION DE VARIABLE DE USDT A ARS OPERACION PERU (SOLES A USDT A ARS ----SOL-USDT-ARS------)
    let precioSolArs = 1000;
    


    //DECLARACION DE VARIABLE DE PRECIO DE USDT EN ARS
    let PrecioPaypalArs = 1000;
    
    //DECLARACION DE VARIABLE DE PRECIO PAYPAL A MXN
    let precioPaypalMXN = 17.26;

    //DECLARACION DE VARIABLE DE PRECIO DE USDT A PAYPAL
    let PrecioUsdtPaypal = 0.93605;

    //DECLARACION DE VARIABLE DE PRECIO DE USA A USDT A ARS(USA A ARGENTINA -----USA-ARGENTINA-----)
    let precioUsaUsdtArs = 1000;

    //DECLARACION DE VARIABLE DE VES A USDT(BOLIVARES A USDT --------VENEZUELA-USDT----------)
    let precioVesUsdt = 35.5;


    //DECLARACION DE VARIABLE DE USDT A ARS OPERACION VENEZUELA (USDT A ARS -VENEZUELA-USDT-ARS---------))
    let precioVesUsdtArs = 1000;



    if (isNaN(cantidadOrigen)) {
        return '';
    }

    if (paisOrigen === 'ARGENTINA (ARS)') {

        if (paisDestino === 'COLOMBIA (COP)') {
            
            resultado = cantidadOrigen / precioArsUsdtCol;

            console.log(resultado * porcentajeComision)

            resultado = resultado - resultado * porcentajeComision;

            resultado = resultado * PrecioUsdtCop;

            return resultado.toFixed(2);

            
        }

        else if(paisDestino === 'VENEZUELA (VES)'){
            
            resultado = cantidadOrigen / precioArsUsdtVes;

            console.log(resultado * porcentajeComision)

            resultado = resultado - resultado * porcentajeComision;

            resultado = resultado * precioVesUsdt;

            return resultado.toFixed(2);

        }

        else if (paisDestino === 'PAYPAL (USD)') {
        

            resultado = cantidadOrigen / PrecioUsdtArs;

            resultado = resultado - (resultado * porcentajeComisionPaypal);
    

            return resultado.toFixed(2); // Redondeo a 0 decimales
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
    else if(paisOrigen === 'CHILE (CLP)'){
        
        if(paisDestino === 'ARGENTINA (ARS)'){
            resultado = cantidadOrigen / precioClpUsdt;

            console.log(cantidadOrigen / precioClpUsdt);
    
            console.log(resultado * porcentajeComision);
    
            resultado = resultado - resultado * porcentajeComision;
    
    
            resultado = resultado * precioClpArs;
    
            return resultado.toFixed(2);
        }

        else if (paisDestino === 'USDT (USDT)'){
            resultado = cantidadOrigen / precioClpUsdt;

            console.log(cantidadOrigen / precioClpUsdt);
    
            console.log(resultado * porcentajeComision);
    
            resultado = resultado - resultado * porcentajeComision;
    
            return resultado.toFixed(2);  
        }
 
    }
    else if( paisOrigen === 'COLOMBIA (COP)'){

        if(paisDestino === 'ARGENTINA (ARS)'){
            
            resultado = cantidadOrigen / precioCopUsdt;

            console.log(cantidadOrigen / precioCopUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

    
            resultado = resultado * precioCopArs;
    
            return resultado.toFixed(2);

        }
        else if(paisDestino === 'USDT (USDT)'){

            resultado = cantidadOrigen / precioCopUsdt;

            comisionNuestra = resultado * porcentajeComision;

            resultado = resultado - comisionNuestra

            console.log(comisionNuestra);

            console.log(resultado);

            return resultado.toFixed(2);
        }
        else if(paisDestino === 'VENEZUELA (VES)'){

            resultado = cantidadOrigen / precioCopUsdt;

            console.log(cantidadOrigen / precioCopUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

    
            resultado = resultado * precioCopVes;
    
            return resultado.toFixed(2);

        }

    }
    else if (paisOrigen === 'COSTA RICA (CRC)'){

        if (paisDestino === 'ARGENTINA (ARS)'){
            
            resultado = cantidadOrigen / precioCrcUsdt;

            console.log(cantidadOrigen / precioCrcUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

    
            resultado = resultado * precioCrcUsdtArs;
    
            return resultado.toFixed(2);

        }
        else if(paisDestino === 'USDT (USDT)'){

            resultado = cantidadOrigen / precioCrcUsdt;

            console.log(cantidadOrigen / precioCrcUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

            return resultado.toFixed(2);
        }
    }
    else if (paisOrigen === 'ECUADOR (USD)'){

        if(paisDestino === 'ARGENTINA (ARS)'){

            resultado = cantidadOrigen / precioUsdEcuUsdt;

            console.log(cantidadOrigen / precioCopUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

    
            resultado = resultado * precioUsdEcuArs;
    
            return resultado.toFixed(2);

        }

        else if(paisDestino === 'USDT (USDT)'){
            resultado = cantidadOrigen / precioUsdEcuUsdt;

            console.log(cantidadOrigen / precioUsdEcuUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

    
            return resultado.toFixed(2);
        }
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
    else if (paisOrigen === 'ESTADOS UNIDOS (USD)'){

        if(paisDestino === 'ARGENTINA (ARS)'){

            
        //DECLARACION DE VARIABLES DE COMISIONES DE PAYPAL DE LA FUNCION CALCULAR
        const comisionPaypalPorcentaje = 5.4;
        const comisionPayPalFija = 0.30; // Comisión fija de PayPal
        const comisionPorcentajeDecimal = comisionPaypalPorcentaje / 100; // Convertir el porcentaje a decimal
        // Cálculo de la comisión de PayPal
        const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
        const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionPayPalFija;

        console.log(cantidadConComisionTotal + 'esto es el numero con el descuento de paypal')
        
        resultado = cantidadConComisionTotal * takenos;

        console.log(resultado + 'esto es el numero con el descuento de takenos');

        console.log(resultado * porcentajeComision);

        resultado = resultado - resultado * porcentajeComisionPaypal;

        resultado = resultado * precioUsaUsdtArs;

        return resultado.toFixed(2);

        }

        else if(paisDestino === 'USDT (USDT)'){
        //DECLARACION DE VARIABLES DE COMISIONES DE PAYPAL DE LA FUNCION CALCULAR
        const comisionPaypalPorcentaje = 5.4;
        const comisionPayPalFija = 0.30; // Comisión fija de PayPal
        const comisionPorcentajeDecimal = comisionPaypalPorcentaje / 100; // Convertir el porcentaje a decimal
        // Cálculo de la comisión de PayPal
        const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
        const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionPayPalFija;

        console.log(cantidadConComisionTotal + 'esto es el numero con el descuento de paypal')
        
        resultado = cantidadConComisionTotal * takenos;

        console.log(resultado + 'esto es el numero con el descuento de takenos');

        console.log(resultado * porcentajeComision);

        resultado = resultado - resultado * porcentajeComisionPaypal;

        

        return resultado.toFixed(2);
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
    else if (paisOrigen === 'PERU (SOL)'){

        if(paisDestino === 'ARGENTINA (ARS)'){

            resultado = cantidadOrigen / precioSolUsdt;

            console.log(cantidadOrigen / precioCopUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

    
            resultado = resultado * precioSolArs;
    
            return resultado.toFixed(2);

        }
        else if (paisDestino === 'USDT (USDT)'){
            resultado = cantidadOrigen / precioSolUsdt;

            console.log(cantidadOrigen / precioCopUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;
            
            return resultado.toFixed(2);
        }
    }
    else if (paisOrigen === 'REPUBLICA DOMINICANA (POP)'){

        if(paisDestino === 'ARGENTINA (ARS)'){


            resultado = cantidadOrigen / precioPopUsdt;

            console.log(cantidadOrigen / precioPopUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

    
            resultado = resultado * precioPopUsdtArs;
    
            return resultado.toFixed(2);

        }
        else if( paisDestino === 'USDT (USDT)'){

            resultado = cantidadOrigen / precioPopUsdt;

            console.log(cantidadOrigen / precioPopUsdt);

            console.log(resultado * porcentajeComision);

            resultado = resultado - resultado * porcentajeComision;

            return resultado.toFixed(2);
        }
    }
    else if(paisOrigen === 'VENEZUELA (VES)'){
        
        if(paisDestino === 'ARGENTINA (ARS)'){
            
            resultado = cantidadOrigen / precioVesUsdt;

            console.log(cantidadOrigen / precioVesUsdt);
    
            console.log(resultado * porcentajeComision);
    
            resultado = resultado - resultado * porcentajeComision;
    
    
            resultado = resultado * precioVesUsdtArs;
    
            return resultado.toFixed(2);
        }

        else if (paisDestino === 'USDT (USDT)'){

            resultado = cantidadOrigen / precioVesUsdt;

            console.log(cantidadOrigen / precioVesUsdt);
    
            console.log(resultado * porcentajeComision);
    
            resultado = resultado - resultado * porcentajeComision;
    
    
    
            return resultado.toFixed(2);
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