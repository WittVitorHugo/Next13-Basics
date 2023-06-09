interface ProductProps {
  params: {
    slug: string
  }
}

export default function Product({ params }: ProductProps) {
  return <h3>Product: {params.slug}</h3>
}