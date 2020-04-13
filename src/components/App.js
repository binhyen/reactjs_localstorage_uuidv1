import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        hienThiForm: false,
        data: [],
        searchText:'',
        editUserStatus:false,
        userEditObject:{}
        }
    }

    UNSAFE_componentWillMount() {
        if (localStorage.getItem('userData') === null){
            this.setState({
                data: Data
            });
            localStorage.setItem('userData',JSON.stringify(Data));
        } else {
            this.setState({
                data: JSON.parse(localStorage.getItem('userData'))
            });
        }
    }
    
    getUsgetUserEditInfoApp = (info) => {

        this.state.data.forEach((value,key) => {
            if (value.id === info.id) {
                value.name=info.name;
                value.tel=info.tel;
                value.Permission=info.Permission;
            }
        })
        localStorage.setItem('userData',JSON.stringify(this.state.data));
    }

    deleteUser = (idUser) => {
        var tempData = this.state.data;
        tempData = tempData.filter(item => item.id !== idUser);
        this.setState({
            data:tempData
        });
        localStorage.setItem('userData',JSON.stringify(tempData));
    }

    changeEditUserStatus = () => {
        this.setState({
            editUserStatus:!this.state.editUserStatus
        });
    }

    editUser = (user) => {
        this.setState({
            userEditObject:user
        });
    }

    getNewUserData = (name,tel,Permission) => {
        var item = {};
        item.id = uuidv1();
        item.name = name;
        item.tel = tel;
        item.Permission = Permission;
        var items= this.state.data;
        items.push(item);
        this.setState({
            data:items
        });
        localStorage.setItem('userData',JSON.stringify(items));
    }

    getTextSearch = (dl) => {
        this.setState({
            searchText:dl
        });
    }

    doiTrangThai = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        });
    }

    render() {
        var ketQua=[];
        this.state.data.forEach(element => {
            if (element.name.indexOf(this.state.searchText) !== -1) {
                ketQua.push(element);
            }
        });
    
        return (
            <div className="App">
                <Header  className="header-align"></Header>
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search 
                                getUsgetUserEditInfoApp={(info) => this.getUsgetUserEditInfoApp(info)}
                                userEditObject={this.state.userEditObject}
                                changeEditUserStatus={() => this.changeEditUserStatus()}
                                editUserStatus={this.state.editUserStatus} 
                                checkConnectProps={(dl)=>this.getTextSearch(dl)} 
                                ketNoi={() => this.doiTrangThai()} 
                                hienThiForm={this.state.hienThiForm}
                            />
                            <TableData 
                                changeEditUserStatus={() => this.changeEditUserStatus()}
                                deleteUser={(idUser) => this.deleteUser(idUser)} 
                                editFun={(user) => this.editUser(user)} 
                                dataUserProps={ketQua}
                            />
                            <AddUser 
                                getNewUserDataProps={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)} 
                                hienThiForm={this.state.hienThiForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
