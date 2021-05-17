import React from "react"
import Footer from "../Footer/Footer"

type LayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout
