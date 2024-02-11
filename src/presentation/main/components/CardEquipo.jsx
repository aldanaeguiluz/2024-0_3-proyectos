import ListaEquipoIntegrantes from "./ListaEquipoIntegrantes"
import {Typography, Card, CardContent, CardActions, Button } from "@mui/material"

const CardEquipo = (props) => {
    return <Card variant="outlined">
        <CardContent>
            <Typography variant="h5" component="div">
                {props.nombreEquipo}
            </Typography>
            <ListaEquipoIntegrantes integrantes={props.listaIntegrantes} />
        </CardContent>
        <CardActions>
        <Button variant="text">
            Tareas
        </Button>
        </CardActions>
    </Card>
}

export default CardEquipo