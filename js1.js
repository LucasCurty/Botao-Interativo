let nome = prompt("Qual seu nome?");
let res = document.getElementById('res')
alert(`Olá ${nome}, Aviso! NÃO interaja como o botão!`)
let conta = 28;
let bum = document.getElementById('img')
let som = document.getElementById('aud')
let corpo = document.getElementById('corpo')
let h1 = document.getElementById('h1')

function clique(){
    conta++;
if(conta == 1){
    res.innerHTML = 'Não aperte esse botão novamente!'
}else{
    switch(conta){    
    case 5:
        res.innerHTML = `Você precisa parar enquanto há tempo, <strong>${nome}</strong>!`
    break
    case 10:
        res.innerHTML = `Você apertou esse botão <strong>${conta}</strong> vezes, Pare já!`
        break
    case 15:
        res.innerHTML = `<strong>${nome}</strong>! Você já testou a minha paciência <strong>${conta}</strong> vezes!!`
        break
    case 20:
        res.innerHTML = `Você já esta passando dos limites <strong>${nome}</strong>!`
        break
    case 25:
        res.innerHTML = `Essa é a sua ultima chance <strong>${nome}</strong>!!`
        break
    case 30:
        document.getElementById('corpo').remove()
        bum.src = 'bomba.jpg'
        som.src = 'BOOM.mp3'
        h1.innerHTML = `Parabéns <strong>${nome}</strong>. Você quebrou o site!`
    default:
        res.innerHTML = ''
    break
    }
}
}
