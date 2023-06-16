'use strcit'

import { getMateria } from "./API/materiaAPI.js"

const materias = await getMateria()

const listMaterias = materias.materias

const criarCardMateria = (materia) => {

    const cardMateria = document.createElement('div')
    cardMateria.classList.add('card')
    cardMateria.setAttribute('id', 'id')
    cardMateria.addEventListener('click', nextPage)

    const cardTitle = document.createElement('span')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = `${materia.sigla}`

    const nomeMateria = document.createElement('span')
    nomeMateria.classList.add('nome-materia')
    nomeMateria.textContent = `${materia.nome}`

    cardMateria.append(cardTitle, nomeMateria)

    return cardMateria
}

const carregarCard = () => {

    const container = document.querySelector('.container-card')
    const cards = listMaterias.map(criarCardMateria)

    container.replaceChildren(...cards)
    
}

const nextPage = () => {
    window.location.href = '../../pages/aluno/tarefas.html'
}

carregarCard()