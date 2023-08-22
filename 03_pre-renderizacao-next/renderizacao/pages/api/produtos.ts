// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {id:1, nome: 'Caneta', preco: 5.60 },
    {id:2, nome: 'Lapis', preco: 1.60 },
    {id:3, nome: 'Borracha', preco: 2.50 },
    {id:4, nome: 'Mochila', preco: 45.90 },
    {id:5, nome: 'Apontador', preco: 2.00 },
  ])
}
