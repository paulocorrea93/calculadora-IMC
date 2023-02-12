function imc (){
    
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    
    const calcIMC = ((peso) / (altura * altura)).toFixed(2);

    if (nome != '' && altura != '' && peso != ''){
        
        let categoria = '';
        
        if(calcIMC < 18){
            categoria = 'você está abaixo do peso ideal';
        } else if (calcIMC < 25){
            categoria = 'você está no peso ideal';
        } else if (calcIMC < 30){
            categoria = 'você está com sobrepeso';
        } else {
            categoria = 'você está obeso!';
        }
        
        resultado.textContent = `Olá ${nome}, seu IMC é ${calcIMC} e ${categoria}!`
    } else{
        resultado.textContent = 'Preencha todos os campos!'
    }


}

const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc)
