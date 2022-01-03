// Importações materiais UI.
import { makeStyles } from '@material-ui/styles';
import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

// Constantes criadas para trazer na tela informações inseridas a tabela
const initialValue = {
    nome: '',
    nomedeusuario: '',
    email: '',
    telefone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditarUsuarios = () => {
    const [usuarios, setUser] = useState(initialValue);
    const { nome, nomedeusuario, email, telefone } = usuarios;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, usuarios);
        history.push('/cadastrados');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...usuarios, [e.target.name]: e.target.value })
    }

    return (

        // Tabela
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar Informações</Typography>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }} htmlFor="my-input">Nome</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nome' value={nome} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }} htmlFor="my-input">Nome de Usuario</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='nomedeusuario' value={nomedeusuario} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }} htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel style={{ marginTop: 10 }} htmlFor="my-input">Telefone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='telefone' value={telefone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" style={{ marginTop: 10 }} color="primary" onClick={() => editUserDetails()}>Editar Usuário</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditarUsuarios;