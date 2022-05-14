// source/pages/MainPage/SSAS/SSAS.js
Page({

    /**
   * 页面的初始数据
   */
  data: {
    imgList : 
    [
      "https://sand.truman.edu/cis/WechatSource/Pictures/members.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/culture.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/haw.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/get_tick.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/meeting.JPG"
    ]

  },

  click_img : function(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})