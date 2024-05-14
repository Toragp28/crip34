document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupère le contenu du champ de texte et du champ de grade
    var userMessage = document.getElementById("user-message").value;
    var userGrade = document.getElementById("user-grade").value;

    if (userMessage.trim() === "") {
        return; // Si le champ de message est vide, ne rien faire
    }

    // Crée un nouvel élément de message avec le grade sélectionné
    var newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.innerHTML = '<span class="badge">' + userGrade + '</span> <span class="username">Vous</span>: <span class="text">' + userMessage + '</span>';

    // Ajoute le nouveau message au début du "chat-container"
    var chatContainer = document.getElementById("chat-container");
    chatContainer.appendChild(newMessage);

    // Efface le contenu du champ de texte après l'envoi
    document.getElementById("user-message").value = "";
});

