// source/pages/Traffic/Eat/eat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList : 
    [
      "https://sand.truman.edu/cis/WechatSource/Pictures/starbuck.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/mein-bowl.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/chick-fill-a.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Tres-Habaneros.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/sliceoflife.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/EinsteinBrothersBagels2019.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/schoolrest01.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/schoolrest02.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/c_store.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/pinkdrink.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/chen_palace.jpg"
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