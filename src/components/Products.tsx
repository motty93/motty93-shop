import { NextPage } from 'next'
import { Card } from './Card'

export const Products: NextPage = () => (
  <main className="h-1/2 md:h-full m-14">
    <h1 className="text-center font-bold text-2xl mb-6">出品してる商品</h1>
    <div className="flex flex-wrap justify-center gap-4 mx-auto md:flex-wrap md:justify-start md:gap-6 ">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </main>
)
