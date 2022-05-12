Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList : 
    [
      "https://sand.truman.edu/cis/WechatSource/Pictures/Brewer-Hall-June-2014-2_1000-1.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Centennial-Hall-1000x578-1.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Dobson-Hall-Pet-Friendly-Housing_2.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Missouri-Hall-June-2014-1-min.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/RyleHallJune2013-2-50-min.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/West-Campus-Suites-1000x504-1.jpg"
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