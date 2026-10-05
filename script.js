// ==========================
// VALORES DEL CONTROL
// ==========================

const dolor = document.getElementById("dolor");
const fatiga = document.getElementById("fatiga");
const sueno = document.getElementById("sueno");
const energia = document.getElementById("energia");

dolor.addEventListener("input", () => {
    document.getElementById("dolorNumero").textContent = dolor.value;
});

fatiga.addEventListener("input", () => {
    document.getElementById("fatigaNumero").textContent = fatiga.value;
});

sueno.addEventListener("input", () => {
    document.getElementById("suenoNumero").textContent = sueno.value;
});

energia.addEventListener("input", () => {
    document.getElementById("energiaNumero").textContent = energia.value;
});


// ==========================
// CONTROL DE RECUPERACIÓN
// ==========================

function evaluarEstado() {

    const d = Number(dolor.value);
    const f = Number(fatiga.value);
    const s = Number(sueno.value);
    const e = Number(energia.value);

    const resultado =
        document.getElementById("resultado");

    resultado.className = "";

    if (
        d >= 7 ||
        f >= 8 ||
        s <= 3 ||
        e <= 3
    ) {

        resultado.classList.add("estado-rojo");

        resultado.innerHTML = `
            <h3>🔴 Atención</h3>

            <p>
                Tus respuestas muestran una o más señales
                importantes de recuperación insuficiente.
            </p>

            <p>
                Evita usar este resultado como diagnóstico.
                Comunica cualquier dolor o problema al entrenador
                y busca valoración profesional cuando corresponda.
            </p>
        `;

    }

    else if (
        d >= 4 ||
        f >= 5 ||
        s <= 5 ||
        e <= 5
    ) {

        resultado.classList.add("estado-amarillo");

        resultado.innerHTML = `
            <h3>🟡 Precaución</h3>

            <p>
                Tus respuestas muestran algunas señales
                de recuperación incompleta.
            </p>

            <p>
                Considera ajustar la intensidad y comentar
                cómo te sientes con el entrenador.
            </p>
        `;

    }

    else {

        resultado.classList.add("estado-verde");

        resultado.innerHTML = `
            <h3>🟢 Sin alertas importantes</h3>

            <p>
                Según las respuestas ingresadas no aparecen
                alertas importantes en este control básico.
            </p>

            <p>
                Esto no descarta lesiones ni reemplaza una
                evaluación profesional.
            </p>
        `;

    }

}


// ==========================
// CRONÓMETRO
// ==========================

let segundosRestantes = 60;
let intervalo = null;


function actualizarReloj() {

    let minutos =
        Math.floor(segundosRestantes / 60);

    let segundos =
        segundosRestantes % 60;

    document.getElementById("reloj").textContent =
        String(minutos).padStart(2, "0")
        + ":" +
        String(segundos).padStart(2, "0");
}


function iniciarCronometro() {

    if (intervalo !== null) return;

    intervalo = setInterval(() => {

        if (segundosRestantes > 0) {

            segundosRestantes--;

            actualizarReloj();

        } else {

            clearInterval(intervalo);

            intervalo = null;

            alert("🏐 ¡Descanso terminado! Rockets, a entrenar.");

        }

    }, 1000);

}


function pausarCronometro() {

    clearInterval(intervalo);

    intervalo = null;

}


function reiniciarCronometro() {

    clearInterval(intervalo);

    intervalo = null;

    segundosRestantes = 60;

    actualizarReloj();

}


// ==========================
// INSCRIPCIÓN WHATSAPP
// ==========================

function enviarWhatsApp() {

    const nombre =
        document.getElementById("nombre").value.trim();

    const edad =
        document.getElementById("edad").value;

    const posicion =
        document.getElementById("posicion").value;

    const sede =
        document.getElementById("sede").value;


    if (!nombre || !edad || !posicion || !sede) {

        alert(
            "Por favor completa todos los datos."
        );

        return;

    }


    const mensaje =
`Hola Rockets 🏐🚀

Quiero información para entrenar con el club.

Nombre: ${nombre}
Edad: ${edad}
Posición: ${posicion}
Sede preferida: ${sede}

¿Podrían enviarme información sobre horarios e inscripción?`;


    const url =
        "https://wa.me/59175246030?text="
        + encodeURIComponent(mensaje);


    window.open(url, "_blank");

}