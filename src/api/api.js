//登录
export const login = (values) =>{
    return {id:2,name:"张三",authority:1,username:'187'}
}

//退出
export const logout = () =>{
    return [];
}

// 车辆信息查询接口。列表数据初始化、输入车牌号模糊查询。每页10条。
// 传 page、numberplate(非必传)
export const carInfo = ()=>{
    return []
}
// 预约信息查询接口。列表数据初始化、输入车牌号模糊查询。每页10条。
// 传 page、numberplate(非必传)
export const yuyueInfo = ()=>{
    return []
}
// 维修人员信息查询接口。列表数据初始化、输入姓名模糊查询。每页10条。
// 传 page、name(非必传)
export const fixInfo = ()=>{
    return []
}

//汽车详细信息查询（需要返回一条数据的全部字段）；record指的是所需查询的信息id。其他接口同理
export const carInfoDetail = (record) =>{
    return {key:'3',id:'1',numberplate:"苏A128344",branchs:"奥拓",types:"e-tron",name:"赵雅尔",phone:'17736463636'}
}
//预约数据详细信息查询
export const yuyueInfoDetail = (record) =>{
    return {key:'3',id:'1',numberplate:"苏A128344",branchs:"奥拓",types:"e-tron",name:"赵雅尔",phone:'17736463636'}
}
//维修人员详细信息查询
export const fixInfoDetail = (record) =>{
    return {key:'3',id:'1',numberplate:"苏A128344",branchs:"奥拓",types:"e-tron",name:"赵雅尔",phone:'17736463636'}
}
//用户详细信息查询
export const userInfo = (record) =>{
    return {key:'1',id:'1',name:'张三',username:'1234565',authority:'1'}
}

//新增、编辑、删除汽车信息接口
//编辑、删除传入信息id；
//三个操作用字段deal区分：create 新增、edit编辑、delete删除
export const CarInfoDeal = ({body:[]})=>{
    return []
}

export const YuyueInfoDeal = ({body:[]})=>{
    return []
}

export const FixInfoDeal = ({body:[]})=>{
    return []
}

