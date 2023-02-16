import React from "react";
import { FileOutlined, PieChartOutlined, UserOutlined, CarOutlined } from '@ant-design/icons';
//资源路径地址
import  Shouye  from '../Page/Shouye/index';
import CarInfo  from '../Page/CarInfo/index';

//路由声明
//使用memo缓存页面，防止重复加载
const DefineRoutes = 
        [
            {
                //首页路由
                path: '/shouye',
                label:'首页',
                element: <Shouye></Shouye>,
                icon: <PieChartOutlined />
            },
            {
                //车辆信息路由
                path: '/carinfo',
                label:"车辆信息",
                element: <CarInfo></CarInfo>,
                icon:  <CarOutlined />
            },
            {
                
                path: '/yuyue',
                label:"预约列表",
                element: <CarInfo></CarInfo>,
                icon:  <FileOutlined />
            },
            {   
                path: '/weixiu',
                label:"维修人员",
                element: <CarInfo></CarInfo>,
                icon:  <UserOutlined />
            }
        ]



export default DefineRoutes