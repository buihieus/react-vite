import { Button, Form, Input } from "antd";

const RegisterPage = () => {
    const [form] = Form.useForm();// nghien cuu cai nay 

    const onFinish =(values)=> {
        console.log("check values",values)
    }
    const onFinishFailed = () => {

    }

    return (
        <Form
            form={form}
            layout="vertical"

        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
            <div style={{
                margin: "50px",
                // display:"flex",
                // flexDirection:"column" 
            }}>

                <div>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item
                        label="Phone Numbe"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div>
                    <Button onClick={()=> form.submit()} type="primary">Register</Button>
                </div>
            </div>
        </Form>
    )
}

export default RegisterPage;