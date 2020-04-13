import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tempValue:'',
        userObj:{}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj:info
        });
        this.props.getUsgetUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser 
            getUserEditInfo={(info) => this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject} 
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue:event.target.value
        })
    }

    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary  mb-3" onClick={() =>this.props.ketNoi()}>Đóng lại</div>;
        } else {
            return <div className="btn btn-block btn-outline-info mb-3" onClick={() =>this.props.ketNoi()}>Thêm mới</div>;
        }
    }

    render() {
        return (
            <div className="col-12 search-align">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nhập từ khóa tìm kiếm" style={{width: '600px'}} />
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                </div>
                <div className="form-group">
                    {this.hienThiNut()}
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;