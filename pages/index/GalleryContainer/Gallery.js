// pages/index/infoTrumanContainer/kirksvilleSurrounding/kirksvilleSurrounding.js
Page({

    /**
     * Page initial data
     */
    data: {
      imgUrls: [
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-282.jpg?sign=c1600bf4b3e675d426881180007333e5&t=1640055169',
      ],
      show: false,
      current:0
    },
  
    change(e) {
      console.log('current index has changed', e.detail)
    },
    hide() {
        this.setData({
        show: false
    })},
    galleryhide:function(){
      this.setData({
        show: false
    })},
     //画廊结束
    imgList:function(e){
      //console.log(e);
      //console.log(e.currentTarget.dataset.itemid);
      //执行放大过程
      this.setData({
        show: true,
        current:e.currentTarget.dataset.itemid
    })
     },
      onLoad: function() {}
    })
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
