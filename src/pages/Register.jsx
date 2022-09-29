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
    width: 40%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`


const Button = styled.button`
    margin: auto;
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


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create Account*</Title>
                <Form>
                    <Input placeholder = "first name"/>
                    <Input placeholder = "last name"/>
                    <Input placeholder = "email"/>
                    <Input placeholder = "username"/>
                    <Input placeholder = "password"/>
                    <Input placeholder = "confirm password"/>
                    <Agreement>
                        *By creating an account, I consent to the processing of my personal information and confirm that I have familiarised and understood the terms of the <b>Privacy Policy</b>.
                    </Agreement>
                    <Button>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
export default Register