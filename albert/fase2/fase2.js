function resultadoResposta2 (){
    var contador2 = 3;
      while( contador2 > 0 ){
        var pergunta2 = prompt('Qual é a sua resposta?');
          if(pergunta2 != null){
            if(pergunta2 == 'A' || pergunta2 =='a'){
                window.location.assign("/albert/fase3/fase3.html");
                break; 
              }else if( pergunta2 =='b' || pergunta2 =='B'){
                contador2--;
                alert(`Você tem ${contador2} tentativas restantes`);
              }else{
               alert ('tente de novo');
               
            }
          }
          
      }
      if( contador2 == 0){
        alert ('vc perdeu')
        window.location.assign("/albert/fase1/perdeu.html")
      }     
  }
  