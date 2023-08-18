'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMostrar = document.getElementById('mostrar')
const botaoSoma2 = document.getElementById('somaNumeros')


function somar (){
    const numero1 = Number (document.getElementById('numero1').value)
    const numero2 = Number (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total

}

///////////////////////////////////////////////////////////////////////////

function identificar () {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    if (numero > 0){
        resultado.textContent = 'POSITIVO !'
    }else if(numero < 0){
        resultado.textContent = 'NEGATIVO !'
    }else{
        resultado.textContent = 'ZEROO'
    }
}

/////////////////////////////ATIVIDADE  D/////////////////////////////////////////

function mostrar () {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)
    const nota5 = Number(document.getElementById('nota5').value)
    const nota5texto = document.getElementById('notaDiv')

    const resultado = document.getElementById('resultado-item3')
    const resultadoMedia = document.getElementById('resultado-media')

    
    
    

    if (resultado.textContent == 'EM EXAME!'){

        const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

        if (media >= 7){

            resultado.textContent = 'APROVADO EM EXAME!'
        } else{
            resultado.textContent = 'REPROVADO'
            nota5texto.classList.remove ('nota5')
        }

        resultadoMedia.textContent = media

    } else {

        const media = (nota1 + nota2 + nota3 + nota4) / 4
        resultadoMedia.textContent = media
             
        if (media >= 7){

            resultado.textContent = 'APROVADO !'
        } else{
            resultado.textContent = 'EM EXAME!'
            nota5texto.classList.remove ('nota5')
        }
    }
}

/////////////////////////////ATIVIDADE  N/////////////////////////////////////////

function somaDeNumeros () {

}





botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMostrar.addEventListener('click', mostrar)
botaoSoma2.addEventListener('click', somaDeNumeros)




