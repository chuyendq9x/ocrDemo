import React, {useState} from "react";
import {Button, Col, Input, Row} from "antd";

const Dkkd = ({sendOCR, data}) => {
    const [selectedFile, setSelectedFile]= useState(null);
    const onChangeHandler=event=>{
        setSelectedFile(event.target.files[0]);
    }
    const onClickHandler = () => {
        sendOCR(selectedFile, "dkkd", 0)
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
                    <Row>
                        <Col xs={{span: 10, offset: 1}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Mã số ĐKKD:</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.masokd}/></Col>
                            </Row>

                        </Col>
                        <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Ngày đăng ký :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.ngaydki} /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1%'}}>
                        <Col xs={{span: 10, offset: 1}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Tên tiếng Việt :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.tentv}/></Col>
                            </Row>

                        </Col>
                        <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Tên tiếng Anh :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.tenta}/></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1%'}}>
                        <Col xs={{span: 20, offset: 8}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Tên viết tắt :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.tenvt}/></Col>
                            </Row>

                        </Col>
                        <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Địa chỉ :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.diachi}/></Col>
                            </Row>
                        </Col>

                    </Row>

                    <Row style={{marginTop: '1%'}}>
                        <Col xs={{span: 20, offset: 8}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Điện thoại :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.dienthoai}/></Col>
                            </Row>

                        </Col>
                        <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Nơi đăng ký :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.noidki}/></Col>
                            </Row>
                        </Col>

                    </Row>

                    <Row style={{marginTop: '1%'}}>
                        <Col xs={{span: 20, offset: 8}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Fax :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.fax}/></Col>
                            </Row>

                        </Col>
                        <Col xs={{span: 10, offset: 2}} lg={{span: 10, offset: 1}}>
                            <Row>
                                <Col xl={4}><h5>Email :</h5></Col>
                                <Col xl={10}><Input value={(data == null) ? "" : data.emai}/></Col>
                            </Row>
                        </Col>

                    </Row>

                </div>
            </div>
        </div>
    );
}
export default Dkkd;