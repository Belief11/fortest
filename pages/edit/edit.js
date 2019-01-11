var app = getApp()

Page({
  data: {
    data: "修改数据",
   stuid:0,
   stuname:null,
   stuphone:null,
   stuaddress:null



  },
  onLoad: function (options) {
   
    this.setData({
     stuid:options.stuid,
     stuname: options.stuname,
     stuphone:options.stuphone,
     stuaddress:options.stuaddress,

    })
    
    
  },
  edit:function(){
    var that=this
    
    wx.request({
      method: 'PUT',
      url: 'http://localhost:8081/stu/updatestu?stuID=' + this.data.stuid + '&stuName=' + this.data.stuname + '&stuPhone=' + this.data.stuphone + '&stuAddress=' + this.data.stuaddress ,
      header: {
        'content-type': 'application/json'
      },

      
      
      
  

})

    wx.redirectTo({
      url: '../index/index',
    })
  },
 
  getName:function(e){
    this.setData({
      stuname: e.detail.value

    })
  },
  getPhone: function (e) {
    this.setData({
      stuphone: e.detail.value,
     
    })
  
  },
  getAddress: function (e) {
    this.setData({
      stuaddress: e.detail.value

    })
  }
})