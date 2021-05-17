import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Todo List</a>
      </Link>
    </nav>
  )
}

export default Navbar
