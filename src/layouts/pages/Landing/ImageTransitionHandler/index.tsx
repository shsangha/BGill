import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.scss"

const ImageTransitionManager = (): React.ReactNode => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allContentfulLandingPhotos {
            nodes {
              landscape {
                fluid(maxWidth: 3000) {
                  ...GatsbyContentfulFluid
                }
              }
              portrait {
                fluid(maxWidth: 900) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      `}
    >
      {({
        allContentfulLandingPhotos: {
          nodes: [{ landscape, portrait }],
        },
      }): React.ReactNode => {
        const imageArrayLength =
          landscape.length > portrait.length
            ? portrait.length
            : landscape.length

        const randomize = (): void => {
          setActiveIndex(Math.floor(Math.random() * imageArrayLength))
        }

        return (
          <div
            tabIndex={0}
            onKeyDown={randomize}
            onMouseMove={randomize}
            className={styles.imgWrapper}
          >
            {Array.from(Array(imageArrayLength)).map((_, index) => {
              console.log(index)

              return (
                <Img
                  style={{ position: "absolute" }}
                  key={index}
                  className={`${
                    index === activeIndex ? styles.activeImg : ""
                  } ${styles.imgCard}`}
                  fadeIn={false}
                  fluid={[
                    portrait[index] ? portrait[index].fluid : portrait[0].fluid,
                    {
                      ...(landscape[index]
                        ? landscape[index].fluid
                        : landscape[0].fluid),
                      media: "(orientation: landscape)",
                    },
                  ]}
                />
              )
            })}
          </div>
        )
      }}
    </StaticQuery>
  )
}

export default ImageTransitionManager
