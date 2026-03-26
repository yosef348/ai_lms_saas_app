'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export default function SkeletonLoader({ className }: { className?: string }) {
  return (
    <div className={cn('animate-pulse rounded-2xl bg-foreground/10', className)} />
  )
}
