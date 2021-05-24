import styled from "styled-components"
import CloseIcon from "../../images/close-icon.svg"
import MenuIcon from "../../images/menu-icon.svg"

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`
export const Logo = styled.img`
  cursor: pointer;
`
export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
  }
  .active {
    border-bottom: 1px solid #333;
  }
`

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a,
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.69rem;
  }
`

export const CustomMenu = styled.div`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.icon ? MenuIcon : ""})`};
  cursor: pointer;
`

export const CloseButton = styled(CustomMenu)`
  background-image: ${props => `url(${props.icon ? CloseIcon : ""})`};
  margin-left: auto;
`

export const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  transform: ${props => (props.show ? `translateX(0%)` : `translateX(100%)`)};
  transition: transform 200ms ease-in-out;
  li {
    padding: 23px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      cursor: pointer;
    }
  }
`
