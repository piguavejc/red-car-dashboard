'use client'

import { Form } from '@/components/ui/form'
import FormField from '@/core/shared/components/form/form-field'
import FormFooter from '@/core/shared/components/form/form-footer'
import { useLogin } from '@/core/auth/components/hooks/use-login'

export default function LoginForm() {
  const { isSubmitting, form, onSubmit } = useLogin()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          label={'Correo'}
          placeholder={'Ej: example@domain.com'}
          control={form.control}
          fieldKey={'email'}
        />
        <FormField
          label={'Password'}
          placeholder={'Ej: 12345678'}
          control={form.control}
          fieldKey={'password'}
        />
        <FormFooter type={'login'} isSubmitting={isSubmitting} />
      </form>
    </Form>
  )
}
