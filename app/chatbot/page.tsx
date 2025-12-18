import ChatWidget from '../../components/chat-widget';

export default function ChatbotPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Chatbot Integration
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Test the AI-powered chatbot below.
      </p>

      <div className="mt-6">
        <ChatWidget />
      </div>
    </div>
  );
}