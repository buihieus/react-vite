import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createBookAPI } from "../../services/api.service";

const BookForm = (props) => {
    const { loadBooks } = props;

    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        const res = await createBookAPI(thumbnail, mainText, author, Number(price),Number(quantity), category);
        // console.log(">> check res: ", res);
        if (res.data) {
            // antd nó có hỗ trợ notification
            notification.success({
                message: "create user",
                description: "tạo mới thành công"
            });
            // đóng modal 
            resetAndCloseModal();
            await loadBooks();
        } else {
            notification.error({
                message: "Create Book",
                description: JSON.stringify(res.message)
            });
        }
    }


    // ham dong modal
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setMainText("");
        setAuthor("");
        setPrice("");
        setQuantity("");
        setThumbnail("");
        setCategory("");
    }
    return (

        <div>
            <div>
                <h3>Table Book</h3>
                <Button
                    onClick={() => { setIsModalOpen(true) }}
                    type="primary"
                >
                    Create book
                </Button>
            </div>
            <Modal
                title="Create Book"
                open={isModalOpen}

                onOk={() => handleSubmitBtn()}

                // dung de thoat khi bam cancel
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText="Create"
            >
                <div>
                    <span>Thumbnail</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            if (file) {
                                const imageUrl = URL.createObjectURL(file);
                                setThumbnail(imageUrl);
                            }
                        }}
                    />
                    {thumbnail && <img src={thumbnail} alt="preview" style={{ width: "100px", marginTop: "10px" }} />}
                </div>

                <div>
                    <span>Tieu De</span>
                    <Input
                        value={mainText}
                        onChange={(event) => { setMainText(event.target.value) }}
                    />
                </div>
                <div>
                    <span>So Luong</span>
                    <Input
                        value={quantity}
                        onChange={(event) => { setQuantity(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Gia Tien</span>
                    <Input
                        value={price}
                        onChange={(event) => { setPrice(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Tac Gia</span>
                    <Input
                        value={author}
                        onChange={(event) => { setAuthor(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Category</span>
                    <Input
                        value={category}
                        onChange={(event) => { setCategory(event.target.value) }}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default BookForm;