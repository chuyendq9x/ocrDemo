import React, {useState} from "react";
import {Button, Col, Input, Row} from "antd";

const Stk_ncb = ({sendOCR, data}) => {
    const [selectedFile, setSelectedFile]=useState(null);
    const onChangeHandler=event=>{
        setSelectedFile(event.target.files[0]);
    }
    const onClickHandler = () => {
        sendOCR(selectedFile, "ncb", 0)
    }
    const row =()=>{
        return (<div><Row>
            <Col xs={{span: 10, offset: 1}} lg={{span: 10, offset: 1}}>
                <Row>
                    <Col xl={4}><h5>Mã khách hàng:</h5></Col>
                    <Col xl={10}><Input value={(data == null) ? "" : data.makh}/></Col>
                </Row>

            </Col>
            <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                <Row>
                    <Col xl={4}><h5>Số tài khoản :</h5></Col>
                    <Col xl={10}><Input value={(data == null) ? "" : data.stk} /></Col>
                </Row>
            </Col>
        </Row>
            <Row style={{marginTop: '1%'}}>
                <Col xs={{span: 10, offset: 1}} lg={{span: 10, offset: 1}}>
                    <Row>
                        <Col xl={4}><h5>Loại tiền :</h5></Col>
                        <Col xl={10}><Input value={(data == null) ? "" : data.loaitien}/></Col>
                    </Row>

                </Col>
                <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                    <Row>
                        <Col xl={4}><h5>Số tiền :</h5></Col>
                        <Col xl={10}><Input value={(data == null) ? "" : data.sotien}/></Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{marginTop: '1%'}}>
                <Col xs={{span: 10, offset: 1}} lg={{span: 10, offset: 1}}>
                    <Row>
                        <Col xl={4}><h5>Kỳ hạn :</h5></Col>
                        <Col xl={10}><Input value={(data == null) ? "" : data.kyhan}/></Col>
                    </Row>

                </Col>
                <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                    <Row>
                        <Col xl={4}><h5>Lãi suất :</h5></Col>
                        <Col xl={10}><Input value={(data == null) ? "" : data.laisuat}/></Col>
                    </Row>

                </Col>

            </Row></div>)
    }

    return(
        <div>
            <div>
                <h3>ẢNH</h3>
                <>
                    <div className="form_image">
                        <Col span={12} offset={8} style={{marginTop:'10px'}}>
                            <input type="file" name="file" onChange={onChangeHandler}/>
                        </Col>
                        <br/>
                        <Col span={12} offset={7} style={{marginBottom:'10px'}}>
                            <Button type="button" className="btn btn-success btn-block"
                                    onClick={onClickHandler}>OCR
                            </Button>
                        </Col>
                    </div>

                </>
            </div>
            <div>
                <h3>THÔNG TIN OCR</h3>
                <div className="form_info">
                    {row()}
                </div>
            </div>
        </div>
    );
}
export default Stk_ncb;