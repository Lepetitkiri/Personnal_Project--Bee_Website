import styled from 'styled-components';

const SectionStyle = styled.section`

display: flex;
align-items: center;
height: auto;
width: auto;
margin: 1%;

& .Section--Row {
  display: flex;
flex-direction: row;
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    flex-direction: column;

    & .Section--Row {
    flex-direction: column;
    }
  }
`;

export default SectionStyle;
