import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Web = () => {

    return (
        <Container>
            <Wrapper>

       <Back> <StyledNavLink to="/"> x </StyledNavLink> </Back>
<Div>
design & development
</Div>
 <Link target="_blank" href= 'http://audioplaceboplaza.com/'> audioplaceboplaza.com </Link>
 <Div>
concept, storyboard, design, sound
<div>in collaboration with Ada X, Amanda Harvey, Miranda Jones, Sophie Marisol</div>
</Div>
 <Link target="_blank" href= 'https://hubs.mozilla.com/h3Ls7Bb/surrender-honeydew-conclave/'><Italic> If you could be anywhere </Italic>VR experience </Link>
 <Div>
design
</Div>
 <Link target="_blank" href= 'https://www.juliaedyck.com/'> juliaedyck.com </Link>
 </Wrapper>
</Container>

    )
}
const Wrapper = styled.div`
height: 100%;
border: 1px black;
background-color:  #bbd387;
border-style: dashed;
padding: 3%;
margin-top: 3%;
`
const Back = styled.div`
padding-top: 1%;
font-weight: bold;
`
const StyledNavLink = styled(NavLink)`
text-decoration: none;
outline: none;
color: black;
&:hover {

font-size: 18px;
transition: 0.3s;
color: black;
}
`

const Div = styled.div`
padding-top: 3%;
font-weight: bold;
`

const Link = styled.a`
text-decoration: none;
color: black;

&:hover {

font-size: 18px;
transition: 0.3s;
color: black;
}
`
const Italic = styled.span`
font-style:italic;
`
export default Web;