'use client'

import { Form } from '@/components/ui/form'
import FormField from '@/core/shared/components/form/form-field'
import FormFooter from '@/core/shared/components/form/form-footer'
import { useRegister } from '@/core/auth/components/hooks/use-register'

export default function RegisterForm() {
  const { isSubmitting, form, onSubmit } = useRegister()
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
          type="password"
          label={'Password'}
          placeholder={'Ej: 12345678'}
          control={form.control}
          fieldKey={'password'}
        />
        <FormFooter
          type={'register'}
          isSubmitting={isSubmitting}
          loginRedirect="/auth/register"
        />
      </form>
    </Form>
  )
}
