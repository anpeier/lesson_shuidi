Page({
  data: {
    addShow: false,
    focus: false,
    // todos list 
    // 全部， 已完成， 未完成 ...
    lists: [], //所有的todos
    curLists: [], //当前状态todos,
    status: '1' //当前状态
  },
  addTodoShow (event) {
    this.setData({
      addShow: true,
      focus: true
    })
  },
  showStatus (e) {
    var st = e.currentTarget.dataset.status;
    if (st === this.data.status) return;
    // ? 
    if (this.data.status === '1') {
      this.setData({
        curLists: this.data.lists,
        status: st
      })
      return;
    }
    
    this.setData({
      status: st,
      curLists: this.data.lists.filter(item => +item.status === (st - 2))
    })

  },
  addTodo() {
    var temp = this.data.lists;
    var addT = {
      id: new Date().getTime(),
      title: this.data.addText,
      status: '0'
    }
    temp.push(addT);
    this.setData({
      lists: temp,
      curLists: temp,
      addShow: false
    })
  },
  setInput(e) {
    this.setData({
      addText: e.detail.value
    })
  },
  addTodoHide() {
    this.setData({
      addShow: false
    })
  }
})
