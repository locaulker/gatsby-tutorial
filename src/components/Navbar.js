import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/example-page">Example Page</Link>
        </li>
        <li>
          <Link to="/images-page">Images Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
