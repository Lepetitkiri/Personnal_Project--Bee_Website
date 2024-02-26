import colors from '../../Utils/Colors';
import styled from 'styled-components';

const CardStyle = styled.div`

width: 100%;

article {
  display: flex;
  background-color: ${colors.tertiary};
  margin-bottom: 10px;
  padding: 2%;
  border-bottom: 1px solid ${colors.primary};
  transition: opacity 300ms ease-in-out, border 300ms ease-in-out;
  gap: 2%;

  img {
    border-radius: 20px;
    width: 30%;
    object-fit: cover;
  }

  &.Card--Row {
    flex-direction: row;
  }
  &.Card--Column {
    flex-direction: column;
    align-items: center;
  }

  &.Card--Home {
    opacity: 0.8;
    &:hover {
      opacity: 1;
      border-bottom: 1px solid ${colors.secondary};
      transition: opacity 300ms ease-in-out, border 300ms ease-in-out;
    }
    &:nth-child(odd) {
      flex-direction: row-reverse;
      }
  }
  &.Card--Error {
    a, p {
      font-size: x-large;
      color: ${colors.black};
      text-align: center;
    }
    img {
      object-fit: contain;
    }
  }
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    article {
      &.Card--Home {
        opacity: 1;
      }
      img {
        width: 40%;
      }
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    article {
      flex-direction: column;
      align-items: center;
      opacity: 1;
      &:nth-child(odd) {
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
