'use strict'

export const getTarefa = async () => {

    const url = `https://mecanica-senai.cyclic.app/v1/projeto-mecanica-senai/tarefa/`
    const response = await fetch(url)
    const data = await response.json()

    return data
}