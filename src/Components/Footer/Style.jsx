import colors from '../../Utils/Colors';
import styled from 'styled-components';

const FooterStyle = styled.footer`

  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 20px;

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  div {
    width: 70%;
    font-size: medium;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 20%;
    font-size: large;
    font-weight: bold;
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    div {
      width: 50%;
      font-size: small;
    }
    nav {
      font-size: medium;
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    div {
      font-size: x-small;
    }
    nav {
      width: 30%;
      font-size: small;
    }
  }
`;

export default FooterStyle;
