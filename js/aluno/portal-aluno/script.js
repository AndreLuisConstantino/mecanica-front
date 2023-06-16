'use'

const buttonCard = document.getElementById('card')

const nextPage = () => {
    window.location.href = '../../pages/aluno/crud-materias.html'
}

buttonCard.addEventListener('click', nextPage)