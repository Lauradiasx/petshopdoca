const botao = document.querySelector('#button');
const redirect = document.querySelector('#pagUser');


botao.addEventListener('click', function() {
    const nome = document.querySelector('#username').value;
    const senha = document.querySelector('#password').value;
    if (nome == "laura" && senha == "123321") {
        setInterval(()=> {
            redirect.click();
        }, 200)
            
    } else {
        alert('Senha incorreta tente novamente!!');
    }
})