import { config } from '@/site.config'
import Link from 'next/link'
import { NextPage } from 'next'
import Image from 'next/image'

export const Hero: NextPage = () => {
  const scrollToProducts = () => {
    const rect = document.getElementById('product-title').getBoundingClientRect()
    const elemTop = rect.top + window.pageYOffset
    window.scrollTo({
      top: elemTop,
      behavior: 'smooth',
    })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-80"></div>
      <Image className="hero h-screen opacity-20" src="/images/hero.jpg" layout="fill" objectFit="cover" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">{config.siteMeta.title}</h1>
          <p className="mb-5 whitespace-pre-wrap text-sm md:text-base lg:text-lg">
            {config.siteMeta.description}
          </p>
          <button className="btn btn-primary cursor-pointer" onClick={scrollToProducts}>
            <Link href="#products">
              <a href="">
                さあ、買え
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
