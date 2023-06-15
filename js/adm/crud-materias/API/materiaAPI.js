'use strict'

export const getMaterias = async () => {

    const url = `https://mecanica-senai.cyclic.app/v1/projeto-mecanica-senai/materia/`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const inserirMateria = async (materia) => {
    const url = `https://mecanica-senai.cyclic.app/v1/projeto-mecanica-senai/materia/`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(materia)
    }

    fetch(url, options)
}

export const atualizaMateria = async (materia) => {
    const url = `https://mecanica-senai.cyclic.app/v1/projeto-mecanica-senai/materia/id/${materia.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(materia)
    }

    fetch(url, options)
}

export const deletarDadosMateria = async (id) => {
    const url = `https://mecanica-senai.cyclic.app/v1/projeto-mecanica-senai/materia/id/${id}`
    const options = {
      method: 'DELETE'
    }
  
    fetch(url, options)
}