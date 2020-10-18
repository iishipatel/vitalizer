import React, { useState } from "react";
import { useHistory } from "react-router";

import { Form, Input, Button, Radio } from "antd";
import axios from "axios";
import "./Form.css";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 96 },
};
const tailLayout = {
  // wrapperCol: { offset: 8, span: 16 },
};

function FormData(props) {

  const [gender, setGender] = useState(1);
  const [loader,setloader] = useState(false)

  let history = useHistory();

  const onFinish = (values) => {
    const bmi = (values.weight * 10000) / values.height ** 2;
    const map = (parseInt(values.map1)+parseInt(values.map2))/2

    let genderval;
    console.log(values)
    if(values.gender===0 || values.gender==="0"){
      genderval="Female"
    }else{
      genderval="Male"
    }

    console.log(genderval)

    axios
      .post("https://healthinsafe.herokuapp.com/predict", {
        age: values.age,
        gender_num: gender,
        bmi: bmi,
        map: map,
        hr: values.hr,
        temp: values.temp,
      })
      .then((res) => {
        setloader(false);
        history.push({
          pathname: "/results",
          userData: { detail: res.data },
          bmi: bmi,
          usersName: values.Name,
          values: values,
          gender: genderval,
          bphigh:values.map2,
          bplow:values.map1
        });
      })
      .catch((err) => setloader(false));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setloader(false)
  };

  const genderhandle = (e) => {
    setGender(e.target.value);
    console.log(e.target.value)
  };
let btn_text;
if(loader){
  btn_text="GENERATING YOUR REPORT..."
}else{
  btn_text="GENERATE REPORT"
}
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="formdatalist"
      >
        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Full Name</div>
        <Form.Item name="Name" rules={[{ required: true, message: 'Please enter your Name!' }]}>
          <Input placeholder="Sambhav Jain" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Age</div>
        <Form.Item name="age" rules={[{ required: true, message: 'Please enter your age!' }]}>
          <Input placeholder="20" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Gender</div>

        <Form.Item name="gender">
        <Radio.Group
          onChange={genderhandle}
          defaultValue={gender}
          className="radio_btn_antd"
          name="gender"
        >
          <Radio value={1}>Male</Radio>
          <Radio value={0}>Female</Radio>
        </Radio.Group>
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Height (cm)</div>
        <Form.Item name="height" rules={[{ required: true, message: 'Please input your height!' }]}>
          <Input placeholder="170" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Weight (kg)</div>

        <Form.Item name="weight" rules={[{ required: true, message: 'Please input your weight!' }]}>
          <Input placeholder="70" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Heart Rate</div>
        <Form.Item name="hr" rules={[{ required: true, message: 'Please input your heart rate' }]}>
          <Input placeholder="112" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Temprature (°F)</div>
        <Form.Item name="temp" rules={[{ required: true, message: 'Please input your body temprature!' }]}>
          <Input placeholder="102" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Blood Pressure (low)</div>
        <Form.Item name="map1" rules={[{ required: true, message: 'Please input your blood pressure(high)!' }]}>
          <Input placeholder="80" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Blood Pressure (high)</div>
        <Form.Item name="map2" rules={[{ required: true, message: 'Please input your blood pressure(low)!' }]}>
          <Input placeholder="120" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
          loading={loader} 
          onClick={()=>setloader(true)}
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#0ED470",
              color: "#11151B",
              width: "100%",
              fontWeight: 600,
              fontSize: 14,
              border: "none",
              marginTop:"28px"
            }}
          
          >
            {btn_text}

          </Button>
        </Form.Item>
      </Form>

    
    </>
  );
}

export default FormData;