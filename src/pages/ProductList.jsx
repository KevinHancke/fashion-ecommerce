import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import {mobile} from '../responsive'
import { flexbox } from '@mui/system'

const Container = styled.div`
    
`

    const Title = styled.h1`
        margin: 20px;
    `

    const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 20px;
    `

    const Filter = styled.div`
        margin: 20px;

        ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})};
    `

    const FilterText = styled.span`
        font-size: 20px;
        font-weight: 600;
        margin-right: 20px;

        ${mobile({marginRight: "10px 0px"})};
    `

    const Select = styled.select`
        padding: 10px;
        margin-right: 20px;

        ${mobile({margin: "0px"})};

    `
    const Option = styled.option``



const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Shop</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter</FilterText>
                        <Select>
                            <Option disable selected> Size </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                        <Select>
                            <Option disable selected> Color </Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Nude</Option>
                            <Option>Brown</Option>
                            <Option>Grey</Option>
                        </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort</FilterText>
                        <Select>
                            <Option selected>Newest</Option>
                            <Option>Price (asc)</Option>
                            <Option>Price (desc)</Option>
                        </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList