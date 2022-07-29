import Link from 'next/link'

export const Header: React.FC = () => (
  <div className="navbar bg-base-100">
    <Link href="/">
      <a className="text-xl normal-case btn btn-ghost">THE SHOP MOT</a>
    </Link>
  </div>
)
