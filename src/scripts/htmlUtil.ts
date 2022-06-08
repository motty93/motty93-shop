import { BodyEntity } from '@/types'
import hljs from 'highlight.js'
import { JSDOM } from 'jsdom'

export const convertToHtml = (bodyEntity: BodyEntity): string => {
  const htmlString = bodyEntity.richText
  const dom = new JSDOM(htmlString)
  setCodeHighlight(dom.window.document.querySelectorAll('pre code'))
  setLazyLoad(dom.window.document.querySelectorAll('img'))

  return dom.window.document.body.innerHTML
}

const setLazyLoad = (elements: NodeListOf<HTMLImageElement>): void => {
  elements.forEach((element) => {
    element.classList.add('lazyload')
    element.setAttribute('data-src', element.src)
    element.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
  })
}

const setCodeHighlight = (elements: NodeListOf<Element>): void => {
  elements.forEach((element) => {
    element.innerHTML = hljs.highlightAuto(element.textContent ?? '').value
    element.classList.add('hljs')
  })
}
