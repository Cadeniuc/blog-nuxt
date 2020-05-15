const posts = [
  {title: 'Post', date: new Date(), views: 22, comments: [1,2], _id: 'id1'},
  {title: 'Post 2', date: new Date(), views: 22, comments: [1,2], _id: 'id2'}
]

export const actions = {
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      },500)
    })
  },
  async remove({}, id) {

  },
  async update({}, {id, text}) {

  },
  async create({}, {title, text}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      },500)
    })
  },
  async fetchAminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      },500)
    })
  }
}
