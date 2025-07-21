/**
 * Diseño de la calculadora con su teclado numérico
 * y display con resultado y operaciones
 */


const container = document.getElementById("container");

// Se crean contenedor principal 

const calculadora = nuevoElemento("div", "calculadora", "calculadora");

/**
 * Creación de contenedores para las operaciones, resultado, opciones
 * y teclado numérico 
 */
const displayOperaciones = nuevoElemento("div", "displayOperaciones", "displayOperaciones");
const opciones = nuevoElemento("div", "opciones", "opciones");
const teclado = nuevoElemento("div", "teclado", "teclado");

// Se agrega elemento al div.calculadora
calculadora.appendChild(displayOperaciones);

/**
 * Se crean contenedores para mostrar las operaciones
 * y mostrar el resultado, a su vez se agregan al
 * div.displayOperaciones
 */
const operaciones = nuevoElemento("div", "operaciones", "operaciones");
displayOperaciones.appendChild(operaciones);

const resultado = nuevoElemento("div", "resultado", "resultado");
displayOperaciones.appendChild(resultado);

// Se agrega el elmento div.opciones a div.calculadora
calculadora.appendChild(opciones);


// Se crea elemento para borrar y se agrega a div.opciones
const borrar = nuevoElemento("button", "borrar", "borrar");
opciones.appendChild(borrar);

// Se crea Icono de borrar y se agrega a button.borrar 
const iconBorrar = nuevoElemento("span", "del", "del");
borrar.appendChild(iconBorrar);

// Se agrega elemento a div.calculadora
calculadora.appendChild(teclado);

/** 
 * Se crean elementos numéricos y de operaciones
 * y se agregan a div.teclado
 * */
const numero0 = nuevoElemento("button", "numero0", "numero0 boton-numero", "0");
teclado.appendChild(numero0);

const numero1 = nuevoElemento("button", "numero1", "numero1 boton-numero", "1");
teclado.appendChild(numero1);

const numero2 = nuevoElemento("button", "numero2", "numero2 boton-numero", "2");
teclado.appendChild(numero2);

const numero3 = nuevoElemento("button", "numero3", "numero3 boton-numero", "3");
teclado.appendChild(numero3);

const numero4 = nuevoElemento("button", "numero4", "numero4 boton-numero", "4");
teclado.appendChild(numero4);

const numero5 = nuevoElemento("button", "numero5", "numero5 boton-numero", "5");
teclado.appendChild(numero5);

const numero6 = nuevoElemento("button", "numero6", "numero6 boton-numero", "6");
teclado.appendChild(numero6);

const numero7 = nuevoElemento("button", "numero7", "numero7 boton-numero", "7");
teclado.appendChild(numero7);

const numero8 = nuevoElemento("button", "numero8", "numero8 boton-numero", "8");
teclado.appendChild(numero8);

const numero9 = nuevoElemento("button", "numero9", "numero9 boton-numero", "9");
teclado.appendChild(numero9);

const punto = nuevoElemento("button", "punto", "punto boton-numero", ".");
teclado.appendChild(punto);

const c = nuevoElemento("button", "c", "c boton-numero btn-op", "C");
teclado.appendChild(c);

const parentecis = nuevoElemento("button", "parentecis", "parentecis boton-numero btn-op", "( )");
teclado.appendChild(parentecis);

const porcentaje = nuevoElemento("button", "porcentaje", "porcentaje boton-numero btn-op", "%");
teclado.appendChild(porcentaje);

const division = nuevoElemento("button", "division", "division boton-numero btn-op", "/");
teclado.appendChild(division);

const multiplicacion = nuevoElemento("button", "multiplicacion", "multiplicacion boton-numero btn-op", "X");
teclado.appendChild(multiplicacion);

const resta = nuevoElemento("button", "resta", "resta boton-numero btn-op", "-");
teclado.appendChild(resta);

const suma = nuevoElemento("button", "suma", "suma boton-numero btn-op", "+");
teclado.appendChild(suma);

const igual = nuevoElemento("button", "igual", "igual boton-numero", "=");
teclado.appendChild(igual);

const masmenos = nuevoElemento("button", "masmenos", "masmenos boton-numero", "+/-");
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

    if (typeof elemento !== "string" || !elemento.trim()) {
        throw new Error("El tipo de elemento debe ser una cadena no vacía.");
    }

    const miElemento = document.createElement(elemento);


    if ((elemento === "input")) {
        if (contenido) miElemento.value = contenido;
    } else {
        if (contenido) miElemento.textContent = contenido;
    }

    if (id) miElemento.id = id;
    if (clase) miElemento.className = clase;

    return miElemento;
}

// Logica
let acumulado = [];
let formarOperacion = "";

clickTeclado(numero0);
clickTeclado(numero1);
clickTeclado(numero2);
clickTeclado(numero3);
clickTeclado(numero4);
clickTeclado(numero5);
clickTeclado(numero6);
clickTeclado(numero7);
clickTeclado(numero8);
clickTeclado(numero9);
clickTeclado(parentecis);
clickTeclado(porcentaje);
clickTeclado(division);
clickTeclado(multiplicacion);
clickTeclado(resta);
clickTeclado(suma);
clickTeclado(masmenos);
clickTeclado(punto);
clickTeclado(igual);
clickTeclado(c);
clickTeclado(borrar);


function clickTeclado(elemento) {
    const elementosNoOperables =
        elemento.id === "c"
        || elemento.id === "suma"
        || elemento.id === "multiplicacion"
        || elemento.id === "resta"
        || elemento.id === "division"
        || elemento.id === "porcentaje"
        || elemento.id === "masmenos"
        || elemento.id === "parentecis"
        || elemento.id === "igual"
        || elemento.id === "borrar";

    // Acciones 
    elemento.addEventListener("click", function () {
        // Se valida elementos 
        if (operaciones.textContent === "") {
            // Si el div.operaciones esta vacío y se digita . se agregara 0.
            if (elemento.id === "punto") {
                acumulado.push(0 + '.');
                operaciones.textContent = acumulado;
            }

            if (elemento.id === "suma" ||
                elemento.id === "resta" ||
                elemento.id === "multiplicacion" ||
                elemento.id === "division" ||
                elemento.id === "porcentaje"
            ) {
                console.warn("El formato usado no es válido");
            }
        }

        if (elemento.id === "parentecis") {
            acumulado.push("(");
            operaciones.textContent = acumulado;
        }

        if (elemento.id === "borrar") {
            //code
            acumulado.pop();
            formarOperacion = acumulado.join();
            operaciones.textContent = formarOperacion;
        }

        if (!elementosNoOperables) {
            acumulado.push(elemento.textContent);
        }
        else {
            switch (elemento.id) {
                case "suma":
                    acumulado.push("+");
                    break;

                case "resta":
                    acumulado.push("-");
                    break;

                case "multiplicacion":
                    acumulado.push("*");
                    break;

                case "division":
                    acumulado.push("/");
                    break;

                case "porcentaje":
                    acumulado.push("%");
                    break;

                default:
                    break;
            }
        }

        // 

        formarOperacion = acumulado.join("");
        operaciones.textContent = formarOperacion;
        muestraResultado();


        // Limpiar display
        if (elemento.id === "c")
            limpiarDisplay();
    });
}

function limpiarDisplay() {
    operaciones.textContent = "";
    resultado.textContent = "";
    acumulado = [];
}

function muestraResultado() {
    let result = math.evaluate(acumulado.join(""));
    resultado.textContent = result;
}

