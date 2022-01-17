import React, { FormEventHandler } from 'react'

type Props = {
  value: string
  onInput?: FormEventHandler<HTMLInputElement>
  placeholder?: string
  maxLength?: number
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
}

export const PartsSimpleTextField: React.VFC<Props> = ({
  value = '',
  onInput = undefined,
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
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}

export default PartsSimpleTextField
