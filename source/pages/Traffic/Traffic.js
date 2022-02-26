// pages/Application.js
Page({
  EatPageChange: function () {
    wx.navigateTo({
      url: "./Eat/eat",
    });
  },
  trafficInKirksville: function () {
    wx.navigateTo({
      url: "./Route/route",
    });
  },
});
