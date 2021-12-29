import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Menus = styled.nav`
  background-color: ${({ theme }) => theme.colors.default};
`
export const MenusUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;  
  justify-content: center;
  position: sticky;
  top:0;
`

export const MenusUlLi = styled.ul`
  margin-top: 7%;
`
export const MenusUlLiA = styled(Link)`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 7%;
  &:hover{
  text-decoration: underline;
  cursor: pointer;
  color:white;
  }
`