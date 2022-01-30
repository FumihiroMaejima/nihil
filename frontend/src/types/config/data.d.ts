export type IAppConfig = {
  headerName: string
  headerContents: string[]
  noticeData: NoticeData[]
  aboutMessage: AboutMessageType
  authEndpoint: AuthEndpoint
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

export type AuthEndpoint = {
  [key: string]: string
  authLogin: string
  authLogout: string
  authSelf: string
}
