import moment from 'moment';

//登录

const url = "http://localhost:8089/deom";
export const login = (values) =>{
    return {id:2,name:"张三",authority:1,username:'187'}
}

//退出
export const logout = () =>{
    return [];
}

// 车辆信息查询接口。列表数据初始化、输入车牌号模糊查询。每页10条。
// 传 page、numberplate(非必传)
export const carInfo = (bodys)=>{
    return  fetch(url+'/car/select',{method:'post',headers: new Headers({
        'Content-Type': 'application/json'
      }),body:JSON.stringify(bodys)}).then(res=>{return res.json();})
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
export const userInfo = (bodys,methods) =>{
    switch(methods){
        case "create":
            bodys.createTime = moment().format('YYYY-MM-DD HH:mm:ss');
            return fetch(url+'/user-entity/save',{method:'post',headers: new Headers({
                'Content-Type': 'application/json'
              }),body:JSON.stringify(bodys)}).then(res=>{return res.json();})
        case "edit":
            bodys.updateTime = moment().format('YYYY-MM-DD HH:mm:ss');
            return fetch(url+'/user-entity/update',{method:'post',headers: new Headers({
                'Content-Type': 'application/json'
              }),body:JSON.stringify(bodys)}).then(res=>{return res.json();})
        case "delete":
            return fetch(url+'/user-entity/delete',{method:'post',headers: new Headers({
                'Content-Type': 'application/json'
              }),body:JSON.stringify(bodys)}).then(res=>{return res.json();})
    }
}

//新增、编辑、删除汽车信息接口
//编辑、删除传入信息id；
//三个操作用字段deal区分：create 新增、edit编辑、delete删除
export const CarInfoDeal = (bodys,mathods)=>{
    switch(mathods){
        case "create":
            bodys.createTime = moment().format('YYYY-MM-DD HH:mm:ss');
            return fetch(url+'/car/save',{method:'post',headers: new Headers({
                'Content-Type': 'application/json'
              }),body:JSON.stringify(bodys)}).then(res=>{return res.json();})
        case "edit":
            bodys.updateTime = moment().format('YYYY-MM-DD HH:mm:ss');
            return fetch(url+'/car/update',{method:'post',headers: new Headers({
                'Content-Type': 'application/json'
              }),body:JSON.stringify(bodys)}).then(res=>{return res.json();})
        case "delete":
            return fetch(url+'/car/delete',{method:'post',headers: new Headers({
                'Content-Type': 'application/json'
              }),body:JSON.stringify(bodys)}).then(res=>{return res.json();})
    }
}

export const YuyueInfoDeal = ({body:[]})=>{
    return []
}

export const FixInfoDeal = ({body:[]})=>{
    return []
}
