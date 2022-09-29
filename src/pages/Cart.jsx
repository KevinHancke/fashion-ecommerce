import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import vint1 from '../tempAssets/vintdress1.webp'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;

    ${mobile({padding: "10px"})};
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
    const TopButton = styled.button`
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
        border: ${props=>props.type === "filled" && "none"};
        background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
        color: ${props=>props.type === "filled" && "white"};

    `
    const TopTexts = styled.div`
        ${mobile({display: "none"})};
    `

    const TopText = styled.span`
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 10px;
    `


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({flexDirection: "column"})};
`

    const Info = styled.div`
        flex:3;
    `
        const Product = styled.div`
            display: flex;
            justify-content: space-between;

            ${mobile({flexDirection: "column"})};
        `

        const ProductDetail = styled.div`
            display: flex;
            flex: 2;
        `

            const Image = styled.img`
                width: 200px;
            `

            const Details = styled.div`
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            `
            
            const ProductName = styled.span``
            
            const ProductId = styled.span``
            
            const ProductColor = styled.div`
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: ${props=>props.color};

            `
            
            const ProductSize = styled.span``
        
        const PriceDetail = styled.div`
            flex:1;
            display: flex;
            align-items: center;
            flex-direction: column;
        `
            const ProductAmountContainer = styled.div`
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                border: 1px solid #eeeeee;
            `

                const ProductAmount = styled.div`
                    font-size:24px;
                    margin:5px;

                    ${mobile({margin: "5px 15px"})};
                `
                
                const ProductPrice = styled.div`
                    font-size: 30px;
                    font-weight: 200;

                    ${mobile({marginBottom: "20px"})};
                `
        
        const Hr = styled.hr`
            background-color: #eeeeee;
            border: none;
            height: 1px;
        `

    const Summary = styled.div`
        flex:1;
        border: 1px solid #eeeeee;
        padding: 20px;
        height: 50vh;
        border-radius: 10px;
    `
        const SummaryTitle = styled.h1`
            font-weight: 300;
        `

        const SummaryItem = styled.div`
            margin: 30px 0px;
            display: flex;
            justify-content: space-between;
            font-weight: ${props=>props.type ==="total" && "500"};
            font-size: ${props=>props.type ==="total" && "24px"};
        `
    
        const SummaryItemText = styled.span``
    
        const SummaryItemPrice = styled.span``
    
        const Button = styled.button`
            width: 100%;
            padding: 10px;
            background-color: black;
            color: white;
        `

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src = {vint1}/>
                                <Details>
                                    <ProductName> <b>Item:</b> Vintage Dress</ProductName>
                                    <ProductId><b>Id:</b> 9832638</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b> L </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove/>
                                    <ProductAmount>2</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                    <ProductPrice>ZAR 800</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src = {vint1}/>
                                <Details>
                                    <ProductName> <b>Item:</b> Vintage Dress</ProductName>
                                    <ProductId><b>Id:</b> 9832638</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b> L </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                    <ProductPrice>ZAR 800</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>ZAR 1600.00 </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping: </SummaryItemText>
                            <SummaryItemPrice>ZAR 150.00 </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount: </SummaryItemText>
                            <SummaryItemPrice>ZAR -150.00 </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total: </SummaryItemText>
                            <SummaryItemPrice>ZAR 1600.00</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart