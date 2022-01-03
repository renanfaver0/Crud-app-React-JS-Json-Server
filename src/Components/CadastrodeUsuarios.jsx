// Importações materiais UI.
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import Cadastro1 from '../Assets/Images/cadastrousuario1.png';
import Cadastro2 from '../Assets/Images/cadastrousuario2.png';

// Constante criada para a estilização da página.
const useStyle = makeStyles({
    image: {
        width: '40%',
        height: '40%'
    },
    component: {
        margin: 110
    }
})

// Costante criada para estialização e inserção das imagens na página.
const CadastrodeUsuarios = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Typography variant="h4" style={{ marginBottom: 50, textAlign: 'center' }}>Crud de Cadastro de Clientes</Typography>
            <Box style={{ display: 'flex' }}>
                <img className={classes.image} src={Cadastro1} alt='Imagem de cadastros de usuários' />
                <img className={classes.imagem} src={Cadastro2} alt='Imagem de cadastros de usuários' />
            </Box>
        </Box>
    )
}

export default CadastrodeUsuarios;