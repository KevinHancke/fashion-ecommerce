import { Facebook, Pinterest, Twitter, Instagram, Room, Phone, Mail } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import PayImg from '../tempAssets/PayImg.png'
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;

    ${mobile({flexDirection: "column"})};
`

    const Left = styled.div`
        flex:1;
        display: flex;
        flex-direction: column;
        padding: 20px;
    `
        const Logo = styled.h1``

        const Desc = styled.p`
            margin: 20px 0px;
        `

        const SocialContainer = styled.div`
            display: flex;
        `

        const SocialIcon = styled.div`
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: white;
            background-color: #${props=>props.color};
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;
        `

    const Center = styled.div`
        flex:1;
        padding: 20px;

        ${mobile({display: "none"})};
    `
    const Title= styled.h3`
        margin-bottom: 30px;
    `

    const List= styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    `

    const ListItem= styled.li`
        width: 50%;
        margin-bottom: 10px;
    `

    const Right = styled.div`
        flex:1;
        padding: 20px;

        ${mobile({backgroundColor: "#898AA6"})};
    `
        const ContactItem = styled.div`
            margin-bottom: 20px;
            display: flex;
            align-items: center;
        `

        const Payment = styled.img`
            width: 50%;
        `



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>HERIN.</Logo>
                <Desc>We were just looking at the next itteration of fast-fashion when we realised something more, fashion is in her, HERIN. </Desc>
                <SocialContainer>
                    <SocialIcon color="000000">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="000000">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="000000">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="000000">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Mens</ListItem>
                    <ListItem>Ladies</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                    <ListItem>About</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> Fashion Boulevard, Ekasi, South Africa 8000</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +27 87 999 0000</ContactItem>
                <ContactItem><Mail style={{marginRight:"10px"}}/>hello@herin.co.za</ContactItem>
                <Payment src = {PayImg} />
            </Right>

        </Container>
    )
}

export default Footer