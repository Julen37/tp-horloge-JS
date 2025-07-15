
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





//---------------------------test avec les trucs de js ---------------------


// // // version avec tous les trucs deja pré fait dans le js 

function zeroAdd(i){ // pour mettre un zero devant 0 a 9
    if (i < 10){
        i = "0" + i // tu prends la valeur i donné et tu la remplaces pour ajouter un "0" avant
    }
    return i
}

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

setInterval(() => Time(), 1000); // pour que ca se refresh toute les 1s