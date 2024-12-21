let giorniSettimana = new Array("Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato");
let NUM_SETT = 5;
let GIORNI_SETT = giorniSettimana.length;
let intervalID = setInterval(segnaX, 1000);

function creaTabella(){
    let stringaTabella = "<table>";
    
    stringaTabella += "<tr>";
    for(let i=0; i < 7; i++){
        stringaTabella += "<td class='intestazione'>"+ giorniSettimana[i] +"</td>";
    }
    stringaTabella += "</tr>";

    let unoDicembre = new Date("2024/12/01");
    let giornoSettimana = unoDicembre.getDay();
    // console.log(giornoSettimana);
    let cont = 1;
    for(let i=0; i < NUM_SETT; i++){
        stringaTabella += "<tr>";
        for(let j=0; j < GIORNI_SETT; j++){
            if(giornoSettimana > 0 || cont > 31){
                stringaTabella += "<td class='cella'></td>";
                giornoSettimana--;
            } else {
                stringaTabella += "<td class='cella' id='cella"+ cont +"'>"+ cont +"</td>";
                cont++;
            }
        }
        stringaTabella += "</tr>";
    }
    stringaTabella += "</table>";

    document.getElementById("box-tabella").innerHTML = stringaTabella;

    segnaX();
}

function segnaX(){
    let date = new Date();
    let today = date.getDate();

    for(let i=0; i < today; i++){
        document.getElementById("cella" + (i+1)).style.backgroundImage = "url('img/x.png')";
        document.getElementById("cella" + (i+1)).style.backgroundSize = "cover";
    }

    let dateXmas = new Date("2024/12/25 00:00:00");
    let millisecXmas = dateXmas.getTime();
    let millisecsNow = date.getTime();

    let difference = millisecXmas - millisecsNow;
    
//Calcolo tempo mancante a natale
    let secs = difference / 1000;
    let hrs = Math.floor(secs / 3600); 
    let min = Math.floor((secs % 3600) / 60);
    let sec = Math.floor(secs % 60);

    // document.getElementById("countdown").innerHTML = hrs + ":" + min + ":" + sec;
    // console.log("Ore: " + hrs + " Minuti: " + min + " Secondi: " + sec);

}