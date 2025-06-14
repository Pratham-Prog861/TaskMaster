import React from 'react';
import { 
  Calendar, 
  Clock, 
  Bell, 
  CheckCircle, 
  Zap, 
  Shield, 
  Smartphone, 
  Users,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const FeaturesPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Plan your tasks with our intuitive calendar interface. Set due dates, organize by priority, and never miss a deadline.",
      color: "blue",
      details: [
        "Drag-and-drop task organization",
        "Multiple calendar views (day, week, month)",
        "Recurring task support",
        "Priority-based task sorting"
      ]
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Stay on schedule with our smart time management tools. Track time spent on tasks and optimize your productivity.",
      color: "purple",
      details: [
        "Pomodoro timer integration",
        "Time estimation tools",
        "Progress tracking",
        "Productivity analytics"
      ]
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get timely reminders and stay informed with our intelligent notification system. Never miss an important task.",
      color: "pink",
      details: [
        "Customizable notification preferences",
        "Email and browser notifications",
        "Smart reminder scheduling",
        "Priority-based alerts"
      ]
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description: "Monitor your task completion status and track your productivity over time. Visualize your progress and stay motivated.",
      color: "green",
      details: [
        "Progress visualization",
        "Completion statistics",
        "Achievement tracking",
        "Productivity insights"
      ]
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Speed up your workflow with keyboard shortcuts and quick actions. Complete tasks faster and more efficiently.",
      color: "yellow",
      details: [
        "Keyboard shortcuts",
        "Quick task creation",
        "Bulk actions",
        "Custom commands"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your data is protected with enterprise-grade security. We take privacy seriously and ensure your information is safe.",
      color: "indigo",
      details: [
        "End-to-end encryption",
        "Regular backups",
        "Privacy controls",
        "Secure authentication"
      ]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Access your tasks from anywhere. Our responsive design works seamlessly across all your devices.",
      color: "cyan",
      details: [
        "Mobile-responsive design",
        "Progressive Web App",
        "Offline support",
        "Cross-device sync"
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work together with your team. Share tasks, assign responsibilities, and track group progress.",
      color: "orange",
      details: [
        "Task sharing",
        "Team workspaces",
        "Comment threads",
        "Activity tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Powerful Features, Zero Cost
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Everything you need to manage your tasks efficiently, completely free.
              No hidden costs, no premium tiers - just powerful features for everyone.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-${feature.color}-100 dark:bg-${feature.color}-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className={`w-4 h-4 mr-2 text-${feature.color}-500`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have improved their productivity with TaskMaster.
            It&apos;s completely free and always will be.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white">
              Start Using TaskMaster
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;