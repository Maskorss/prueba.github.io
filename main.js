document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Verifica las credenciales aquí (esto es solo un ejemplo)
    if (username === "usuario" && password === "contraseña") {
        window.location.href = "contenido-secreto.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo nuevamente.");
    }
});
