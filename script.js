const html = document.querySelector('html')

const tituloPag = document.querySelector('.app__title')
const imagemPag = document.querySelector('.app__image')

const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

const displayTempo = document.querySelector('#timer')
const tempoFoco = 1500
const tempoCurto = 300
const tempoLongo = 900

const startPauseBt = document.querySelector('.app__card-primary-button')
const startPauseBtImg = document.querySelector('.app__card-primary-butto-icon')
const startPauseBtTxt = document.querySelector('span')

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    tituloPag.innerHTML = 'Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa</strong>'
    imagemPag.setAttribute('src', '/imagens/foco.png')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    tituloPag.innerHTML = 'Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>'
    imagemPag.setAttribute('src', '/imagens/descanso-curto.png')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    tituloPag.innerHTML = 'Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>'
    imagemPag.setAttribute('src', '/imagens/descanso-longo.png')
})

startPauseBt.addEventListener('click', () => {
    if (startPauseBtTxt.textContent == 'Começar') {
        startPauseBtImg.setAttribute('src', '/imagens/pause.png')
        startPauseBtTxt.innerHTML = 'Pausar'
    } else {
        startPauseBtImg.setAttribute('src', '/imagens/play_arrow.png')
        startPauseBtTxt.innerHTML = 'Começar'
    }
})