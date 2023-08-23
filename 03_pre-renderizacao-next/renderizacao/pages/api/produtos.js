// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'

function numeroAleatorio (min = 1, max = 10000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    {id: numeroAleatorio(), nome: 'Caneta', preco: 5.60 },
    {id: numeroAleatorio(), nome: 'Lapis', preco: 1.60 },
    {id: numeroAleatorio(), nome: 'Borracha', preco: 2.50 },
    {id: numeroAleatorio(), nome: 'Mochila', preco: 45.90 },
    {id: numeroAleatorio(), nome: 'Apontador', preco: 2.00 },
  ])
}
