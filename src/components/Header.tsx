import Link from 'next/link'

export const Header: React.FC = () => (
  <div className="navbar bg-base-100">
    <Link href="/">
      <a className="btn btn-ghost text-xl normal-case">THE SHOP MOT</a>
    </Link>
  </div>
)
