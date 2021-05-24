import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Fade } from "react-awesome-reveal"
import {
  ButtonGroup,
  DownArrow,
  HeroWrapper,
  ItemText,
  LeftButton,
  RightButton,
  Wrap,
  WrapButtons,
} from "./styled"

const Section = ({
  title,
  description,
  backgroundImg,
  leftButtonText,
  rightButtonText,
  id,
  objImage,
}) => {
  const image = getImage(objImage)

  return (
    <Wrap id={id}>
      <GatsbyImage
        alt="Hero Image"
        image={image}
        style={{
          gridArea: "1/1",
          height: "100vh",
          width: "100vw",
        }}
      />
      <HeroWrapper>
        <Fade direction="up">
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <WrapButtons>
          <Fade direction="up">
            <ButtonGroup>
              {leftButtonText && <LeftButton>{leftButtonText}</LeftButton>}
              <RightButton>{rightButtonText}</RightButton>
            </ButtonGroup>
          </Fade>
          <DownArrow
            src={require("../../images/down-arrow.svg").default}
            alt="Down Arrow icon"
          />
        </WrapButtons>
      </HeroWrapper>
    </Wrap>
  )
}

export default Section
