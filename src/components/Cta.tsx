import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Cta = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of users who have improved their productivity with TaskMaster
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="text-lg px-8">Start Free</Button>
        </Link>
      </section>
  )
}

export default Cta