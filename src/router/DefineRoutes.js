import React from "react";
import { FileOutlined, PieChartOutlined, UserOutlined, CarOutlined } from '@ant-design/icons';
//资源路径地址
import  Shouye  from '../Page/Shouye/index';
import CarInfo  from '../Page/CarInfo/index';
import Yuyue  from '../Page/Yuyue/index';
import FixMan  from '../Page/FixMan/index';
//路由声明
//使用memo缓存页面，防止重复加载
    const DefineRoutes= [{
        //首页路由
        path: '/home/shouye',
        label:'首页',
        element: <Shouye></Shouye>,
        icon: <PieChartOutlined />
    },
    {
        //车辆信息路由
        path: '/home/carinfo',
        label:"车辆信息",
        element: <CarInfo></CarInfo>,
        icon:  <CarOutlined />
    },
    {
        
        path: '/home/yuyue',
        label:"预约列表",
        element: <Yuyue></Yuyue>,
        icon:  <FileOutlined />
    },
    {   
        path: '/home/weixiu',
        label:"维修人员",
        element: <FixMan></FixMan>,
        icon:  <UserOutlined />
    }]
export default DefineRoutes;