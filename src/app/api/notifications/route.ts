import { NextResponse } from 'next/server';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const jsonData = {
    workspace: {
      root: path.resolve(),
      uuid: uuidv4(),
    },
    notifications: {
      enabled: true,
      sound: '/notification-sound.mp3',
      icon: '/favicon.ico'
    }
  };
  return NextResponse.json(jsonData);
}

export async function POST(request: Request) {
  try {
    await request.json(); // Consume the request body
    return NextResponse.json({ success: true, message: 'Notification sent' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, message: `Failed to process notification: ${errorMessage}` },
      { status: 500 }
    );
  }
} 