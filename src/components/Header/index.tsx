import { HeaderContainer, HeaderContent, NewTRansactionsButton } from "./styles";

import LogoImage from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImage} alt="" />
                <NewTRansactionsButton>Nova transação</NewTRansactionsButton>
            </HeaderContent>
        </HeaderContainer>
    )
}