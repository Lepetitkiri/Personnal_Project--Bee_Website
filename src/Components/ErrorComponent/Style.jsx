import colors from '../../Utils/Colors';
import border from '../../Utils/Border';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-150px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(150px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ErrorComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.tertiary};
  margin-bottom: 10px;
  width: 100%;
  padding: 2%;
  gap: 5%;
  cursor: url('${props => props.basename}/Pictures/bee.png'), auto;

  .Error--Link, a, p {
      font-size: large;
      color: ${colors.black};
      text-align: center;
    }

    .Error--Instructions {
      margin: 50px 0;
    }

    button {
      width: 8%;
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      cursor: url('${props => props.basename}/Pictures/bee.png'), auto;
    }

    .Error--Game {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 400px;
      width: 80%;
      & button {
        width: 10%;
        height: 80px;
        animation: ${moveUpDown} 8s linear infinite;
      }
      & img {
        height: 50px;
        width: 100%;
        object-fit: contain;
      }
      & :nth-child(2n) {
        animation: ${moveUpDown} 6s linear infinite;
      }
      & :nth-child(3n) {
        animation: ${moveUpDown} 8s linear 1s infinite;
      }
    }

    .Error--Game__Victory {
      width: 80%;
      height: 400px;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
        ${border};
      }
    }


  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    .Error--Game__Victory img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

ErrorComponentStyle.propTypes = {
  basename: PropTypes.string,
};

export default ErrorComponentStyle;
