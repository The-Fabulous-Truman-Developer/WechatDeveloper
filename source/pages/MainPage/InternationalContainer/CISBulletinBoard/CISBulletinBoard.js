// pages/index/infoTrumanContainer/kirksvilleSurrounding/kirksvilleSurrounding.js
Page({

    /**
     * Page initial data
     */
    data: {

    },
  
    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) 
    {
      wx.downloadFile
      ({
        url: 
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Docs/Bulletin.docx?sign=6a9792ed97ee251aa3928eb641d2e7b4&t=1638305512',

        success: function (res) 
        {
          const filePath = res.tempFilePath
          wx.openDocument
          ({
            filePath: filePath,
            success: function (res) 
            {
              console.log('打开文档成功')
            }
          })
        }
      })
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