let textareaCesar = document.getElementById("resultadoTexto")

let btnCifrar = document.getElementById("btnCifrar")
let btnDescifrar = document.getElementById("btnDescifrar")

let input = document.getElementById("input")


const abecedario = [

  "A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N",
  "Ñ", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"

];


btnCifrar.addEventListener("click" , cifrar);


	function cifrar(){

		let resultado = []

		let text = input.value.toUpperCase();

		console.log("CIFRANDO: " + text);

		let array = text.split("")

		for(let i = 0 ; i < array.length ; i++){

			let el = array[i]

			if (el == "V"  || el == "W" || el == "X" || el == "Y" || el == "Z"){

				let newIndex = (abecedario.indexOf(el) + 5) % abecedario.length;

				resultado.push(abecedario[newIndex])

			}

			else if(!abecedario.includes(el))
					resultado.push(el)
				
			else {
				
				resultado.push(abecedario[abecedario.indexOf(el) + 5])

			}
		}

		textareaCesar.value = resultado.join("")

		console.log(resultado.join(""));
		
		
		
	}


btnDescifrar.addEventListener("click" , descifrar);

	function descifrar(){


		
		let resultado = []

		let text = input.value.toUpperCase();

		console.log("DESCIFRANDO: " + text);

		let array = text.split("")

		for(let i = 0 ; i < array.length ; i++){

			let el = array[i]

			if (el == "A"  || el == "B" || el == "C" || el == "D" || el == "E"){

				let newIndex = ((abecedario.indexOf(el) - 5) + abecedario.length) % abecedario.length;

				resultado.push(abecedario[newIndex])

			}

			else if(!abecedario.includes(el))
					resultado.push(el)

			else {
				
				resultado.push(abecedario[abecedario.indexOf(el) - 5])

			}
		}

		textareaCesar.value = resultado.join("")

		console.log(resultado.join(""));
		
		
	}

const copybtn = document.getElementById("copybtn");

	copybtn.addEventListener("click" , copiar)

	function copiar (){

		const texto = textareaCesar.value
		 navigator.clipboard.writeText(texto)

	}
		