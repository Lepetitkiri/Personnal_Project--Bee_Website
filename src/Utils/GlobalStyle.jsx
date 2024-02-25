import styled from 'styled-components';
import colors from './Colors';

const GlobalStyle = styled.div`

    main {
      display: flex;
      flex-wrap: no-wrap;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
      height: auto;
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      font-family: Montserrat, 'Courier New', Courier, sans-serif;
      color: ${colors.black};
      background: ${colors.tertiary};
      object-fit: cover;

      h2 {
        font-size: x-large;
      }

      h3 {
        font-size: large;
      }

      p, li {
        font-size: medium;
        line-height: 22px;
      }
    }
    
  ::placeholder {
    color: ${colors.white};
  }

   a {
    color: ${colors.white};
    text-decoration: none;
   }

  /* Version tablette */
    @media only screen and (max-width : 992px) {

      main h2 {
        font-size: large;
      }

      main h3 {
        font-size: medium;
      }

      main p, main li {
        font-size: small;
      }

    }

    /* Version mobile */
    @media only screen and (max-width : 767px) {
      max-width: 767px;

      main {
        display: flex;
        flex-direction: column;
      }

      main h2 {
        font-size: medium;
      }

      main h3 {
        font-size: small;
      }

      main p, main li {
        font-size: x-small;
        line-height: 20px;
      }

    }
  }

`;

export default GlobalStyle;
