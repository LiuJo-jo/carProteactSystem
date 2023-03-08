import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export  const InputStyle = (props) =>{

   return  <Search style={{ width: 304 }} placeholder ={ props.lables} enterButton />
}