import { Separator } from '@/components/ui/separator'
import ShowFooter from '@/core/shared/components/form/show-footer'
import ShowItem from '@/core/shared/components/form/show-item'

export default function FormShow({ data }: { data: RecordWithId }) {
  if (typeof data === 'object') {
    const names = Object.keys(data)
    const values = Object.values(data)
    return (
      <div className="w-full space-y-4">
        {names.map((name, index) => {
          return (
            <ShowItem
              name={name}
              value={values[index]}
              isLast={index !== names.length - 1}
            />
          )
        })}
        <Separator />
        <ShowFooter id={data.id} />
      </div>
    )
  }
  return <div>no es de tipo obejct</div>
}
