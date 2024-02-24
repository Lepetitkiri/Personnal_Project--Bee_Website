import colors from '../../Utils/Colors';
import styled from 'styled-components';

const StickyNavStyle = styled.nav`

display: flex;
flex-direction: column;
align-items: center;
width: 20%;
height: auto;
background-color: ${colors.quaternary};
border-radius: 20px;
position: sticky;
top: 2%;
padding: 2%;
margin: 1%;

p {
  width: 100%;
  text-align: center;
  line-height: 2em;
  word-break: break-word;
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    width: 25%;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default StickyNavStyle;
