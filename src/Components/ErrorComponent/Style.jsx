import colors from '../../Utils/Colors';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
      margin: 50px 0 50px 0;
    }
    img {
      width: 100%;
      object-fit: contain;
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
      flex-direction: column;
      align-items: center;
      width: 60%;
      height: auto;
      & button:nth-child(1), button:nth-child(5), button:nth-child(9) {
        align-self: start;
      }
      & button:nth-child(3), button:nth-child(7) {
        align-self: end;
      }
    }


  /* Version tablette */
  @media only screen and (max-width: 992px) {
      button {
        width: 12%;
      }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

ErrorComponentStyle.propTypes = {
  basename: PropTypes.string,
};

export default ErrorComponentStyle;
