import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

type LayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout
