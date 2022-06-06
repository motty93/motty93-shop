import { NextPage } from 'next'
import { Card } from './Card'

export const Products: NextPage = () => (
  <main className="min-h-screen m-14">
    <div className="md:flex justify-center md:gap-6 mx-auto">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </main>
)
