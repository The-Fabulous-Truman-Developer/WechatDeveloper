// pages/index/infoTrumanContainer/kirkTransport/kirkTransport.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgList : 
    [
      "https://sand.truman.edu/cis/WechatSource/Pictures/jiaotong.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/CapeAir.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/cape_air_ji.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/columbia-regional-airport.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/st_louis_airport.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/kansas_airport.webp",
      "https://sand.truman.edu/cis/WechatSource/Pictures/OHare-International-Airport.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Amtrak.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/amtrak_che.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/%20travel_plan_confirmation.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/recommended_routes.png"
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