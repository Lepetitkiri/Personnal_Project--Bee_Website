import colors from '../../Utils/Colors';
import border from '../../Utils/Border';
import styled from 'styled-components';

const StickyNavStyle = styled.nav`

display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 20%;
height: 100%;
background-color: ${colors.quaternary};
${border};
position: sticky;
top: 2%;
padding: 2%;
margin: 1%;

p {
  width: 100%;
  text-align: center;
  line-height: 2em;
  word-break: break-word;
a {
  color: ${colors.black};
  text-decoration: underline;
}
}

img {
  width: 20%;
  height: auto;
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    width: 20%;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    position: static;
    justify-content: space-between;
    line-height: 1em;
    width: 95%;
    gap: 2%;

    h2, p, div {
      width: 20%;
    }

    div p {
      width: 100%;
    }
  }
`;

export default StickyNavStyle;
