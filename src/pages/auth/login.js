import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess('Login successful');

      // Redirect based on the role
      if (data.role === 'ADMIN') {
        // Redirect to the admin page
        router.push('/admin');
      } else if (data.role === 'USER') {
        // Redirect to the main app page (page.tsx)
        router.push('/');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-96 text-center"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Login Here</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <div className="mb-4 relative">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-4 relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <span>Don't have an account? </span>
          <link href="/auth/register" className="text-blue-500 hover:underline">
            Register now
          </link>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
