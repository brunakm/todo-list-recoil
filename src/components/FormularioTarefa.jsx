import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { tarefasAtom } from '../atoms/tarefasAtom'

function FormularioTarefa() {
    const [texto, setTexto] = useState('')
    const [tarefas, setTarefas] = useRecoilState(tarefasAtom)

    const adicionarTarefa = (evento) => {
        evento.preventDefault()

        if (texto.trim() === '') {
            return
        }

        const novaTarefa = {
            id: Date.now(),
            texto: texto,
            concluida: false
        }

        setTarefas([...tarefas, novaTarefa])
        setTexto('')
    }

    return (
        <form className="formulario" onSubmit={adicionarTarefa}>
            <input
                className="campo-tarefa"
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={texto}
                onChange={(evento) => setTexto(evento.target.value)}
            />

            <button className="botao-adicionar" type="submit">
                Adicionar tarefa
            </button>
        </form>
    )
}

export default FormularioTarefa