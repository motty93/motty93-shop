import { config } from '@/site.config'
import { NextPage } from 'next'
import Image from 'next/image'

export const Hero: NextPage = () => (
  <div className="min-h-screen hero">
    <div className="bg-opacity-80 hero-overlay"></div>
    <Image className="h-screen opacity-20 hero" src="/images/hero.jpg" layout="fill" objectFit="cover" />
    <div className="text-center hero-content text-neutral-content">
      <div className="max-w-lg">
        <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">{config.siteMeta.title}</h1>
        <p className="mb-5 text-sm md:text-base lg:text-lg whitespace-pre-wrap">
          {config.siteMeta.description}
        </p>
        <button className="btn btn-primary">さあ、買え</button>
      </div>
    </div>
  </div>
)
