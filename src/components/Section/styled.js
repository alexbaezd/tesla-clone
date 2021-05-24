import styled from "styled-components"
export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /*  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props =>
    `url(${
      require(`../../images/products/${props.bgImage}.webp`).default
    });`}; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
  display: grid;
`
export const HeroWrapper = styled.div`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  display: grid;
  /*  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.65) 100%
  ); */
`
export const ItemText = styled.div`
  text-align: center;
`

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const RightButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
export const LeftButton = styled(RightButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

export const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`
export const WrapButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`
