// Importações materiais UI.
import NaoEncontrada from '../Assets/Images/Erro404.png'

// Constante criada para recarregar a página não encontrada quando o usuário digitar um link inexistente na página
const PaginaNaoEncontrada = () => {
    return (
        <img src={NaoEncontrada} style={{ width: '30%', margin: '150px 0 0 35%' }} alt='Imagem de página não encontrada' />
    )
}

export default PaginaNaoEncontrada;