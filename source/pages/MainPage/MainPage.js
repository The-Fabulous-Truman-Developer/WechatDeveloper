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
      "https://sand.truman.edu/cis/WechatSource/Pictures/Impact.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/StudentLife.png",
      "https://sand.truman.edu/cis/WechatSource/Pictures/WhatWeHave.png",
    ],
  },
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
