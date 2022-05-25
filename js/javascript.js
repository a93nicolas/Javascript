const tablasSkate = [{marca:"FUN", precio: 6000, origen: "NACIONAL"},
                     {marca:"BROTHERS", precio: 15000, origen: "IMPORTADA"},
					 {marca:"PRIMITIVE", precio: 17000, origen: "IMPORTADA"},
                     {marca:"REACC", precio: 8000, origen: "NACIONAL"},
                     {marca:"CHECK", precio: 6000, origen: "NACIONAL"},
                     {marca:"AVERNO", precio: 4000, origen: "NACIONAL"},
                     {marca:"TINTE", precio: 6000, origen: "NACIONAL"},
                     {marca:"WOODOO", precio: 9000, origen: "NACIONAL"}];


function mostrarResultado(res){
	var resultado = `<table>
						  <tr>
							<th>Marca</th>
							<th>Precio</th>
							<th>Origen</th>
						  </tr>`;
	res.forEach(e => {
		resultado += `<tr>
						<td>${e.marca}</td>
						<td>${e.precio}</td>
						<td>${e.origen}</td>
					  </tr>
					`
	})
	resultado += '</table>'
	document.getElementById('mostrarProducto').innerHTML = resultado;
}


function filtrarOrigen(){
	var resultado = null;
    let origenIngresado = document.getElementById('origen').value;
    
	if(origenIngresado == "NACIONAL"){
        resultado = tablasSkate.filter((el) => el.origen.includes('NACIONAL'));
	} else {
		resultado = tablasSkate.filter((el) => el.origen.includes('IMPORTADA'));
	}
	console.log(resultado)
	mostrarResultado(resultado)
}