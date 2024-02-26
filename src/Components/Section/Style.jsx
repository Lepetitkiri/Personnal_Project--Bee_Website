import styled from 'styled-components';

const SectionStyle = styled.section`

display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: auto;
margin: 1%;

& div.Section--Row {
  display: flex;
flex-direction: row;
}

& div.Section--Column {
  display: flex;
flex-direction: column;
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;

    & div.Section--Row {
    flex-direction: column;
    }
  }
`;

export default SectionStyle;
