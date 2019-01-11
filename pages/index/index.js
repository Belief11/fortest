var app = getApp()

Page({
  data: {
    data: "数据展示",
    items:[],
   
  },
  onLoad: function () {
    
    var that = this;
  
    wx.request({
      url: 'http://localhost:8081/stu/all',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        
        that.setData({
          list: res.data
        })
      }
  })
  },

  change: function (event) {
    var that=this
    var id=event.currentTarget.dataset.editid
    var student=that.data.list[id];
    console.log(id);
    console.log(student);
  wx.navigateTo({
    url: '../edit/edit?stuid=' + student.stuID + '&stuname=' + student.stuName + '&stuphone=' + student.stuPhone + '&stuaddress=' + student.stuAddress,
  })
  },
  mydelete:function(event){
    var that=this
    var id = event.currentTarget.dataset.deleteid
    
    wx.request({
      method: 'Delete',
      url: 'http://localhost:8081/stu/del/'+id,
      success(res){
    that.onLoad();
      }
    })
   

  },
  addStudent:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  
  
  
  
})
  
  


