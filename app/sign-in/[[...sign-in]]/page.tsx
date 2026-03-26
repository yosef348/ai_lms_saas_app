import { SignIn } from '@clerk/nextjs'
import clerkAppearance from '@/components/clerkAppearance'

export default function Page() {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <SignIn appearance={clerkAppearance} />
        </div>
      </main>
    )
}