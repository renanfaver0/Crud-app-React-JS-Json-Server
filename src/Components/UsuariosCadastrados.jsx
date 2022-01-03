// Importações materiais UI.
import { makeStyles } from '@material-ui/styles';
import { TableBody, TableRow, Table, TableHead, TableCell, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from 'react-router-dom';

// Constante criada para estilizações
const useStyle = makeStyles({

    table: {

        marginTop: 50
    }

})

// Constantes criadas para trazer na tela informações inseridas a tabela
const UsuariosCadastrados = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getUsuariosCadastrados();
    }, [])

    const getUsuariosCadastrados = async () => {
        const response = await getUsers();
        console.log(response.data)
        setUsers(response.data);

    }

    const deleteUserData = async (id) => {
        await deleteUser(id)
        getUsuariosCadastrados();
    }

    return (

        // Tabela criada com o UI
        <Table className={classes.table} >
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Nome de Usuario</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Telefone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.nome}</TableCell>
                            <TableCell>{user.nomedeusuario}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.telefone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ marginRight: 10 }} component={Link} to={`/editar/${user.id}`}>Editar</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Deletar</Button>
                            </TableCell>
                        </TableRow>

                    ))

                }

            </TableBody>
        </Table>
    );
}

export default UsuariosCadastrados;