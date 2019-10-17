import Mock from 'mockjs'
// *****************门诊医师站mock start**********************//
export default [

  {
    url: '/diagnosisPatient/refreshPatient',
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'deptWaitList|1-10': [{//科室等待就诊人
            patientMedicalRecordNo: '@string("number", 6)',
            patientName: '@cname',
            'patientAge|1-100': 10,
            registrationId: '@increment',
            'patientGender|0-1': 1
          }],
          'personalDuringList|1-10': [{ //就诊中
            patientMedicalRecordNo: '@string("number", 6)',
            patientName: '@cname',
            'patientAge|1-100': 10,
            registrationId: '@increment',
            'patientGender|0-1': 1
          }],
          'personalWaitList|1-10': [{//等待就诊
            patientMedicalRecordNo: '@string("number", 6)',
            patientName: '@cname',
            'patientAge|1-100': 10,
            registrationId: '@increment',
            'patientGender|0-1': 1
          }],
          'personalEndList|1-10': [{//已就诊
            patientMedicalRecordNo: '@string("number", 6)',
            patientName: '@cname',
            'patientAge|1-100': 10,
            registrationId: '@increment',
            'patientGender|0-1': 1
          }]
        }
      })
    }
  }, {
    url: '/diagnosisPatient/startDiagnosis', //开始就诊 
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0
      });
    }
  },
  {
    url: '/diagnosisPatient/bindPatient',   //绑定
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0
      });
    }
  }, {
    url: '/frequentUsed/selectByType',   //常用项目汇总
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'drugList|10': [{//selectType=6  常用药品
            'name': '@csentence(5)',
            'price|10-100': 10,
            'icd': '@string("number", 6)',
            'code': '@string("number", 6)',
            'format': '瓶',
            'id': '@increment',
            'typeId|101-103':101
          }],
          'checkList|10': [{///selectType=1
            'name': '@csentence(5)',
            'price|10-100': 10,
            'format': '瓶',
            'icd': '@string("number", 6)',
            'code': '@string("number", 6)',
            'id': '@increment',
            "deptName": "@csentence(6)"
          }],
          'medicineDiseList|10': [{//selectType=2
            'name': '@csentence(5)',
            'price|10-100': 10,
            'icd': '@string("number", 6)',
            'format': '瓶',
            'code': '@string("number", 6)',
            'id': '@increment'
          }],
          'dispositionList|10': [{//selectType=3
            'name': '@csentence(5)',
            'price|10-100': 10,
            'icd': '@string("number", 6)',
            'format': '瓶',
            'code': '@string("number", 6)',
            'id': '@increment'
          }],
          'testList|10': [{//selectType=4
            'name': '@csentence(5)',
            'price|10-100': 10,
            'format': '瓶',
            'icd': '@string("number", 6)',
            'code': '@string("number", 6)',
            'id': '@increment'
          }]
        }
      });
    }

  }, {

    url: '/DmsCaseModel/getAllStaffModel',   //获取病历模板
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'staffList|10-100': [{
            priliminaryDiseStrList: ['疾病1', '疾病2', '疾病3', '疾病14'],
            priliminaryDiseIdList:[1,2,3,4], //诊断id
            name: "@csentence(5)",//病历名称
            dis: '"@csentence(5)',//主要诊断
            chiefComplaint: Mock.Random.cparagraph(),//主述：
            historyOfPresentIllness: Mock.Random.cparagraph(),//现病史：
            historyOfTreatment: Mock.Random.cparagraph(),//现病治疗情况
            pastHistory: Mock.Random.cparagraph(),//既往史：
            allergies: Mock.Random.cparagraph(),//过敏史：
            healthCheckup: Mock.Random.cparagraph()
          }]
        }
      })
    }

  }, {
    url: '/DmsNonDrug/list',   //getNondrugList  新增检查项目列表  用处比较多
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          list: [{
            name: "常用诊断1",
            price: 10,
            id: 1,
            code: "111",
            format: "瓶",
            "deptName": "@csentence(6)"
          }, {
            id: 2,
            name: "常用诊断2",
            price: 20,
            format: "瓶",
            code: "222",
            "deptName": "@csentence(6)"
          }, {
            id: 3,
            name: "常用诊断3",
            format: "瓶",
            price: 30,
            code: "333",
            "deptName": "@csentence(6)"
          }],
          total: 3
        }
      })
    }
  }, {
    url: '/NonDrugModel/listModel',   //非药品模板
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'list|10': [{
            'id|1-10': 1,
            'name': '@csentence(5)',//模板名称
            'price|10-100': 10,
            'aim': Mock.Random.cparagraph(),
            'code': '@string("number", 6)',
            'scope|0-2': 0,
            'type|0-2': 0,
            'nonDrugIdList': [1, 2, 3,4,5,6,7,8,9,10]
          }],
          total: 10
        }
      })
    }
  }, {
    url: '/drugModel/listModel',   //药品模板listModel
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'list|1-10': [{
            id: '@increment',
            'name': '@csentence(5)',//模板名称
            'price|10-100': 10,
            'aim': Mock.Random.cparagraph(),
            'code': '@string("number", 6)',
            'scope|0-2': 0,
            'type|1-2': 1,
            'amount|10-100': 10,
            'dmsMedicineModelItemList|5': [{
              id: '@increment',
              frequency: "",
              medicalAdvice: "建议",
              medicineUsage: "药品使用",
              usageMeans: "使用方式",
              usageNum: "用量",
              usageNumUnit: "usageNumUnit111",
              "num|1-10": 1
            }]
          }],
          total: 10
        }
      })
    }
  }, {
    url: '/drug/selectById',   //
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        "data": {
          id: '@increment',
          'name': '@csentence(5)',//模板名称
          "price|10-100": 10,
          format: "瓶",
          "num|1-10": 1,
          'mnemonicCode': '@string("number", 6)',

        }
      })
    }
  }, {
    url: '/DmsDise/list',   //获取诊断目录
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'list|10': [{
            id: '@increment',
            'name': '@csentence(5)',
            'code': '@string("number", 6)',
            'icd': '@string("number", 6)',
          }],
          total: 10
        }
      })
    }
  }, {
    url: '/caseHistory/selectEndCaseHistoryByReg/*',   //根据挂号id获取已结束就诊的历史病历
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'dmsCaseHistoryList|10': [{ // record.vue=>病历详情
            id: '@increment',
            'createTime': '2019-09-22 11:22:11', //就诊时间
            'startDate': '2019-09-10 11:22:11',
            priliminaryDiseStrList: ['疾病4', '疾病5', '疾病6', '疾病7'],
            chiefComplaint: Mock.Random.cparagraph()

          }]
        }
      })
    }
  }, {

    url: '/caseHistory/selectNotEndCaseHistoryByReg/*',   //根据挂号id获取未结束就诊的历史病历getnonend
    type: 'get',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'dmsCaseHistoryList|10': [{
            id: '@increment',
            'createTime': '2019-09-22 11:22:11', //就诊时间
            'startDate': '2019-09-10 11:22:11',
            priliminaryDiseStrList: ['疾病4', '疾病5', '疾病6', '疾病7'],
            chiefComplaint: Mock.Random.cparagraph(),
            status: 2
          }]
        }
      })
    }


  }, {
    url: '/redisSave/getCasePage',   //暂存之后取出病历首页
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          "chiefComplaint": "主诉",
          "historyOfPresentIllness": "现病史",
          "historyOfTreatment": "现病治疗情况",
          "pastHistory": "既往史",
          "allergies": "过敏史",
          "healthCheckup": "体格检查",
          "startDate": "2019-10-06T16:00:00.000Z",
          "registrationId": 282928,
          "record": [{
            "id": 283461, "name": "业例比问基。",
            "code": "527174", "icd": "288724"
          }, { "id": 283473, "name": "建除被值意。", "code": "654170", "icd": "252217" }]
        }
      })
    }
  }, {
    url: '/nonDrugItemRecord/listByRegAndType',   //获取检查列表
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,

        "data|5": [{
          "noDrugId|1-3": '1',
          'id': '@increment',
          "code": '@string("number", 6)',
          "name": "@cname",
          "excuteDeptName": "@csentence(6)",
          "format": "瓶",
          "price|10-100": 10,
          "status|0-4": 0,
          resultImgUrlList: "1,2,3"
        }]
      })
    }
  }, {
    url: '/caseHistory/submitPriliminaryDise',   //提交初诊
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }
  }, {
    url: '/nonDrugItemRecord/apply',   //开立项目 -- 处置申请开立项目，检查，检验开立项目申请
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }
  },
  {

    url: '/redisSave/saveNonDrug',   //勾选暂存检查项目
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }
  }, {
    url: '/redisSave/getNonDrug',   //取出暂存项目
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        data: {
          'dmsNonDrugItemRecordParamList|5': [{
            "noDrugId|1-3": '1',
            'id': '@increment',
            "code": '@string("number", 6)',
            "name": "@cname",
            // "excuteDeptName":"@csentence(6)",
            "deptName": "@csentence(6)",
            "format": "瓶",
            "price|10-100": 10,
            "status|0-4": 0,
            resultImgUrlList: "1,2,3"
          }]
        }
      })
    }
  }, {

    url: '/caseHistory/endDiagnosis',   //Z诊毕
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }

  }, {
    url: '/caseHistory/submitDefiniteDise',   //确诊
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }
  }, {
    url: '/DmsDise/parseList',
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        'data': [{
          icd: '1111',
          name: "测试1",
          code: '111111',
          id: 1
        }, {
          icd: '2222',
          name: "测试12",
          code: '222222',
          id: 2
        }]
      })
    }
  },
  {
    url: '/DmsMedicinePrescriptionRecord/listByReg', //listByReg 成药处方列表
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        'data|10': [{
          name: "@csentence(6)",
          amount: 100,
          id:'@increment',
          druglist: [{
            id: 1,
            name: "药品名称1",
            price: 20,
            format: "100mg",
            dosage: {
              name: "ww"
            },
            medicalAdvice: "一天一粒"
          }],
          'status|-1-4': -1
        }]
      })
    }
  }, {
    url: '/DmsMedicinePrescriptionRecord/invalid', //invalid 成药作废项目
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }
  },{
    url: '/redisSave/saveDrugPrescription', //暂存成/草药处方
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }
  },{
    url: '/redisSave/getDrugPrescription', //取出成/草药处方
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        'data|10': [{
          name: "@csentence(6)",
          amount: 100,
          druglist: [{
            id: 1,
            name: "药品名称1",
            price: 20,
            format: "100mg",
            dosage: {
              name: "ww"
            },
            medicalAdvice: "一天一粒"
          }],
          'status|-1-4': -1
        }]
      })
    }
   
  },{
    url:'/DmsHerbalPrescriptionRecord/listByReg',//草药处方列表
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
        'data|10': [{
          name: "@csentence(6)",
          amount: 100,
          id:'@increment',
          druglist: [{
            id: 1,
            name: "药品名称1",
            price: 20,
            format: "100mg",
            dosage: {
              name: "ww"
            },
            medicalAdvice: "一天一粒"
          }],
          'status|-1-4': -1
        }]
      })
    }
  },{
    url:'/DmsHerbalPrescriptionRecord/apply',//草药处方开立
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
      })
    }
  },{
    url:'/DmsHerbalPrescriptionRecord/invalid',//作废草药处方
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0,
      })
    }
    
  },{
    url: '/nonDrugItemRecord/invalid', //invalid 作废处置申请
    type: 'post',
    response: config => {
      return Mock.mock({
        code: 0
      })
    }
    
  },{ // 患者账单
    url:'/feeQuery/listByRegistration',
    type:'post',
    response: config => {
      return Mock.mock({
        code: 0,
        'data|10':[{
          itemName:'@csentence(6)',
          format:'规格',
          'currentNum|10-100':10,
          'price|10-100':10,
          'totalprice|100-1000':100,
          'type|0-5':0,
          'status|0-6':0
        }]
      })
    }
  },
  {
    url:'/DmsCaseModel/listModelCatTree', //病历模板数据
    type:'post',
    response: config => {
      return Mock.mock({
        code: 0,
        data:[{
          name:"感冒诊断模板目录",
          id:1,
          type:1,
          children:[{
            name:"感冒子目录1-1",
            id:11,
            type:1,
            children:[{
              name:"感冒子目录1-1-1",
              id:111,
              type:1,
              children:[{
                name:"感冒模板",
                id:1111,
                type:2,
                modelId:1
              }]
            }]
          }]
        }]
      })
    }
   
  },{
    url:'/DmsCaseModel/getModelDetail/*', //获取病历模板详情
    type:'get',
    response: config => {
      return Mock.mock({
        code:0,
        data:{
          priliminaryDiseIdList:[1,2,3,4], //诊断id
          priliminaryDiseStrList: ['疾病1', '疾病2', '疾病3', '疾病14'],
          name: "@csentence(5)",//病历名称
          dis: '"@csentence(5)',//主要诊断
          chiefComplaint: Mock.Random.cparagraph(),//主述：
          historyOfPresentIllness: Mock.Random.cparagraph(),//现病史：
          historyOfTreatment: Mock.Random.cparagraph(),//现病治疗情况
          pastHistory: Mock.Random.cparagraph(),//既往史：
          allergies: Mock.Random.cparagraph(),//过敏史：
          healthCheckup: Mock.Random.cparagraph()
        }
      })
    }
  },{
    url:'/DmsCaseModel/updateModel', //修改病历模板详情保存
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
  },{
    url:'/DmsCaseModel/create', //新增模板/目录
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
  },{
    url:'/DmsCaseModel/deleteModelOrCat', //删除病历模板/目录
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
   
  },

  {
    url:'/DmsNonDrug/listAll', //所有项目列表--非药品
    type:'post',
    response: config => {
      return Mock.mock({
        code:0,
        'data|10':[{
          code:'@string("number", 6)',
          name:"@csentence(4)",
          'id':'@increment',
          'recordType|1-3':1,
          'format':'规格',
          'price|200-2000':100,
          'expClassId':'所属费用科目'
        }]
      })
    }
    
  },{
    url:'/NonDrugModel/deleteModel', //删除非药品模板
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
    
  },{
    url:'/NonDrugModel/createModel', //创建非药品模板
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
  },{
    url:'/NonDrugModel/updateModel', //修改非药品模板
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
   
  },
  {
    url:'/drugModel/updateModel', //修改成、草药药品模板
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
   
  },{
    url:'/drugModel/createModel', //创建成、草药药品模板
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
    
  },{
    url:'/drugModel/deleteModel', //删除成、草药药品模板
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }

    
  },{
    url:'/frequentUsed/add', //添加常用项
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }
    
  },{
    url:'/frequentUsed/delete', //删除常用项
    type:'post',
    response: config => {
      return Mock.mock({
        code:0
      })
    }

    
  }
]

    // *****************门诊医师站mock end**********************//]