const container = document.getElementById("container");

const calculadora = nuevoElemento("div", "calculadora", "calculadora");

const displayOperaciones = nuevoElemento("div", "displayOperaciones", "displayOperaciones");

const opciones = nuevoElemento("div", "opciones", "opciones");

const teclado = nuevoElemento("div", "teclado", "teclado");

calculadora.appendChild(displayOperaciones);
calculadora.appendChild(opciones);
calculadora.appendChild(teclado);

const numero0 = nuevoElemento("div", "numero0", "numero0 boton-numero", "0");
teclado.appendChild(numero0);

const numero1 = nuevoElemento("div", "numero1", "numero1 boton-numero", "1");
teclado.appendChild(numero1);

const numero2 = nuevoElemento("div", "numero2", "numero2 boton-numero", "2");
teclado.appendChild(numero2);

const numero3 = nuevoElemento("div", "numero3", "numero3 boton-numero", "3");
teclado.appendChild(numero3);

const numero4 = nuevoElemento("div", "numero4", "numero4 boton-numero", "4");
teclado.appendChild(numero4);

const numero5 = nuevoElemento("div", "numero5", "numero5 boton-numero", "5");
teclado.appendChild(numero5);

const numero6 = nuevoElemento("div", "numero6", "numero6 boton-numero", "6");
teclado.appendChild(numero6);

const numero7 = nuevoElemento("div", "numero7", "numero7 boton-numero", "7");
teclado.appendChild(numero7);

const numero8 = nuevoElemento("div", "numero8", "numero8 boton-numero", "8");
teclado.appendChild(numero8);

const numero9 = nuevoElemento("div", "numero9", "numero9 boton-numero", "9");
teclado.appendChild(numero9);

const punto = nuevoElemento("div", "punto", "punto boton-numero", ".");
teclado.appendChild(punto);

const c = nuevoElemento("div", "c", "c boton-numero", "C");
teclado.appendChild(c);

const parentecis = nuevoElemento("div", "parentecis", "parentecis boton-numero", "( )");
teclado.appendChild(parentecis);

const porcentaje = nuevoElemento("div", "porcentaje", "porcentaje boton-numero", "%");
teclado.appendChild(porcentaje);

const division = nuevoElemento("div", "division", "division boton-numero", "/");
teclado.appendChild(division);

const multiplicacion = nuevoElemento("div", "multiplicacion", "multiplicacion boton-numero", "X");
teclado.appendChild(multiplicacion);

const resta = nuevoElemento("div", "resta", "resta boton-numero", "-");
teclado.appendChild(resta);

const suma = nuevoElemento("div", "suma", "suma boton-numero", "+");
teclado.appendChild(suma);

const igual = nuevoElemento("div", "igual", "igual boton-numero", "=");
teclado.appendChild(igual);

const masmenos = nuevoElemento("div", "masmenos", "masmenos boton-numero", "+/-");
teclado.appendChild(masmenos);

container.appendChild(calculadora);


/**
 * Crea un nuevo elemento HTML con los atributos especificados.
 *
 * @param {string} elemento - El nombre de la etiqueta HTML a crear (por ejemplo, 'div', 'span').
 * @param {string} [id=""] - El ID que se asignará al nuevo elemento.
 * @param {string} [clase=""] - La(s) clase(s) CSS que se asignarán al nuevo elemento.
 * @param {string} [contenido=""] - El contenido de texto que se insertará dentro del elemento.
 * @returns {HTMLElement} El nuevo elemento HTML creado.
 */
function nuevoElemento(elemento, id = "", clase = "", contenido = "") {

    const miElemento = document.createElement(elemento);

    if ((elemento === "input")) {
        miElemento.value = contenido;
    } else {
        miElemento.textContent = contenido;
    }

    miElemento.id = id;
    miElemento.className = clase;
    return miElemento;
}


