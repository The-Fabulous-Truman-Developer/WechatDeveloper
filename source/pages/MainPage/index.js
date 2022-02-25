// pages/index/index.js
Page({
  /**
   * Page initial data
   */
  data:{
    //indicator-dot的效果演示代码****
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 4000,
    duration: 1048,
    //这个是滚动的图片地址
    imgUrls: [
      "https://sand.truman.edu/cis/WechatSource/Pictures/mainIndexImage.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Admission.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Academics.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/mpact.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/StudentLife.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/WhatWeHave.png",
    ],
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {},

  trumanAboutPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/infoTrumanContainer/trumanAbout/trumanAbout",
    });
  },

  kirkSurrPageChange: function () {
    wx.navigateTo({
      url:
        "../MainPage/infoTrumanContainer/kirksvilleSurrounding/kirksvilleSurrounding",
    });
  },
  kirkTransPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/infoTrumanContainer/kirkTransport/kirkTransport",
    });
  },

  CISBulletinBoardPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/InternationalContainer/CISBulletinBoard/CISBulletinBoard",
    });
  },
  ScholarshipProgramPageChange: function () {
    wx.navigateTo({
      url:
        "../MainPage/InternationalContainer/ScholarshipProgram/ScholarshipProgram",
    });
  },

  AlumiPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/AlumiContainer/Alumi",
    });
  },

  GalleryPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/GalleryContainer/Gallery",
    });
  },
});
