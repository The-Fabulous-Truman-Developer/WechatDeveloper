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
    imgUrlsList: [
      "https://sand.truman.edu/cis/WechatSource/Pictures/CampusScenery23April2020-14.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Jiaqi_Li.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Xinyu_Yu.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Zhihao_Hengyi.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Zhihao_Jin.JPG",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Orientation_21.jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Orientation2_21_China.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo1.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo2.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo3.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo4.jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/snow1.jpg"
    ],
    //这个是滚动的图片地址
    imgUrls: [
      "https://sand.truman.edu/cis/WechatSource/Pictures/CampusScenery23April2020-14(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Jiaqi_Li(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Xinyu_Yu(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Zhihao_Hengyi(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/IEW_21_Zhihao_Jin(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Orientation_21(1).jpeg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/Orientation2_21_China(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo1(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo2(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo3(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/photo4(1).jpg",
      "https://sand.truman.edu/cis/WechatSource/Pictures/snow1(1).jpg"
    ],
  },

  click_img : function(index) {
    let _index = index.currentTarget.dataset.index
    let currentUrl = this.data.imgUrls[_index]
    console.log(currentUrl)
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  },

  trumanAboutPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/infoTrumanContainer/trumanAbout/trumanAbout",
    });
  },
  
  kirkTransPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/infoTrumanContainer/kirkTransport/kirkTransport",
    });
  },

  ScholarshipProgramPageChange: function () {
    wx.navigateTo({
      url:
        "../MainPage/InternationalContainer/ScholarshipProgram/ScholarshipProgram",
    });
  },
  SSASPPageChange: function ()
  {
    wx.navigateTo({
      url: '../MainPage/SSAS/SSAS',
    })
  },
  TrumanMusicPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/TrumanMusic/TrumanMusic",
    });
  },

  GalleryPageChange: function () {
    wx.navigateTo({
      url: "../MainPage/GalleryContainer/Gallery",
    });
  },

  CampusServicePageChange: function ()
  {
    wx.navigateTo({
      url: "../MainPage/CampusServices&Security/CampusService"
    })
  }
});
