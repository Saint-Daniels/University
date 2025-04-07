import { Inter } from 'next/font/google';
import LoginForm from '@/components/LoginForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">University Learning Platform</h1>
          <p className="mt-2 text-gray-600">Sign in to access your learning journey</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
} 