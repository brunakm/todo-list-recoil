import FormularioTarefa from "./components/FormularioTarefa"
import Filtros from "./components/Filtros"
import ListaTarefas from "./components/ListaTarefas"

function App() {
    return (
        <main className="pagina">
            <div className="container">
                <h1>To-Do List</h1>

                <FormularioTarefa />

                <Filtros />

                <ListaTarefas />
            </div>
        </main>
    )
}

export default App