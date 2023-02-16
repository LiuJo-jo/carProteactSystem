import React from 'react';
import { Input } from 'antd';

const { Search } = Input;
// const onSearch = (value) => console.log(value);

export  const InputStyle = (props) =>{

   return  <Search style={{ width: 304 }} placeholder ={ props.lables} onSearch={props.setValue} enterButton />
}