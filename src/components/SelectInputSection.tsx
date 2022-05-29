import { FC } from "react"
import { Checkbox } from "src/components/Checkbox"

type SelectInputSectionProps = {
  prefectures: mockPrefecture[]
}

export const SelectInputSection: FC<SelectInputSectionProps> = ({
  prefectures,
}) => {
  return (
    <>
      <section>
        <h2>都道府県</h2>
        <div>
          {prefectures.map((prefecture) => {
            return <Checkbox key={prefecture.id} {...prefecture} />
          })}
        </div>
      </section>
    </>
  )
}
