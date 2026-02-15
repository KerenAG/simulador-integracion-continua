const etapaCommit = document.getElementById("stage-commit");
const etapaCI = document.getElementById("stage-ci");
const etapaDespliegue = document.getElementById("stage-deploy");

const logOutput = document.getElementById("logOutput");

function actualizarEstado(etapa, claseEstado, texto) {
    const estado = etapa.querySelector(".status");
    estado.className = "status " + claseEstado;
    estado.textContent = texto;
}

function ejecutarCommit() {
    actualizarEstado(etapaCommit, "running", "En ejecución");
    logOutput.textContent = "Cambios detectados. Iniciando flujo de Integración Continua...";

    setTimeout(() => {
        actualizarEstado(etapaCommit, "success", "Completado");
        etapaCI.querySelector("button").disabled = false;
        logOutput.textContent = "Integración lista para ejecutarse.";
    }, 1500);
}

function ejecutarPipeline() {
    actualizarEstado(etapaCI, "running", "En ejecución");
    logOutput.textContent = "Ejecutando proceso automático de integración...";

    setTimeout(() => {
        actualizarEstado(etapaCI, "success", "Completado");
        etapaDespliegue.querySelector("button").disabled = false;
        logOutput.textContent = "Proceso de integración finalizado correctamente.";
    }, 2000);
}

function ejecutarDespliegue() {
    actualizarEstado(etapaDespliegue, "running", "En ejecución");
    logOutput.textContent = "Desplegando aplicación en Surge...";

    setTimeout(() => {
        actualizarEstado(etapaDespliegue, "success", "Completado");
        logOutput.textContent = "Despliegue realizado exitosamente.";
    }, 2000);
}
