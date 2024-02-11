import { Box, Button, Container, TextField, Alert } from "@mui/material"
import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
    
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("") 
    const [loginIncorrecto, setLoginincorrecto]=useState(false)
    const [dataUsuarios, setDataUsuarios]=useState([])

    const navigate = useNavigate()

    const usernameOnChangeHandler= (event) => {
        setUsername(event.target.value)
    }

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const obtenerUsuariosHTTP= async()=>{
        const response= await fetch("http://localhost:3000/usuarios.json")
        const data=await response.json()
        setDataUsuarios(data)
    }

    const loginOnClick = () => {
        console.log(`Usuario ingresado: ${username}`)
        const listaFiltrada = dataUsuarios.filter((usuario) =>{
            return usuario.username === username && usuario.password === password
        })
        if(listaFiltrada.length>0){
            console.log("Login correcto")
            //Almacenando en localStorage
            sessionStorage.setItem("USERNAME", username)
            navigate("/main", {
                state: {
                    username: username
                }
            })
        }else{
            console.log("Login incorrecto")
            setLoginincorrecto(true)
        }
    }

    useEffect(()=>{
        if(sessionStorage.getItem("USERNAME")!==null){
            navigate ("/main")
            return
        }
        obtenerUsuariosHTTP()
    },[])

    return <Container maxWidth="sm">
        <Box component="form"
            noValidate
            autoComplete="off"
            style={ { textAlign : "center" }}>
            
            <h1>Login</h1>
            <div>
                <TextField required
                    label="Username"
                    margin="normal"
                    value={username} 
                    onChange={usernameOnChangeHandler} />
            </div>
            <div>
                <TextField required
                    type="password"
                    label="Password"
                    margin="normal"
                    value={password} 
                    onChange={passwordOnChangeHandler} />
            </div>
            <div>
                <Button variant="contained" 
                style={ { marginRight : "8px" }}
                onClick={loginOnClick} >
                    Login
                </Button>
                <Button variant="contained">Registro</Button>
            </div>
            
            {
                /*loginIncorrecto ? 
                    <Alert 
                        icon={<CheckIcon fontSize="inherit" />} 
                        severity="error"
                        sx={{mt:2}} >
                        Login incorrecto
                    </Alert>
                    :
                    ""*/

                (() => {
                    if (loginIncorrecto){
                        return <Alert 
                            icon={<CheckIcon fontSize="inherit" />} 
                            severity="error"
                            sx={{mt:2}} >
                                Login incorrecto
                        </Alert>
                    }
                })()
            }

            

        </Box>
    </Container>
}

export default LoginPage