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
  border-radius: 0;
  border: none;
  background-color: ${colors.primary};
  object-fit: contain;
  width: 15%;
}

div {
  width: 80%;
  min-height: 500px;
  background-color: ${colors.tertiary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
      min-height: 250px;
      max-height: 300px;
      width: auto;
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
    div {
      min-height: 400px;
    }
    div img {
      width: 90%;
      min-height: 150px;
      max-height: 200px;
    }
  }
`;

export default ShopPartStyle;
