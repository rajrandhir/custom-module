export const getToken = () => {
    let allcookies = document.cookie.split(';')
    let token = ''
    for (let i = 0; i < allcookies.length; i++) {
      if (allcookies[i].split('=')[0].trim() === 'refresh_token') {
        token = allcookies[i].split('=')[1]
      }
    }
    return token
  };

  export const isLogin = () => {
    let allcookies = document.cookie.split(';')
    let token = ''
    for (let i = 0; i < allcookies.length; i++) {
      if ((token = allcookies[i].split('=')[1])) {
        return true
      }
    }
    return false
  }

  export const logout = () => {
    localStorage.removeItem('token')
    // localStorage.removeItem('user_name')
    // localStorage.removeItem('team_id')
    // localStorage.removeItem('game_id')
    // localStorage.removeItem('share_link')
    // localStorage.removeItem('email')
    // localStorage.removeItem('user_id')
    // localStorage.clear()
    // localStorage.removeItem('game_start')
     localStorage.clear()
    setTimeout(() => {
      window.location.href = '/login'
      // window.location.reload()
    })
  }