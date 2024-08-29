import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import FormShow from '@/core/shared/components/form/form-show'

export default function ShowSection({ data }: { data: RecordWithId }) {
  return (
    <Card className="w-full max-w-lg p-4">
      <CardHeader>
        <CardTitle className="text-center">Categoria</CardTitle>
      </CardHeader>
      <FormShow data={data} />
    </Card>
  )
}
