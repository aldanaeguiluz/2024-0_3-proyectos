import { Dialog, DialogTitle, Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, DialogContent, DialogActions } from "@mui/material"
import { Container} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import GrillaEquipos from "./components/GrillaEquipos";
import dataEquipos from "../../data/equipos"
import ModalFormularioEquipo from "./components/ModalFormularioEquipo";

const MainPage = () => {
    
    const [drawerOpen, setDrawerOpen]= useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const onMenuIconClick= () => {
        setDrawerOpen(true)
    }

    const onModalClose=()=>{
        setModalOpen(false)
    }

    const onModalOpenClick=()=>{
        setModalOpen(true)
    }

    return <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={onMenuIconClick}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Equipos
                </Typography>

            </Toolbar>
        </AppBar>
        <Drawer variant="temporary"
            anchor="left"
            onClose={()=>{ setDrawerOpen(false) }}
            open={drawerOpen}>
            <List>
                <ListItem>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
            </List>
        </Drawer>
        <Container sx={ { mt : 2 }}>
            <Button variant="contained" 
                    sx={{mb:2, mt:2}} 
                    onClick={onModalOpenClick} >+</Button>
            <GrillaEquipos listaEquipos={dataEquipos} />
        </Container>

        <ModalFormularioEquipo modalOpen={modalOpen} onModalClose={onModalClose} />

    </Box>
}

export default MainPage