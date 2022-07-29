import { NextPage } from 'next'
import Link from 'next/link'

export const NavBar: NextPage = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link className="btn btn-ghost text-xl normal-case" href="/">
        The shop&lsquo;s もてぃ
      </Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li>
          <Link href="https://www.twitter.com/">twitter</Link>
        </li>
        <li>
          <Link href="/">Item2</Link>
        </li>
      </ul>
    </div>
  </div>
)
