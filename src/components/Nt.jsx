import React, { useEffect, useState } from "react";
import { Button, Col, Image, Input, Row, Table } from "antd";
const Nt = ({ sendOCR, data }) => {
    const [imageFiles, setImageFiles] = useState([]);
    const [fileContent, setFileContent] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        fetchFile();
    }, []);

    const fetchFile = async () => {
        try {
            const response = await fetch("http://localhost:3001/rut-tien.txt"); // Replace with the actual URL or path to your file
            if (!response.ok) {
                throw new Error("Failed to fetch file");
            }
            const text = (await response.text()).trim().toString().split("\n");
            let imageFiles = [];
            let fileContent = [];
            for (let i = 0; i < text.length; i++) {
                if (i % 2 === 1) {
                    imageFiles.push(text[i]);
                } else {
                    const fileContentJson = JSON.parse(text[i]);
                    let data = [
                        {
                            stk: fileContentJson.result.stk,
                            cur: "VND",
                            money: fileContentJson.result.money,
                        },
                    ];
                    fileContent.push(data);
                }
            }
            console.log(fileContent);
            setImageFiles(imageFiles);

            setFileContent(fileContent);
        } catch (error) {
            console.error("Error fetching file:", error);
        }
    };
    const columns = [
        {
            title: "Số tài khoản",
            dataIndex: "stk",
            key: "stk",
        },
        {
            title: "Loại tiền",
            dataIndex: "cur",
            key: "cur",
        },
        {
            title: "Số tiền",
            dataIndex: "money",
            key: "money",
        },
    ];
    return (
        <>
            <>
                {imageFiles.map((file, index) => (
                    <>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <h3>ẢNH {index + 1}</h3>
                                <Image src={file} key={index} />
                                {/* <Document file={"./public/TM_29052024_085932_2.pdf"} /> */}
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div>
                                    <h3>THÔNG TIN OCR</h3>
                                    <Table columns={columns} dataSource={fileContent[index]} />
                                </div>
                            </Col>
                        </Row>
                    </>
                ))}
            </>
        </>
    );
};
export default Nt;
