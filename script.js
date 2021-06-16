let altura = document.getElementById('alttxt')
let peso = document.getElementById('pestxt')
let res = document.getElementById('res')

function limpar(){
    res.innerHTML=''
}
function calcular(){
    if(Number (altura.value) <= 0 && Number(peso.value) <= 0){
    alert('Insira algum numero para prosseguir')
    }else{
          let total = ((peso.value) / (altura.value)**2).toFixed(2)
          res.innerHTML= `Sua massa corporal é ${total}`
          if (total <= 18){
              res.innerHTML+='<p>Abaixo do peso</p>'
          }else if(total <= 24.9){
            res.innerHTML+='<p>Você está no peso normal</p>'
          }else if (total <= 29 ){
            res.innerHTML+='<p>Você está sobre peso</p>'
          }else if (total <= 34){
            res.innerHTML+='<p>Você está com Obesidade Grau I</p> ' 
          }else if (total <= 39){
            res.innerHTML+='<p>Você está com Obesidade Grau II</p>'
          }else if(total >=40 ){
            res.innerHTML+='<p>Você está com Obesidade Grau III ou Mórbida</p>'
          }

          }
    }



        
        
     
     
        