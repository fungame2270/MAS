utilizadorTipo = "";

function userNext() {
    var main = document.getElementsByClassName("col-xl-2 mx-auto");
    utilizadorTipo = "utente";
    main[0].innerHTML = "";
    //Nome
    main[0].innerHTML += "<div style='padding-top:50px'><h6>Nome</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Data nascimento
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Data de nascimento</h6></div><input type='date' class='form-control form-control-lg' /></div>";

    //Nº Identificação
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Nº de Identificação Civil</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Data de validade
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Data validade CC</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Nº Utente Saúde
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Nº de Utente de Saúde</h6></div><input type='text' id='numeroUtente' class='form-control form-control-lg' /></div>";

    //Telefone
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Telefone</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Morada
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Morada</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Email
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Email</h6></div><input type='email' id='email' class='form-control form-control-lg' /></div>";

    //Password
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Password</h6></div><input type='password' id='password' class='form-control form-control-lg' /></div>";

    //Registar
    main[0].innerHTML += "<div class='text-center text-lg-start pt-4 pb-3'><div class='d-grid gap-2'><button type='button' class='btn btn-primary btn-lg' style='padding-left: 2.5rem; padding-right: 2.5rem;' onclick='registo()'>Registar</button></div></div></a>";
    
}


function labNext() {
    var main = document.getElementsByClassName("col-xl-2 mx-auto");
    utilizadorTipo = "lab";
    main[0].innerHTML = "";
    //Nome
    main[0].innerHTML += "<div style='padding-top:50px'><h6>Nome da Empresa</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //NIF/NIPC
    main[0].innerHTML += "<div style='padding-top:20px'><h6>NIF/NIPC</h6></div><input type='number' class='form-control form-control-lg' /></div>";

    //Sede
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Sede</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //NISS
    main[0].innerHTML += "<div style='padding-top:20px'><h6>NISS</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Código acesso cartão da empresa
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Código Cartão Empresa</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Email
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Email</h6></div><input type='email' id='email' class='form-control form-control-lg' /></div>";

    //Password
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Password</h6></div><input type='password' id='password' class='form-control form-control-lg' /></div>";

    //Registar
    main[0].innerHTML += "<div class='text-center text-lg-start pt-4 pb-3'><div class='d-grid gap-2'><button type='button' class='btn btn-primary btn-lg' style='padding-left: 2.5rem; padding-right: 2.5rem;' onclick='registo()'>Registar</button></div></div>";  
}


function doctorNext() {
    var main = document.getElementsByClassName("col-xl-2 mx-auto");
    utilizadorTipo = "medico";
    main[0].innerHTML = "";
    //Nome
    main[0].innerHTML += "<div style='padding-top:50px'><h6>Nome</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Data nascimento
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Data de nascimento</h6></div><input type='date' class='form-control form-control-lg' /></div>";

    //Nº Identificação
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Nº de Identificação Civil</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Data de validade
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Data validade CC</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Telefone
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Telefone</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Morada
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Morada</h6></div><input type='text' class='form-control form-control-lg' /></div>";

    //Email
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Email</h6></div><input type='email' id='email' class='form-control form-control-lg' /></div>";

    //Password
    main[0].innerHTML += "<div style='padding-top:20px'><h6>Password</h6></div><input type='password' id='password' class='form-control form-control-lg' /></div>";

    //Registar
    main[0].innerHTML += "<div class='text-center text-lg-start pt-4 pb-3'><div class='d-grid gap-2'><button type='button' class='btn btn-primary btn-lg' style='padding-left: 2.5rem; padding-right: 2.5rem;' onclick='registo()'>Registar</button></div></div>";
 
}


function registo(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var userType = utilizadorTipo;
    if (userType == "utente"){
        var userNumber = document.getElementById('numeroUtente').value;
    }

    

    // Display
    users=JSON.parse((localStorage.getItem("all_users")));
    users.push({userType: userType, userNumber: userNumber, email: email, password: btoa(password)});
    localStorage.setItem('all_users',JSON.stringify(users));
    
    alert("Registado com sucesso!");
    setTimeout(function() {location.href = 'login.html';}, 300);

}