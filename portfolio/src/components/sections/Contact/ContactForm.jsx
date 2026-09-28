import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { FaPaperPlane } from 'react-icons/fa'

import { sendContactEmail } from '../../../services/email'
import FormField from '../../ui/FormField'
import { Form, Submit } from './Contact.styles'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await sendContactEmail(data)
      toast.success(t('contact.toast.success'))
      reset()
    } catch (error) {
      console.error('Sending the contact form failed:', error)
      toast.error(t('contact.toast.error'))
    }
  }

  const onInvalid = () => toast.error(t('contact.toast.invalid'))

  // Validation rules for react-hook-form
  const required = { required: t('contact.form.required') }
  const emailRules = { ...required, pattern: { value: EMAIL_PATTERN, message: t('contact.form.invalidEmail') } }

  // Label, placeholder and error for a field, all taken from the language files
  const field = (name) => ({
    label: t(`contact.form.${name}`),
    placeholder: t(`contact.form.${name}Placeholder`),
    error: errors[name],
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
      <FormField {...field('firstName')} {...register('firstName', required)} />
      <FormField {...field('lastName')} {...register('lastName', required)} />
      <FormField {...field('email')} type="email" full {...register('email', emailRules)} />
      <FormField {...field('subject')} full {...register('subject', required)} />
      <FormField {...field('message')} textarea full {...register('message', required)} />

      <Submit type="submit" icon={FaPaperPlane} disabled={isSubmitting}>
        {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
      </Submit>
    </Form>
  )
}
