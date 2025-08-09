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

const botones = [
    { id: "numero0", clase: "boton-numero", texto: "0" },
    { id: "numero1", clase: "boton-numero", texto: "1" },
    { id: "numero2", clase: "boton-numero", texto: "2" },
    { id: "numero3", clase: "boton-numero", texto: "3" },
    { id: "numero4", clase: "boton-numero", texto: "4" },
    { id: "numero5", clase: "boton-numero", texto: "5" },
    { id: "numero6", clase: "boton-numero", texto: "6" },
    { id: "numero7", clase: "boton-numero", texto: "7" },
    { id: "numero8", clase: "boton-numero", texto: "8" },
    { id: "numero9", clase: "boton-numero", texto: "9" },
    { id: "punto", clase: "boton-numero", texto: "." },
    { id: "c", clase: "boton-numero btn-op", texto: "C" },
    { id: "parentecis", clase: "boton-numero btn-op", texto: "( )" },
    { id: "porcentaje", clase: "boton-numero btn-op", texto: "%" },
    { id: "division", clase: "boton-numero btn-op", texto: "/" },
    { id: "multiplicacion", clase: "boton-numero btn-op", texto: "X" },
    { id: "resta", clase: "boton-numero btn-op", texto: "-" },
    { id: "suma", clase: "boton-numero btn-op", texto: "+" },
    { id: "igual", clase: "boton-numero", texto: "=" },
    { id: "masmenos", clase: "boton-numero", texto: "+/-" },
];

botones.forEach(({ id, clase, texto }) => {
    const boton = nuevoElemento("button", `${id}`, `${clase}`, `${texto}`);
    teclado.appendChild(boton);
    asignarEventoBoton(boton);
});

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
let operacionFormada = "";

asignarEventoBoton(borrar);

entradaPorTeclado();

function asignarEventoBoton(elemento) {
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
        || elemento.id === "punto"
        || elemento.id === "borrar";

    // Acciones 
    elemento.addEventListener("click", function () {
        // Se valida elementos 
        validaSiDisplayOperacionesEsVacio(elemento.id);

        if (elemento.id === "parentecis") {

            if (operaciones.textContent.trim().length === 0) {
                acumulado.push("(");
            } else {
                const parentecisAbierto = acumulado.filter(elemen => elemen === "(").length;
                const parentecisCerrado = acumulado.filter(elemen => elemen === ")").length;

                if (parentecisCerrado < parentecisAbierto) {
                    acumulado.push(")");
                } else {
                    acumulado.push("(");
                }
            }
        }

        if (elemento.id === "borrar") {
            //code
            borrarUltimoCaracter();
        }

        if (!elementosNoOperables) {
            acumulado.push(elemento.textContent);
        }
        else {
            if (acumulado.length !== 0) {
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
        }

        // 

        muestraOperacionFormadaYResultado();


        // Limpiar display
        if (elemento.id === "c")
            limpiarDisplay();

        if (elemento.id === "igual")
            esIgual();


    });
}

function limpiarDisplay() {
    operaciones.textContent = "";
    resultado.textContent = "";
    acumulado = [];
}

function muestraResultado() {
    try {
        let result = math.evaluate(acumulado.join(""));
        resultado.textContent = result;
    } catch (error) {
        resultado.textContent = "";
        console.warn("Expresión inválida", error);
    }
}

function borrarUltimoCaracter() {
    acumulado.pop();
    operacionFormada = acumulado.join("");
    operaciones.textContent = operacionFormada;
}

function muestraOperacionFormadaYResultado() {
    operacionFormada = acumulado.join("");
    operaciones.textContent = operacionFormada;
    muestraResultado();
}

function esIgual() {
    try {
        let resultadoEval = math.evaluate(acumulado.join(""));
        resultado.textContent = resultadoEval;
        acumulado = [resultadoEval.toString()];
        operaciones.textContent = resultadoEval;
    } catch (e) {
        resultado.textContent = "Error";
    }
}

function validaSiDisplayOperacionesEsVacio(elemento) {
    const esPunto = elemento === "punto" || elemento === ".";
    if (operaciones.textContent === "") {
        // Si el div.operaciones esta vacío y se digita . se agregara 0.
        if (esPunto) {
            acumulado.push(0, ".")
            operaciones.textContent = acumulado;
        }

    } else {
        if (esPunto) {
            acumulado.push(".");
        }
    }
}

// Nueva Funcionalidad que permite la entrada por teclado

function entradaPorTeclado() {
    addEventListener("keydown", function (e) {
        // Teclas especiales
        if (e.key === "Backspace") {
            borrarUltimoCaracter();
            muestraOperacionFormadaYResultado();
            return;
        }
        if (e.key === "Escape") {
            limpiarDisplay();
            return;
        }
        if (e.key === "Enter") {
            esIgual();
            return;
        }

        // Validar y procesar teclas numéricas u operadores
        const dato = validaEntradaTeclado(e);
        if (dato) {
            acumulado.push(dato);
            muestraOperacionFormadaYResultado();
        }
    });
}

agregaYQuitaEstilosActive();


function validaEntradaTeclado(event) {
    const teclasPermitidas = "0123456789.+-*/%()Enter";
    if (teclasPermitidas.includes(event.key)) {
        return event.key;
    }
}

function agregaYQuitaEstilosActive() {
    const keyMap = {
        "0": numero0,
        "1": numero1,
        "2": numero2,
        "3": numero3,
        "4": numero4,
        "5": numero5,
        "6": numero6,
        "7": numero7,
        "8": numero8,
        "9": numero9,
        ".": punto,
        "+": suma,
        "-": resta,
        "*": multiplicacion,
        "/": division,
        "%": porcentaje,
        "(": parentecis,
        ")": parentecis,
        "Escape": c
    };

    addEventListener("keydown", function (e) {
        let boton = keyMap[e.key] || null;

        if (e.key === "Enter") {
            igual.classList.add("igual-active");
        } else if (e.key === "Backspace") {
            borrar.classList.add("borrar-active");
        } else if (boton) {
            boton.classList.add("boton-numero-active");
        }

        setTimeout(() => {
            igual.classList.remove("igual-active");
            borrar.classList.remove("borrar-active");
            if (boton) boton.classList.remove("boton-numero-active");
        }, 150);
    });
}

