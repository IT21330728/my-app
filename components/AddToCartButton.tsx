'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import BuyNowForm from '@/components/BuyNowForm'

interface AddToCartButtonProps {
  item: {
    title: string
    price: string
  }
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const [showBuyNowForm, setShowBuyNowForm] = useState(false)

  return (
    <>
      <Button onClick={() => setShowBuyNowForm(true)}>Add to Cart</Button>
      {showBuyNowForm && (
        <BuyNowForm item={item} onClose={() => setShowBuyNowForm(false)} />
      )}
    </>
  )
}

