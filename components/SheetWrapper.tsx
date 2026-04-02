'use client'

import { ReactNode } from 'react'
import { Sheet } from '@/components/ui/sheet'
import { useSidebar } from '@/components/SidebarContext'

interface SheetWrapperProps {
  children: ReactNode
}

export default function SheetWrapper({ children }: SheetWrapperProps) {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </Sheet>
  )
}
