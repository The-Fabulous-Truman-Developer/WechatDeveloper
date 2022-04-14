// source/pages/Traffic/Route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList : 
    [
      "https://sand.truman.edu/cis/WechatSource/Pictures/maps.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/kirk01.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/kirk02.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/kirk_chun.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/school_xia.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/kirk_qiu.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/kirk_dong.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/cars.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/cars02.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/drive_license.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/qian_shan.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/bbq.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/student_life.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/kirk_square.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/naicha01.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/naicha02.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/chaoshi.JPG"

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