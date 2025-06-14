import React from 'react';

const WhyBuilding: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Why I&apos;m Building This
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            TaskMaster was born from a personal need to manage tasks more effectively. As someone who juggles multiple responsibilities, I found existing task management tools either too complex or too simplistic.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            What sets TaskMaster apart is its focus on simplicity while maintaining powerful features like real-time notifications, intuitive task organization, and seamless cross-device synchronization. It&apos;s designed to help you stay focused on what matters most.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Simplicity First</h3>
              <p className="text-gray-600 dark:text-gray-400">Clean, intuitive interface that gets out of your way</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-400">Timely reminders that keep you on track</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Always Available</h3>
              <p className="text-gray-600 dark:text-gray-400">Access your tasks anywhere, anytime</p>
            </div>
          </div>

          {/* Customer Testimonials Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              What Our Users Say
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 font-semibold">JD</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">John Doe</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  &ldquo;TaskMaster has revolutionized how I manage my daily tasks. The notifications are spot-on, and the interface is so intuitive that I don&apos;t need to think about using it - I just do.&rdquo;
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-300 font-semibold">AS</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Alice Smith</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Freelance Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  &ldquo;As someone who juggles multiple projects, TaskMaster&apos;s organization features are a game-changer. The cross-device sync works flawlessly, and I never miss a deadline anymore.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuilding;