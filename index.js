
//------------------------------CLOCK----------------------------------------------------------------------------

// -------------------------------idée 1----------------------------------
// let index = 0 ;
// for ( i = 0 ; i < 60 ; i++ ){
    // i % 60;
    // setTimeout((){
    //     + on increment la minute quand ca arrive a 60
    // })
// }

// ----------------------------------test 1 avec tableau---------------------------------
// let secondArray = ["00", "01", "02", "03"];
// let timeSection = document.getElementById("time");
// let index = 0;
// for ( i = 0 ; i < secondArray.length ; i++ ) function seconde(){
//     index = (index + 1) % secondArray.length; 
//     setTimeout(() => { 
//         timeSection.innerHTML = secondArray[index];
//     }, 100); 
// };
// seconde();

//----------------------------------test 2 sans tableau------------------------------------

// let timeSection = document.getElementById("time");
// for ( i = 0 ; i < 60 ; i++ ) function seconde(){
//     i % 60; 
//     setTimeout(() => { 
//         return timeSection.innerHTML = i;
//     }, 100); 
// };
// seconde();

//---------------------------test avec les bases native de js ---------------------


// // // version avec tous les trucs deja pré fait dans le js 

function zeroAdd(i){ // pour mettre un zero devant 0 a 9
    if (i < 10){
        i = "0" + i // tu prends la valeur i donné et tu la remplaces pour ajouter un "0" avant
    }
    return i
} // j'aurai pu faire .padStart(2, "0") à la place sur second min hours ca fait moins de ligne

function Time(){
    const d = new Date(); // natif a js, prend la date du jour + heure ...
    // let timeSection = document.getElementById("time");
    let seconds = zeroAdd(d.getSeconds()); 
    let minutes = zeroAdd(d.getMinutes());
    let hours = zeroAdd(d.getHours());
    // let time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
}
Time();

// setInterval(() => Time(), 1000); // pour que ca se refresh toute les 1s
setInterval(Time, 1000);


//-------------------------------set an alarm modal-------------------------------------
document.getElementById("btnAlarm").onclick = function(){
    document.getElementById("modalAlarm").classList.add("active");
};
document.getElementById("closeBtn").onclick = function(){ 
    document.getElementById("modalAlarm").classList.remove("active"); 
};
window.onclick = (e) => {
    if(e.target === modalAlarm){
        modalAlarm.classList.remove("active"); 
    }
};

/*
pour l'alarme:

je veux que ce que je set dans l'input:

    -> soit pris en compte
        + verifie que l'heure actuelle n'est pas la meme que celle qu'on set sinon erreur
        + enregistre l'heure set quand on clique sur le bouton
        + affiche un message qui dit que l'alarme a bien été set
        + bonus/ ajoute un petit symbole qui previent l'utilisateur qu'il y a bien une alarme de mise 

    -> sonne a l'heure set a l'heure qu'il faut
        + sonne en repeat

    -> s'arrete seulement quand on appui sur snooze

*/




//---------snooze---------
// si appuie sur snooze alors que l'alarm est off, mettre un message qui dit qu'il n'y a pas d'alarm set
// si par contre l'alarme est set quand on appui  mais que ce n'est pas encore l'heure redire quand est ce que ca va sonner la prochaine alarme
// si du coup l'alarme sonne parce que c'est l'heure alors des que j'appuie dessus l'alarme s'arrete et marque un message genre alarme bien arreté

