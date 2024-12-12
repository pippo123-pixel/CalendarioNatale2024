let giorniSettimana = new Array("Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato");
let NUM_SETT = 5;
let GIORNI_SETT = giorniSettimana.length;

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
    let data = new Date();
    let giornoOggi = data.getDate();

    for(let i=0; i < giornoOggi-1; i++){
        document.getElementById("cella" + (i+1)).style.backgroundImage = "url('img/x.png')";
        document.getElementById("cella" + (i+1)).style.backgroundSize = "cover";
    }
}