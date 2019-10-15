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
  
},
// ******************挂号mock end**********************//
// ******************门诊财务mock start**********************//
{
  url: '/workload/queryDeptPersonalWorkloadList',  //科室工作量统计
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data:function(){
        let list = []
        for(let i=0;i<=20;i++){
          list.push(Mock.mock({
            skdId: '@increment',
            staffName: '@cname',
            deptName: '@csentence(5)',
            'medicineAmount|100-100000': 100,
            'herbalAmount|100-100000': 100,
            'checkAmount|100-100000': 100,
            'testAmount|100-100000': 100,
            'dispositionAmount|100-100000': 100,
            'registrationAmount|100-100000': 100,
            'amount|1000-1000000': 100,
            'registrationNum|1000-1000000':1000,
            'excuteCheckAmount|1000-1000000':1000,
            'excuteTestAmount|1000-1000000':1000,
            'excuteDispositionAmount|1000-1000000':1000,
          }))
        }
        return list;
      }
    }
  }
},{
 
  url: '/workload/queryPersonal',  //个人工作量统计
  type: 'post',
  response: config => {
    return {
      code: 20000,
      data:function(){
        let list = []
        for(let i=0;i<=20;i++){
          list.push(Mock.mock({
            skdId: '@increment',
            staffName: '@cname',
            deptName: '@csentence(5)',
            'medicineAmount|100-100000': 100,
            'herbalAmount|100-100000': 100,
            'checkAmount|100-100000': 100,
            'testAmount|100-100000': 100,
            'dispositionAmount|100-100000': 100,
            'registrationAmount|100-100000': 100,
            'amount|1000-1000000': 100,
            'registrationNum|1000-1000000':1000,
            'excuteCheckAmount|1000-1000000':1000,
            'excuteTestAmount|1000-1000000':1000,
            'excuteDispositionAmount|1000-1000000':1000,
          }))
        }
        return list;
      }
    }
  }
},{
  url: '/dailySettlement/listDailySettleListRecord',  //根据时间id查询日结历史
  type: 'get',
  response: config => {
    return {
      code: 20000,
      data:function(){
        let list = [];
        for(let i=0;i<=20;i++){
          list.push(Mock.mock({
            operatorName: '@cname',
            createDatetme:"2018-12-11 11:12:11",
            'verifyStatus|0-1':1,
            'settleRecordId':'@increment'
          }))
        }
        return list;
      }
  }
}
},{
  url: '/dailySettlement/querySettleDetailById',  //根据日结记录id查询日结详细信息
  type: 'get',
  response: config => {
    return {
      code: 20000,
      data: function(){
        return {
          startDatetime:"2018-11-11 11:22:10",
          endDatetime:"2018-11-12 11:22:10",
          cashierId:"112332",
          cashierId:"112332",
          createDatetime:"2018-12-11 11:10:10"
        }
      }
    }
  }
},{
  url: '/invoice/queryInvoiceInfoBySettleId',  //根据日结记录id查询发票
  type: 'get',
  response: config => {
    return Mock.mock({
      code: 20000,
      'data|1-20':[{
        billId: '@string("number", 6)',
        createTime:"2018-12-11 11:12:11",
        'amount|100-10000':100,
        'invoiceNo':'@string("number", 6)'
      }]
    })
  }
},
// ******************门诊财务mock end**********************//
// *****************门诊医师站mock start**********************//

