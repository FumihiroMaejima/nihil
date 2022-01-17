import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PartsLabelHeader } from '@/components/parts/PartsLabelHeader'
import { PartsLabelTable } from '@/components/parts/table/PartsLabelTable'
import { PartsMessageBoard } from '@/components/parts/PartsMessageBoard'
import { PartsSimpleBox } from '@/components/parts/box/PartsSimpleBox'
import { PartsTitleBox } from '@/components/parts/box/PartsTitleBox'
import { PartsCircleButton } from '@/components/parts/button/PartsCircleButton'
import { PartsSimpleButton } from '@/components/parts/button/PartsSimpleButton'
import { PartsSimpleFlatButton } from '@/components/parts/button/PartsSimpleFlatButton'
import { PartsSimpleSelectBox } from '@/components/parts/form/PartsSimpleSelectBox'
import { PartsSimpleTextField } from '@/components/parts/form/PartsSimpleTextField'
import { PartsLabelHeading } from '@/components/parts/heading/PartsLabelHeading'
import { PartsSimpleHeading } from '@/components/parts/heading/PartsSimpleHeading'
import { PartsSimpleList } from '@/components/parts/list/PartsSimpleList'
import { PartsStickyNoteList } from '@/components/parts/list/PartsStickyNoteList'
import {
  PartsSimpleTable,
  TableHeaderType,
  SimpleTableDataType,
} from '@/components/parts/table/PartsSimpleTable'
import { TableContentsType } from '@/types'

const tableData: TableContentsType[] = [
  { label: '会社名', value: 'テスト株式会社' },
  { label: '創業', value: '1950年' },
  { label: '従業員数', value: '600人' },
  { label: '電話番号', value: '123-456-7890' },
]

const simpleTableHeaderData: TableHeaderType[] = [
  { label: 'label1' },
  { label: 'label2' },
  { label: 'label3' },
]
const simpleTableData: SimpleTableDataType[] = [
  { label1: 'v1', label2: 'v2', label3: 'v3' },
  { label1: 'v4', label2: 'v5', label3: 'v6' },
  { label1: 'v7', label2: 'v8', label3: 'v9' },
]

const selectBoxItems = [
  { text: 'test1', value: 1 },
  { text: 'test2', value: 2 },
  { text: 'test3', value: 3 },
  { text: 'test4', value: 4 },
  { text: 'test5', value: 5 },
  { text: 'test6', value: 6 },
  { text: 'test7', value: 7 },
  { text: 'test8', value: 8 },
]

export const Sample: React.VFC = () => {
  const [textValue, setTextValue] = useState('')
  const [selectValue, setSelectValue] = useState<undefined | number>(undefined)
  // const [multiSelectValue, setMultiSelectValue] = useState<number[]>([])

  return (
    <div className="page-container page-container__mx-auto">
      <h1 className="page-header">Sample</h1>

      <PartsSimpleHeading
        text="simple heading"
        color="dark-grey"
        isDashed={false}
        isDouble={false}
      />

      <div className="m-xy2">
        <PartsSimpleBox text="simple box" isDashed={false} />
      </div>

      <div className="m-xy2">
        <PartsSimpleBox text="simple box" textColor="red" isDashed={false} />
      </div>

      <div className="m-xy2">
        <PartsTitleBox text="title box" isDashed={false} />
      </div>

      <div className="m-xy2">
        <PartsTitleBox
          text="title box"
          color="green"
          textColor="blue"
          isDashed={true}
        />
      </div>

      <div className="m-xy2">
        <PartsSimpleFlatButton />
        <PartsSimpleFlatButton color="blue" />
        <PartsSimpleFlatButton color="green" />
        <PartsSimpleFlatButton color="red" />
      </div>

      <div className="m-xy2">
        <PartsSimpleButton text="button text" />
        <PartsSimpleButton text="black" color="black" />
        <PartsSimpleButton text="blue" color="blue" />
        <PartsSimpleButton text="red" color="red" />
        <PartsSimpleButton text="green" color="green" />
        <PartsSimpleButton text="white" color="white" />
      </div>

      <div className="m-xy2">
        <PartsCircleButton text="text" />
        <PartsCircleButton text="black" color="black" />
        <PartsCircleButton text="blue" color="blue" />
        <PartsCircleButton text="red" color="red" />
        <PartsCircleButton text="green" color="green" />
        <PartsCircleButton text="white" color="white" />
      </div>

      <div className="m-xy2">
        {/* <PartsSimpleTextField value={textValue} onInput={(e) => console.log('input: ' + e.currentTarget.value)} /> */}
        <PartsSimpleTextField
          value={textValue}
          onInput={(e) => setTextValue(e.currentTarget.value)}
        />

        <div className="m-xy2">
          <PartsSimpleTextField
            value={textValue}
            onInput={(e) => setTextValue(e.currentTarget.value)}
            placeholder="test placeholder"
          />
        </div>

        <div className="m-xy2">
          <PartsSimpleTextField
            value={textValue}
            onInput={(e) => setTextValue(e.currentTarget.value)}
            placeholder="max length 10 strings"
            maxLength={10}
          />
        </div>

        <div className="m-xy2">
          <PartsSimpleTextField
            value={textValue}
            onInput={(e) => setTextValue(e.currentTarget.value)}
            placeholder="test required"
            required={true}
          />
        </div>

        <div className="m-xy2">
          <PartsSimpleTextField
            value={textValue}
            onInput={(e) => setTextValue(e.currentTarget.value)}
            placeholder="test readOnly"
            readOnly={true}
          />
        </div>

        <div className="m-xy2">
          <PartsSimpleTextField
            value={textValue}
            onInput={(e) => setTextValue(e.currentTarget.value)}
            placeholder="test disabled"
            disabled={true}
          />
        </div>
      </div>

      <div className="m-xy2">
        <div className="m-xy2">
          <PartsSimpleSelectBox
            value={selectValue}
            onChange={(e) => setSelectValue(parseInt(e.target.value))}
            items={selectBoxItems}
            placeholder="test selectbox"
            disabled={false}
          />
        </div>
        <div className="m-xy2"></div>
      </div>

      <div className="m-xy2">
        <PartsLabelHeading text="text" />
      </div>
      <PartsLabelHeading text="grey" />
      <PartsLabelHeading text="blue" color="blue" />
      <PartsLabelHeading text="red" color="red" />
      <PartsLabelHeading text="green" color="green" />
      <PartsLabelHeading text="white" color="white" />

      <div className="m-xy2">
        <PartsSimpleList items={[1, 2, 3, 4, 5]} />
        <PartsSimpleList items={[1, 2, 3, 4, 5]} color="blue" />
        <PartsSimpleList items={[1, 2, 3, 4, 5]} color="red" />
        <PartsSimpleList items={[1, 2, 3, 4, 5]} color="green" />
      </div>

      <div className="m-xy2">
        <PartsStickyNoteList items={[1, 2, 3, 4, 5]} />
      </div>

      <PartsLabelHeader text="Slot label header" color="blue" />

      <div className="m-xy2">
        <PartsLabelTable items={tableData} />
      </div>

      <div className="m-xy2">
        <PartsSimpleTable
          headers={simpleTableHeaderData}
          items={simpleTableData}
        />
      </div>

      <div className="">
        <p>Hello Home!</p>
        <PartsMessageBoard>
          <PartsLabelHeader text="Slot label header" color="blue" />
        </PartsMessageBoard>
      </div>
      <div className="">
        <Link to={`/about`}>Go To About</Link>
      </div>
      <div className="">
        <Link to={`/sample`}>Go To Sample</Link>
      </div>
    </div>
  )
}

export default Sample
