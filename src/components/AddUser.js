import React, { Component } from 'react';


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            tel:'',
            Permission:''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    hienThiForm = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form method="post">
                        <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                            <div className="card-header">Thêm mới User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="name"  className="form-control" placeholder="Tên user" aria-describedby="helpId" />
                                    </div>
                                <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="tel"  className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                <select className="custom-select" onChange={(event) => this.isChange(event)} name="Permission" required>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                                </div>
                                <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission) => this.props.getNewUserDataProps(this.state.name,this.state.tel,this.state.Permission)} value="Thêm mới"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.hienThiForm()}
            </div>
        );
    }
}

export default AddUser;