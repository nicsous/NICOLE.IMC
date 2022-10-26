const resultado = document.getElementById('resultado');

function imc () {
    var elemento=document.getElementById("myimage");

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso  = document.getElementById('peso').value;
    const idade = document.getElementById('Idade').value;
    const calcular = document.getElementById('calcular');
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = ( peso / (altura * altura)).toFixed(1);

        let classificação = '';
        if (idade < 60 > 50){
            if (valorIMC < 18.5){
                classificação = 'abaixo do peso.';
                elemento.src="imagens/abaixo do peso.jpg"
            }else if (valorIMC < 25){
                classificação = 'peso ideal, continue assim !!';
                elemento.src="imagens/peso normal.jpg"
            }else if (valorIMC < 30){
                classificação = 'um pouco acima do peso, CUIDADO!!';
                elemento.src="imagens/sobre peso.jpg"
            }else if (valorIMC < 35){
                classificação = 'obesedidade grau I';
                elemento.src="imagens/obesidade 1.jpg"
            }else if (valorIMC < 40){
                classificação = 'obesedidade grau II';
                elemento.src="imagens/obesidade 2.jpg"
            }else {
                classificação = 'obesidade grau III. CUIDADO!!';
                elemento.src="imagens/obesidade 3.jpg"
            }
        }
        
        else {
            if (valorIMC < 22){
                classificação = 'adulto: baixo peso.';
            }
            if (valorIMC > 22 && valorIMC < 27){
                classificação = 'idoso.';
            }
            if (valorIMC > 27){
                classificação = 'adulto/idoso: sobrepeso.';
            }
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificação} `;

    }else{
            resultado.textContent = 'Preencha todos os campos!';
        }
}

calcular.addEventListener('click',imc);