function gerarCodigo(){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var codigo = document.getElementById("codigo");
    for ( var i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    codigo.value = result;
}

function semHistorico(){
    var hiddenDiv = document.getElementById("semHistorico");
    hiddenDiv.classList.remove("d-none");
}

function comHistorico(){
    var hiddenDiv = document.getElementById("semHistorico");
    hiddenDiv.classList.add("d-none");
}

function confirmar(){
    alert("Confirmado!");

}


/*
code for sending SMS from one 'phone' to another one. Not working due to 'require' error.

var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');

// Send the text message.
client.messages.create({
to: 'YOURNUMBER',
from: 'NUMBER',
body: 'Hello from Twilio!'
});
*/