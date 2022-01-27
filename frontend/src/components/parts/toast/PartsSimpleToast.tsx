import React, {
  FormEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  TouchEventHandler,
  MouseEventHandler,
} from 'react'

type Props = {
  value?: boolean
  className?: string
  data?: Record<'text', string> &
    Record<'status', 'success' | 'waring' | 'error'>
}

export const PartsSimpleToast: React.VFC<Props> = ({
  value = false,
  className = undefined,
  data = undefined,
}) => {
  return (
    <div
      className={`parts-simple-toast${
        value ? ' parts-simple-toast__display' : ''
      }
        ${value && data ? ' parts-simple-toast__status--' + data.status : ''}`}
    >
      {data ? data.text : ''}
    </div>
  )
}

export default PartsSimpleToast
