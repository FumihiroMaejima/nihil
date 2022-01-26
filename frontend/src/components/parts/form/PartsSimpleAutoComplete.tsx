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

  // componentの外側をクリックした時のハンドリング
  useEffect(() => {
    const handleClick = (e) => {
      if (refElement?.current?.contains(e.target)) {
        // click inside thie component
        // console.log('in')
        return
      } else {
        // click outside thie component
        // console.log('out')

        // フォーカスを閉じる
        setFocusValue(false)
        setSearchValue('')
      }
    }
    // document.addEventListener('mousedown', handleClick)
    // ;() => document.removeEventListener('mousedown', handleClick)
    document.addEventListener('mousedown', (e) => {
      handleClick(e)
      document.removeEventListener('mousedown', handleClick)
    })
  }, [])

  /**
   * get item label by item value.
   * @param {string | number | readonly string[] | undefined} value
   * @return {string}
   */
  const getItemLabel = (
    value: string | number | readonly string[] | undefined
  ): string => {
    const target = items.find((item) => item[itemValue] === value)
    return target ? String(target[itemText]) : ''
  }

  return (
    <div className="parts-simple-auto-complete" ref={refElement}>
      <PartsTextChipBox
        value={searchValue}
        label={getItemLabel(value)}
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
        onClickClose={onClickClose}
        placeholder={placeholder}
      />
      <PartsSimpleMenu
        className={isFocus ? '' : 'parts-simple-menu__none'}
        value={value}
        onChange={onChange}
        onClickOtion={(e) => {
          if (setter !== undefined) {
            setter(e.currentTarget.value)
          }
          // setFocusValue(false)
          // setSearchValue('')
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
  )
}

export default PartsSimpleAutoComplete
