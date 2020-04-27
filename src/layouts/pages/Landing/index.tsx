import React from "react"
import { StaticQuery, graphql } from "gatsby"

import localStyles from "./style.module.scss"
import ImageTransitionHandler from "./ImageTransitionHandler"

const Landing = (): React.ReactNode => {
  return (
    <main className={localStyles.landing}>
      <ImageTransitionHandler />
    </main>
  )
}

export default Landing
