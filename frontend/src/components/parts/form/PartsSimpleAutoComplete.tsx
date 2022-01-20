import React, {
  useState,
  FormEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
} from 'react'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsSimpleMenu } from '@/components/parts/menu/PartsSimpleMenu'

type Props = {
  value: string | number | readonly string[] | undefined
  onInput?: FormEventHandler<HTMLSelectElement>
  onChange?: ChangeEventHandler<HTMLSelectElement>
  items?: Record<string, string | number | string[] | undefined>[]
  itemText?: string
  itemValue?: string
  multiple?: boolean
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

export const PartsSimpleAutoComplete: React.VFC<Props> = ({
  value = undefined,
  onInput = undefined,
  onChange = undefined,
  items = [],
  itemText = 'text',
  itemValue = 'value',
  multiple = false,
  placeholder = undefined,
  required = undefined,
  disabled = false,
}) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isFocus, setFocusValue] = useState<boolean>(false)

  return (
    <div className="parts-simple-auto-complete">
      <PartsSimpleTextField
        value={searchValue}
        onInput={(e) => setSearchValue(e.currentTarget.value)}
        onFocus={(e) => {
          console.log('focus: ' + JSON.stringify(e.target.width, null, 2))
        }}
        onBlur={(e) => {
          console.log('blur: ' + JSON.stringify(e.target.width, null, 2))
        }}
        placeholder={placeholder}
      />
      <PartsSimpleMenu
        value={value}
        onChange={onChange}
        items={items}
        multiple={false}
        placeholder={placeholder}
        disabled={false}
      />
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

export default PartsSimpleAutoComplete
