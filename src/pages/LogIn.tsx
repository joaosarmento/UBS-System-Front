import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function LogIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigate();

    function login(){
        // ENVIAR REQUISIÇÃO DE USUÁRIO, RETORNANDO NOME E TIPO DE USUÁRIO
        try {
            // const response = await axios.post("http://localhost:5000/sign-in", {username,password});
            // setUser(response.data.username);
            // setDepartment(response.data.department);
            // - secretaria -> /main-page
            // - enfermagem -> /medical-records
            // - medicina -> 
            navigator("/main-page");
          } catch (error){
            console.log(error);
            alert("Username ou senha errado!");
          }

    }

    return(
        <Container>
            <Title>UBS System</Title>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
            <button onClick={login}>Entrar</button>
        </Container>
    )
}

const Container = styled.div`
    color: #FFFFFF;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    input{
        margin: 10px;
        height: 30px;
        width: 290px;
        font-size: 18px;
        text-align: center;
        border-radius: 6px;

    }

    button{
        width: 300px;
        background-color: #0D4B9C;
        color: #FFFFFF;
    }

`;

const Title = styled.h1`
    font-size: 50px;
    margin: 0 0 20px 0;
    padding: 0;
`