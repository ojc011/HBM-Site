import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    z-index: 999;
    position: sticky;
    top: 0;
    background-color: white;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    height: auto;
    width: auto;
    align-items: center;
    padding: 2px;
`;

export const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  /* Add any additional styles you want to apply to the image */
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;