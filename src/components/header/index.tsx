import { HeaderContainer } from "./style";
import logoimage from "../../assets/logoImage.svg";


export function Header() {
    return(
        <HeaderContainer>
            <img src={logoimage} alt="" />
        </HeaderContainer>
    )
}