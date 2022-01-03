export type IAppConfig = {
  headerName: string
  headerContents: string[]
  noticeData: NoticeData[]
  aboutMessage: AboutMessageType
}

export type NoticeData = {
  [key: string]: string
  title: string
  date: string
}

export type AboutMessageType = {
  main: string
  author: string
  contact: string
}
