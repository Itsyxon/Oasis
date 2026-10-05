export interface CallbackRequest {
  name: string
  phone: string
  comment: string
}

export type CallbackErrors = Partial<Record<keyof CallbackRequest, string>>

type Result = { ok: true; data: CallbackRequest } | { ok: false; errors: CallbackErrors }

const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

export const validateCallback = (input: unknown): Result => {
  const source = (input ?? {}) as Record<string, unknown>
  const data = { name: text(source.name), phone: text(source.phone), comment: text(source.comment) }
  const errors: CallbackErrors = {}

  if (data.name.length < 2) errors.name = 'Укажите имя — хотя бы две буквы.'
  if (data.phone.replace(/\D/g, '').length < 10) errors.phone = 'Укажите телефон с кодом города или оператора.'
  if (data.comment.length > 500) errors.comment = 'Комментарий длиннее 500 символов — сократите его.'

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data }
}
