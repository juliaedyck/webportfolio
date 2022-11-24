import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Home = () => {
return ( 

<>
{/* <Container> */}
    <Box>
        <Div4>
           <Text>info</Text> 
        <Div3>
            <Text>media</Text>
        <Div2>
        <StyledNavLink to="/Web">web</StyledNavLink> 
<Div1>
    julia e dyck    </Div1>
    </Div2>
    </Div3>
    </Div4>
    </Box>
    
    {/* </Container> */}

</>

)

}
const StyledNavLink = styled(NavLink)`
text-decoration: none;
outline: none;
color: black;
`

const Text = styled.div`
width: fit-content;
max-width: 20%;


/* height: fit-content; */
`

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
background-size: contain;
position: absolute;
background-position: center;

`

const Div4 = styled.div`
/* z-index: -1000; */
height: 80%;
width: 80%;
padding: 7%;
padding-left: 20%;
flex-direction: column;
display: flex;
justify-content: center;
align-content: center;
border: 1px black;
background-color: #ffcc98;


border-style: dashed;

&:hover {

background-color: white;
}
` 
const Div3 = styled.div`

width: 80%;
height: 80%;
min-height: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
padding: 7%;
padding-left:20%;
background-color: #ffde95;

border: 1px black;
border-style: solid;
&:hover {

background-color: white;
}

`
const Div2 = styled.div`

/* height: 300px; */
/* z-index: 200; */

width: 80%;
height: 80%;
display: flex;
min-height: 50%;
flex-direction: column;
align-content: center;
justify-content: center;
padding: 7%;
padding-left: 20%;

background-color:  #bbd387;
border: 1px black;

border-style: dashed;

&:hover {

background-color: white;}


`

const Div1 = styled.div`
/* height: fit-content; */
/* z-index: 300; */

width: 80%;
height: 80%;
min-height: 20%;
display: flex;
justify-content: center;
align-content: center;

padding: 5px;
background-color:  #80b5c2;
border: 1px black;
border-style: solid;

&:hover {

background-color: white;}

`






export default Home;

