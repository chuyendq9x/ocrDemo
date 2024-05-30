import React, { useState } from "react";
import { Tabs, message } from "antd";
//import { Button, Row, Col, Input} from 'antd';
import "../css/styles/form.css";
import axios from "axios";
import Stk from "./Stk";
import Rt from "./Rt";
import Nt from "./Nt";
import Tt from "./Tt";
import Dkkd from "./Dkkd";
import Stk_ncb from "./stk_ncb";

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const Home = () => {
    const [dataSTK, setDataStk] = useState(null);
    const [dataNt, setDataNt] = useState(null);
    const [dataRt, setDataRt] = useState(null);
    const [dataTt, setDataTt] = useState(null);
    const [dataBidv, setDataBidv] = useState(null);
    const [dataNcb, setDataNcb] = useState(null);
    // const onChangeHandler=event=>{
    //     setSelectedFile(event.target.files[0]);
    // }
    const makeId = (length) => {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    // const onClickHandler = (type) => {
    //     sendOCR(selectedFile, type)
    // }
    const sendOCR = (file, type, number) => {
        let url = "http://103.179.191.174:3000/upload/images";
        let formData = new FormData();
        formData.append("type_doc", type);
        formData.append("user", "ocr");
        formData.append("password", "UmQqwvD673UfEwEOK5khY+CcPWXgM3BK1gZXSLTQGM0=");
        // formData.append("refno", "1222");
        formData.append("files", file);
        formData.append("transactionsid", makeId(15));
        axios({
            method: "post",
            url: url,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                message.success(`OCR success`);
                if (type === "tiet-kiem") {
                    if (number === 0) {
                        setDataStk(response.data.result);
                    }
                    if (number === 1) {
                        setDataTt(response.data.result);
                    }
                }
                if (type === "nop-tien") {
                    setDataNt(response.data.result);
                }
                if (type === "rut-tien") {
                    setDataRt(response.data.result);
                }
                if (type === "dkkd") {
                    setDataBidv(response.data.result);
                }
                if (type == "ncb") {
                    setDataNcb(response.data.result);
                }
            })
            .catch(function (response) {
                //handle error
                message.error(`${response} file ocr failed.`);
            });
    };

    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Nộp tiền" key="1">
                <Dkkd />
            </TabPane>
            <TabPane tab="Rút tiền" key="2">
                <Nt />
            </TabPane>
            <TabPane tab="Tất toán sổ tiết kiệm" key="3">
                <Rt />
            </TabPane>
        </Tabs>
    );
};
export default Home;
