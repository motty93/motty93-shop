import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { getProductById } from '@/utils'
import { lineConfig } from '@/utils/lineConfig'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const productId = req.query.id
  const product = await getProductById(productId as string)
  const config = lineConfig(product.title)

  return await axios
    .request(config)
    .then(({ data }) => {
      res.status(200).json(data)
    })
    .catch((error) => {
      res.status(500).json(error)
    })
}

export default handler
