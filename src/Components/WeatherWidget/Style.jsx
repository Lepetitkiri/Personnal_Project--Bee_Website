import styled from 'styled-components';

const WeatherWidgetStyle = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 20px;

 h4, p {
  margin: 0px;
  padding: 5px;
 }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default WeatherWidgetStyle;
