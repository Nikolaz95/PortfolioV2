import { ErrorText, Field } from './FormField.styles'

/**
 * Label + input (or textarea) + error message, all in one.
 * Works with react-hook-form: spread `register(...)` into it.
 *
 *   <FormField label="Email" type="email" error={errors.email} {...register('email', rules)} />
 *   <FormField label="Message" textarea full error={errors.message} {...register('message')} />
 *
 * full:     take the whole row in a 2-column form
 * textarea: use a multi-line <textarea> instead of <input>
 */
export default function FormField({ label, error, textarea = false, full = false, id, ...inputProps }) {
  const Input = textarea ? 'textarea' : 'input'
  const fieldId = id ?? `field-${inputProps.name}`

  return (
    <Field $full={full} $error={!!error}>
      <label htmlFor={fieldId}>{label}</label>
      <Input id={fieldId} aria-invalid={!!error} {...inputProps} />
      {error && <ErrorText role="alert">{error.message}</ErrorText>}
    </Field>
  )
}
