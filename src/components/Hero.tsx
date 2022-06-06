import { NextPage } from 'next'

export const Hero: NextPage = () => (
  <div className="hero min-h-screen" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
    <div className="hero-overlay bg-opacity-80"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-lg">
        <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold">The shop's もてぃ</h1>
        <p className="mb-5 text-sm md:text-base lg:text-lg">
          いらないものをあげてます
          <br />
          ものを整理したいので是非買ってね
        </p>
        <button className="btn btn-primary">さあ、買え</button>
      </div>
    </div>
  </div>
)
