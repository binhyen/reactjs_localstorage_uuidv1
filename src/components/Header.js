import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Project quản lý thành viên JAVA bằng React JS</h1>
                        <p className="lead">với dữ liệu json</p>
                        <hr className="my-2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;