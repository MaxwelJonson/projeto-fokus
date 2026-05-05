const addTarefaBt = document.querySelector('.app__button--add-task')
const addTarefaForm = document.querySelector('.app__form-add-task')
const addTarefaTxtArea = document.querySelector('.app__form-textarea')

const tarefas = []

addTarefaBt.addEventListener('click', () => {
    addTarefaForm.classList.toggle('hidden')
})

addTarefaForm.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const tarefa = {
        descricao: addTarefaTxtArea.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})