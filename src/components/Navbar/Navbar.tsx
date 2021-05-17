import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-start">
      <Link href="/">
        <a className="navbar-brand">Lista de tareas</a>
      </Link>
    </nav>
  )
}

export default Navbar
