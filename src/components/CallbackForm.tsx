'use client'

import { useState, type FormEvent } from 'react'
import type { CallbackErrors } from '@/lib/callback'
import styles from './CallbackForm.module.css'

type Status = { state: 'idle' | 'sending' } | { state: 'sent'; message: string } | { state: 'failed'; message: string }

export default function CallbackForm({ comment = '' }: { comment?: string }) {
  const [errors, setErrors] = useState<CallbackErrors>({})
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus({ state: 'sending' })
    setErrors({})

    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const body = await response.json()

      if (response.status === 422) {
        setErrors(body.errors)
        setStatus({ state: 'idle' })
        return
      }
      if (!response.ok) throw new Error()

      form.reset()
      setStatus({ state: 'sent', message: body.message })
    } catch {
      setStatus({ state: 'failed', message: 'Заявка не отправилась. Позвоните нам или попробуйте ещё раз через минуту.' })
    }
  }

  const field = (name: keyof CallbackErrors) => ({
    name,
    id: `callback-${name}`,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `callback-${name}-error` : undefined,
  })

  const error = (name: keyof CallbackErrors) =>
    errors[name] ? <p id={`callback-${name}-error`} className={styles.error}>{errors[name]}</p> : null

  if (status.state === 'sent') {
    return (
      <div className={styles.done} role="status">
        <p>{status.message}</p>
        <button type="button" className="link" onClick={() => setStatus({ state: 'idle' })}>Отправить ещё одну заявку</button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.field}>
        <label htmlFor="callback-name">Имя</label>
        <input {...field('name')} autoComplete="name" required />
        {error('name')}
      </div>
      <div className={styles.field}>
        <label htmlFor="callback-phone">Телефон</label>
        <input {...field('phone')} type="tel" autoComplete="tel" inputMode="tel" placeholder="+7" required />
        {error('phone')}
      </div>
      <div className={styles.field}>
        <label htmlFor="callback-comment">Что хотите забронировать <span>необязательно</span></label>
        <textarea {...field('comment')} rows={3} defaultValue={comment} maxLength={500} />
        {error('comment')}
      </div>
      {status.state === 'failed' ? <p className={styles.error} role="alert">{status.message}</p> : null}
      <button type="submit" className="button button-primary" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Отправляем…' : 'Заказать звонок'}
      </button>
      <p className={styles.hint}>Перезваниваем в течение часа с 9:00 до 21:00.</p>
    </form>
  )
}
