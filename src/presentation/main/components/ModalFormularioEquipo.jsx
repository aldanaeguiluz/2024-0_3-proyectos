import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useState } from "react";
import TablaIntegrantes from "./TablaIntegrantes";

const ModalFormularioEquipo = (props) => {

    const [nombreIntegrante, setNombreIntegrante]= useState("")
    const [codigoIntegrante, setCodigoIntegrante]= useState("")
    const [listaIntegrantes, setListaIntegrantes]= useState([])
    const [nombreEquipo, setNombreEquipo]=useState("")
    
    const onNombreChangeHandler = (event) => {
        setNombreIntegrante(event.target.value)
    }
    const onCodigoChangeHandler = (event) => {
        setCodigoIntegrante(event.target.value)
    }

    const agregarIntegranteOnClick = () => {
        if(nombreIntegrante==""||codigoIntegrante==""){
            return
        }
        const listaClonada=[...listaIntegrantes]
        listaClonada.push({
            nombre: nombreIntegrante,
            codigo: codigoIntegrante
        })
        setListaIntegrantes(listaClonada)
        setCodigoIntegrante("")
        setNombreIntegrante("")
    }

    const eliminarIntegranteOnClick= (indiceAEliminar)=>{
        const listaClonada=[...listaIntegrantes]
        listaClonada.splice(indiceAEliminar,1)
        setListaIntegrantes(listaClonada)
    }

    const onNombreEquipoChangeHandler=(event)=>{
        setNombreEquipo(event.target.value)
    }

    return <Dialog
        open={props.modalOpen} 
        onClose={props.onModalClose} >
        <DialogTitle>
            Nuevo Equipo
        </DialogTitle>
        <DialogContent>
            <TextField label="Nombre equipo"
                        variant="outlined"
                        value={nombreEquipo}
                        onChange={onNombreEquipoChangeHandler} />
            <hr />
            <h4>Integrantes</h4>
            <TextField label="Nombre integrante" 
                        variante="outlined"
                        sx={{mr:1}} 
                        value={nombreIntegrante}
                        onChange={onNombreChangeHandler} />
            <TextField label="Codigo" 
                        variante="outlined"
                        sx={{mr:1}}
                        value={codigoIntegrante}
                        onChange={onCodigoChangeHandler}/>
            <Button variant="contained" onClick={agregarIntegranteOnClick}>
                +
            </Button>
            <TablaIntegrantes integrantes={listaIntegrantes} 
                            eliminarIntegranteOnClick= {eliminarIntegranteOnClick}
                            />
        </DialogContent>
        <DialogActions>
            <Button variant="contained">
                Guardar
            </Button>
            <Button variant="contained">
                Cancelar
            </Button>
        </DialogActions>
    </Dialog>
}

export default ModalFormularioEquipo