import React from "react"
import { useSelector } from "react-redux"
import { animateScroll as scroll, Link } from "react-scroll"
import { selectedNameCars } from "../../features/car/carSlice"
import { selectedNameAccessories } from "../../features/products/productsSlice"
import useToggle from "../../hooks/useToggle"
import {
  BurgerNav,
  CloseButton,
  Container,
  CustomMenu,
  Logo,
  Menu,
  RightMenu,
} from "./styled"

const Header = () => {
  const [isOpen, toggleIsOpen] = useToggle()

  const cars = useSelector(selectedNameCars)
  const products = useSelector(selectedNameAccessories)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Container>
      <Logo
        src={require("../../images/logo.svg").default}
        alt="Tesla Logo"
        onClick={scrollToTop}
      />

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <Link
                activeClass="active"
                to={`${String(car).replace(/\s/g, "").toUpperCase()}`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {car}
              </Link>
            </li>
          ))}
      </Menu>
      <RightMenu>
        <p>Shop</p>
        <p>Tesla Account</p>
        <CustomMenu onClick={toggleIsOpen} icon="true" />
      </RightMenu>
      <BurgerNav show={isOpen}>
        <CloseButton onClick={toggleIsOpen} icon="true" />
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <Link
                activeClass="active"
                to={`${String(car).replace(/\s/g, "").toUpperCase()}`}
                spy={true}
                smooth={true}
                offset={0}
                duration={250}
                onClick={toggleIsOpen}
              >
                {car}
              </Link>
            </li>
          ))}
        {products &&
          products.map((product, index) => (
            <li key={index}>
              <Link
                activeClass="active"
                to={`${String(product).replace(/\s/g, "").toUpperCase()}`}
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                onClick={toggleIsOpen}
              >
                {product}
              </Link>
            </li>
          ))}
      </BurgerNav>
    </Container>
  )
}

export default Header
