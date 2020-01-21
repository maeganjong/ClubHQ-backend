const casual = require('casual')

casual.define('tag', () => ({
  id: casual.uuid,
  text: casual.title,
}))


const tagsData = []

module.exports = tagsData
