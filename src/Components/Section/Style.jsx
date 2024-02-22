import styled from 'styled-components';

const SectionStyle = styled.section`

display: flex;
flex-direction: column;
height: auto;
width: 100%;
border: 1px blue solid;
height: auto;

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default SectionStyle;
