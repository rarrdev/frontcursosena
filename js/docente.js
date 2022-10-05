const URL_API = "https://cursosenansga-production.up.railway.app";
var arrayDocentes = [];


function limpiarFormulario() {

}


function buscarTodos() {
    fetch(`${URL_API}/api/docente`)
        .then((response) => response.json())
        .then((docentes) => {
            arrayDocentes = docentes
            console.log(arrayDocentes)
            pintarTabla();
        })
    var element = document.getElementById("dvListado");
    element.classList.remove("objetoOculto");
    element.classList.add("objetoVisible");

    var dv = document.getElementById('dvFormulario');
    dv.classList.remove("objetoVisible");
    dv.classList.add("objetoOculto");
}

function pintarTabla() {
    let cabTabla = `<thead class="table-dark">
        <th>Tipo Documento</th> <th>No Documento</th>   <th>Nombres</th>
        <th>Apellidos</th>  <th>Eliminar</th>   <th>Modificar</th>
        </thead>`

    arrayDocentes.forEach(function (item) {
        let cadena = `
        <tr><td>${item.tipoidentificacion}</td> <td>${item.identificacion}</td>
        <td>${item.primerNombre} ${item.segundoNombre}</td> <td> ${item.primerApellido} ${item.segundoApellido}</td>
        <td><button type="button" class="btn btn-danger btn-sm" onclick = "eliminarDocente(${item.id})">Eliminar</button></td>
        <td><button type="button" class="btn btn-success btn-sm" onclick = "modificarDocente(${item.id})">Modificar</button></td></tr>`
        cabTabla += cadena;
    });
    document.getElementById('tblEmp').innerHTML = cabTabla;
}

function eliminarDocente(id) {
    console.log(id)
}

function modificarDocente(id) {
    console.log(id)
}


function nuevoDocente(){
    document.getElementById('tblEmp').innerHTML = "";
    var element = document.getElementById("dvListado");
    element.classList.remove("objetoVisible");
    element.classList.add("objetoOculto");

    var dv = document.getElementById('dvFormulario');
    dv.classList.remove("objetoOculto");
    dv.classList.add("objetoVisible");
}


function guardarDocente() {

let ddlTipoIden = document.getElementById('ddlTipoIdenNuevo');
let tipoIdentificacion = ddlTipoIden[ddlTipoIden.selectedIndex].text;

    let Identi = document.getElementById('txtIdenNuevo').value;
    let primerNom = document.getElementById('txtPrimerNombre').value;
    let segundoNom = document.getElementById('txtSegundoNombre').value;
    let PrimerApe = document.getElementById('txtPrimerApellido').value;
    let segundoApe = document.getElementById('txtSegundoApellido').value;
    let email = document.getElementById('txtEmail').value;
    let celular = document.getElementById('txtTelefono').value;   

    let slPrograma = document.getElementById('slPrograma');
    let nomPrograma =  slPrograma[slPrograma.selectedIndex].text;    

    let docente = {
        tipoidentificacion : tipoIdentificacion,
        identificacion: Identi,
        primernombre: primerNom,
        segundonombre: segundoNom,
        primerapellido: PrimerApe,
        segundoapellido: segundoApe,
        email: email,
        telefono: celular,
        programa: nomPrograma
    }
    //console.log(docente);

    fetch(`${URL_API}/api/docente`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(docente), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        },
      }).then(res => {
        res.json(res);
      })
      .catch(error => console.error('Error:', error))
      .then((response) => {
        
        alert('Empleado Creado Correctamente');
    });



}