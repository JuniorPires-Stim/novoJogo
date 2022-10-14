function resultadoResposta3 (){
    var contador3 = 3;
      while( contador3 > 0 ){
        var pergunta3 = prompt('Qual é a sua resposta?');
          if(pergunta3 != null){
            if(pergunta3 == 'A' || pergunta3 =='a'){
                window.location.assign("/nikolas/final/final.html");
                break; 
              }else if( pergunta3 =='b' || pergunta3 =='B'){
                contador3--;
                alert(`Você tem ${contador3} tentativas restantes`);
              }else{
               alert ('tente de novo');
               
            }
          }
          
      }
      if( contador3 == 0){
        alert ('vc perdeu')
        window.location.assign("/nikolas/fase1/perdeu.html")
      }     
  }
  