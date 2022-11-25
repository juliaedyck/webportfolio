import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Homepage = () => {

    return (

            <Wrapper>

       {/* <Back> <StyledNavLink to="/"> x </StyledNavLink> </Back> */}
 <Contents>    
       <Header>
        Julia E Dyck
       </Header>
       <Columns>
       <Column1>
<Div>
design & development
</Div>
 <Link target="_blank" href= 'http://audioplaceboplaza.com/'> audioplaceboplaza.com </Link>
 <Div>
concept, storyboard, design, sound
<div>in collaboration with Ada X, Amanda Harvey, Miranda Jones, Sophie Marisol</div>
</Div>
 <Link target="_blank" href= 'https://hubs.mozilla.com/h3Ls7Bb/surrender-honeydew-conclave/'> If you could be anywhere - VR experience </Link>
 <Div>
design
</Div>
 <Link target="_blank" href= 'https://www.juliaedyck.com/'> juliaedyck.com </Link>
 <Div>
production & sound design
</Div>
 <Link target="_blank" href= 'https://2021.batard.be/batard-2021/podcast/'> Bâtard Podcast </Link>
 <Div>
production & sound design
</Div>
 <Link target="_blank" href= 'https://vision2032.cmf-fmc.ca/redesigning-value/economic-potential-and-growth-the-business-side-of-bringing-canadian'> Representation is the future - Canadian Media Fund  </Link>
 </Column1>
 <Column2>
 juliaedyck@gmail.com
 
 </Column2>
 </Columns>
 </Contents>  
 </Wrapper>


    )
}
const Wrapper = styled.div`
height: 150%;
width: 100%;
background-color: #8cfa9c;
background-size: contain;
position: absolute;
background-position: center;

@media (max-width: 1500px) {
    /* background-size: cover; */
    /* background-position: center; */
    /* background-repeat: no-repeat; */
    /* height: 100%; */
  }

`

const Contents = styled.div`

width: 100%;
margin-top: 2%;
display: flex;
flex-direction: row;
align-items: flex-start;

@media (max-width: 767px) {
margin-left: 10%;
    
}

`
const Header= styled.div`
font-family: 'Source Serif Pro', serif;
writing-mode: vertical-rl;
position: fixed;
font-size: 120px;
height: 100%;
max-width: 20%;
transform: scale( -1);
display:flex;
justify-content: flex-end;
align-items: flex-end;
/* margin-top: 0; */
/* margin-bottom: 60%;
top:0; */
/* bottom:0; */

@media (max-height: 645px) {
font-size: 100px;
    
}

@media (max-height: 533px) {
font-size: 70px;
    
}

@media (max-height: 375px) {
font-size: 50px;
    
}

@media (max-width: 767px) {
/* margin-left: 27%; */
    
}
`

const Columns = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 820px) {
    flex-direction: column;
}


`
const Column1 = styled.div`
display: flex;
flex-direction: column;
margin-left: 22%;
min-width: 60%;

@media (max-width: 820px) {
    margin-left: 20%;
}

`

const Column2 = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 820px) {
    margin-left: 25%;
    margin-top: 5%;
}
`

const Div = styled.div`
/* padding-bottom: 3%; */
font-weight: bold;
font-family: 'Work Sans', sans-serif;
`

const Link = styled.a`
text-decoration: none;
color: black;
padding-bottom: 4%;

&:hover {

font-size: 18px;
transition: 0.3s;
color: black;
}
`
const Italic = styled.span`
font-family: 'Work Sans', sans-serif;
font-style:italic;
`
export default Homepage;