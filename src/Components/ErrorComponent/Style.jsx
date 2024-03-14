import colors from '../../Utils/Colors';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorComponentStyle = styled.div`

  display: flex;
  flex-direction: column;
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
    img {
      border-radius: 20px;
      width: 30%;
      object-fit: contain;
    }
  }


  /* Version tablette */
  @media only screen and (max-width: 992px) {
      img {
        width: 40%;
      }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    img {
      width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: contain;
    }
  }
`;

ErrorComponentStyle.propTypes = {
  basename: PropTypes.string,
};

export default ErrorComponentStyle;
