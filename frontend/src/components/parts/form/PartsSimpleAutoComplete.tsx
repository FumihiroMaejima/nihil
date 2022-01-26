import React, {
  useState,
  useRef,
  useEffect,
  FormEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
} from 'react'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsTextChipBox } from '@/components/parts/form/PartsTextChipBox'
import { PartsSimpleMenu } from '@/components/parts/menu/PartsSimpleMenu'

type Props = {
  value: string | number | readonly string[] | undefined
  onInput?: FormEventHandler<HTMLSelectElement>
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onClickOtion?: MouseEventHandler<HTMLOptionElement>
  setter?: <T = string>(v: T) => void
  items?: Record<string, string | number | string[] | undefined>[]
  itemText?: string
  itemValue?: string
  multiple?: boolean
  onClickClose?: MouseEventHandler<HTMLButtonElement>
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

export const PartsSimpleAutoComplete: React.VFC<Props> = ({
  value = undefined,
  onInput = undefined,
  onChange = undefined,
  onClickOtion = undefined,
  setter = undefined,
  items = [],
  itemText = 'text',
  itemValue = 'value',
  multiple = false,
  onClickClose = undefined,
  placeholder = undefined,
  required = undefined,
  disabled = false,
}) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isFocus, setFocusValue] = useState<boolean>(false)

  const refElement = useRef<HTMLDivElement>(null) // reference to container

  useEffect(() => {
    const handleClick = (e) => {
      if (refElement?.current?.contains(e.target)) {
        console.log('in')
        return
      } else {
        console.log('out')
      }
    }
    // document.addEventListener('mousedown', handleClick)
    // ;() => document.removeEventListener('mousedown', handleClick)
    document.addEventListener('mousedown', (e) => {
      handleClick(e)
      document.removeEventListener('mousedown', handleClick)
    })
  }, [])

  return (
    <div className="parts-simple-auto-complete" ref={refElement}>
      <PartsTextChipBox
        value={searchValue}
        selectedValue={value ? String(value) : undefined}
        onInput={(e) => setSearchValue(e.currentTarget.value)}
        onFocus={(e) => {
          setFocusValue(true)

          // 隣接する要素の取得
          // const menu = e.currentTarget.nextElementSibling
          // if (menu) {
          //   menu.addEventListener(
          //     'click',
          //     () => {
          //       setFocusValue(true)
          //     },
          //     { once: true }
          //   )
          // }
        }}
        onBlur={(e) => {
          // console.log('input blur: ' + JSON.stringify(e.target.width, null, 2))
          // setFocusValue(false)
        }}
        onClickClose={onClickClose}
        placeholder={placeholder}
      />
      <PartsSimpleMenu
        className={isFocus ? '' : 'parts-simple-menu__none'}
        value={value}
        onChange={onChange}
        onClickOtion={(e) => {
          // console.log('menu click option2: ' + e.currentTarget.value)

          if (setter !== undefined) {
            setter(e.currentTarget.value)
          }
          setFocusValue(false)
          setSearchValue('')
        }}
        // items={items}
        items={
          searchValue === ''
            ? items
            : items.filter(
                (
                  item: Record<string, string | number | string[] | undefined>
                ) => {
                  const keyText = item[itemText]
                  return typeof keyText === 'string'
                    ? keyText.match(searchValue)
                    : false
                }
              )
        }
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
