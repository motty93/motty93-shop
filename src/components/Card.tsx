import { NextPage } from 'next'

export const Card: NextPage = () => (
  <div className="card w-auto bg-base-100 shadow-xl hover:cursor-pointer md:mb-4">
    <figure>
      <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Shoes!
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline hover:bg-sky-200">Fashion</div>
        <div className="badge badge-outline hover:bg-sky-200">Products</div>
      </div>
    </div>
  </div>
)
