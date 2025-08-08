import { Button, Col, Form, Input, notification, Row } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();// nghien cuu cai nay 
    const navigate = useNavigate();
    const onFinish = async (values) => {
        // console.log("check values", values)

        // call api tu service api (registerUserAPI)
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone);
        if (res.data) {
            notification.success({
                message: "register users",
                description: "dang ky thanh cong"
            });
            // navigate("/login")
            navigate("/")
        } else {
            notification.error({
                message: "register users error",
                description: JSON.stringify(res.message)
            })
        }
    }
    // const onFinishFailed = () => {

    // }

    return (
        <Form
            form={form}
            layout="vertical"

            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            style={{ margin: "10px" }}
        >
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        //rule nay dung de validate ben phia fontend
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row >
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row >
            <Row justify={"center"}>

                <Col xs={24} md={6}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' },
                            // use regex 
                            {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
                                message: 'Mật khẩu phải ≥6 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt.'
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row >

            <Row justify={"center"}>

                <Col xs={24} md={6}>
                    <Form.Item
                        label="Phone Numbe"
                        name="phone"
                        rules={[{
                            // nay van loi chi ghi chu la sai chu + so lai dung =))
                            required: true,
                            pattern: new RegExp(/\d+/g),
                            message: "Wrong format!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row >
            <Row justify={"center"}>
                <div>
                    <Button onClick={() => form.submit()} type="primary">Register</Button>
                </div>
            </Row>
        </Form >
    )
}

export default RegisterPage;