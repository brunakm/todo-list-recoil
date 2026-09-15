import { useRecoilValue } from 'recoil'
import { tarefasFiltradasSelector } from '../selectors/tarefasFiltradasSelector'
import Tarefa from './Tarefa'

function ListaTarefas() {
    const tarefas = useRecoilValue(tarefasFiltradasSelector)

    if (tarefas.length === 0) {
        return (
            <p className="mensagem-vazia">
                Nenhuma tarefa encontrada.
            </p>
        )
    }

    return (
        <div className="lista-tarefas">
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                />
            ))}
        </div>
    )
}

export default ListaTarefas