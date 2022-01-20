import React, { FormEventHandler, FocusEventHandler } from 'react'

type Props = {
  value: string
  onInput?: FormEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  placeholder?: string
  maxLength?: number
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
}

export const PartsSimpleTextField: React.VFC<Props> = ({
  value = '',
  onInput = undefined,
  onFocus = undefined,
  placeholder = undefined,
  maxLength = undefined,
  required = undefined,
  disabled = false,
  readOnly = false,
}) => {
  return (
    <input
      className={`parts-simple-text-field`}
      type="text"
      value={value}
      onInput={onInput}
      onFocus={onFocus}
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}

export default PartsSimpleTextField
