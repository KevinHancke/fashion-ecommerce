import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #898AA6;
    display: flex;
    align-items: center;
    justify-content: center;
`
//background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("Link to image"), center;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    border: solid 3px black;
    border-radius: 5px;

    ${mobile({width: "75%"})};
`
const Title = styled.h1`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 10px;
    padding: 10px;
`

const Button = styled.button`
    margin: 20px auto;
    width: 40%;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
    background-color: #898AA6;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder = "username"/>
                    <Input placeholder = "password"/>
                    <Button>Login</Button>
                    <Link>Forgot Password</Link>
                    <Link>Create an Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login