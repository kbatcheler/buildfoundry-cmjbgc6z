import { Button } from '../components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300">
          Welcome to Chatbot Integration
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Build AI-powered conversations with ease. Test our chatbot integration features.
        </p>
        <div className="mt-6">
          <Link href="/chatbot">
            <Button variant="primary">Try the Chatbot</Button>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Real-Time Chat</CardTitle>
            </CardHeader>
            <CardContent>
              Engage users with instant messaging powered by WebSocket.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Responses</CardTitle>
            </CardHeader>
            <CardContent>
              Natural language understanding and context-aware conversations.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              Manage conversations, analytics, and chatbot training data.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}