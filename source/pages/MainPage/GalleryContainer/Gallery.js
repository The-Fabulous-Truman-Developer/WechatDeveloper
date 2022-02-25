// pages/index/infoTrumanContainer/kirksvilleSurrounding/kirksvilleSurrounding.js
Page({

    /**
     * Page initial data
     */
    data: {
      imgUrls: [
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-100.jpg?sign=e628f6012e44eb1cd62f835b97a53607&t=1640147428',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-115.jpg?sign=16856dbcaf0e03d5119324c2ce0b3b2c&t=1640147443',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-118.jpg?sign=ae63b4f0b5ef4272f66a03d05217272a&t=1640147451',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-123.jpg?sign=be8a962901e1bac7d08477b442b16154&t=1640147461',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-146.jpg?sign=8a910380b14577e7a6b73a83d0d0ae74&t=1640147476',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-147.jpg?sign=2f4b61a32602f6269a9ab2d01b29247c&t=1640147487',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-155.jpg?sign=3cb6afbf38031710c4591a3c2291f1c7&t=1640147494',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-231.jpg?sign=1ecbb49588e454cdd37e4dfd5bcdf0b6&t=1640147503',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-252.jpg?sign=d39580ff136d1af52cd3ca4851f65226&t=1640147510',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-257.jpg?sign=70a8f981faa82248ddf6e49b1199daf6&t=1640147518',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-280.jpg?sign=86bf84718109e14aa932336dc2ce3913&t=1640147532',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-282.jpg?sign=300cd82376c0eff9b15bd291d8520c82&t=1640147540',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-285.jpg?sign=71f74f6d901e13f416688b0b86611bfa&t=1640147548',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-289.jpg?sign=6235ef2bdbd883ddd7ae56e0124e5b21&t=1640147556',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-293.jpg?sign=a480cc6291f54180635be97ee0dcad7a&t=1640147563',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-317.jpg?sign=b47818c884ec39ee77e1df35eaca62bf&t=1640147587',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-321.jpg?sign=cc19a5df40ae54509feabb24c5c4e29f&t=1640147596',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-327.jpg?sign=569a91d5be7161764c1bdbf00cc44176&t=1640147608',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-365.jpg?sign=341ffe643bcf2a8515bf634079e1575a&t=1640147634',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-366.jpg?sign=5aa6951c80d4cece04c6e36a37ce5b0a&t=1640147644',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-380.jpg?sign=0d0d186cf99d132138573131817ea1db&t=1640147655',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-381.jpg?sign=f922e411d73117d769983a9e5a385701&t=1640147665',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-74.jpg?sign=a15b32a80515f021c056801d9cc5d6fc&t=1640147675',
        'https://sand.truman.edu/cis/WechatSource/Pictures/AdmissionsPhotoShoot27April2021-94.jpg?sign=751445a7efa5a2f45e617248038db482&t=1640147683'
      ],
      show: true,
      current:0
    },
  
    change(e) {
      console.log('current index has changed', e.detail)
    },
    hide() {
        this.setData({
        show: true
    })},
    galleryhide:function(){
      this.setData({
        show: true
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
      onLoad: function() {},
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
