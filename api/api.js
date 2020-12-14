
module.exports = (req, res) => {

	function elegirNMonumentos(monumentos, nMonumentos) {
		let total = []
		let random = 0
		for (let i=0; i < nMonumentos; i++) {
			random = Math.floor(Math.random() * monumentos.length)
			total.push(monumentos[random])
			monumentos.splice(random, 1)
		}
		return total
	}


	let monumentos = ["Alhambra",
	"Palacio CarlosV",
	"Catedral",
	"Mirador San Nicolas",
	"Jardines Generalife",
	"Fuente de las Granadas",
	"Mirador San Miguel Alto",
	"Paseo de Los tristes",
	"Monasterio de San Jerónimo",
	"Sacromonte",
	"Capilla Real"]

	let nSitios = req.queryResult.outputContext[0].CantidadSitios

	let total = elegirNMonumentos(monumentos, nSitios)

	let cad = ""
	total.forEach((elemento) => cad += elemento + ", ")

	res.send(cad)

}


/*
export default (request, response) => {
    let bodyString = request.body;
    var entradaDialogFlow = JSON.parse(bodyString);
    console.log("Entrada DialogFlow: "+entradaDialogFlow);
    var pais=entradaDialogFlow['queryResult']['parameters'].pais;


    var capital="Madrid";


    let respuesta = "La capital de "+pais+" es "+capital;

    // Set the status code - by default it would return 200
    response.status = 200;

    // Set the headers the way you like
    response.headers['X-Custom-Header'] = 'CustomHeaderValue';
    return request.json().then((body) => {
    return response.send({ fulfillmentText: respuesta });
    //return response.send({speech: "What's up cool developer :)"});

}).catch((err) => {
return response.send("Malformed JSON body.");
});
};

*/
