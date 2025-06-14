import { Bell, Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Features = () => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Everything You Need, Completely Free
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            All features are available to everyone, no hidden costs or premium tiers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Smart Scheduling</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Plan your tasks with our intuitive calendar interface and never miss a deadline</p>
            <Link href="/features#scheduling" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Time Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Set due times and stay on schedule with our smart time management tools</p>
            <Link href="/features#time-tracking" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Bell className="w-7 h-7 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Smart Notifications</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Get timely reminders and stay informed with our intelligent notification system</p>
            <Link href="/features#notifications" className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Progress Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Monitor your task completion status and track your productivity over time</p>
            <Link href="/features#progress" className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
              Learn more <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features