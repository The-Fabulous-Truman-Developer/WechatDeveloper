// pages/index/index.js
Page(
  {
  /**
   * Page initial data
   */
  data: 
  {
    imgUrls: [
      '/static/images/Gallery/Admission.png',
      '/static/images/Gallery/Academics.png',
      '/static/images/Gallery/Impact.png',
      '/static/images/Gallery/mainIndexImage.png',
      '/static/images/Gallery/StudentLife.png',
      '/static/images/Gallery/WhatWeHave.png',
  ],
  show: true,
    list: 
    [
      {
        "text": "申请",
        "iconPath": "static/images/TrumanLogo.png",
        "selectedIconPath": "static/images/TrumanLogo.png"
      },
      {
        "text": "学校介绍",
        "iconPath": "static/images/TrumanLogo.png",
        "selectedIconPath": "static/images/TrumanLogo.png"
      },
      {
        "text": "联系我们",
        "iconPath": "static/images/TrumanLogo.png",
        "selectedIconPath": "static/images/TrumanLogo.png"
      },
      {
        "text": "交通与周边",
        "iconPath":"static/images/TrumanLogo.png",
        "selectedIconPath":"static/images/TrumanLogo.png"
      },
    ]
  },
  tabChange(e) {
  console.log('tab change', e)
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