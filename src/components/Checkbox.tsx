import { FC } from "react"

type CheckboxProps = mockPrefecture

export const Checkbox: FC<CheckboxProps> = ({ name, id }) => {
  const customId = `prefecture-input-${id}`
  return (
    <label htmlFor={customId}>
      <input type="checkbox" id={customId} />
      {name}
    </label>
  )
}
