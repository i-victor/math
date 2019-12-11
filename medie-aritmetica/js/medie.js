
// file: medie.js

/*
var A = [

	{
		id: "obj1",
		val: 3
	},

	{
		id: "obj2",
		val: 7
	},

	{
		id: "obj3",
		val: 15
	}

];
*/

function calculeazaMedia() {

	var A = document.getElementsByTagName('input'); // luam multimea de elemente de tip input din pagina HTML

	var n = 0; // initializam numarul de elemente cu zero
	var suma = 0; // initializam totalul cu zero

	// parcurgem multimea de elemente cu for
	for(var i=0; i<A.length; i++) { // for incepe la zero si se termina la ultimul element din multime
		var input = A[i]; // atribuim lui input valoarea curenta din multime, pe rand
		n = n + 1; // incrementam numarul de elemente cu unu (la fiecare parcurgere avem cate un nou element)
		suma = suma + parseInt(input.value); // adunam la total valoarea din input
	}

	var medie;
	if(n > 0) { // daca numarul de elemente este mai mare decat zero atunci calculam media
		medie = suma / n; // media aritmetica se calculeaza ca suma elementelor impartita la numarul de elemente din multime
	} else {
		medie = 'n/a';
	}

	document.getElementById('rezultat').innerText = 'Media este: ' + medie; // afisam rezultat

} //END FUNCTION

//====================================================

function creazaUnNouInput() {

	var area = document.getElementById('area');

	var input = document.createElement('input');
	input.setAttribute('type', 'number');
	input.setAttribute('min', '1');
	input.setAttribute('value', '1');
	input.setAttribute('id', 'input-' + Math.random());
	input.setAttribute('class', 'w3-input');
	area.appendChild(input);

} //END FUNCTION

//====================================================

function stergeUltimulInput() {

	var area = document.getElementById('area');
	area.removeChild(area.lastChild);

} //END FUNCTION


// #end js
