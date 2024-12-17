import styled from "styled-components";
import backgroundHeader from "../../assets/backgroundHeader.svg";
import backgroundHeaderII from "../../assets/backgroundHeaderII.svg"


export const HeaderContainer = styled.header `
    display: flex;
    justify-content: center;
    background-color: ${props => [props.theme.DarkBlue300]};
    padding: 4rem 0 8.5rem;

    background-image: url(${backgroundHeader}), url(${backgroundHeaderII});
    background-repeat: no-repeat;
    background-position: left center, calc(120% - 116px) center; /* Ajuste Da posição da segunda imagem */
`