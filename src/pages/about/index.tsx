import { Header } from '@/components'
import { NextPage } from 'next'

const About: NextPage = () => (
  <>
    <Header />
    <div className="mx-auto max-w-screen-md h-screen md:max-w-screen-lg">
      <div className="flex flex-col">
        <h1 className="my-10 text-2xl font-bold">このサイトについて</h1>
        <p className="my-5 text-sm md:text-base"></p>
      </div>
    </div>
  </>
)

export default About
