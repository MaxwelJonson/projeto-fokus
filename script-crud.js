const addTarefaBt = document.querySelector('.app__button--add-task')
const addTarefaForm = document.querySelector('.app__form-add-task')
const addTarefaTxtArea = document.querySelector('.app__form-textarea')
const ulTarefas = document.querySelector('.app__section-task-list')
const cancelarBt = document.querySelector('.app__form-footer__button--cancel')
const descricaoTarefaSelecionada = document.querySelector('.app__section-active-task-description')

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
let tarefaSelecionada = null

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `

    const p = document.createElement('p')
    p.classList.add('app__section-task-list-item-description')
    p.textContent = tarefa.descricao

    const button = document.createElement('button')
    button.classList.add('app_button-edit')

    button.onclick = () => {
        const novaDescricao = prompt('Qual é a nova descrição?')
        if (novaDescricao) {
            p.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            atualizaTarefas()
        }
    }

    const img = document.createElement('img')
    img.setAttribute('src', '/imagens/edit.png')
    button.append(img)

    li.append(svg)
    li.append(p)
    li.append(button)

    li.onclick = () => {
        document.querySelectorAll('.app__section-task-list-item-active')
            .forEach((elemento) => {
                elemento.classList.remove('app__section-task-list-item-active')
            })

        if (tarefaSelecionada == tarefa) {
            descricaoTarefaSelecionada.textContent = ''
            tarefaSelecionada = null
            li.classList.remove('app__section-task-list-item-active')
            return
        }

        tarefaSelecionada = tarefa
        descricaoTarefaSelecionada.textContent = tarefa.descricao
        li.classList.add('app__section-task-list-item-active')
    }

    return li
}

function atualizaTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function limparConteudo() {
    addTarefaTxtArea.value = ''
    addTarefaForm.classList.add('hidden')
}

addTarefaBt.addEventListener('click', () => {
    addTarefaForm.classList.toggle('hidden')
})

cancelarBt.addEventListener('click', limparConteudo)

addTarefaForm.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const tarefa = {
        descricao: addTarefaTxtArea.value
    }
    tarefas.push(tarefa)
    atualizaTarefas()
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
    limparConteudo()
})

tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
})