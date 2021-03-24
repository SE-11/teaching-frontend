import Modal from 'antd/lib/modal/Modal'
import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [loginModalVisible, setLoginModalVisible] = useState(true);
    return (
        <div>
            <Modal
                style={{ display: "flex", justifyContent: "center" }}
                destroyOnClose={true} 
                title="Add a teacher" 
                footer={[]}
                onCancel={() => setLoginModalVisible(false)}
                visible={ loginModalVisible }
                >
            </Modal>
        </div>
    )
}
