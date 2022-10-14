function final (){
    var perguntaFinal = prompt ('deseja jogar novamente SIM ou NÃO')
        if(perguntaFinal == 'sim' || perguntaFinal == 'SIM' ){
            window.location.assign('/index.html')
            
        }else if(perguntaFinal =='não' || perguntaFinal =='sim'){
            window.location.assign('/albert/final/fim.html')
        }else{
            return perguntaFinal
        }
        
    
}
   