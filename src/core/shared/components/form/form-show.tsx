import ShowFooter from '@/core/shared/components/form/show-footer'
import ShowItem from '@/core/shared/components/form/show-item'

export default function FormShow({ data }: { data: RecordWithId }) {
  if (typeof data === 'object') {
    const names = Object.keys(data)
    const values = Object.values(data)
    return (
      <div className="w-full space-y-4">
        <div className="grid w-full grid-cols-1 gap-1 md:grid-cols-2">
          {names.map((name, index) => {
            return <ShowItem name={name} value={values[index]} isLast />
          })}
        </div>
        <ShowFooter id={data.id} />
      </div>
    )
  }
  return <div>no es de tipo obejct</div>
}
