import { NextPage } from 'next'

export const NavBar: NextPage = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl" href="/">
        The shop's もてぃ
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li>
          <a href="https://www.twitter.com/">twitter</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  </div>
)
