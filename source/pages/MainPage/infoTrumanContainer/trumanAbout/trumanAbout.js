// pages/index/trumanAbout/trumanAbout.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgList : 
    [
      "https://sand.truman.edu/cis/WechatSource/Pictures/top_public_NO1.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/universities_midwest_NO6.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/best-value_NO1.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/undergraduate_teaching_NO8.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/dps_app.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/dps_truman.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/music.png"
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
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})