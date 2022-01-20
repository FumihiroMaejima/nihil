import React, {
  FormEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react'

type Props = {
  value: string | number | readonly string[] | undefined
  onInput?: FormEventHandler<HTMLSelectElement>
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  items?: Record<string, string | number | string[] | undefined>[]
  itemText?: string
  itemValue?: string
  multiple?: boolean
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

export const PartsSimpleMenu: React.VFC<Props> = ({
  value = undefined,
  onInput = undefined,
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  items = [],
  itemText = 'text',
  itemValue = 'value',
  multiple = false,
  placeholder = undefined,
  required = undefined,
  disabled = false,
}) => {
  return (
    <div className="parts-simple-menu" onFocus={onFocus} onBlur={onBlur}>
      {items.map((item, i) => (
        <option key={i} value={item[itemValue]}>
          {item[itemText]}
        </option>
      ))}
    </div>
    /* <select
      className="parts-simple-select-box"
      value={value}
      onInput={onInput}
      onChange={onChange}
      multiple={multiple}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    >
      {items.map((item, i) => (
        <option key={i} value={item[itemValue]}>
          {item[itemText]}
        </option>
      ))}
    </select> */
  )
}

export default PartsSimpleMenu
