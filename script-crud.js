const addTarefaBt = document.querySelector('.app__button--add-task')
const addTarefaForm = document.querySelector('.app__form-add-task')
const addTarefaTxtArea = document.querySelector('.app__form-textarea')

addTarefaBt.addEventListener('click', () => {
    addTarefaForm.classList.toggle('hidden')
})