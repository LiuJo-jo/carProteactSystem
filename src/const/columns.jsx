export const car_info = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      fillIn: false,
    },
    {
      title: '车牌号码',
      dataIndex: 'carNumber',
      key: 'carNumber',
      style: "input",
      fillIn: true,
      rules:
      {
        required: true,
      },
    },
    {
      title: '品牌',
      dataIndex: 'brand',
      key: 'brand',
      style: "input",
      fillIn: true,
      rules:
      {
        required: true,
      },
    },
    {
      title: '型号',
      dataIndex: 'type',
      key: 'type',
      style: "input",
      fillIn: true,
      rules:
      {
        required: true,
      },
    },
    {
        title: '车主姓名',
        dataIndex: 'name',
        key: 'name',
        style: "input",
        fillIn: true,
        rules:
        {
          required: true,
        },
      },
    {
      title: '联系方式',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
      style: "input",
      fillIn: true,
      rules:
      {
        required: true,
      },
    },{
        title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },];

export const fix_info = [
  {
    title: '员工Id',
    dataIndex: 'id',
    key: 'id',
    fillIn:false,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    fillIn:true,
    style:"input",
  },
  {
      title: '登录账号',
      dataIndex: 'username',
      key: 'username',
      fillIn:true,
      style:"input",
      rules:
      {
        required: true,
      },
  },
  {
    title: '初始密码',
    dataIndex: 'password',
    key: 'password',
    fillIn:true,
    style:"input",
    rules:
    {
      required: true,
    },
},{
      title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    fillIn:false,
  },{
      title: '创建人',
    dataIndex: 'createManeger',
    key: 'createManeger',
    fillIn:false,
  },
  {
    title: '备注',
    dataIndex: 'other',
    key: 'other',
    fillIn:true,
    style: 'textarea',
}];

const branchs = [
  {
    value: '奥拓',
    label: '奥拓',
  },{
    value: '奥迪',
    label: '奥迪',
  },
]

//从后端拿，现在先默认值
const fixMan =  [{
value: '1',
label: '张三',
},{
value: '2',
label: '李四',
},]

const state = 
  [{
    value: '1',
    label: '未保养',
  },{
    value: '2',
    label: '已保养',
  },{
    value: '3',
    label: '已取消',
  }]
export const yuyue_info = [ {
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
  fillIn: false,
},
{
  title: '车牌号码',
  dataIndex: 'numberplate',
  key: 'numberplate',
  fillIn: true,
  style:"select",
  rules:
  {
    required: true,
  },
  options:branchs,
},
{
  //从后台取
    title: '品牌',
    dataIndex: 'branch',
    key: 'branch',
    fillIn: true,
    style:'input',
  },
{
    title: '预约人姓名',
    dataIndex: 'name',
    key: 'name',
    fillIn: true,
    style:"input",
  },
{
  title: '联系方式',
  dataIndex: 'phone',
  key: 'phone',
  fillIn: false,
  style:'input',
},
{
    title: '保养项目',
  dataIndex: 'project',
  key: 'project',
  fillIn: true,
  style: "textarea",
  rules:
  {
    required: true,
  },
},
{
    title: '预计保养时间',
  dataIndex: 'maintainTime',
  key: 'maintainTime',
  fillIn: true,
  style:"date",
  rules:
  {
    required: true,
  },
},
{
    title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
  fillIn: false,
}
,{
    title: '创建人',
  dataIndex: 'createManeger',
  key: 'createManeger',
  fillIn: false,
},{
    title: '分配维修工',
  dataIndex: 'fixMan',
  key: 'fixMan',
  fillIn: true,
  style:"select",
  rules:
  {
    required: true,
  },
  options:fixMan,
},{
    title: '保养状态',
  dataIndex: 'maintainState',
  key: 'maintainState',
  fillIn: true,
  style:'select',
  rules:
  {
    required: true,
  },
  options:state,
}];