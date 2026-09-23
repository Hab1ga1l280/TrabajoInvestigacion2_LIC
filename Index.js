// ===========Ejemplo 1=============
function validarCorreo() {
    const correo = document.getElementById("correo").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultado =regex.test(correo);

    if (resultado) {
        document.getElementById("resultadoCorreo").innerHTML ="Correo ingresado correctamente.";
    } else {
        document.getElementById("resultadoCorreo").innerHTML = "Correo no valido. Ingreselo correctamente.";
    }
}

// ===========Ejemplo 2============
function validarContrasena() {
    const contrasena =  document.getElementById("contrasena").value;
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    const resultado = regex.test(contrasena);

    if (resultado) { 
        document.getElementById("resultadoContrasena").innerHTML ="Contraseña valida.";
    } else {
        document.getElementById("resultadoContrasena").innerHTML ="Contraseña no valida. No cumple los requisitos."; 
    }
}

// =========Ejmplo 3=============
function validarTelefono() {
    const telefono = document.getElementById("telefono").value;
    const regex = new RegExp("^\\d{8}$");
    const resultado =regex.test(telefono);

    if (resultado) {
        document.getElementById("resultadoTelefono").innerHTML ="Numero ingresado correctamente.";

    } else { 
        document.getElementById("resultadoTelefono").innerHTML ="Numero no valido. Debe contener 8 digitos.";
    }
}

// ==========Ejemplo 4==============
function buscarDiptongo() {
    const oracion = document.getElementById("oracion").value;
    const regex =/ai|au|ei|eu|oi|ou|ia|ie|io|ua|ue|uo/gi;
    const resultado =oracion.match(regex);

    if (resultado) {
        // Elimina las coincidencias repetidas (para que no salga dos veces el mismo diptongo)
        const diptongos = [...new Set(resultado.map(x => x.toLowerCase()))];

        document.getElementById("resultadoDiptongo").innerHTML ="Diptongo/s encontrado/s: <strong>" + diptongos.join(", ") + "</strong>";
    } else {
        document.getElementById("resultadoDiptongo").innerHTML ="No hay diptongos en la oracion.";
    }
}