{
  url: '/diagnosisPatient/refreshPatient',  
  type: 'post',
  response: config => {
    return Mock.mock({
      code: 20000,
      data:{
        'deptWaitList|1-10':[{//科室等待就诊人
          patientMedicalRecordNo: '@string("number", 6)',
          patientName:'@cname',
          'patientAge|1-100':10,
          registrationId:'@increment',
          'patientGender|0-1': 1
        }],
        'personalDuringList|1-10':[{ //就诊中
          patientMedicalRecordNo: '@string("number", 6)',
          patientName:'@cname',
          'patientAge|1-100':10,
          registrationId:'@increment',
          'patientGender|0-1': 1
        }],
        'personalWaitList|1-10':[{//等待就诊
          patientMedicalRecordNo: '@string("number", 6)',
          patientName:'@cname',
          'patientAge|1-100':10,
          registrationId:'@increment',
          'patientGender|0-1': 1
        }],
        'personalEndList|1-10':[{//已就诊
          patientMedicalRecordNo: '@string("number", 6)',
          patientName:'@cname',
          'patientAge|1-100':10,
          registrationId:'@increment',
          'patientGender|0-1': 1
        }]
      }
    })
  }
},{
  url: '/diagnosisPatient/startDiagnosis', //开始就诊 
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000
    });
  }
},
{
  url: '/diagnosisPatient/bindPatient',   //绑定
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000
    });
  }
},{
  url: '/frequentUsed/selectByType',   //常用诊断
  type: 'post',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        'drugList|10':[{//selectType=6
          'name':'@csentence(5)',
          'price|10-100':10,
          'icd':'@string("number", 6)',
          'code':'@string("number", 6)',
          'id': '@increment'
        }],
        'checkList|10':[{///selectType=1
          'name':'@csentence(5)',
          'price|10-100':10,
          'icd':'@string("number", 6)',
          'code':'@string("number", 6)',
          'id': '@increment'
        }], 
        'medicineDiseList|10':[{//selectType=2
          'name':'@csentence(5)',
          'price|10-100':10,
          'icd':'@string("number", 6)',
          'code':'@string("number", 6)',
          'id': '@increment'
        }],
        'dispositionList|10':[{//selectType=3
          'name':'@csentence(5)',
          'price|10-100':10,
          'icd':'@string("number", 6)',
          'code':'@string("number", 6)',
          'id': '@increment'
        }],
        'testList|10':[{//selectType=4
          'name':'@csentence(5)',
          'price|10-100':10,
          'icd':'@string("number", 6)',
          'code':'@string("number", 6)',
          'id': '@increment'
        }]
      }
    });
  }
  
},{
 
  url: '/DmsCaseModel/getAllStaffModel',   //获取病历模板
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        'staffList|10-100':[{
          priliminaryDiseStrList:['疾病1','疾病2','疾病3','疾病14'],
          name:"@csentence(5)",//病历名称
          dis:'"@csentence(5)',//主要诊断
          chiefComplaint:Mock.Random.cparagraph(),//主述：
          historyOfPresentIllness:Mock.Random.cparagraph(),//现病史：
          historyOfTreatment:Mock.Random.cparagraph(),//现病治疗情况
          pastHistory:Mock.Random.cparagraph(),//既往史：
          allergies:Mock.Random.cparagraph(),//过敏史：
          healthCheckup:Mock.Random.cparagraph()
        }]
      }
    })
  }

},{
  url: '/DmsNonDrug/list',   //添加常用诊断项时候的列表getNondrugList
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        list:[{
          name:"常用诊断1",
          price:10,
          id:1,
          code:"111"
        },{
          id:2,
          name:"常用诊断2",
          price:20,
          code:"222"
        },{
          id:3,
          name:"常用诊断3",
          price:30,
          code:"333"
        }],
        total:3
      }
    })
  }
},{
  url: '/NonDrugModel/listModel',   //非药品模板
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        'list|1-10':[{
          id:'@increment',
          'name':'@csentence(5)',//模板名称
          'price|10-100':10,
          'aim':Mock.Random.cparagraph(),
          'code':'@string("number", 6)',
          'scope|0-2':0,
          'type|0-2':0,
          'nonDrugIdList':[1,2,3]
        }],
        total: 10
      }
    })
  }
},{
  url: '/drugModel/listModel',   //药品模板
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        'list|1-10':[{
          id:'@increment',
          'name':'@csentence(5)',//模板名称
          'price|10-100':10,
          'aim':Mock.Random.cparagraph(),
          'code':'@string("number", 6)',
          'scope|0-2':0,
          'type|1-2':1,
          'dmsMedicineModelItemList|5':[{
            id:'@increment',
          
            "num|1-10":1
          }]
        }],
        total: 10
      }
    })
  }
},{
  url: '/drug/selectById',   //
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      "data|1-5":[{
        id:'@increment',
        'name':'@csentence(5)',//模板名称
        "price|10-100":10,
        'mnemonicCode':'@string("number", 6)',
      
      }]
    })
  }
},{
  url: '/DmsDise/list',   //获取诊断目录
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        'list|10':[{
          id:'@increment',
          'name':'@csentence(5)',
          'code':'@string("number", 6)',
          'icd':'@string("number", 6)',
        }],
        total:10
      }
    })
  }
},{
  url: '/caseHistory/selectEndCaseHistoryByReg/*',   //根据挂号id获取已结束就诊的历史病历
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        'dmsCaseHistoryList|10':[{ // record.vue=>病历详情
          id:'@increment',
          'createTime':'2019-09-22 11:22:11', //就诊时间
          'startDate':'2019-09-10 11:22:11',
          priliminaryDiseStrList:['疾病4','疾病5','疾病6','疾病7'],
          chiefComplaint:Mock.Random.cparagraph(),
        }]
      }
    })
  }
},{

  url: '/caseHistory/selectNotEndCaseHistoryByReg/*',   //根据挂号id获取未结束就诊的历史病历
  type: 'get',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        'dmsCaseHistoryList|10':[{ 
          id:'@increment',
          'createTime':'2019-09-22 11:22:11', //就诊时间
          'startDate':'2019-09-10 11:22:11',
          priliminaryDiseStrList:['疾病4','疾病5','疾病6','疾病7'],
          chiefComplaint:Mock.Random.cparagraph(),
        }]
      }
    })
  }

 
},{
  url: '/redisSave/getCasePage',   //暂存之后取出病历首页
  type: 'post',
  response:config=>{
    return Mock.mock({
      code: 20000,
      data:{
        "chiefComplaint":"主诉",
        "historyOfPresentIllness":"现病史",
        "historyOfTreatment":"现病治疗情况",
        "pastHistory":"既往史",
        "allergies":"过敏史",
        "healthCheckup":"体格检查",
        "startDate":"2019-10-06T16:00:00.000Z",
        "registrationId":282928,
        "record":[{"id":283461,"name":"业例比问基。",
        "code":"527174","icd":"288724"},{"id":283473,"name":"建除被值意。","code":"654170","icd":"252217"}]
      }
    })
  }
},{
  url: '/nonDrugItemRecord/listByRegAndType',   //获取检查列表
  type: 'post',
  response:config=>{
    return Mock.mock({
      code: 20000,

      "data|5":[{
        "noDrugId|1-3":'1',
        "code":'@increment',
        "name":"@cname",
        "excuteDeptName":"@csentence(6)",
        "format":"瓶",
        "price|10-100":10,
        "status|0-4":0
      }]
    })
  }
},{
  url: '/caseHistory/submitPriliminaryDise',   //提交初诊
  type: 'post',
  response:config=>{
    return Mock.mock({
      code: 20000
    })
  }

  
}

// *****************门诊医师站mock end**********************//

]


