import { useRecoilState } from 'recoil'
import { filtroAtom } from '../atoms/filtroAtom'

function Filtros() {
    const [filtro, setFiltro] = useRecoilState(filtroAtom)

    return (
        <div className="filtros">
            <button
                className={filtro === 'todas' ? 'filtro ativo' : 'filtro'}
                onClick={() => setFiltro('todas')}
            >
                Todas
            </button>

            <button
                className={filtro === 'pendentes' ? 'filtro ativo' : 'filtro'}
                onClick={() => setFiltro('pendentes')}
            >
                Pendentes
            </button>

            <button
                className={filtro === 'concluidas' ? 'filtro ativo' : 'filtro'}
                onClick={() => setFiltro('concluidas')}
            >
                Concluídas
            </button>
        </div>
    )
}

export default Filtros