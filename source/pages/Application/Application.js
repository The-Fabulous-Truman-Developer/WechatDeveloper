// pages/Application.js
Page({
    todoListPageChange:function(){
        wx.navigateTo({
          url: '../Application/TO-DOListContainer/TO-DOList',
        })
    },
    passportVisaPageChange:function(){
      wx.navigateTo({
        url: '../Application/PassportAndVisaContainer/Visa',
      })
    },

    DormRoomPageChange: function(){
      wx.navigateTo({
        url: '../Application/DormRoomContainer/Dorm',
      })
    },
})