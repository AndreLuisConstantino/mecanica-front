'use stric'

import { getTarefa } from "./api/tarefa.js"

const tarefas = await getTarefa()

const listTarefas = tarefas.tarefa

const criarCardTarefa = (tarefa) => {

    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('id', 'id')
    card.addEventListener('click', nextPage)

    const numeroTarefa = document.createElement('span')
    numeroTarefa.classList.add('numero-tarefa')
    numeroTarefa.textContent = `tarefa ${tarefa.numero}`

    const icon = document.createElement('i')
    icon.classList.add('fas')
    icon.classList.add('fa-wrench')

    const nomeTarefa = document.createElement('span')
    nomeTarefa.classList.add('nome-tarefa')
    nomeTarefa.textContent = `${tarefa.nome}`

    card.append(numeroTarefa, icon, nomeTarefa)

    return card

}

const carregarCard = () => {

    const container = document.getElementById('container-tarefas')
    const card = listTarefas.map(criarCardTarefa)

    container.replaceChildren(...card)

}

const nextPage = () => {
    window.location.href = '../../pages/aluno/registro-tempo.html'
}

carregarCard()