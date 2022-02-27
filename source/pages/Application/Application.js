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


    data: {
      // tab 栏数据
      tabs:[
        {
          id:0,
          name:'校内参观',
          isActive:true,
        },
        {
          id: 1,
          name: '周边漫步',
          isActive: false,
        },
      ]
    },
  
    // 切换 tab栏 选项
    changeTab(e){
      console.log(e)
      let index = e.currentTarget.dataset.index;
      let {tabs} = this.data;
      tabs.forEach((item)=>{
        item.id===index ? item.isActive=true : item.isActive=false;
      });
      this.setData({
        tabs
      });
    },
})