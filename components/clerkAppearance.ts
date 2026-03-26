// Shared Clerk appearance configuration matching the app's "light dark" theme
// Only styling overrides; no auth logic changes. Do NOT rely on @clerk/themes.

const clerkAppearance = {
  variables: {
    colorPrimary: '#8B5CF6',
    colorText: '#E2E6EE',
    colorBackground: '#0F1115',
    // Inputs should be slightly darker than the card surface
    colorInputBackground: '#111217',
    colorInputText: '#E2E6EE',
    // Placeholder per spec: gray-500
    colorInputPlaceholder: '#6B7280',
    colorAlphaShade: '#2A2E37',
    borderRadius: '1rem', // ~ rounded-2xl
  },
  elements: {
    // Global wrapper
    rootBox: 'mx-auto w-full max-w-md',

    // Cards / containers
    // Add padding and subtle shadow to separate from background
    card: 'bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-6 md:p-8',
    header: 'pb-2',
    headerTitle: 'text-white text-xl font-semibold',
    headerSubtitle: 'text-gray-400',

    // Inputs
    formFieldInput:
      'bg-[#111217] border border-[var(--border)] text-white placeholder-[#6B7280] rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:border-[var(--primary)]',
    formFieldLabel: 'text-gray-300',
    formFieldInputShowPasswordButton: 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]',

    // Buttons
    formButtonPrimary:
      'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-xl transition-all duration-200 shadow-sm hover:shadow',
    formButtonReset: 'rounded-xl border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--accent)]',

    // Social buttons
    socialButtonsBlockButton:
      'rounded-xl bg-[var(--background)] border border-[var(--border)] hover:bg-[var(--accent)] text-[var(--foreground)]',
    socialButtonsBlockButtonText: 'text-[var(--foreground)]',

    // Footer / misc
    footer: 'pt-2',
    footerActionText: 'text-[var(--muted-foreground)]',
    identityPreview: 'bg-[var(--background)] border border-[var(--border)] rounded-xl',

    // UserButton / Popovers
    userButtonPopoverCard: 'bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-sm',
    userButtonPopoverActionButton: 'hover:bg-[var(--accent)]',
    navbar: 'hidden',
    scrollBox: 'rounded-2xl',

    // UserProfile specific tweaks (best-effort selectors)
    profileSection: 'bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-4',
    profileSectionTitleText: 'text-white',
    profileSectionSubtitleText: 'text-gray-400',
    profilePage: 'mx-auto w-full max-w-2xl',
    profilePage__security: 'bg-[var(--card)]',
    profileNavbar: 'border-b border-[var(--border)]',
  },
} as const

export default clerkAppearance
