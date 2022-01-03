// Importações materiais UI.

import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

// Constante criada para estilização
const useStyle = makeStyles({
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 22
    }
})

// Navegação do site
const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>Cadastros de Usuários</NavLink>
                <NavLink className={classes.tabs} to="cadastrados" exact>Usuários Cadastrados</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Adicionar Usuário</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;