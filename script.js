let forumalario = document.getElementById("formulario")
let textareaCesar = document.getElementById("resultadoTexto")

let btnCifrar = document.getElementById("btnCifrar")
let btnDescifrar = document.getElementById("btnDescifrar")

let input = document.getElementById("input")


const abecedario = [

  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n",
  "ñ", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"

];


btnCifrar.addEventListener("click" , cifrar);


	function cifrar(){

		let resultado = []

		let text = input.value;

		console.log("CIFRANDO: " + text);

		let array = text.split("")

		for(let i = 0 ; i < array.length ; i++){

			let el = array[i]

			if (el == "v"  || el == "w" || el == "x" || el == "y" || el == "z"){

				let newIndex = (abecedario.indexOf(el) + 5) % abecedario.length;

				resultado.push(abecedario[newIndex])

			}

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

		let text = input.value;

		console.log("DESCIFRANDO: " + text);

		let array = text.split("")

		for(let i = 0 ; i < array.length ; i++){

			let el = array[i]

			if (el == "a"  || el == "b" || el == "c" || el == "d" || el == "e"){

				let newIndex = ((abecedario.indexOf(el) - 5) + abecedario.length) % abecedario.length;

				resultado.push(abecedario[newIndex])

			}

			else {
				
				resultado.push(abecedario[abecedario.indexOf(el) - 5])

			}
		}

		textareaCesar.value = resultado.join("")

		console.log(resultado.join(""));
		
		
	}
		
	


