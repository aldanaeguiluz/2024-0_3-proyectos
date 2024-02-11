import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const TablaIntegrantes = (props) => {
    return <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Nombre
                    </TableCell>
                    <TableCell>
                        Codigo
                    </TableCell>
                    <TableCell>
                        Acciones
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.integrantes.map((integrante, index)=>{
                        return <TableRow>
                            <TableCell>
                                {integrante.nombre}
                            </TableCell>
                            <TableCell>
                                {integrante.codigo}
                            </TableCell>
                            <TableCell>
                                <IconButton
                                        onClick={()=>{
                                            props.eliminarIntegranteOnClick(index)
                                        }}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
}

export default TablaIntegrantes