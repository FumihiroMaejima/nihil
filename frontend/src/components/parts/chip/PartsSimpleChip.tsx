import React, {
  FormEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  TouchEventHandler,
  MouseEventHandler,
} from 'react'

type Props = {
  label?: string
  className?: string
  onInput?: FormEventHandler<HTMLSelectElement>
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onFocus?: FocusEventHandler<HTMLDivElement>
  onBlur?: FocusEventHandler<HTMLDivElement>
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const PartsSimpleChip: React.VFC<Props> = ({
  label = 'label text',
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <div
      className={`parts-simple-chip${className ? ' ' + className : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default PartsSimpleChip
