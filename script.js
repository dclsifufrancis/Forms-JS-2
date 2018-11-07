
document.getElementById("Envoyer").addEventListener("click", function() {

        
    var champsNom;
    var champsPrenom;

    var champsHommeFemme;

    var champsDateDeNaissance;

    var champsEmail;
    var champsMessage;


    function recupNom() {
        champsNom = document.forms["general"].nom.value;
    }

    function recupPrenom() {
        champsPrenom = document.forms["general"].prenom.value;
    }


    function recupHommeFemme () {
        if(document.getElementById("hommme").checked){
            var champsHommeFemme = document.getElementById("hommme").value;
        } else { // si ce n'est pas l'un, c'est l'autre
            var champsHommeFemme = document.getElementById("femme").value;
        }
        console.log("genre : " + champsHommeFemme);
    }

    function recupChampsDateDeNaissance() {
        champsDateDeNaissance = document.forms["general"].dateDeNaissance.value;
    }

    function recupEmail() {
        champsEmail = document.forms["general"].email.value;
    }

    function recupMessage() {
        champsMessage = document.forms["general"].message.value;
    }


    recupNom();
    recupPrenom();
    recupHommeFemme();
    recupChampsDateDeNaissance();
    recupEmail();
    recupMessage();
    verif();
    
    console.log(champsNom);
    console.log(champsPrenom);
    console.log(champsHommeFemme);
    console.log(champsDateDeNaissance);
    console.log(champsEmail);
    console.log(champsMessage);

    




    var anneeDeNaissance;
    var age; 
    //récupère le 2eme caractère dans l'ID
    anneeDeNaissance = champsDateDeNaissance.substr(0,4);
    age = (2018 - anneeDeNaissance);
    console.log(age);
    
    if (age < 18){
        document.getElementById("dateDeNaissance").style.backgroundColor = "red";
        console.log(age + " ans, l'utilisateur est mineur !")
    }else{
        console.log(age + " ans, l'utilisateur est majeur.")
    }
    
    function verif() {
        
        if ((champsNom == "") || (!isNaN(champsNom))) {
            document.getElementById("nom").style.borderColor ="red";
            console.log("champs Nom vide ou incorrect");

        }
        
        if ((champsPrenom == "") || (!isNaN(champsPrenom))){
            document.getElementById("prenom").style.borderColor = "red";
            console.log("champs Prénom vide ou incorrect");
        }
        
        if (champsDateDeNaissance == ""){
            document.getElementById("dateDeNaissance").style.borderColor = "red";
            console.log("champs Date De Naissance vide");
        }
        
        if (champsEmail == "") {
            document.getElementById("email").style.borderColor = "red";
            console.log("champsEmail vide");
        }
        
        if (champsMessage == "") {
            document.getElementById("message").style.borderColor = "red";
            console.log("champsMessage vide");
        }
    } 
    
    
    
});
