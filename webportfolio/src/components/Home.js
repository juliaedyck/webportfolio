import Container from 'react-bootstrap/Container';
import styled from 'styled-components';


const Home = () => {
return ( 

<>
{/* <Container> */}
    <Box>
        <Div4>
           <Text>about</Text> 
        <Div3>
            <Text>media</Text>
        <Div2>
            web
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
background-color: orange;
background-size: contain;
position: absolute;
background-position: center;

`

const Div4 = styled.div`
/* z-index: -1000; */
height: 100%;
width: 100%;
padding: 7%;
padding-left: 20%;
flex-direction: column;
display: flex;
justify-content: center;
align-content: center;
border: 1px black;
background-color: orange;


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
background-color: lightyellow;

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
display: flex;
min-height: 50%;
flex-direction: column;
align-content: center;
justify-content: center;
padding: 7%;
padding-left: 20%;

background-color: lightgreen;
border: 1px black;

border-style: dashed;

&:hover {

background-color: white;}


`

const Div1 = styled.div`
/* height: fit-content; */
/* z-index: 300; */

width: 80%;
min-height: 20%;
display: flex;
justify-content: center;
align-content: center;

padding: 5px;
background-color: lightblue;
border: 1px black;
border-style: solid;

&:hover {

background-color: white;}

`






export default Home;

