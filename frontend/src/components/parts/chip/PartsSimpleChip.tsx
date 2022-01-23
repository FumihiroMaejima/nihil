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
  isClose?: boolean
  onInput?: FormEventHandler<HTMLSelectElement>
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onFocus?: FocusEventHandler<HTMLDivElement>
  onBlur?: FocusEventHandler<HTMLDivElement>
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const PartsSimpleChip: React.VFC<Props> = ({
  label = 'label text',
  className = undefined,
  isClose = false,
  onClick = undefined,
}) => {
  return (
    <div
      className={`parts-simple-chip${className ? ' ' + className : ''}`}
      onClick={onClick}
    >
      {label}
      {isClose && (
        <button
          type="button"
          className="parts-simple-chip__close-chip"
        ></button>
      )}
    </div>
  )
}

export default PartsSimpleChip
