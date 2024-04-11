import colors from '../../Utils/Colors';
import border from '../../Utils/Border';
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
    ${border};
    object-fit: cover;
    width: 30%;
  }

  a {
    color: ${colors.black};
    text-decoration: underline;
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
    &:nth-child(even) {
      flex-direction: row-reverse;
      }
  }
  &.Card--Boutique {
    text-align: center;
    p, a {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  & .Card--Boutique_img {
    width: 20px;
    border-radius: 0px;
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
        align-items: center;
      }
      img {
          max-height: 200px;
      }
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    article {
      &.Card--Home {
        display: flex;
        flex-direction: column;
        align-items: center;
        &:nth-child(odd) {
          flex-direction: column;
          }
      }
      &.Card--Boutique p {
        flex-direction: column;
      }
    }
  }
`;

export default CardStyle;
