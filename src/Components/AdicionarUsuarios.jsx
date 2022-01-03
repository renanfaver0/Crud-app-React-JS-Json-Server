// Importações materiais UI.
import { FormControl, FormGroup, Input, InputLabel, Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import react, { useState } from 'react';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';


// Constante criada para a estilização da página.
const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%'
    },
    '& > *': {
        marginTop: 20
    }
})

// Constantes criadas para inserção de novos usuários na página
const initialValues = {
    nome: '',
    nomedeusuario: '',
    email: '',
    telefone: ''
}

const AdicionarUsuarios = () => {
    const [usuarios, setUser] = useState(initialValues);
    const { nome, nomedeusuario, email, telefone } = usuarios;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...usuarios, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(usuarios);
        history.push('./cadastrados');
    }


    return (

        // Tabela.
        <FormGroup className={classes.container}>
            <Typography variant="h5">Add Usuários</Typography>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }}>Nome</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nome' value={nome} />
            </FormControl>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }}>Nome de Usuário</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nomedeusuario' value={nomedeusuario} />
            </FormControl>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }}>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }}>Telefone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='telefone' value={telefone} />
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetails()}>Add Usuário</Button>
        </FormGroup>
    )
}

export default AdicionarUsuarios;