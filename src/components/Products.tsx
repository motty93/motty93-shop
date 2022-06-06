import { NextPage } from 'next'
import { Card } from './Card'

export const Products: NextPage = () => (
  <main className="flex gap-6 m-14">
    <Card />
    <Card />
    <Card />
    <Card />
  </main>
)
