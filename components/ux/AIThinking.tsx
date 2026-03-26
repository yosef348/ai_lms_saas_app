'use client'

import React from 'react'

export default function AIThinking({ text = 'AI is thinking...' }: { text?: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <div className="flex items-end gap-1 h-4">
        {[0, 1, 2, 3].map((i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: visual only
            key={i}
            className="w-1.5 rounded-sm bg-primary/70 animate-bounce"
            style={{ animationDelay: `${i * 120}ms`, height: 4 + (i % 2 ? 8 : 12) }}
          />
        ))}
      </div>
      <span>{text}</span>
    </div>
  )
}
