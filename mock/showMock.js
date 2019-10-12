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
        list: [],
        total:200
      }
    }
  }  
 
}
// ******************门诊医技工作站mock end**********************//





]






