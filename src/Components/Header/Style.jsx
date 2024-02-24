import colors from '../../Utils/Colors';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderStyle = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  color: ${colors.white};
  background-image: linear-gradient( to bottom,
    rgb(72, 63, 63, 0.5),
    rgba(00, 00, 00, 0.5)), url('${props => props.basename}/Pictures/Banniere.jpg'); 
  background-size: 100%;
  gap: 10%;
  border-radius: 20px;

  h1 {
    width: 70%;
    text-align: center;
    font-size: xx-large;
    color: ${colors.tertiary}
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
    width: 20%;
    font-size: normal;
  }
  nav :hover {
    color: ${colors.primary};
    font-weight: bold;
  }

  /* Taille intermédiaire */
  @media only screen and (max-width: 1200px) {
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
    height: 100px;
    h1 {
      font-size: small;
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
