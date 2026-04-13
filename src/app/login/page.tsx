'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Erro ao fazer login');
        setLoading(false);
        return;
      }
      router.push('/app');
    } catch {
      setError('Erro de conexão');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Link href="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white text-xl">📄</div>
          <span className="font-bold text-slate-900 text-xl">Recibo Express</span>
        </Link>
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">Entrar na conta</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:outline-none focus:border-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:outline-none focus:border-green-500" />
            </div>
            {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50">
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-slate-500">
            Não tem conta?{' '}
            <Link href="/signup" className="text-green-600 hover:underline font-medium">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}