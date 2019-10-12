
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  outpatient: {
    token: 'outpatient-token'
  },
  pharmacy: {
    token: 'pharmacy-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'outpatient-token': { 
    roles: ['outpatient'],
    introduction: '这是门诊医生',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Outpatient Doctor'
  },
  'pharmacy-token':{
    roles: ['pharmacy'],
    introduction: '药房',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'pharmacy'
  }
}

export default [
  // user login
  {
    url: '/staff/login',
    type: 'post',
    response: config => {
      console.log(config)
      const { username } = config.body
      const token = tokens[username]
      
      console.log(token)
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/staff/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users['pharmacy-token']

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/staff/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
