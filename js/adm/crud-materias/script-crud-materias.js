'use strict'

import {
    getMaterias,
    inserirMateria,
    atualizaMateria,
    deletarDadosMateria
} from "./API/materiaAPI.js"

const materias = await getMaterias()

const listaDeMaterias = materias.materias

console.log(listaDeMaterias)

const criarCardMateria = (materia) => {
    const cardMateria = document.createElement("div")
    cardMateria.classList.add("card__materia")

    const cardTitle = document.createElement("span")
    cardTitle.classList.add("card__title")
    cardTitle.textContent = `${materia.sigla}`

    const cardInteracao = document.createElement("div")
    cardInteracao.classList.add("buttons__container")

    const buttonExcluir = document.createElement("button")
    buttonExcluir.type = "button";
    buttonExcluir.classList.add("btn", "btn-primary")
    buttonExcluir.setAttribute("data-bs-toggle", "modal")
    buttonExcluir.setAttribute("data-bs-target", "#modal-excluir")
    buttonExcluir.addEventListener('click', () => {
        localStorage.setItem('id-excluir-' +materia.id, materia.id)
        excluirMateria(materia.id)
    })

    const buttonEditar = document.createElement("button")
    buttonEditar.type = "button";
    buttonEditar.classList.add("btn", "btn-primary")
    buttonEditar.setAttribute("data-bs-toggle", "modal")
    buttonEditar.setAttribute("data-bs-target", "#modal-editar")
    buttonEditar.addEventListener('click', () => {
        localStorage.setItem('id-editar-' + materia.id, materia.id)
        atualizarMateria(materia.id)
        // localStorage.setItem(`nome-editar-${materia.sigla}`, materia.nome)
        // localStorage.setItem(`descricao-editar-${materia.sigla}`, materia.descricao)
        // localStorage.setItem(`sigla-editar-${materia.sigla}`, materia.sigla)
        // localStorage.setItem(`carga-editar-${materia.sigla}`, materia.carga_horaria)
        // editarmateria()

    })

    //<i class="fa-solid fa-x"></i> icone de excluir
    const iconeExcluir = document.createElement("i")
    iconeExcluir.classList.add("fa-solid")
    iconeExcluir.classList.add("fa-x")

    //<i class="fa-solid fa-pen-to-square"></i> icone de editar
    const iconeEditar = document.createElement("i")
    iconeEditar.classList.add("fa-solid")
    iconeEditar.classList.add("fa-pen-to-square")


    buttonExcluir.append(iconeExcluir)
    buttonEditar.append(iconeEditar)
    cardInteracao.append(buttonEditar, buttonExcluir)

    cardMateria.append(cardTitle, cardInteracao)

    return cardMateria
}

const carregarCards = () => {
    const container = document.querySelector('.card-container')
    const cards = listaDeMaterias.map(criarCardMateria)

    container.replaceChildren(...cards)
}

const criarMateria = () => {
    const buttonSalvar = document.getElementById('salvarAdicionar')

    buttonSalvar.addEventListener('click', () => {

        const nomeMateria = document.getElementById('inputNomeMateria').value
        const siglaMateria = document.getElementById('inputSiglaMateria').value
        const cargaMateria = document.getElementById('inputCargaMateria').value
        const descricaoMateria = document.getElementById('textareaDescricaoMateria').value

        if (nomeMateria == '' || siglaMateria == '' || isNaN(cargaMateria) || descricaoMateria == '') {
            alert('Preencha os campos corretamente!')
        } else {

            const materia = {
                "nome": nomeMateria,
                "sigla": siglaMateria,
                "carga_horaria": cargaMateria,
                "descricao": descricaoMateria
            }

            inserirMateria(materia)                 
        }
    })
}

const atualizarMateria = (id) => {
    const buttonEditar = document.getElementById('salvarEditar')

    const idAntigo = localStorage.getItem('id-editar-' + id)

    buttonEditar.addEventListener('click', () => {

        const nomeMateria = document.getElementById('inputNomeMateriaEditar').value
        const siglaMateria = document.getElementById('inputSiglaMateriaEditar').value
        const cargaMateria = document.getElementById('inputCargaMateriaEditar').value
        const descricaoMateria = document.getElementById('textareaDescricaoMateriaEditar').value

        if (nomeMateria == '' || siglaMateria == '' || isNaN(cargaMateria) || descricaoMateria == '') {
            alert('Preencha os campos corretamente!')
        } else {

            const materia = {
                "id": idAntigo,
                "nome": nomeMateria,
                "sigla": siglaMateria,
                "carga_horaria": cargaMateria,
                "descricao": descricaoMateria
            }

            atualizaMateria(materia)
        }
    })
}

const excluirMateria = (id) => {
    const buttonExcluir = document.getElementById('excluir')
    console.log(buttonExcluir)

    const idMateria = localStorage.getItem('id-excluir-' +id)

    buttonExcluir.addEventListener('click', () => {
        deletarDadosMateria(idMateria)
    })
}

criarMateria()
carregarCards()