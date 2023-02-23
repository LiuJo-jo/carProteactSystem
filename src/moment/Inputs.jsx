import React from "react";
import dayjs from 'dayjs';
import { DatePicker, Space, Select} from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
const disabledDate = (current) => {
    //不允许选择现在之前的日期
    return current && current < dayjs().endOf('day');
};

const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
});

export const DatePickerTime = () =>{
    return (
        <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
        }}
        // onOk={}
        />
    )
}

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export const Selects = (props) =>{
    //下拉值待处理
    return (
    <Space wrap>
    <Select
      defaultValue={props.items[0].value}
      style={{
        width: 120,
      }}
      options={props.items}
    />
  </Space>
    )
}