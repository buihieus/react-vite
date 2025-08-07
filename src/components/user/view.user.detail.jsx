import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen,
        loadUsers
    } = props;
    const handleOnChangeFile = (event) => {

        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }

    }
    console.log("check file", preview)
    const handleUpdateUserAvatar = async () => {
        // step 1 :upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        // console.log("check upload",resUpload)
        if (resUpload.data) {
            // success
            const newAvatar = resUpload.data.fileUploaded;
            // step2 : update user 
            const resUpdateAvatar = await updateUserAvatarAPI(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone)
            // console.log("check newAvatar", newAvatar);
            if (resUpdateAvatar.data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUsers();
                
                notification.success({
                    message: "Upload avatar success",
                    description: "cap nhat avatar thanh cong"
                })
            } else {
                //fail
                notification.error({
                    message: "error upload file",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
        }
    }
    return (
        <Drawer
            width={"40vw"}
            title="chi tiết User"
            // width={720}
            onClose={() => {
                setDataDetail(null);
                setIsDetailOpen(false);
            }}

            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>Id: {dataDetail._id}</p>
                <br />
                <p>Full Name: {dataDetail.fullName}</p>
                <br />
                <p>Email: {dataDetail.email}</p>
                <br />
                <p>Phone Number: {dataDetail.phone}</p>
                <br />
                <p> Avatar :</p>
                <div style={{
                    marginTop: "10px",
                    height: "100px", width: "100px",
                    border: "1px solid #ccc"
                }}>
                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Upload Avatar</label>
                    <input type="file" hidden id='btnUpload'
                        onChange={handleOnChangeFile}
                    />
                </div>
                {preview &&
                    <>
                        <div style={{
                            marginTop: "10px",
                            height: "100px", width: "100px",
                            marginBottom: "15px"
                        }}>
                            <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                src={preview} />
                        </div>
                        <Button type='primary'
                            onClick={() => handleUpdateUserAvatar()}
                        >SAVE</Button>
                    </>
                }

            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    )
}
export default ViewUserDetail;