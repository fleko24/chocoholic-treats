import styled from 'styled-components';
import { ReactComponent as IconSvg} from '../../../assets/logo/logo.svg'
import {Link} from 'react-router-dom';

 
export const NavigationContainer = styled.div`
    background-color: #FEFEFE;
    height: 160px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 20%;
    padding 25px;
`
export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`

export const StyledLogo = styled(IconSvg)`
    height: 100px;
    width: 100px;
`