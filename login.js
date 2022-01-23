var users = new Array();
userType = new Object();
userNumber = new Object();
medico = new Object();
lab = new Object();
analista = new Object();

function login(){
    var users=JSON.parse((localStorage.getItem("all_users")));
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    for(var i=0; i<users.length; i++)
    {
        if (users[i].email == email){
            if (users[i].password == btoa(password)){
                if (users[i].userType == "utente"){
                    location.href = 'utente.html';
                }
                else if (users[i].userType == "medico"){
                    location.href = 'medico.html';
                }
                else if (users[i].userType == "lab"){
                    location.href = 'lab.html';
                }
                else if (users[i].userType == "analista"){
                    location.href = 'analista.html';
                }
            }
        }
    }
}

function buildDefaultUsers(){
    try{
        var users=JSON.parse((localStorage.getItem("all_users")));
        if(users.length == 0) {
            var someNumber = 0
            someNumber.replace("-", "");
        }
    }
    catch (error) {
        userBuildUp();
    }
}

function userBuildUp(){
    utente={
    userType: 'utente',
    userNumber: '123123123',
    email:'Joao@gmail.com',
    password:btoa('utente')
    };
    medico={
    userType: 'medico',
    email:'Miguel@gmail.com',
    password:btoa('medico')
    };
    lab={
    userType: 'lab',
    email:'Fabio@gmail.com',
    password:btoa('lab')
    };
    analista={
        userType: 'analista',
        email:'Joaquim@gmail.com',
        password:btoa('analista')
    };

    users.push(utente);
    users.push(medico);
    users.push(lab);
    users.push(analista);

    localStorage.setItem('all_users',JSON.stringify(users));
}




/*
// Name and Password from the register-form
var userName = document.getElementById('name');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name', userName.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}
*/

