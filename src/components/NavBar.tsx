import { NextPage } from 'next'
import Link from 'next/link'

export const NavBar: NextPage = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link className="text-xl normal-case btn btn-ghost" href="/">
        The shop&lsquo;s もてぃ
      </Link>
    </div>
    <div className="flex-none">
      <ul className="p-0 menu menu-horizontal">
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
