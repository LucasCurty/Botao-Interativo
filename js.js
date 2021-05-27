let nome = prompt("Qual seu nome?");
let res = document.getElementById('res')
alert(`Olá ${nome}, Aviso! NÃO interaja como o botão...`)
let conta = 0;
let bum = document.getElementById('img')
let som = document.getElementById('aud')
let corpo = document.getElementById('corpo')
let h1 = document.getElementById('h1')

function clique(){
    conta++;
    if(conta == 10){
        res.innerHTML = `Você já clicou <strong>${conta}</strong> vezes, pare com isso!`
    }if(conta == 11){
        res.innerHTML = `Eu estou te avisando! <strong>${nome}</strong>...`
    }if(conta == 12){
        res.innerHTML = ''
    }if(conta == 20){
        res.innerHTML = `Você é muito teimoso <strong>${nome}</strong>, Quantas vezes vou ter que falar para não apertar?`
    }if(conta == 21){
        res.innerHTML = ''
    }if(conta == 30){
        res.innerHTML = `<strong>${nome}</strong>!!! Você já testou a minha paciência <strong>${conta}</strong> vezes..`
    }if(conta == 31){
        res.innerHTML = ''
    }if(conta == 40){
        res.innerHTML = `Você apertou <strong>${conta}</strong> vezes. Já passou dos limites! PARE! <strong>${nome}</strong>.`
    }if(conta == 41){
        res.innerHTML = ''
    }if(conta == 47){
        res.innerHTML = `Esta é a sua ultima oportunidade <strong>${nome}</strong>!!`
    }if(conta == 48){
        res.innerHTML = ''
    }if(conta == 50){  
        res.innerHTML = 'ACABOU!'  
       
    }if(conta == 51){
        document.getElementById('corpo').remove()
        bum.src = 'bomba.jpg'
        som.src = 'BOOM.wav'
        h1.innerHTML = `Parabéns <strong>${nome}</strong>. Você quebrou o site!`

        
}
}