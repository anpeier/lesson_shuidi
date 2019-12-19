const github = require('../../api/github.js')
const timeRange = [
  {label : 'Daily', value: 'Daily'},
  {label : 'Weekly', value: 'Weekly'},
  {label : 'Monthly', value: 'Monthly'},
]
const languages = [
  'All',
  'C', 'CSS', 'C#', 'C++',
  'Dart', 'Dockerfile',
  'Erlang',
  'Gradle', 'Go',
  'HTML', 'Haskell',
  'Java', 'JavaScript', 'JSON', 'Julia',
  'Kotlin',
  'MATLAB',
  'Python', 'PHP',
  'R', 'Ruby', 'Rust',
  'Shell', 'SQL', 'Swift',
  'TeX',
  'Vue'
].map(it => ({label: it, value: it}))

const sinceCacheKey = 'Trending:Since';
const langCacheKey = 'Trending:lang';

Page({
  data: {
    since: timeRange[wx.getStorageSync(sinceCacheKey)] || timeRange[0],
    lang: languages[wx.getStorageSync(langCacheKey)] || languages[0],
    selectedIndices: [wx.getStorage(sinceCacheKey) || 0, wx.getStorage(langCacheKey) || 0], // picker value
    selectorValues: [timeRange, languages],
  },
  changeFilter(event) {
    const selectedIndices = event.detail.value;
    // this._save();
    this.setData({
      selectedIndices,
      since: timeRange[selectedIndices[0]],
      lang: languages[selectedIndices[1]]
    })
    wx.startPullDownRefresh();
  },

  // _save() {
  //   wx.setStorageSync('selectedIndices',this.data.selectedIndices);
  // },
  // onLoad: function () {
  //   const selectedIndices = wx.getStorageSync('selectedIndices');
  //   this.setData({
  //     since: timeRange[selectedIndices[0]],
  //     lang: languages[selectedIndices[1]]
  //   })
  // },

  onPullDownRefresh() {
    // console.log('------');
    this.reloadData();
  },
  reloadData() {
    // trending time languages
    const [timeIndex, langIndex] = this.data.selectedIndices;
    const lang = languages[langIndex] || languages[0];
    const since = timeRange[timeIndex] || timeRange[0];
    this.setData({
      lang,
      since
    }, () => {
      // 确保响应式更新之后再执行
      wx.setStorage({
        key: sinceCacheKey,
        data: timeIndex
      })
      wx.setStorage({
        key: langCacheKey,
        data: langIndex
      })
    });
    // wx.request
    github.trendings(since.value, lang.value)
    .then(data => {
      console.log(data);
    })
    .catch(() => {
      console.log('出错了');
    })
  },
})