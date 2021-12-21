// pages/index/infoTrumanContainer/kirksvilleSurrounding/kirksvilleSurrounding.js
Page({

    /**
     * Page initial data
     */
    data: {
      imgUrls: [
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-89.jpg?sign=86815e41b8d1997b76ada2df162392f8&t=1640055768',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-94.jpg?sign=04699d790c5abae008fa29ad43713f3b&t=1640055779',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-134.jpg?sign=e5194152a6012cba1a1049cef736ad33&t=1640055984',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-136.jpg?sign=9b3a5c783f7fe3ab55967559996137e9&t=1640055995',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-207.jpg?sign=9ba53b9e3ded3da4d8b62f96a7df52ba&t=1640056006',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-228.jpg?sign=6fb82e5b899689c418f4908895694956&t=1640056018',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-231.jpg?sign=597813f1c16fb96c0d5b0bca0ba42082&t=1640056029',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-235.jpg?sign=f38078d72de1e76d6550843756b41ae5&t=1640056040',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-250.jpg?sign=7e734f8fc293925b39b220a76a3350b8&t=1640056052',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-255.jpg?sign=1b88c08fb33486dcfbd25cc94f69e7b1&t=1640056061',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-264.jpg?sign=d33afac5e12d4157a1d9baec5ce313b3&t=1640056070',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-273.jpg?sign=b4813941e284bb881159b446ee30a42b&t=1640056086',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-282.jpg?sign=e8800096a81283a1229e384293f92d84&t=1640056094',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-283.jpg?sign=092d4cd744aa1de664339a25c1fa9723&t=1640056103',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-292.jpg?sign=560572456709f76f403a3d99c1a69594&t=1640056121',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-311.jpg?sign=7d3f84f2f6a65500b1af2713b9de8fa7&t=1640056133',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-331.jpg?sign=51eb0578a887fd420881fe014660ca2b&t=1640056182',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-335.jpg?sign=a0874b7cc373fea990e78223cc898e8b&t=1640056192',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-340.jpg?sign=d882312b9209acd3d28c68b00e01d94b&t=1640056200',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-357.jpg?sign=6d37ecb15bc87af6fee89d5bc01437cc&t=1640056207',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-359.jpg?sign=ed7aa8698acac144941415d7c102ece0&t=1640056225',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-366.jpg?sign=7a57ab97eb62b7bf1eece4241864e0da&t=1640056267',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-380.jpg?sign=ed8b4ac8b952659baf8de1f88e0ae9a3&t=1640056279',
        'https://636c-cloud1-0gbp4wfdcd43709a-1307090649.tcb.qcloud.la/static/Gallery/AdmissionsPhotoShoot27April2021-381.jpg?sign=a1ad3cc7d58b9fdda21a82a79192f3f8&t=1640056288'
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
  
    }
  })
