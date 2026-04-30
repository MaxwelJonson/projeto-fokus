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
    tituloPag.innerHTML = 'Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa</strong>'
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    tituloPag.innerHTML = 'Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>'
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    tituloPag.innerHTML = 'Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>'
    alterarContexto('descanso-longo')
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

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    imagemPag.setAttribute('src', `/imagens/${contexto}.png`)
}