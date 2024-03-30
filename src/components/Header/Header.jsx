import React from 'react'
import Link from "next/link"

function Header() {
  return (
    <header>
      <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about/profile">Profile</Link>
          </li>

        </ul>
    </header>
  )
}

export default Header
