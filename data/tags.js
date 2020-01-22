const casual = require('casual')

casual.define('tag', () => ({
  id: casual.uuid,
  text: casual.title,
}))


const tagsData = []

for (let i = 0; i < 20; ++i) {
  tagsData.push(casual.tag)
}

module.exports = tagsData
