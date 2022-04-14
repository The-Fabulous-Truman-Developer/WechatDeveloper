// pages/index/infoTrumanContainer/kirksvilleSurrounding/kirksvilleSurrounding.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgList : 
    [
      "https://sand.truman.edu/cis/WechatSource/Pictures/starbuck.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/mein-bowl.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/chick-fill-a.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Tres-Habaneros.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/sliceoflife.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/EinsteinBrothersBagels2019.jpeg"
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