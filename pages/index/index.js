// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('Page loading')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('Page onReady'),
    wx.navigateTo({
        url:'../test/test?value=1'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('Page onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('用户下拉触底')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('用户上拉触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onPageScroll(options){
    console.log('此时用户滚动页面'),
    console.log('滚动距离'+options.scrollTop)
  },
  compare(e){
    console.log('按钮被点击'),
    console.log(e)
    var str='equality'
    if(this.num1>this.num2){
      str='The firtst number is large'
    }else if(this.num1<this.num2){
      str='The second number is large'
    }
    this.setData({result:str})
  },
  viewtap(e){
    console.log(e.target.id+'-'+e.currentTarget.id)
  },  
  num1:0,
  num2:0,
  numchange1(e){
    this.num1=Number(e.detail.value),
    console.log(this.num1)
  },
  numchange2(e){
    this.num2=Number(e.detail.value),
    console.log(this.num2)
  },
  formcompare(e){
    var str='equality'
    var num1=Number(e.detail.value.num1)
    var num2=Number(e.detail.value.num2)
    if(num1>num2){
      str='num1>num2'
    }else if(num1<num2){
      str='num1<num2'
    }
    this.setData({result:str})
  }
})
