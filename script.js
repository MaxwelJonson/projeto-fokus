const html = document.querySelector('html')

const tituloPag = document.querySelector('.app__title')
const imagemPag = document.querySelector('.app__image')

const botoes = document.querySelectorAll('.app__card-button')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

const displayTempo = document.querySelector('#timer')
let intervaloId = null
const tempoFoco = 1500
const tempoCurto = 300
const tempoLongo = 900
let tempoDecorridoEmSeg = tempoFoco

const musicaBt = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
musica.loop = true
const somPause = new Audio('/sons/pause.mp3')
const somPlay = new Audio('/sons/play.wav')
const somStop = new Audio('/sons/beep.mp3')

const startPauseBt = document.querySelector('.app__card-primary-button')
const startPauseBtImg = document.querySelector('.app__card-primary-butto-icon')
const startPauseBtTxt = document.querySelector('span')

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSeg = tempoFoco
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSeg = tempoCurto
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSeg = tempoLongo
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

tempoNaTela()

musicaBt.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

const contagemRegressiva = () => {
    if (tempoDecorridoEmSeg <= 0) {
        somStop.play()
        alert('Tempo Finalizado!')
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            html.dispatchEvent(evento)
        }
        zerar()
        tempoNaTela()
        return
    }
    tempoDecorridoEmSeg -= 1
    tempoNaTela()
}

startPauseBt.addEventListener('click', iniciarPausar)

function alterarContexto(contexto) {
    tempoNaTela()

    botoes.forEach((contexto) => {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    imagemPag.setAttribute('src', `/imagens/${contexto}.png`)

    switch (contexto) {
        case 'foco':
            tituloPag.innerHTML = 'Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa</strong>'
            break
        
        case 'descanso-curto':
            tituloPag.innerHTML = 'Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>'
            break

        case 'descanso-longo':
            tituloPag.innerHTML = 'Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>'
            break

        default:
            break
    }
}

function iniciarPausar() {  
    if (intervaloId) {
        somPause.play()
        zerar()
        return
    }
    somPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    startPauseBtImg.setAttribute('src', '/imagens/pause.png')
    startPauseBtTxt.innerHTML = 'Pausar'
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
    startPauseBtImg.setAttribute('src', '/imagens/play_arrow.png')
    startPauseBtTxt.innerHTML = 'Começar'

    if (focoBt.classList.contains('active')) {
        tempoDecorridoEmSeg = tempoFoco
    } else if (curtoBt.classList.contains('active')) {
        tempoDecorridoEmSeg = tempoCurto
    } else {
        tempoDecorridoEmSeg = tempoLongo
    }
}

function tempoNaTela() {
    const tempo = new Date(tempoDecorridoEmSeg * 1000)
    const tempoFOrmatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})

    displayTempo.innerHTML = tempoFOrmatado
}