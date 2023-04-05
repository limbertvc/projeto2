function validarLogin(){
    const campoEmail = document.getElementById("campo_email");
    const campoSenha = document.getElementById("campo_senha");

    if (campoEmail.value!=="POTATO"&&campoSenha.value!=="123"){
        alert("email ou senha incorretos!");   
}

else{
    var token_login = Math.random().toString(36).substring(2);

    localStorage.setItem("token_login", token_login);
    botao_entrar=window.open("~/../index.html");
} 
}

function mostrarNome(nomeUsuario){
    document.write(' Hi ',nomeUsuario, ', bem-vindo(a)!')
}

function logout() {
    localStorage.removeItem('token')
    bts_sair =window.open("~/../login.html");
}
var count = 0
$(function() {
    let task_list = $("#task_list")
    $( "#myForm" ).submit(function( event ){
        let valuesInForm = $(this).serializeArray();
           console.table(valuesInForm);
           if (count<=6) {
            $("#taskTable").append('<tr> <td>'+valuesInForm[0].value+'</td>'+
            '<td>'+valuesInForm[1].value+'</td>'+
            '<td>'+valuesInForm[2].value+'</td> </tr>')
           }
           else{
            alert("O limite foi atingido!")
           }
           count += 1
           event.preventDefault();
    });
});