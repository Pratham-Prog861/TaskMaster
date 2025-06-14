import React from 'react';
import { ArrowRight, Heart, Code, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "User-First Approach",
      description: "We believe in putting users first. Every feature is designed with your needs in mind, making task management simple and enjoyable.",
      color: "pink"
    },
    {
      icon: Code,
      title: "Open Source",
      description: "TaskMaster is built on open-source principles. We believe in transparency and community-driven development.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our community shapes the future of TaskMaster. Your feedback and contributions help us create a better tool for everyone.",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We're committed to making task management accessible to everyone, regardless of their background or resources.",
      color: "green"
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
              About TaskMaster
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We&apos;re on a mission to make task management simple, efficient, and accessible to everyone.
              TaskMaster is more than just a tool - it&apos;s a commitment to helping people achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                TaskMaster was born from a simple idea: task management should be accessible to everyone. 
                We noticed that many task management tools were either too complex or too expensive, 
                leaving many people without a good solution for organizing their work and life.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our team of passionate developers and designers came together to create a tool that&apos;s 
                powerful yet simple, feature-rich yet free. We believe that everyone deserves access to 
                quality tools that help them be more productive and organized.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Today, TaskMaster is used by thousands of people worldwide, helping them manage their tasks, 
                meet their goals, and improve their productivity. And we&apos;re just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-${value.color}-100 dark:bg-${value.color}-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-7 h-7 text-${value.color}-600 dark:text-${value.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our growing community of users who are making their lives more organized and productive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://github.com/Pratham-Prog861/TaskMaster" target="_blank">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;