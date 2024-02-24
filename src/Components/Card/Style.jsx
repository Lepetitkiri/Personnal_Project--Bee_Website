import colors from '../../Utils/Colors';
import styled from 'styled-components';

const CardStyle = styled.div`

width: 100%;

article {
  background-color: ${colors.tertiary};
  margin-bottom: 10px;
  padding: 2%;
  opacity: 0.8;
  border-bottom: 1px solid ${colors.primary};
  transition: opacity 300ms ease-in-out, border 300ms ease-in-out;
}

article:hover {
  opacity: 1;
  border-bottom: 1px solid ${colors.secondary};
  transition: opacity 300ms ease-in-out, border 300ms ease-in-out;
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    article {
      opacity: 1;
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default CardStyle;
