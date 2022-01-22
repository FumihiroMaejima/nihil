import React, {
  FormEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  TouchEventHandler,
  MouseEventHandler,
} from 'react'

type Props = {
  value: string | number | readonly string[] | undefined
  className?: string
  onInput?: FormEventHandler<HTMLSelectElement>
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onFocus?: FocusEventHandler<HTMLDivElement>
  onBlur?: FocusEventHandler<HTMLDivElement>
  onTouchMove?: TouchEventHandler<HTMLDivElement>
  onClickOtion?: MouseEventHandler<HTMLOptionElement>
  onClickItem?: MouseEventHandler<HTMLDivElement>
  onClickCapture?: MouseEventHandler<HTMLDivElement>
  onBlurCapture?: FocusEventHandler<HTMLDivElement>
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
  className = undefined,
  onInput = undefined,
  onChange = undefined,
  onClickCapture = undefined,
  onBlurCapture = undefined,
  onFocus = undefined,
  onBlur = undefined,
  onTouchMove = undefined,
  onClickOtion = undefined,
  onClickItem = undefined,
  items = [],
  itemText = 'text',
  itemValue = 'value',
  multiple = false,
  placeholder = undefined,
  required = undefined,
  disabled = false,
}) => {
  return (
    <div
      className={`parts-simple-menu__wrapper ${
        className ? ' ' + className : ''
      }`}
    >
      <div
        // className={className !== '' ? className : `parts-simple-menu`}
        // className={`parts-simple-menu${className ? ' ' + className : ''}`}
        className={`parts-simple-menu`}
        onFocus={onFocus}
        onClickCapture={onClickCapture}
        onBlurCapture={onBlurCapture}
        onBlur={onBlur}
        onTouchMove={onTouchMove}
      >
        {items.length === 0 && 'no items!'}
        {items.map((item, i) => (
          /* <option key={i} value={item[itemValue]} onClick={onClickOtion}>
            {item[itemText]}
          </option> */
          <option
            className={`parts-simple-menu__item`}
            key={i}
            value={item[itemValue]}
            onClick={onClickOtion}
          >
            {item[itemText]}
          </option>
          /* <div
            className={`parts-simple-menu__item`}
            key={i}
            value={item[itemValue]}
            role="option"
            onClick={onClickItem}
          >
            {item[itemText]}
          </div> */
        ))}
      </div>
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
