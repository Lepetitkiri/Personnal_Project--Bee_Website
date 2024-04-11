import colors from '../../Utils/Colors';
import border from '../../Utils/Border';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderStyle = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 150px;
  width: 100%;
  color: ${colors.white};
  background-image: linear-gradient( to bottom,
    rgb(72, 63, 63, 0.5),
    rgba(00, 00, 00, 0.5)), url('${props => props.basename}/Pictures/Banniere.jpg'); 
  background-size: 100%;
  ${border};

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  h1 {
    width: 70%;
    text-align: center;
    font-size: xx-large;
    color: ${colors.tertiary};
    font-family: Montserrat, 'Courier New', Courier, sans-serif;
  }

  img {
    height: 100px;
    width: auto;
    padding: 10px;
    transition: transform 500ms;
  }
  img:hover {
      transform: scale(0.7);
      transition: transform 500ms;
  }

  nav {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 10%;
    font-size: medium;
  }
  nav :hover {
    color: ${colors.primary};
    transition: color 200ms;
  }

  /* Taille intermédiaire */
  @media only screen and (max-width: 1280px) {
    h1 {
      font-size: x-large;
    }
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    img {
      height: 70px;
      width: auto;
    }
    nav {
      font-size: small;
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    height: 80px;
    gap: 2%;
    h1 {
      font-size: small;
      width: 60%;
    }
    img {
      height: 50px;
      width: auto;
    }
    nav {
      font-size: x-small;
    }
  }
`;

HeaderStyle.propTypes = {
  basename: PropTypes.string,
};

export default HeaderStyle;
