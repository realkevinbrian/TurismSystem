/***
 * ********Global Syles
 */
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{


        margin: 0;
        padding: 0;
        img{
            width: 100%;
            max-width: 100%;
            height: auto;
        }

        button{
            border: 1px dashed transparent;
            background-color: transparent;
            color: white;
            padding: 5px;
        }

        ul{
          padding: 0;
          margin: 0;

          li{
            list-style-type: none;
            a{
              text-decoration: inherit;
              color: inherit;
            }
          }
        }

        input{
          border: 1px solid transparent;
          outline: none;
        }

    }

    button,a,img{
        cursor: pointer;
        font-family: NunitoSansRegular;

    }

    svg{
      cursor: pointer;
    }

    //////default font

label,input,a,span,li{
  font-family: NunitoSans;
}

p{
  font-family: NunitoSansRegular;
}

h1,h2,h3,h4,h5,h6{
  font-family: NunitoSansBold;
  word-break: keep-all;
}







`;

/********************theme******************/
export const theme = {
  colors: {
    primary: "#03738C",
    white: "#ffff",
    secondary: "#ff9b06",
    red: "#ec0202",
    green: "#079784",
    grey : "#F5F5F5",
    greyDark : "#D8D8D8"
  },
  Layout: {
    Mobile: "500px",
    Tablets: "501px",
    Desktop: "1280px",
  },
};

/****
 * Global Components
 */

const Container = styled.section`
  padding: 1rem 3rem;
`;

/***
 * Export all components
 */

export { Container };
