import { NextResponse } from 'next/server';
import admin from '@/Firebase-admin';

export async function verifyToken(request: Request) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized', details: 'Please provide a Bearer token' },
        { status: 401 }
      ),
    };
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return {
      authorized: true,
      decodedToken,
    };
  } catch (err) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized', details: 'Invalid or expired ID token' },
        { status: 401 }
      ),
    };
  }
}
