let calcu = document.getElementById('calcu')
function calc(){
    let nome = window.document.getElementById('nome');
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let res = document.getElementById('resultado')
    let alt = Number(altura.value)
    let pes = Number(peso.value)
   
    function imcRes(){ 
         let imc = 0
         imc = (pes / (alt*alt)).toFixed(1)
         return imc
    }
   var imc = imcRes()
   
   if (imc < 18.5){
       res.innerHTML = `Seu IMC é ${imc}, você está abaixo do peso ideal.`

   } else if (imc >= 18.56 && imc <= 24.9){
    res.innerHTML = `Seu IMC é ${imc}, você esta dentro da estimativa normal. Parabéns!!`

   } else if (imc >= 25 && imc <= 29.9){
    res.innerHTML = `Seu IMC é ${imc}, você está com sobrepeso, cui`

   } else if (imc >= 30 && imc <= 39.9){
    res.innerHTML = `Seu IMC é ${imc}, você está com obesidade, procure um médico o quanto antes.`

   } else {
    res.innerHTML = `Seu IMC é ${imc}, você está muito gostosa, pqp. Me chupa logo.`
   }

   
} 
calcu.addEventListener('click', calc)//essa é a forma de fazer toda em javascript
//onde eu digo um evento no caso o 'click' e digo que quando clicar ele vai executar uma função
//que é a calc()