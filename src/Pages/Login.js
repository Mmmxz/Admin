import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Card, Input, Icon, Button, Spin, message } from 'antd'
import '../static/css/login.css'
import axios from 'axios'

function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const checkLogin = () => {
        if (userName && password) {
            setisLoading(true)
            setTimeout(() => {
                message.success('登录成功')
                props.history.push('/index')
                setisLoading(false)
            }, 1000)
        } else {
            message.error('用户名和密码不能为空')
        }
    }
    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="Mxz Blog System" bordered={true} style={{ width: 400 }}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                        onChange={(e) => {setUserName(e.target.value)}}
                    />
                    <br /><br />
                    <Input.Password 
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<Icon type="key" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <br /><br />
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={checkLogin}
                    >
                        Login in
                    </Button>
                </Card>
            </Spin>

        </div>
    )
}

export default Login