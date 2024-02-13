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

//------------DECLARACION DE LA VARIABLE DE CANTIDAD ORIGEN----------------
let cantidadOrigen = 0.00;
//------------DECLARACION DE LA VARIABLE DE CANTIDAD DESTINO---------------
let cantidadDestino = 0.00;

//------------FUNCION REDONDEAR------------------------
function redondear(numero, decimales) {
    const factor = Math.pow(10, decimales);
    return Math.floor(numero * factor) / factor;
}


//------------FUNCION CALCULAR COMISION-------------------
function calcularComision() 
    {
        const paisOrigen = document.getElementById('countryDropdownOrigen').innerText.trim();
        const paisDestino = document.getElementById('countryDropdownDestino').innerText.trim();
        const cantidadOrigen = parseFloat(document.getElementById('cantidad-origen').value);
    
        let comision = 0

        if (isNaN(cantidadOrigen)) {
            return '';
        }

        if (paisOrigen === 'Argentina (ARS)')
            {
                if (paisDestino === 'Paypal (USD)') {
                    comision = cantidadOrigen * 0.1; // Comisión del 10% para Paypal
                } else if (paisDestino === 'Estados Unidos (USD)') {
                    comision = cantidadOrigen * 0.2; // Comisión del 20% para Estados Unidos
                } else if (paisDestino === 'Chile (CLP) RUT') {
                    comision = cantidadOrigen * 0.15; // Comisión del 15% para Chile (CLP) RUT
                }
            // Agrega más casos según sea necesario para Argentina como origen
            } else if (paisOrigen === 'Brasil (R$)') {
                // Evaluar casos para Brasil como origen
            }
            else if (paisOrigen === 'PAYPAL (USD)')
            {
                
                console.log("estoy en PAYPAL")
                
                //----------CONDICION DE PAYPAL A ARGENTINA------------------
                if(paisDestino === 'ARGENTINA (ARS)')
                {

                    if(cantidadOrigen != 0)
                    {


                        //Calculo de la comision de paypal 
                        const comisionPorcentaje = 5.4; // Porcentaje de comisión de PayPal
                        const comisionFija = 0.30; // Comisión fija de PayPal
                        const comisionPorcentajeDecimal = comisionPorcentaje / 100; // Convertir el porcentaje a decimal
                        const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
                        const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionFija;

                        
                        console.log(cantidadConComisionTotal);
                        
                        console.log("EL RESULTADO DE PAYPAL ARGENTINA ES: " + cantidadConComisionTotal);



                        //calculo USDT

                        let resultado = cantidadConComisionTotal * 0.93605;


                        //COMISION DEL SERVICIO

                        let comisionNuestra = (resultado * 0.2);

                        console.log(`la comision nuestra es: ${comisionNuestra} `)
                        
                        resultado = resultado - (resultado * 0.2);

                        //PASAJE A PESOS
                        resultado = resultado * 1000;

                        //REDONDEO

                        resultadoRedondeado = redondear(resultado,0)

                        console.log("resultado total: " +resultado)


                        return resultadoRedondeado;
                    }
                 //---------------CONDICION PAYPAL A COLOMBIA----------------
                }else if(paisDestino === 'COLOMBIA (COP)')
                {
                    if(cantidadOrigen != 0)
                    {


                        //Calculo de la comision de paypal 
                            const comisionPorcentaje = 5.4; // Porcentaje de comisión de PayPal
                            const comisionFija = 0.30; // Comisión fija de PayPal
                            const comisionPorcentajeDecimal = comisionPorcentaje / 100; // Convertir el porcentaje a decimal
                            const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
                            const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionFija;
            
                            console.log(cantidadConComisionTotal);
                            console.log("EL RESULTADO DE PAYPAL COLOMBIA ES: " + cantidadConComisionTotal);
            
            
            
                            //calculo USDT
                
                            let resultado = cantidadConComisionTotal * 0.93605;
                
                
                            //COMISION DEL SERVICIO
                
                            let comisionNuestra = (resultado * 0.2);
                
                            console.log(`la comision nuestra es: ${comisionNuestra} `)
                            
                            resultado = resultado - comisionNuestra;
                
                            //PASAJE A COP
                            resultado = resultado * 3760;
                
                            console.log("resultado total: " +resultado)
    
                            resultado = resultado.toFixed(0);
            
                            return resultado;
                        }
                }
                //---------------CONDICION PAYPAL A MEXICO----------------
                else if (paisDestino === 'MEXICO (MXN)')
                {
                    if(cantidadOrigen != 0)
                    {


                        //Calculo de la comision de paypal 
                        const comisionPorcentaje = 5.4; // Porcentaje de comisión de PayPal
                        const comisionFija = 0.30; // Comisión fija de PayPal
                        const comisionPorcentajeDecimal = comisionPorcentaje / 100; // Convertir el porcentaje a decimal
                        const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
                        const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionFija;

                        
                        console.log(cantidadConComisionTotal);
                        
                        console.log("RESTA DE SUMA ORIGINAL Y COSTE PAYPAL ES: " + cantidadConComisionTotal);



                        //calculo USDT

                        let resultado = cantidadConComisionTotal * 0.93605;


                        //COMISION DEL SERVICIO

                        let comisionNuestra = (resultado * 0.2);

                        console.log(`LA COMISION DEL SERVICIO ES: ${comisionNuestra} `)
                        
                        resultado = resultado - (resultado * 0.2);

                        //---------------PASAJE A MXM---------------------
                        resultado = resultado * 17.26;

                        //REDONDEO

                        resultadoRedondeado = redondear(resultado,0)

                        console.log("resultado total: " +resultado)


                        return resultadoRedondeado;
                    }
            }   //---------------CONDICION PAYPAL A USDT----------------
                else if (paisOrigen === 'PAYPAL (USD)' && paisDestino === 'USDT (USDT)'){
                    
                    if(cantidadOrigen != 0)
                    {


                        //Calculo de la comision de paypal 
                        const comisionPorcentaje = 5.4; // Porcentaje de comisión de PayPal
                        const comisionFija = 0.30; // Comisión fija de PayPal
                        const comisionPorcentajeDecimal = comisionPorcentaje / 100; // Convertir el porcentaje a decimal
                        const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
                        const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionFija;

                        
                        
                        console.log("RESTA DE SUMA ORIGINAL Y COSTE PAYPAL ES: " + cantidadConComisionTotal);



                        //calculo USDT

                        let resultado = cantidadConComisionTotal * 0.93605;


                        //COMISION DEL SERVICIO

                        let comisionNuestra = (resultado * 0.2);

                        console.log(`LA COMISION DEL SERVICIO ES: ${comisionNuestra} `)
                        
                        resultado = resultado - (resultado * 0.2);

                        // Redondeo a dos decimales
                        resultado = resultado.toFixed(2);

                        console.log("estoy aca" +resultado)
                        return resultado;
                    }
            }
                //---------------CONDICION PAYPAL A VENEZUELA----------------
                else if(paisDestino === 'VENEZUELA (VES)')
                {

                    if(cantidadOrigen != 0)
                    {


                        //Calculo de la comision de paypal 
                            const comisionPorcentaje = 5.4; // Porcentaje de comisión de PayPal
                            const comisionFija = 0.30; // Comisión fija de PayPal
                            const comisionPorcentajeDecimal = comisionPorcentaje / 100; // Convertir el porcentaje a decimal
                            const cantidadConComisionPorcentaje = cantidadOrigen - (cantidadOrigen * comisionPorcentajeDecimal);
                            const cantidadConComisionTotal = cantidadConComisionPorcentaje - comisionFija;
            
                            console.log(cantidadConComisionTotal);
                            console.log("EL RESULTADO DE PAYPAL VENEZUELA ES: " + cantidadConComisionTotal);
            
            
            
                            //calculo USDT
                
                            let resultado = cantidadConComisionTotal * 0.93605;
                
                
                            //COMISION DEL SERVICIO
                
                            let comisionNuestra = (resultado * 0.2);
                
                            console.log(`la comision nuestra es: ${comisionNuestra} `)
                            
                            resultado = resultado - comisionNuestra;
                
                            //PASAJE A BOLIVARES
                            resultado = resultado * 35.5;
                
                            console.log("resultado total: " +resultado)
    
                            resultado = resultado.toFixed(0);
            
                            return resultado;
                        }


                }

                //siguiente caso
            }
            // Agrega más casos para otros países como origeN
        
        //--------return del final de los casos de validacion-----------
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

    cantidadDestino = parseFloat(cantidadDestino);

    console.log(typeof(cantidadDestino));



    if (typeof cantidadDestino === 'number') {

        if(paisOrigen === 'PAYPAL (USD)' && paisDestino === 'USDT (USDT)')
        inputCantidadDestino.value = cantidadDestino.toFixed(2);
        else
        inputCantidadDestino.value = cantidadDestino.toFixed(0);
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