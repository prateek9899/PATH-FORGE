
import { useState } from 'react';
import api from '../api/axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const suggestions = [
  'Explain binary search in Java',
  'Teach me dynamic programming',
  'Explain Dijkstra’s algorithm',
  'What is the difference between BFS and DFS?',
];

function AITutor() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [retryQuestion, setRetryQuestion] = useState('');

  const sendQuestion = async (text = question) => {
    const trimmedQuestion = text.trim();

    if (!trimmedQuestion || loading) return;

    setMessages((previous) => [
      ...previous,
      { role: 'user', content: trimmedQuestion },
    ]);
    setQuestion('');
    setError('');
    setRetryQuestion('');
    setLoading(true);

    try {
      const history = messages.map(({ role, content }) => ({
        role,
        content,
      }));

      const response = await api.post('/ai-tutor/chat', {
        question: trimmedQuestion,
        history,
      });

      setMessages((previous) => [
        ...previous,
        {
          role: 'assistant',
          content: response.data.answer,
        },
      ]);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Unable to get an answer. Please try again.'
      );
      setRetryQuestion(trimmedQuestion);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendQuestion();
  };

  const clearChat = () => {
    if (loading) return;

    setMessages([]);
    setQuestion('');
    setError('');
    setRetryQuestion('');
  };

  const markdownComponents = {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-white mt-5 mb-3">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-white mt-5 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-white mt-4 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-3 last:mb-0">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-4">{children}</ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 my-4 text-dark-300">
        {children}
      </blockquote>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-primary-300 underline break-words"
      >
        {children}
      </a>
    ),
    code: ({ className, children, ...props }) => {
      const isBlock = Boolean(className?.includes('language-'));

      return isBlock ? (
        <code
          className="block text-sm text-purple-200 font-mono"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code
          className="rounded bg-dark-900 px-1.5 py-0.5 text-purple-300 font-mono text-[0.9em] break-words"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-dark-950 p-4 my-4 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-white/10 bg-white/5 px-3 py-2 text-left text-white">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-white/10 px-3 py-2">{children}</td>
    ),
    hr: () => <hr className="border-white/10 my-5" />,
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Page heading */}
      <div className="text-center space-y-3 pt-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-300">
          <span>✦</span>
          <span>AI-powered learning</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Your AI <span className="text-primary-400">DSA Tutor</span>
        </h1>

        <p className="text-dark-400 max-w-xl mx-auto">
          Stuck on an algorithm? Ask a question and learn with
          simple explanations, Java examples, and complexity analysis.
        </p>
      </div>

      {/* Chat panel */}
      <div className="rounded-2xl border border-white/10 bg-dark-900/80 shadow-2xl overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <div className="h-10 w-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-xl">
            ✦
          </div>

          <div>
            <h2 className="font-semibold text-white">PathForge Tutor</h2>
            <p className="text-xs text-dark-400">
              Ask anything about data structures and algorithms
            </p>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              {loading ? 'Thinking' : 'Ready'}
            </div>

            {messages.length > 0 && (
              <button
                type="button"
                onClick={clearChat}
                disabled={loading}
                className="rounded-lg border border-white/10 px-3 py-2 text-xs text-dark-300 hover:bg-white/5 hover:text-white transition disabled:opacity-50"
              >
                Clear chat
              </button>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="min-h-[320px] max-h-[600px] overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.length === 0 && (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">💡</div>

              <h3 className="text-xl font-semibold text-white">
                What do you want to learn today?
              </h3>

              <p className="text-sm text-dark-400 mt-2 mb-6">
                Choose a suggestion or type your own question.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    disabled={loading}
                    onClick={() => sendQuestion(suggestion)}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-left text-sm text-dark-200 hover:bg-primary-500/10 hover:border-primary-500/40 transition disabled:opacity-50"
                  >
                    {suggestion}
                    <span className="float-right text-primary-400">↗</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              {message.role === 'assistant' && (
                <div className="h-9 w-9 shrink-0 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300">
                  ✦
                </div>
              )}

              <div
                className={`min-w-0 max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 ${message.role === 'user'
                    ? 'bg-primary-600 text-white rounded-br-sm'
                    : 'bg-white/5 border border-white/10 text-dark-100 rounded-bl-sm'
                  }`}
              >
                {message.role === 'user' ? (
                  <div className="whitespace-pre-wrap break-words text-sm leading-7">
                    {message.content}
                  </div>
                ) : (
                  <div className="break-words text-sm leading-7">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={markdownComponents}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>

              {message.role === 'user' && (
                <div className="h-9 w-9 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs">
                  You
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center">
              <div className="h-9 w-9 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300">
                ✦
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-dark-300">
                Thinking
                <span className="inline-flex ml-2 gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce [animation-delay:150ms]">.</span>
                  <span className="animate-bounce [animation-delay:300ms]">.</span>
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
              <p>{error}</p>

              {retryQuestion && (
                <button
                  type="button"
                  onClick={() => sendQuestion(retryQuestion)}
                  disabled={loading}
                  className="mt-2 underline disabled:opacity-50"
                >
                  Retry
                </button>
              )}
            </div>
          )}
        </div>

        {/* Question input */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-white/10 p-4 sm:p-5"
        >
          <div className="flex items-end gap-3 rounded-xl border border-white/10 bg-dark-800/80 p-2 focus-within:border-primary-500/60 transition">
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  handleSubmit(event);
                }
              }}
              placeholder="Ask your DSA question..."
              rows={2}
              maxLength={3000}
              disabled={loading}
              className="flex-1 resize-none bg-transparent px-3 py-2 text-sm text-white placeholder-dark-500 outline-none disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-500 transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? 'Sending...' : 'Ask ↗'}
            </button>
          </div>

          <div className="flex justify-between gap-3 px-1 pt-3 text-xs text-dark-500">
            <span>Enter to send · Shift + Enter for a new line</span>
            <span>{question.length}/3000</span>
          </div>
        </form>
      </div>

      <p className="text-center text-xs text-dark-500">
        AI-generated answers can contain mistakes. Verify important solutions.
      </p>
    </div>
  );
}

export default AITutor;
