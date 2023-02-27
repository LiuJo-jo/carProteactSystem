export const login = (values) =>{
    return {id:2,name:"张三",authority:1,username:'187'}
}


export const carInfo = ()=>{
    return [{key:'3',id:'1',numberplate:"苏A128344",branchs:"奥拓",types:"e-tron",name:"赵雅尔",phone:'17736463636',createTime:'2023-02-14 04:23:12',createManeger:'赵二'},
    {key:'2',id:'2',numberplate:"苏A121244",branchs:"大众",types:"途观L",name:"宋教仁",phone:'17736236346',createTime:'2023-02-14 04:23:12',createManeger:'赵二'}]
}

export const carInfoDetail = (record) =>{
    return {key:'3',id:'1',numberplate:"苏A128344",branchs:"奥拓",types:"e-tron",name:"赵雅尔",phone:'17736463636'}
}