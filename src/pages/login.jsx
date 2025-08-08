import { Form, Input, Button, Card, Divider, notification, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useState } from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    // const onFinish = (values) => {
    //     console.log("Login Data:", values);
    //     // Sau khi đăng nhập thành công thì chuyển sang homepage
    //     navigate("/");
    // };
    const onFinish = async (values) => {
        console.log("Login Data:", values);
        // Sau khi đăng nhập thành công thì chuyển sang homepage
        setLoading(true)
        const res = await loginAPI(values.email, values.password);
        if (res.data) {
            message.success("dang nhap thanh cong");
            navigate("/");
        } else {
            notification.error({
                message: "register users error",
                description: JSON.stringify(res.message)
            })
        }
            setLoading(false)
    };

    return (
        <Card style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f0f2f5"
        }}>
            <Card title="🔐 Đăng nhập" style={{ width: 400, borderRadius: 10 }}>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập email!' },
                            { type: 'email', message: 'Email không hợp lệ!' }
                        ]}
                    >
                        <Input placeholder="Nhập email" />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            { required: true, message: 'Vui lòng nhập mật khẩu!' },
                            // {
                            //     pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
                            //     message: 'Mật khẩu ≥6 ký tự, có chữ hoa, chữ thường, số & ký tự đặc biệt.'
                            // }
                        ]}
                    >
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </Form.Item>

                    <Form.Item>
                        <Button loading={loading} type="primary" htmlType="submit" block>
                            Đăng nhập
                        </Button>
                    </Form.Item>

                    <div style={{ textAlign: "center", marginTop: 10 }}>
                        <Button type="link"
                        // onClick={() => navigate("/")}
                        >
                            ⬅️ Go to Homepage
                        </Button>
                        <Divider />
                        <span>Chưa có tài khoản? </span>
                        <Link to="/register">Đăng ký tại đây</Link>
                    </div>
                </Form>
            </Card>
        </Card>
    );
};

export default LoginPage;
