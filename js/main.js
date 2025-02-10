const casachica= 40000;
const casagrande= 50000;
const departamentochico= 20000;
const departamentogrande = 30000;

const basico= 1;
const completo= 1.2;
const full= 1.4;


function producto(a, b){
    return a * b;
}
//declaro un Array de objetos
const cliente ={
    Nombre: "",
    Contacto: "",
    Tipo:"",
    Metros:0,
    Seguro:"",
    Precio: 0,
};

const cotizacion = document.getElementById('miCotizacion');

cotizacion.addEventListener('submit', (evento) => {
    evento.preventDefault();  
    
    const nombre = document.getElementById('nombre').value;
    cliente.Nombre= nombre;
  
    const email = document.getElementById('email').value;
    cliente.Contacto= email;

    const vivienda = document.getElementById('vivienda').value;
        if(vivienda == 1){
            cliente.Tipo="Casa";
        } else if(vivienda == 2){
        cliente.Tipo="Departamento";
        } else {
        cliente.Tipo= "ERROR, ingresar una opción correcta";
        }

    const metros = document.getElementById('metros').value;
    cliente.Metros= metros;

    const tipoplan = document.getElementById('tipoplan').value;
    if(tipoplan == 1){
        cliente.Seguro= "Básico";
    }else if(tipoplan == 2){
        cliente.Seguro= "Completo";
    }else if(tipoplan == 3){
        cliente.Seguro= "Full";
    }else {
        cliente.Seguro= "ERROR, ingresar una opción correcta";
    }

    if(vivienda == 1){
        if(metros <=150){
            if(tipoplan == 1){
            presupuesto= producto(casachica,basico);
        }else if(tipoplan == 2){
            presupuesto= producto(casachica,completo);
        }else{
            presupuesto= producto(casachica,full);
        }}else if(metros >=151){
                if(tipoplan == 1){
                presupuesto= producto(casagrande,basico);
            }else if(tipoplan == 2){
                presupuesto= producto(casagrande,completo);
            }else{
                presupuesto= producto(casagrande,full);
        }}} else{
            if(metros <=80){
                if(tipoplan == 1){
                presupuesto= producto(departamentochico,basico);
            }else if(tipoplan == 2){
                presupuesto= producto(departamentochico,completo);
            }else{
                presupuesto= producto(departamentochico,full);
            }}else if(metros >=81){
                if(tipoplan == 1){
                presupuesto= producto(departamentogrande,basico);
                }else if(tipoplan == 2){
                presupuesto= producto(departamentogrande,completo);
                }else if(tipoplan == 3){
                presupuesto= producto(departamentogrande,full);
            }}}
        
    cliente.Precio= presupuesto;
    
    console.log(cliente);

    let usuarioGuardado = JSON.stringify(cliente);
    console.log(usuarioGuardado);
    localStorage.setItem("cliente", usuarioGuardado);
   
    if (presupuesto != 0){
        const compra = document.getElementById('compra');
            compra.innerHTML=`
            <h2> ${cliente.Nombre}, el valor del seguro para tu ${cliente.Tipo} es de $${cliente.Precio} mensuales.</h2>
            <p><b>Datos del asegurado:</b><br>
            Nombre: ${cliente.Nombre}<br>
            Contacto: ${cliente.Contacto}<br>
            Tipo de vivienda: ${cliente.Tipo}<br>
            Metros Cuadrados: ${cliente.Metros}<br>
            Tipo de seguro: ${cliente.Seguro}<br>
            Precio Mensual: $${cliente.Precio}<br><br>
            </p>

            <h3>Introduzca los datos nuevamente para una nueva cotización</h3>
            `;}

    let usuarioRecuperado = JSON.parse(localStorage.getItem('cliente'));
    console.log(usuarioRecuperado, "datos del usuario guardado");

    document.getElementById('nombre').value = ''
    document.getElementById('email').value = ''
    document.getElementById('vivienda').value = ''
    document.getElementById('metros').value = ''
    document.getElementById('tipoplan').value = ''
 
})
