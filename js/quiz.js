function corrigerQuiz() {

    var score = 0;
    var reponses = "";

    function afficher(numero, texte, estCorrect) {
        if (estCorrect) {
            score++;
            reponses += `<span class="bonne-reponse">${numero}. ${texte} ✔</span><br>`;
        } else {
            reponses += `<span class="mauvaise-reponse">${numero}. ${texte} ✘</span><br>`;
        }
    }

    afficher(1, "HTML = HyperText Markup Language", document.quizForm.q1.value === "a");
    afficher(2, "CSS sert à la mise en forme", document.quizForm.q2.value === "b");
    afficher(3, "JavaScript rend la page interactive", document.quizForm.q3.value === "a");
    afficher(4, "La balise a crée un lien", document.quizForm.q4.value === "b");
    afficher(5, "La propriété color change la couleur du texte", document.quizForm.q5.value === "a");
    afficher(6, "JavaScript est un langage de programmation", document.quizForm.q6.value === "a");
    afficher(7, "La balise p définit un paragraphe", document.quizForm.q7.value === "b");
    afficher(8, "La balise main contient le contenu principal", document.quizForm.q8.value === "a");
    afficher(9, "Bootstrap est un framework CSS", document.quizForm.q9.value === "a");
    afficher(10, "if permet une condition en JavaScript", document.quizForm.q10.value === "b");

 
    var mention = "";
    if (score >= 9) {
        mention = "Excellent";
    } else if (score >= 7) {
        mention = "Bien";
    } else if (score >= 5) {
        mention = "Moyen";
    } else {
        mention = "Insuffisant";
    }

    document.getElementById("resultat").innerHTML =
        `<div class="mention">Votre score est : <strong>${score} / 10</strong> – ${mention}</div><br>
         <strong>Correction :</strong><br>${reponses}`;
}


function verifierContact() {
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var sujet = document.getElementById("sujet").value;
    var message = document.getElementById("message").value;

    if (nom === "" || email === "" || sujet === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        alert("Message envoyé avec succès !");

        // Optionnel : vider le formulaire
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("sujet").value = "";
        document.getElementById("message").value = "";
    }
}
