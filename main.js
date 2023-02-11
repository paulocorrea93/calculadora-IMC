function imc (){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    
    const calcIMC = ((peso) / (altura * altura)).toFixed(2);
    
    resultado.textContent = `Olá ${nome}, seu IMC é ${calcIMC}!`
}

const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc)
