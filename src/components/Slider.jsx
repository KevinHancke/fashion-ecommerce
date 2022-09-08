import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import SliderImg from "../tempAssets/sampleimg4.png"


const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    
`

const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: lightgrey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity:0.5;
    color:white;
`

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    
`
const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
`
const Image = styled.img`
    margin-top: 7.5%;
    margin-left: 30%;
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1 ``
const Desc = styled.p ``
const Button = styled.button ``

const Slider = () => {
    return (
        <Container>
           <Arrow direction="left">
                <ArrowLeftOutlinedIcon/>
           </Arrow>
           <Wrapper>
                <Slide>
                <ImgContainer>
                    <Image src = {SliderImg}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SPRING SALE</Title>
                    <Desc>DONT MISS THIS AMAZING SPRING OPENING PROMO! GET 30% OFF OUR NEW ARRIVALS.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
           </Wrapper>
           <Arrow direction="right">
                <ArrowRightOutlinedIcon/>
           </Arrow>
        </Container>
    )
}
export default Slider

//align-items: center;
    //justify-content: center;
    //font-size: 14px;
    //font-weight: 500;