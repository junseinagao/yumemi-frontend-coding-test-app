import { FC } from "react"

type CheckboxProps = {
  id: string
  name: string
}

export const Checkbox: FC<CheckboxProps> = ({ name, id }) => {
  const customId = `prefecture-input-${id}`
  return (
    <label htmlFor={customId}>
      <input type="checkbox" id={customId} />
      {name}
    </label>
  )
}
