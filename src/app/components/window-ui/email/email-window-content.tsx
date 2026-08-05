import { AlertCircle, CheckCircle2, RotateCcw, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { emailApi } from '../../../../global/http/handler-email.ts'
import EmailField from './email-field.tsx'

type ComposeErrors = {
  cc?: string
  from?: string
  subject?: string
  message?: string
}

const recipient = 'lmo.gustavo@gmail.com'

export default function EmailWindowContent() {
  const [from, setFrom] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [validation, setValidation] = useState<ComposeErrors>({})
  const [emailState, setEmailState] = useState<'idle' | 'loading' | 'sent' | 'failed'>('idle')
  const [emailError, setEmailError] = useState('')

  function validate() {
    const nextErrors: ComposeErrors = {}

    if (!from.trim()) {
      nextErrors.from = 'Add your email address.'
    } else if (!/^\S+@\S+\.\S+$/.test(from.trim())) {
      nextErrors.from = 'Enter a valid email address.'
    }

    if (!subject.trim()) nextErrors.subject = 'Add a subject.'
    if (!message.trim()) nextErrors.message = 'Write a message.'

    setValidation(nextErrors)

    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate()) return

    setEmailError('')
    setEmailState('loading')

    try {
      const { error } = await emailApi.send({
        contactAddress: from.trim(),
        subject: subject.trim(),
        msg: message.trim(),
      })

      if (error) {
        setEmailError(error)
        setEmailState('failed')
        return
      }

      setEmailState('sent')
    } catch (error) {
      console.error('Unable to send email', error)
      setEmailError('Something went wrong while sending your message. Please try again.')
      setEmailState('failed')
    }
  }

  function startAnotherEmail() {
    setFrom('')
    setSubject('')
    setMessage('')
    setValidation({})
    setEmailError('')
    setEmailState('idle')
  }

  function retry() {
    setEmailError('')
    setEmailState('idle')
  }

  function updateField(
    field: keyof ComposeErrors,
    value: string,
    update: (nextValue: string) => void
  ) {
    update(value)
    if (validation[field]) setValidation((current) => ({ ...current, [field]: undefined }))
  }

  if (emailState === 'sent') {
    return (
      <article className="theme-text-primary-color theme-text-font-family flex h-full w-full items-center justify-center overflow-none p-4">
        <section className="w-full max-w-3xl border border-emerald-300/30 bg-emerald-950/10 p-6 text-center">
          <CheckCircle2 aria-hidden="true" className="mx-auto h-10 w-10 text-emerald-400" />
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-opacity-55">Message sent</p>
          <h2 className="mt-2 text-xl font-medium">Thanks for reaching out.</h2>
          <p className="mt-2 text-sm leading-6 text-opacity-70">
            Your email has been delivered to {recipient}.
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 border border-zinc-100/30 bg-zinc-100/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100/60"
            onClick={startAnotherEmail}
            type="button"
          >
            <Send className="h-4 w-4" />
            Send another email
          </button>
        </section>
      </article>
    )
  }

  if (emailState === 'failed') {
    return (
      <article className="theme-text-primary-color theme-text-font-family flex h-full w-full items-center justify-center overflow-none p-4">
        <section
          className="w-full max-w-3xl border border-red-300/30 bg-red-950/10 p-6 text-center"
          role="alert"
        >
          <AlertCircle aria-hidden="true" className="mx-auto h-10 w-10 text-red-400" />
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-opacity-55">
            Message not sent
          </p>
          <h2 className="mt-2 text-xl font-medium">Your message is still safe here.</h2>
          <p className="mt-2 text-sm leading-6 text-opacity-70">
            {emailError || 'We could not send your email. Please try again.'}
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 border border-zinc-100/30 bg-zinc-100/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100/60"
            onClick={retry}
            type="button"
          >
            <RotateCcw className="h-4 w-4" />
            Return to draft
          </button>
        </section>
      </article>
    )
  }

  return (
    <article className="theme-text-primary-color theme-text-font-family h-full w-full overflow-none p-4">
      <form
        className={`
            ${emailState === 'loading' && 'animate-pulse'}
            mx-auto flex min-h-full max-w-3xl flex-col border border-zinc-100/20 bg-zinc-950/10`}
        noValidate
        onSubmit={handleSubmit}
      >
        <header className="border-b border-zinc-100/20 bg-zinc-950/15 px-4 py-3">
          <p className="text-opacity-55 text-xs uppercase tracking-[0.22em]">New message</p>
        </header>

        <div className="divide-y divide-zinc-100/20 border-b border-zinc-100/20">
          <EmailField
            autoComplete="email"
            error={validation.from}
            label="From"
            onChange={(value) => updateField('from', value, setFrom)}
            placeholder="your@email.com"
            type="email"
            value={from}
          />
          <EmailField label="To" readOnly value={recipient} />
          <EmailField
            error={validation.subject}
            label="Subject"
            onChange={(value) => updateField('subject', value, setSubject)}
            placeholder="What is this about?"
            value={subject}
          />
        </div>

        <div className="flex min-h-52 grow flex-col px-4 py-4">
          <label className="sr-only" htmlFor="email-message">
            Message
          </label>
          <textarea
            className="placeholder-text-opacity-45 min-h-48 grow resize-none bg-transparent text-base leading-7 outline-none"
            id="email-message"
            onChange={(event) => updateField('message', event.target.value, setMessage)}
            placeholder="Write your message..."
            value={message}
          />
          {validation.message && <p className="mt-2 text-sm text-red-400">{validation.message}</p>}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100/20 bg-zinc-950/15 px-4 py-3">
          <p aria-live="polite" className="text-opacity-55 text-sm">
            Send me an email
          </p>
          <button
            disabled={emailState === 'loading'}
            className="inline-flex items-center gap-2 border border-zinc-100/30 bg-zinc-100/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100/60"
            type="submit"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </footer>
      </form>
    </article>
  )
}
