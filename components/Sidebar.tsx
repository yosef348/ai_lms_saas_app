'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Bot, TrendingUp, CreditCard, PlusCircle, Clock } from 'lucide-react'

const items = [
	{ label: 'Dashboard', href: '/', icon: Home },
	{ label: 'Companions', href: '/companions', icon: Bot },
	{ label: 'Build Companion', href: '/companions/new', icon: PlusCircle },
	{ label: 'My Journey', href: '/my-journey', icon: TrendingUp },
	{ label: 'Recent Sessions', href: '/sessions', icon: Clock },
	{ label: 'Subscription', href: '/subscription', icon: CreditCard },
]

export default function Sidebar() {
	const pathname = usePathname()
	return (
		<aside className="hidden md:flex sticky top-[72px] h-[calc(100dvh-72px)] w-64 shrink-0 border-r border-sidebar-border bg-sidebar/80 backdrop-blur text-sidebar-foreground">
			<nav className="flex flex-col w-full gap-1 px-3 py-4">
				{items.map((it) => (
					<Link
						key={it.href}
						href={it.href}
						className={cn(
							'rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-sidebar-accent hover:text-foreground transition-all',
							pathname === it.href && 'bg-primary/15 text-primary'
						)}
					>
						<span className="flex items-center gap-3">
							<it.icon className={cn('size-4 text-foreground/70', pathname === it.href && 'text-primary')} />
							<span>{it.label}</span>
						</span>
					</Link>
				))}
			</nav>
		</aside>
	)
}
