import colors from '../../Utils/Colors';
import styled from 'styled-components';

const ShopPartStyle = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 60%;
height: auto;
border-radius: 20px;
background-color: ${colors.primary};
border: 2px solid ${colors.quinary};
padding: 2%;

& .Card--Arrow {
  width: 5%;
  border-radius: 0;
  object-fit: contain;
}

div {
  width: 80%;
  background-color: ${colors.tertiary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
      min-height: 100px;
      max-height: 200px;
      width: 100%;
      margin-bottom: 5%;
      object-fit: contain;
      border-radius: 0;
  }
}


  /* Version tablette */
  @media only screen and (max-width: 992px) {
    width: 80%;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`;

export default ShopPartStyle;
