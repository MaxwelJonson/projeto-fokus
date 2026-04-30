const html = document.querySelector('html')

const tituloPag = document.querySelector('.app__title')
const imagemPag = document.querySelector('.app__image')

const botoes = document.querySelectorAll('.app__card-button')
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
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
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