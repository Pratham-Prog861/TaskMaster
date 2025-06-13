'use client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  dueTime: string;
  status: 'To-do' | 'In-progress' | 'Completed';
}

class NotificationService {
  private checkInterval: NodeJS.Timeout | null = null;
  private audio: HTMLAudioElement | null = null;
  private notificationSound: string = '/notification-sound.mp3';
  private isSystemNotificationSupported: boolean = false;

  constructor() {
    // Remove browser-specific code from constructor
  }

  private async checkSystemNotificationSupport() {
    if (typeof window === 'undefined') return;
    
    this.isSystemNotificationSupported = 'Notification' in window;
    if (this.isSystemNotificationSupported && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  }

  startNotificationCheck(tasks: Task[]) {
    if (typeof window === 'undefined') return;
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }

    // Initialize audio and check notification support
    this.audio = new Audio(this.notificationSound);
    this.checkSystemNotificationSupport();

    // Check every 30 seconds for more precise timing
    this.checkInterval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit'
      });
      const currentDate = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });

      tasks.forEach(task => {
        const taskDate = new Date(task.dueDate).toLocaleDateString('en-US', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });

        if (taskDate === currentDate && task.dueTime === currentTime) {
          this.showNotification(task);
        }
      });
    }, 30000); // Check every 30 seconds
  }

  private async showSystemNotification(task: Task) {
    if (typeof window === 'undefined') return;

    if (this.isSystemNotificationSupported && Notification.permission === 'granted') {
      const notification = new Notification('TaskMaster Reminder', {
        body: `Task "${task.title}" is due now!`,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: `task-${task.id}`,
        requireInteraction: true,
        silent: false
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    }
  }

  private async sendServerNotification(task: Task) {
    try {
      const response = await fetch('/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId: task.id,
          title: task.title,
          status: task.status,
          dueDate: task.dueDate,
          dueTime: task.dueTime
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send server notification');
      }
    } catch (error) {
      console.error('Error sending server notification:', error);
      // Don't throw the error, just log it
    }
  }

  private async showNotification(task: Task) {
    if (typeof window === 'undefined') return;

    try {
      // Play sound
      if (this.audio) {
        this.audio.currentTime = 0;
        await this.audio.play();
      }
      
      // Show toast notification
      toast(`Task "${task.title}" is due now!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: task.status === 'Completed' ? 'success' : 'info',
        onClick: () => {
          window.focus();
        }
      });

      // Show system notification
      await this.showSystemNotification(task);

      // Send server notification
      await this.sendServerNotification(task);

    } catch (error) {
      console.error('Error showing notification:', error);
    }
  }

  stopNotificationCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }
}

export const notificationService = new NotificationService();