module.exports = {
  headerName: 'Game',
  headerContents: ['about', 'start game', 'contact'],
  noticeData: [
    { title: '「event」ページを更新しました。', date: '2020/09/24 10:00' },
    { title: '「event」ページを作成しました。', date: '2020/09/23 10:00' },
    { title: 'ポータルサイトを作成しました。', date: '2020/09/22 10:00' },
  ],
  authEndpoint: {
    authLogin: '/api/v1/admin/auth/login',
    authLogout: '/api/v1/admin/auth/logout',
    authSelf: '/api/v1/admin/auth/self',
  },
}