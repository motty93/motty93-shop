import { NextPage } from 'next'
import { Card } from './Card'

export const Products: NextPage = () => {
  return (
    <main className="m-14 h-1/2 md:h-full">
      <h1 className="mb-6 text-2xl font-bold text-center">出品してる商品</h1>
      <div className="flex flex-wrap justify-center items-center gap-7">
        <Card />
        <Card />
        <Card />
        <Card />
        <div className="w-96"></div>
        <div className="w-96"></div>
      </div>
    </main>
  )
}
