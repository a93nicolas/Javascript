const tablasSkate = [{marca:"FUN", precio: 6000, origen: "NACIONAL"},
                     {marca:"BROTHERS", precio: 15000, origen: "IMPORTADA"},
                     {marca:"REACC", precio: 8000, origen: "NACIONAL"},
                     {marca:"CHECK", precio: 6000, origen: "NACIONAL"},
                     {marca:"AVERNO", precio: 4000, origen: "NACIONAL"},
                     {marca:"TINTE", precio: 6000, origen: "NACIONAL"},
                     {marca:"WOODOO", precio: 9000, origen: "NACIONAL"}];

const resultadoN = tablasSkate.filter((el) => el.origen.includes('NACIONAL'));
const resultadoI = tablasSkate.filter((el) => el.origen.includes('IMPORTADA'));

function filtrarOrigen(origenIngresado){
    let origenIngresado = document.getElementById('origen');

    if(origenIngresado == "NACIONAL"){
        let resultadoFiltro = resultadoN;
        resultadoFiltro = document.getElementById('mostrarProducto').innerText;
    }
}