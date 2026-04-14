'use client';

import { useState, useEffect } from 'react';

interface SocialProofCounterProps {
  fallback?: number;
  pollInterval?: number;
  label?: string;
}

export default function SocialProofCounter({
  fallback = 2400,
  pollInterval = 0,
  label = 'autônomos já emitiram seus recibos com o Alternative Down',
}: SocialProofCounterProps) {
  const [count, setCount] = useState(fallback);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch('/api/analytics/receipt-count');
        if (res.ok) {
          const data = await res.json();
          setCount(data.count ?? fallback);
          setIsLive(true);
        }
      } catch {
        // keep fallback
      }
    }

    fetchCount();

    if (pollInterval > 0) {
      const id = setInterval(fetchCount, pollInterval);
      return () => clearInterval(id);
    }
  }, [fallback, pollInterval]);

  return (
    <p className="mt-6 text-sm text-green-700 font-medium">
      <strong>+{count.toLocaleString('pt-BR')}</strong> {label}
    </p>
  );
}
