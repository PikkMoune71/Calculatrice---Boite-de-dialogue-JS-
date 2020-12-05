//Fonction pour additioner deux nombres
function addition(nombreA, nombreB){

    return nombreA + nombreB;
}

//Fonction pour multiplier deux nombres
function multiplication(nombreA, nombreB){

    return nombreA * nombreB;

}

//Fonction pour soustraire deux nombres
function soustraction(nombreA, nombreB){
    
    
    return nombreA - nombreB;

}

//Fonction pour diviser deux nombres
function division(nombreA, nombreB){
    if(nombreB == 0){
        throw new Error("Impossible de diviser par 0");
    }
    return nombreA / nombreB;

}

let restart = false;

do{
    // Choix de l'utilisateur
    do {
        var choix = Number(prompt("Que souhaitez vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division"));
    }while (choix != 1  && choix != 2 && choix != 3 && choix != 4);

    //Demande de deux nombres
    do{
        var premierNombre   =   Number(prompt("Entrez un premier nombre :"));
        var deuxiemeNombre  =   Number(prompt("Entrez un deuxème nombre :"));
    }while(isNaN(premierNombre) || isNaN(deuxiemeNombre));


    try{
        switch(choix){
            case 1:
                var resultat = addition(premierNombre, deuxiemeNombre);
                break;
        
            case 2:
                var resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
        
            case 3:
                var resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
        
            case 4:
                var resultat = division(premierNombre, deuxiemeNombre);
                break;
            default:
            throw new Error("Une erreur est survenue."); 
        } 
        alert("Voici le résultrat : " + resultat);
    }catch(error){
        alert(error);
    }
    
    restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
    
}while(restart);