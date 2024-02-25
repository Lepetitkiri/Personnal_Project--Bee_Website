import colors from '../../Utils/Colors';
import styled from 'styled-components';

const CardStyle = styled.div`

width: 100%;

article {
  display: flex;
  flex-direction: row;
  background-color: ${colors.tertiary};
  margin-bottom: 10px;
  padding: 2%;
  opacity: 0.8;
  border-bottom: 1px solid ${colors.primary};
  transition: opacity 300ms ease-in-out, border 300ms ease-in-out;
  gap: 2%;
  &:hover {
    opacity: 1;
    border-bottom: 1px solid ${colors.secondary};
    transition: opacity 300ms ease-in-out, border 300ms ease-in-out;
  }
  &:nth-child(odd) {
    display: flex;
    flex-direction: row-reverse;
  }
  img {
    border-radius: 20px;
    width: 30%;
    object-fit: cover;
  }
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    article {
      opacity: 1;
      img {
        width: 40%;
      }
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 1;
      &:nth-child(odd) {
        display: flex;
        flex-direction: column;
      }
    }
    img {
      width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: contain;
    }
  }
`;

export default CardStyle;