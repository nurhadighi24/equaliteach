import EqualiteachSource from '../../data/equaliteach-source'
import { trendingTopic2Content } from '../../templates/template-creator'

const TrendingTopic2 = {
  async render () {
    return `
          <div>
            <div class="trending-item-container">
            <h1>will display one of the trending topic content 2</h1>
            </div>
            <div id="trending2ContentContainer"></div>
          </div>
        `
  },

  async afterRender () {
    const contents = await EqualiteachSource.contentTc()
    const tc2Container = document.querySelector('#trending2ContentContainer')
    contents.forEach((content) => {
      tc2Container.innerHTML += trendingTopic2Content(content)
    })
  }
}

export default TrendingTopic2
