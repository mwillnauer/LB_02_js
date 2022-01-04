// Anmeldeformular mit HTML DOM
// Validierung E-Mail-Feld
let konzerte = 0;
let validationFields = {
    "name_felder": false,
    "lastname_felder": false,
    "address_felder": false,
    "email_felder": false
};

window.onload = function () {
    console.log(`prepareDropDown wird aufgerufen.`);
    try { //Error handling, wird nur von Konzerte-Seite aufgerufen
       prepareDropdown();
    } catch (err) {
        console.log(err);
    }
    try { //Error handling, wird nur von Konzerte-Seite aufgerufen
        loadMusician();
    } catch (err) {
        console.log(err);
    }
};

//Funktion zur Email Validierung (https://www.w3schools.com/bootstrap4/bootstrap_forms.asp)
function emailValidierung() {
    let email = document.getElementById("email_felder").value; //Inhalt auslesen
    // Unten steht der Regex für Email format --> gelernt bei einem Stack Overflow (kopiert von Website)
    let format = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (format.test(email)) { //Auf Regex überprüfen
        document.getElementById("email_felder").classList.add('is-valid'); //is-valid klasse hinzufügen (ist valid)
        document.getElementById("email_felder").classList.remove('is-invalid');//is-invalid klasse entfernen
        validationFields["email_felder"] = true;
    } else {
        document.getElementById("email_felder").classList.add('is-invalid');//is-invalid klasse hinzufügen (ist invalid)
        document.getElementById("email_felder").classList.remove('is-valid');//is-valid klasse entfernen
        validationFields["email_felder"] = false;
    }
    submitButton();
}

//Funktion zur Text Validierung; Falls kein Text vorhanen = valid, sonst invalid
function textValidierung(klasse) { //ALLES DOM MANIPULATIONEN --> ALLES WAS document.getElementById
    let content = document.getElementById(klasse).value;
    if (content.length > 0) {
        document.getElementById(klasse).classList.add('is-valid');
        document.getElementById(klasse).classList.remove('is-invalid');
        validationFields[klasse] = true;
    } else {
        document.getElementById(klasse).classList.add('is-invalid');
        document.getElementById(klasse).classList.remove('is-valid');
        validationFields[klasse] = false;
    }
    submitButton();
}

function submitButton() {
    let counter = 0;
    for (let k in validationFields) {
        if (validationFields[k] === true) {
            counter += 1;
        }
    }
    if (counter == 4) {
        document.getElementById("submitButton").removeAttribute("disabled");//https://www.w3schools.com/jsref/met_element_removeattribute.asp
    } else {
        document.getElementById("submitButton").setAttribute("disabled", "");//https://www.w3schools.com/jsref/met_element_removeattribute.asp

    }
}

//Dropdown vorbereiten (https://www.youtube.com/watch?v=uEPI3z8n7q4)
function prepareDropdown() {
    let option = "";
    //Daten in Dropdown laden ()
    for (let i = 0; i < musician.length; i++) {
        option += '<option value="' + musician[i].name + '">' + musician[i].name + "</option>"
    }
    document.getElementById('konzerte_select').innerHTML = option;
}

function loadMusician() {
    let musicians = "";
    let htmlObj = document.getElementById("saenger");
    for (let i = 0; i < musician.length; i++) {
        musicians += '<div class="artist">' + musician[i].name + '<br>' + musician[i].date + '<br>' + musician[i].place + '<br>' + musician[i].genre + '<br>' + musician[i].price + '</div>' //GEKAPSELTE DATEN --> OBJEKT LITERAL = {musician}// .name --> erste Eigenschaft, erste Proberty
    }
    htmlObj.innerHTML = musicians;
}

//HTML-DOM DEMONSTRIEREN
//DA WERDEN DIE JASON DATEN VERARBEITET
