// pages/index/index.js
Page(
  {
  /**
   * Page initial data
   */
  data: 
  {
    //indicator-dot的效果演示代码****
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 4000,
    duration: 1048,
    //******************************* 

    //这个是滚动的图片地址
    imgUrls: [
      'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/images/Gallery/mainIndexImage.png',
      'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/images/Gallery/Admission.png',
      'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/images/Gallery/Academics.png',
      'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/images/Gallery/Impact.png',
      'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/images/Gallery/StudentLife.png',
      'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/images/Gallery/WhatWeHave.png',
    ]
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

  },

  trumanAboutPageChange:function() {
    wx.navigateTo({
      url: '../index/infoTrumanContainer/trumanAbout/trumanAbout'
    });
  },

  kirkSurrPageChange:function() {
    wx.navigateTo({
      url: '../index/infoTrumanContainer/kirksvilleSurrounding/kirksvilleSurrounding'
    });
  },
  kirkTransPageChange:function() {
    wx.navigateTo({
      url: '../index/infoTrumanContainer/kirkTransport/kirkTransport'
    });
  },

  CISBulletinBoardPageChange: function(){
    wx.navigateTo({
      url: '../index/InternationalContainer/CISBulletinBoard/CISBulletinBoard'
    })
  },
  ScholarshipProgramPageChange: function(){
    wx.navigateTo({
      url: '../index/InternationalContainer/ScholarshipProgram/ScholarshipProgram',
    })
  },

  AlumiPageChange: function(){
    wx.navigateTo({
      url: '../index/AlumiContainer/Alumi',
    })
  },

  GalleryPageChange: function(){
    wx.navigateTo({
      url: '../index/GalleryContainer/Gallery',
    })
  }
})