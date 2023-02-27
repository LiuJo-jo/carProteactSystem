export const car_info = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      fillIn: false,
    },
    {
      title: '车牌号码',
      dataIndex: 'numberplate',
      key: 'numberplate',
      style: "input",
      fillIn: true,
      rules:
      {
        required: true,
      },
    },
    {
      title: '品牌',
      dataIndex: 'branchs',
      key: 'branchs',
      style: "select",
      fillIn: true,
      rules:
      {
        required: true,
      },
    },
    {
      title: '型号',
      dataIndex: 'types',
      key: 'types',
      style: "select",
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
      dataIndex: 'phone',
      key: 'phone',
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
    },{
        title: '创建人',
        dataIndex: 'createManeger',
        key: 'createManeger',
    }]