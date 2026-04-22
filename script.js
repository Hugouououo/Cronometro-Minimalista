const cronometro = document.querySelector(".cronometro") 
let status = 0 //parado

//let buttons = document.querySelector(".buttons")
let playButton = document.querySelector("#play")
let pauseButton = document.querySelector("#pause")
let resetButton = document.querySelector("#reset")

let horas = 0
let minutos = 0 
let segundos = 0

playButton.addEventListener("click", async function startCronometro(){    
    status = 1

    const delay =(ms)=> new Promise(resolve => setTimeout(resolve,ms))    //promise precisa de new!!!

    for(let i=0; status==1 ; i++){
        if(horas >= 1){
            cronometro.innerHTML = `${pad(horas, 2)}:${pad(minutos, 2)}:${pad(segundos,2)}`
        } else { 
            cronometro.innerHTML = `${pad(minutos, 2)}:${pad(segundos,2)}`
        }

        segundos++
        if(segundos == 60) minutos++, segundos=0
        if(minutos == 60) horas++, minutos=0

        await delay(1000)// 1seg
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






// Source - https://stackoverflow.com/a/2998822
// Posted by InfinitiesLoop, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-22, License - CC BY-SA 4.0
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
