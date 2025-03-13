import styled from "styled-components";

const Homepage = () => {
  return (
    <Wrapper>
      <Contents>
        <Header>Julia E Dyck</Header>
        <Columns>
          <Column1>
            <Div> podcast production, web design & development</Div>
            <Link target="_blank" href="https://akindofharmony.com/">
              {" "}
              akindofharmony.com{" "}
            </Link>
            
            <Div>web design & development</Div>
            <Link target="_blank" href="https://hadassahemmerich.com/">
              {" "}
              hadassahemmerich.com{" "}
            </Link>

            <Div> web design & development</Div>
            <Link target="_blank" href="https://www.liewniyomkarn.com/">
              {" "}
              liewniyomkarn.com{" "}
            </Link>

            <Div>project, web design & development</Div>
            <Link target="_blank" href="http://tr4nc3.com/">
              {" "}
              tr4nc3.com{" "}
            </Link>

            <Div>web design & development</Div>
            <Link target="_blank" href="https://umland.be">
              {" "}
              umland.be{" "}
            </Link>

            <Div>project, web design & development</Div>
            <Link target="_blank" href="http://audioplaceboplaza.com/">
              {" "}
              audioplaceboplaza.com{" "}
            </Link>

     <Div>web design & development</Div>
            <Link target="_blank" href="https://www.juliaedyck.com/">
              {" "}
              juliaedyck.com{" "}
            </Link>

            <Div>web design & development</Div>
            <Link target="_blank" href="https://www.nibakure.org/">
              {" "}
              nibakure.org{" "}
            </Link>
       
            <Div>production & sound design</Div>
            <Link
              target="_blank"
              href="https://2021.batard.be/batard-2021/podcast/"
            >
              {" "}
              Bâtard Podcast{" "}
            </Link>
            <Div>production & sound design</Div>
            <Link
              target="_blank"
              href="https://vision2032.cmf-fmc.ca/redesigning-value/economic-potential-and-growth-the-business-side-of-bringing-canadian"
            >
              {" "}
              Representation is the future - Canadian Media Fund{" "}
            </Link>

            <Div>composition & sound design</Div>
            <Link target="_blank" href="https://circuitsofsandandwater.com/">
              Circuits of Sand and Water{" "}
            </Link>
          </Column1>
          <Column2>juliaedyck@gmail.com</Column2>
        </Columns>
      </Contents>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: #8cfa9c;
  background-size: contain;
  position: absolute;
  background-position: center;
  overflow: scroll;
  overflow-x: hidden;

  @media (max-width: 1500px) {
    /* background-size: cover; */
    /* background-position: center; */
    /* background-repeat: no-repeat; */
    /* height: 100%; */
  }
`;

const Contents = styled.div`
  width: 100%;
  margin-top: 2%;
  /* max-width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #8cfa9c;

  @media (max-width: 767px) {
    margin-left: 10%;
    max-width: 90%;
  background-color: #8cfa9c;

  }
`;
const Header = styled.div`
  font-family: "Source Serif Pro", serif;
  writing-mode: vertical-rl;
  position: fixed;
  font-size: 120px;
  height: 100%;
  max-width: 20%;
  transform: scale(-1);
  display: flex;
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
`;

const Columns = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: row;
  background-color: #8cfa9c;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  min-width: 60%;
  background-color: #8cfa9c;

  /* max-width: 70%; */

  @media (max-width: 820px) {
    margin-left: 15%;
    /* max-width: 70%; */
    padding-right: 5%;
  background-color: #8cfa9c;

  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 85%;
  @media (max-width: 820px) {
    margin-left: 15%;
    margin-top: 5%;
  }
`;

const Div = styled.div`
  /* padding-bottom: 3%; */
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
  /* max-width: 80%; */
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  padding-bottom: 4%;

  &:hover {
    font-size: 18px;
    transition: 0.3s;
    color: black;
  }
`;
const Italic = styled.span`
  font-family: "Work Sans", sans-serif;
  font-style: italic;
`;
export default Homepage;
