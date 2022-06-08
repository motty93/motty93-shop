import { NextPage } from 'next'

export const Card: NextPage = () => (
  <div className="w-96 shadow-xl hover:shadow-2xl hover:cursor-pointer mb-4 card bg-base-100 active:bg-base-200">
    <figure>
      <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Shoes!
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="justify-end card-actions">
        <div className="hover:bg-sky-200 badge badge-outline">Fashion</div>
        <div className="hover:bg-sky-200 badge badge-outline">Products</div>
      </div>
    </div>
  </div>
)
