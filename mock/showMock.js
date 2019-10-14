import Mock from 'mockjs'

const count = 10
let patientList = []
for (let i = 0; i < count; i++) {
  patientList.push(Mock.mock({
    id: '@increment',
    patientName: '@cname',
    medicalRecordNo: '@string("number", 6)',
    'prescriptionIdList':[1,2,3]
  }))
}


let listByIds = [];//成房药品列表
let listByIds2 = [];//草房药品列表
let getMechlist = [];//门诊医技工作台
for(let i=0;i<20;i++){
  listByIds.push(Mock.mock({
    id: '@increment',
    name: '@csentence(5)',
    createStaffName: '@cname',
    'dmsMedicineItemRecordResultList|1-10':[{
      id: '@increment',
      doctorname: '@csentence(5)',
      drugName:'@csentence(5)',
      'num|1-10':1,
      'price|+1':20,
      'frequency':'qd',
      'medicalAdvice':'@csentence(10)',
    }]
  }));
  listByIds2.push(Mock.mock({
    id: '@increment',
    name: '@csentence(5)',
    createStaffName: '@cname',
    'dmsHerbalItemRecordResultList|1-10':[{
      id: '@increment',
      doctorname: '@csentence(5)',
      drugName:'@csentence(5)',
      'num|1-10':1,
      'price|+1':20,
      'frequency':'qd',
      'medicalAdvice':'@csentence(10)',
      'usageNum|1-10': 1,
      'usageNumUnit': '瓶',
      'currentNum|1-10':1
    }]
  }))

  getMechlist.push(Mock.mock({
    'itemRecordId|1-100':1,
    registrationId:'@string("number", 6)',
    patientName: '@csentence(3)',
    'patientAgeStr|1-100':1,
    'patientGender|0-1':0,
    'itemName':'放射项目的是时候监控',
    checkParts: '@csentence(5)',
    'status|1-4':1



  }))
}

export default [
  // ******************药房工作台接口mock start**********************//
  {
  url: '/drugStore/listPatient', // 病人列表
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: {
        undoPatientList:patientList,
        donePatientList: patientList

      }
    }
  }
}, {
  url: '/drugStore/releaseDrug', // releaseDrug 发药
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: []
    }
  }
}, {
  url: '/drugStore/refundDrug', //退药
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: []
    }
  }
},{
  url: '/DmsMedicinePrescriptionRecord/listByIds', //成房药品列表
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: listByIds
    }
  }
},{
  url: '/DmsHerbalPrescriptionRecord/listByIds', //草房药品列表
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: listByIds2
    }
  }  
},
// ******************药房工作台接口mock end**********************//
// ******************门诊医技工作站mock start**********************//
{
  url: '/DmsMechanicItemRecord/listByDept', 
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: getMechlist
    }
  }  
},{
  url: '/drug/selectDrug', 
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data: {
        list: [{
          name:"药品名称1",
          price:20,
          id:1,
          format:"100mg",
          dosage:{
            name:"ww"
          },
          medicalAdvice:"一天一粒"
        },{
          name:"药品名称2",
          price:50,
          id:2,
          format:"200mg",
          dosage:{
            name:"wtt"
          },
          medicalAdvice:"一次一粒，一天三次"
        }],
        total:20
      }
    }
  }  
},{
  url: '/DmsMechanicItemRecord/log',  //登记
  type: 'post',
  response: config => {
    return {
      code: 20000
    }
  }  
},{
  url: '/aliyun/oss/policy',  //上传
  type: 'get',
  response: config => {
    return {
      code: 20000,
      data:{
        policy: '1111',
        signature: '1111',
        key: '2222',
        ossaccessKeyId: '1233',
        dir: 'image',
        host: 'http://localhost'
      }
    }
  }  
},{
  url: '/DmsMedicinePrescriptionRecord/apply',  //补录
  type: 'post',
  response: config => {
    return {
      code: 20000
    }
  }  

 
},

// ******************门诊医技工作站mock end**********************//
// ******************挂号mock start**********************//

{
  url: '/fee/listRegisteredPatient',  //挂号信息列表
  type: 'get',
  response: config => {
    return {
      code: 20000,
      data:{
        list:function(){
          let list = [];
          for(let i=0;i<=10;i++){
            list.push(Mock.mock({
              patientDateOfBirth:"1998-12-12",
              attendanceDate:"2019-02-22",
              medicalRecordNo: '@string("number", 6)',
              patientName: '@cname',
              'registrationStatus|0-4':1,
              'patientGender|0-1':0,
              deptName:'妇科'
            }))
          }
          return list;
        },
        total:10
      }
     
    }
  }  
  
},{
  url: '/dept/selectAll',  //科室列表
  type: 'get',
  response: config => {
   return {
     code: 20000,
     data:function(){
       let list = []
       for(let i=0;i<=10;i++){
        list.push(Mock.mock({
          id: '@increment',
          name: '@csentence(5)'
          
        }))
      }
      return list
     }
   }
  }
  
},{
  url: '/registerRank/selectAll',  //挂号级别列表
  type: 'get',
  response: config => {
   return {
     code: 20000,
     data:function(){
       let list = [{
         id:1,
         name:"一级",
         price:100
       },{
        id:2,
        name:"二级",
        price:50
       },{
        id:3,
        name:"三级",
        price:25 // 挂号的价格
       }]
      
      return list
     }
   }
  }
 
},{
  url: '/staff/listDocBySkd',  //查询上班医生
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data:function(){
        let list = []
        for(let i=0;i<=10;i++){
          list.push(Mock.mock({
            skdId: '@increment',
            name: '@cname'
            
          }))
        }
        return list
      }
    }
  }
 

},{
 
  url: '/registration/createRegistration',  //创建挂号提交
  type: 'post',
  response: config => {
    return {
      code: 20000
    }
  }

},{

  url: '/diagnosisPatient/selectPatientByIdNo',  //挂号界面点击
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data:{
        name:"张三",
        dateOfBirth:"1989-12-20",
        age: 30,
        homeAddress:"时间时间时间时间时间时间xxxxx",
        gender:1,
        phoneNo: '15268561706'

      }
    }
  }
 
},{
  url: '/invoice/reprintInvoice',  //重打发票
  type: 'post',
  response: config => {
    return {
      code: 20000
    }
  }
  
}
// ******************挂号mock end**********************//




]






