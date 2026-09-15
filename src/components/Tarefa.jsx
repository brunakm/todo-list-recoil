import { useRecoilState } from 'recoil'
import { tarefasAtom } from '../atoms/tarefasAtom'

function Tarefa({ tarefa }) {
    const [tarefas, setTarefas] = useRecoilState(tarefasAtom)

    const alternarConclusao = () => {
        const tarefasAtualizadas = tarefas.map((item) => {
            if (item.id === tarefa.id) {
                return {
                    ...item,
                    concluida: !item.concluida
                }
            }

            return item
        })

        setTarefas(tarefasAtualizadas)
    }

    const removerTarefa = () => {
        const tarefasAtualizadas = tarefas.filter(
            (item) => item.id !== tarefa.id
        )

        setTarefas(tarefasAtualizadas)
    }

    return (
        <div className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
            <label className="tarefa-conteudo">
                <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={alternarConclusao}
                />

                <span>{tarefa.texto}</span>
            </label>

            <button
                className="botao-remover"
                onClick={removerTarefa}
                type="button"
            >
                Remover
            </button>
        </div>
    )
}

export default Tarefa