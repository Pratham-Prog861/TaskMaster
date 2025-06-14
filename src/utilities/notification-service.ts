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
  private swRegistration: ServiceWorkerRegistration | null = null;
  private publicVapidKey: string = process.env.VAPID_PUBLIC_KEY || '';

  private async checkSystemNotificationSupport() {
    if (typeof window === 'undefined') return;
    
    this.isSystemNotificationSupported = 'Notification' in window;
    if (this.isSystemNotificationSupported && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  }

  private async registerServiceWorker() {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    try {
      this.swRegistration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', this.swRegistration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }

  private async subscribeToNotifications() {
    if (typeof window === 'undefined' || !this.swRegistration) return;

    // Ensure publicVapidKey is loaded from environment variables and set before subscribing
    // Example: this.publicVapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    if (!this.publicVapidKey) {
 return; // Or handle the case where the key is not available
    }
    try {
      const subscription = await this.swRegistration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey),
      });

      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      });

      console.log('Subscription successful:', subscription);
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  }

  private urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  startNotificationCheck(tasks: Task[]) {
    if (typeof window === 'undefined') return;
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }

    // Initialize audio and check notification support
    this.audio = new Audio(this.notificationSound);
    this.checkSystemNotificationSupport();

    // Register Service Worker and subscribe to notifications
    this.registerServiceWorker();
    this.subscribeToNotifications();

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