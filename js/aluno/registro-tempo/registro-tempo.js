'use strict'

const buttonVoltar = document.getElementById('idVoltar')

buttonVoltar.addEventListener('click', function() {
    window.location.href = '../../pages/aluno/tarefas.html'
})

const buttonAvancar = document.getElementById('idAvancar')

buttonAvancar.addEventListener('click', function() {
    window.location.href = '../../pages/aluno/realizar-atividade.html'
})