'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import AIThinking from '@/components/ux/AIThinking'
import SkeletonLoader from '@/components/ux/SkeletonLoader'

type Props = { userId: string }

export default function DashboardEnhancements({ userId }: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <LearningProfileCard userId={userId} />
      <SessionMemoryCard userId={userId} />
      <LanguageAndModeCard />

      <div className="lg:col-span-2 space-y-4">
        <LiveVoiceSessionPanel />
        <SessionReportCard />
        <PracticeModeCard />
      </div>
      <div className="space-y-4">
        <SmartLearningPathCard />
        <AINotesPanel />
        <RecommendationsCard />
      </div>
    </section>
  )
}

function Card({ title, children, footer }: { title: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card/80 shadow-sm p-4 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
      {footer ? <div className="mt-4 pt-3 border-t border-border">{footer}</div> : null}
    </div>
  )
}

function LearningProfileCard({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<{ sessions: number; topics: string[]; weakAreas: string[] }>({ sessions: 0, topics: [], weakAreas: [] })

  useEffect(() => {
    // Placeholder: derive from localStorage sessionSummaries
    const raw = typeof window !== 'undefined' ? localStorage.getItem(`sessionSummaries:${userId}`) : null
    const summaries: { topic: string; summary: string }[] = raw ? JSON.parse(raw) : []
    const topics = [...new Set(summaries.map((s) => s.topic))]
    const weakAreas = topics.slice(-3)
    setProfile({ sessions: summaries.length, topics, weakAreas })
    setTimeout(() => setLoading(false), 300)
  }, [userId])

  return (
    <Card title="Learning Profile">
      {loading ? (
        <SkeletonLoader className="h-16" />
      ) : (
        <div className="text-sm text-muted-foreground">
          <p className="mb-1">Sessions: <span className="text-foreground font-medium">{profile.sessions}</span></p>
          <p className="mb-1">Topics: <span className="text-foreground font-medium">{profile.topics.join(', ') || '—'}</span></p>
          <p>Weak areas: <span className="text-foreground font-medium">{profile.weakAreas.join(', ') || '—'}</span></p>
        </div>
      )}
    </Card>
  )
}

function SessionMemoryCard({ userId }: { userId: string }) {
  const [items, setItems] = useState<{ topic: string; summary: string; ts: number }[]>([])
  useEffect(() => {
    const raw = localStorage.getItem(`sessionSummaries:${userId}`)
    setItems(raw ? JSON.parse(raw) : [])
  }, [userId])
  const last = items[items.length - 1]

  return (
    <Card title="Session Memory">
      {last ? (
        <div className="space-y-2 text-sm">
          <p className="text-muted-foreground">Last topic</p>
          <p className="font-medium">{last.topic}</p>
          <p className="line-clamp-2 text-muted-foreground">{last.summary}</p>
          <div className="flex gap-2 pt-1">
            <Button size="sm">Continue last session</Button>
            <Button size="sm" variant="ghost">View history</Button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No past sessions yet.</p>
      )}
    </Card>
  )
}

function LiveVoiceSessionPanel() {
  const [speaking, setSpeaking] = useState(false)
  const [transcript, setTranscript] = useState<string[]>([])
  return (
    <Card title="Live Voice Session">
      <div className="flex items-center justify-between">
        <AIThinking text={speaking ? 'AI is speaking…' : 'Ready'} />
        <Button size="sm" onClick={() => setSpeaking((s) => !s)}>{speaking ? 'Stop' : 'Start'}</Button>
      </div>
      <VoiceWaveform active={speaking} />
      <div className="rounded-xl border border-border p-3 bg-background/50 h-32 overflow-auto text-sm">
        {transcript.length === 0 ? (
          <p className="text-muted-foreground">Real-time transcript will appear here…</p>
        ) : (
          transcript.map((t, i) => (
            <p key={i} className="mb-1">{t}</p>
          ))
        )}
      </div>
    </Card>
  )
}

function VoiceWaveform({ active }: { active: boolean }) {
  const bars = useMemo(() => new Array(24).fill(0).map((_, i) => i), [])
  return (
    <div className="h-14 flex items-end gap-1 py-2">
      {bars.map((i) => (
        <span
          key={i}
          className={"w-1.5 rounded-sm bg-primary/70 " + (active ? 'animate-[pulse_1s_ease-in-out_infinite]' : '')}
          style={{ height: active ? `${6 + ((i * 37) % 24)}px` : '6px', animationDelay: `${(i % 8) * 60}ms` }}
        />
      ))}
    </div>
  )
}

function SessionReportCard() {
  const [summary, setSummary] = useState('')
  const [keypoints, setKeypoints] = useState<string[]>([])
  const [improve, setImprove] = useState<string[]>([])

  const generate = () => {
    setSummary('This session covered fundamental concepts with practical examples to reinforce understanding.')
    setKeypoints(['Core definitions clarified', 'Hands-on example discussed', 'Common pitfalls identified'])
    setImprove(['Practice with a small project', 'Review notes tomorrow', 'Attempt a short quiz'])
  }

  return (
    <Card title="AI Session Report" footer={<Button size="sm" onClick={generate}>Generate</Button>}>
      {summary ? (
        <div className="text-sm space-y-3">
          <p>{summary}</p>
          <List title="Key points" items={keypoints} />
          <List title="Suggested improvements" items={improve} />
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Generate a concise report after your session.</p>
      )}
    </Card>
  )
}

function SmartLearningPathCard() {
  const [goal, setGoal] = useState('')
  const [roadmap, setRoadmap] = useState<string[]>([])
  const build = () => {
    const steps = [
      'Assess current knowledge',
      'Master fundamentals',
      'Apply with mini-projects',
      'Deepen with advanced topics',
      'Review and assess'
    ]
    setRoadmap(steps.map((s, i) => `${i + 1}. ${s} → ${goal || 'Your goal'}`))
  }
  return (
    <Card title="Smart Learning Path" footer={<Button size="sm" onClick={build}>Generate roadmap</Button>}>
      <Input placeholder="Enter your learning goal (e.g., Learn JavaScript)" value={goal} onChange={(e) => setGoal(e.target.value)} />
      {roadmap.length ? <List items={roadmap} compact /> : null}
    </Card>
  )
}

function TutorModeSelector() {
  const [mode, setMode] = useState('Beginner')
  return (
    <div className="flex items-center gap-3">
      <p className="text-sm text-muted-foreground">Mode</p>
      <Select value={mode} onValueChange={setMode}>
        <SelectTrigger className="w-40"><SelectValue placeholder="Mode" /></SelectTrigger>
        <SelectContent>
          {['Beginner', 'Interview', 'Exam', 'Debate'].map((m) => (
            <SelectItem key={m} value={m}>{m}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function LanguageAndModeCard() {
  const [lang, setLang] = useState('en')
  return (
    <Card title="Preferences">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-3">
          <p className="text-sm text-muted-foreground">Language</p>
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger className="w-32"><SelectValue placeholder="Language" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
              <SelectItem value="hi">हिंदी</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TutorModeSelector />
      </div>
      <p className="text-xs text-muted-foreground">Your selection will be reflected in session interfaces.</p>
    </Card>
  )
}

function PracticeModeCard() {
  const [questions, setQuestions] = useState<string[]>([])
  const generate = () => {
    setQuestions([
      'Explain the main concept in two sentences.',
      'Give an example that illustrates the concept.',
      'List 3 common mistakes and how to avoid them.',
    ])
  }
  return (
    <Card title="Practice Mode" footer={<Button size="sm" onClick={generate}>Generate practice</Button>}>
      {questions.length ? <List items={questions} /> : <p className="text-sm text-muted-foreground">Create quick quiz/exercises after your session.</p>}
    </Card>
  )
}

function AINotesPanel() {
  const [notes, setNotes] = useState('')
  const generate = () => setNotes('• Key Idea A\n• Key Idea B\n• Key Idea C\n\nSummary: Clear, structured notes generated from your session.')
  const exportNotes = () => {
    const blob = new Blob([notes || ''], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ai-notes.txt'
    a.click()
    URL.revokeObjectURL(url)
  }
  return (
    <Card
      title="AI Notes"
      footer={
        <div className="flex gap-2">
          <Button size="sm" onClick={generate}>Generate</Button>
          <Button size="sm" variant="outline" onClick={exportNotes} disabled={!notes}>Export</Button>
        </div>
      }
    >
      <Textarea rows={6} placeholder="Structured notes will appear here…" value={notes} onChange={(e) => setNotes(e.target.value)} />
    </Card>
  )
}

function RecommendationsCard() {
  const suggestions = [
    { title: 'Suggested Tutor: JavaScript Basics', tag: 'Beginner' },
    { title: 'Next Topic: Async/Await', tag: 'JavaScript' },
    { title: 'Suggested Tutor: System Design', tag: 'Interview' },
  ]

  return (
    <Card title="Recommendations">
      <div className="grid grid-cols-1 gap-2">
        {suggestions.map((s, i) => (
          <div key={i} className="rounded-xl border border-border p-3 bg-background/50 hover:bg-background transition-all">
            <p className="text-sm font-medium">{s.title}</p>
            <p className="text-xs text-primary mt-1">{s.tag}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

function List({ title, items, compact }: { title?: string; items: string[]; compact?: boolean }) {
  return (
    <div className="space-y-2">
      {title ? <p className="text-sm text-muted-foreground">{title}</p> : null}
      <ul className="list-disc pl-5 text-sm space-y-1">
        {items.map((it, i) => (
          <li key={i} className={compact ? 'text-xs' : ''}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
