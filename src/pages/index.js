import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Layout from "../components/layout"
import Section from "../components/Section"
import Seo from "../components/seo"
import { selectedCars } from "../features/car/carSlice"
import { selectedAccessories } from "../features/products/productsSlice"
const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
`

const getId = name => `${String(name).replace(/\s/g, "").toUpperCase()}`

const IndexPage = () => {
  const dataCars = useSelector(selectedCars)
  const dataAccessories = useSelector(selectedAccessories)
  const dataImages = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "products" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP]
                layout: FULL_WIDTH
                quality: 65
              )
            }
          }
        }
      }
    }
  `)

  const getObjectImage = name => {
    const img = dataImages.allFile.edges.find(image => image.node.name === name)
    return img.node
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        {dataCars &&
          dataCars.map(car => (
            <Section
              key={car.id}
              title={car.title}
              description={car.description}
              backgroundImg={car.image}
              leftButtonText="Custom Order"
              rightButtonText="Existing Inventory"
              id={getId(car.title)}
              objImage={getObjectImage(car.image)}
            />
          ))}
        {dataAccessories &&
          dataAccessories.map(product => (
            <Section
              key={product.id}
              title={product.title}
              description={product.description}
              backgroundImg={product.image}
              leftButtonText={product.leftButtonText}
              rightButtonText={product.rightButtonText}
              id={getId(product.title)}
              objImage={getObjectImage(product.image)}
            />
          ))}
      </Container>
    </Layout>
  )
}
export default IndexPage
