// index.js
// 获取应用实例
import artqrcode from '../../utils/wx-art-qrcode.js';
Page({
  data: {
    imginfo: {
      eye: "../../img/eye.png", //必填
      one: "../../img/one.png", //必填
      tian: "../../img/tian.png", //可选
      col2: "../../img/col2.png", //可选
      col3: "../../img/col3.png", //可选
      col4: "../../img/col4.png", //可选
      row2: "../../img/row2.png", //可选
      row3: "../../img/row3.png", //可选
      row4: "../../img/row4.png", //可选
      re7: "../../img/re7.png", //可选
      po7: "../../img/po7.png", //可选
    },
    qrinfo: { //必填
      canvasid: 'qrcode',
      size: '200',
      text: '1',
    }
  },
  onLoad:function() {
    artqrcode(this.data.qrinfo, this.data.imginfo).then(() => {
      console.log("成功")
    }).catch(() => {
      console.log("失败")
    })
  }
})