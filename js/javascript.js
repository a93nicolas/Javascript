const tablasSkate = [{marca:"FUN", precio: 6000, origen: "NACIONAL"},
                     {marca:"BROTHERS", precio: 15000, origen: "IMPORTADA"},
					 {marca:"PRIMITIVE", precio: 17000, origen: "IMPORTADA"},
                     {marca:"REACC", precio: 8000, origen: "NACIONAL"},
                     {marca:"CHECK", precio: 6000, origen: "NACIONAL"},
                     {marca:"AVERNO", precio: 4000, origen: "NACIONAL"},
                     {marca:"TINTE", precio: 6000, origen: "NACIONAL"},
                     {marca:"WOODOO", precio: 9000, origen: "NACIONAL"}];

const ruedasSkate = [{marca:"LAB", precio: 1500, origen: "NACIONAL"},
					 {marca:"BONES", precio: 9000, origen: "IMPORTADA"},
					 {marca:"SPITFIRE", precio: 13000, origen: "IMPORTADA"},
					 {marca:"MAVRA", precio: 1000, origen: "NACIONAL"},
					 {marca:"DATER", precio: 6000, origen: "NACIONAL"},
					 {marca:"WOODOO", precio: 3000, origen: "NACIONAL"}];
			
const trucksSkate = [{marca:"LAB", precio: 5000, origen: "NACIONAL"},
					 {marca:"INDEPENDENT", precio: 20000, origen: "IMPORTADA"},
					 {marca:"VENTURE", precio: 14000, origen: "IMPORTADA"},
					 {marca:"FLYER", precio: 5000, origen: "NACIONAL"},
					 {marca:"DATER", precio: 4000, origen: "NACIONAL"},
					 {marca:"AVES II", precio: 3000, origen: "NACIONAL"}];

const rulemanesSkate = [{marca:"LAB", precio: 1000, origen: "NACIONAL"},
						{marca:"INDEPENDENT", precio: 4000, origen: "IMPORTADA"},
						{marca:"BONES", precio: 14000, origen: "IMPORTADA"},
						{marca:"REACC", precio: 2000, origen: "NACIONAL"},
						{marca:"PIG", precio: 4000, origen: "IMPORTADA"},
						{marca:"WOODOO", precio: 2500, origen: "NACIONAL"}];

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
						<td>$${e.precio}</td>
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
	} else if(origenIngresado == "IMPORTADA"){
		resultado = tablasSkate.filter((el) => el.origen.includes('IMPORTADA'));
	} else {
		resultado = tablasSkate.sort((el) => el.origen)
	}
	console.log(resultado)
	mostrarResultado(resultado)
}

const navHamburguesa = document.querySelector(".navegador_hamburguesa")
const navMenu = document.querySelector(".navegador_menu")

navHamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("navegador_menu_visible")
})