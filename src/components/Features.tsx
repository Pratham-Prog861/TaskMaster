import { Bell, Calendar, CheckCircle, Clock } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg border bg-card">
            <Calendar className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-muted-foreground">Plan your tasks with our intuitive calendar interface</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Clock className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Time Tracking</h3>
            <p className="text-muted-foreground">Set due times and stay on schedule</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Bell className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
            <p className="text-muted-foreground">Get timely reminders for your tasks</p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <CheckCircle className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-muted-foreground">Monitor your task completion status</p>
          </div>
        </div>
      </section>
  )
}

export default Features