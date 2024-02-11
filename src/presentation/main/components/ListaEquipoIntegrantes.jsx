import {List, ListItem, ListItemText, ListItemIcon} from "@mui/material"

import StarIcon from '@mui/icons-material/Star';

const ListaEquipoIntegrantes= (props) => {
    return <List>
        {
            props.integrantes.map((integrante) => {
                return <ListItem>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={integrante.nombre} />
                </ListItem>
            })
        }
    </List>
}

export default ListaEquipoIntegrantes