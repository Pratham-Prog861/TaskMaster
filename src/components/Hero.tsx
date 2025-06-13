import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Manage Your Tasks with Ease</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stay organized, meet deadlines, and boost your productivity with our intuitive task management solution.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="text-lg px-8">Start Managing Tasks</Button>
        </Link>
      </section>
  )
}

export default Hero