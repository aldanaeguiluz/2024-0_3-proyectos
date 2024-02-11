import { Box, Button, Container, TextField, Alert } from "@mui/material"
import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
    
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("") 
    const [loginIncorrecto, setLoginincorrecto]=useState(false)

    const navigate = useNavigate()

    const usernameOnChangeHandler= (event) => {
        setUsername(event.target.value)
    }

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginOnClick = async() => {

        const response=await fetch(`http://localhost:8000/proyectos/login/${username}/${password}`)
        const data= await response.json()

        if(data.msg===""){
            //Login correcto
            console.log("Login correcto")
            //Almacenando en localStorage
            sessionStorage.setItem("USERNAME", username)
            navigate("/main", {
                state: {
                    username: username
                }
            })
        }else{
            //Login incorrecto
            console.log("Login incorrecto")
            setLoginincorrecto(true)
        }
    }

    useEffect(()=>{
        if(sessionStorage.getItem("USERNAME")!==null){
            navigate ("/main")
            return
        }
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