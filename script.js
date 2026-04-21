const cronometro = document.querySelector(".cronometro") 
let status = 0 //parado

//let buttons = document.querySelector(".buttons")
let playButton = document.querySelector("#play")
let pauseButton = document.querySelector("#pause")
let resetButton = document.querySelector("#reset")

let horas = 0
let minutos = 0 
let segundos = 0

playButton.addEventListener("click", async ()=>{ //function startCronometro(){    
    status = 1

    const delay =(ms)=> new Promise(resolve => setTimeout(resolve,ms))    //promise precisa de new!!!

    for(let i=0; status==1 ; i++){
        if(horas >= 1){
            cronometro.innerHTML = `${horas}:${minutos}:${segundos}`
        } else { 
            cronometro.innerHTML = `${minutos}:${segundos}`
        }

        segundos+=1
        if(segundos == 60) minutos+=1, segundos=0
        if(minutos == 60) horas+=1, minutos=0

        await delay(1000);
    }

    playButton.disabled = true
})

pauseButton.addEventListener("click", ()=>{
/*     switch(status){
        case 1: 
            status = 2
            break
        case 2:
            status = 1
            break
    } */
   if(status==1){ status=2}
   else if(status==2){ status=1}
})
