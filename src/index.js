import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.scss';

import {SubComponent} from './sub-component';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      familyname: '',
      firstname: '',
      sex: '',
      years: ''
    };
    this.regist = this.regist.bind(this);
  }

  regist(userinfo) {
    this.setState({
      mail: userinfo[0],
      familyname: userinfo[1],
      firstname: userinfo[2],
      sex: userinfo[3],
      years: userinfo[4]
    });
  }

  render() {
    return (
      <div>
        <Form regist={(userinfo) => { this.regist(userinfo); }} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>メールアドレス</th>
              <th>姓</th>
              <th>名</th>
              <th>性別</th>
              <th>年齢</th>
            </tr>
          </thead>
          <tbody id="table">
            <Table />
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailLabel: 'メールアドレス',
      mailPH: 'sample@example.com',
      nameLabel: '名前',
      familyPH: '姓',
      firstnamePH: '名',
      sex: '性別',
      years: '年齢',
      buttonText: '登録',
      userinfo: ['','','','','']
    };
  }

  onClick(){
    return this.props.regist(this.state.userinfo);
  }

	render() {
		return (
      <div className="row">
        <div className="col-12">
          <form id="registerForm">
            <div className="form-group">
              <label>{this.state.mailLabel}</label>
      				<input type="text" className="form-control" placeholder={this.state.mailPH} name="id" value={this.state.userinfo[0]} />
            </div>
            <div className="form-group">
              <label>{this.state.nameLabel}</label>
              <input type="text" className="form-control" name="familyname" placeholder={this.state.familyPH} value={this.state.userinfo[1]} />
              <input type="text" className="form-control" name="firstname" placeholder={this.state.firstnamePH} value={this.state.userinfo[2]} />
            </div>
            <div className="form-group">
              <label>{this.state.sex}
                <select className="form-control" name="sex" size="3" value={this.state.userinfo[3]}>
                  <option value="男性" label="男性"></option>
                  <option value="女性" label="女性"></option>
                  <option value="その他" label="その他"></option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>{this.state.years}
                <select className="form-control" name="years" size="5" value={this.state.userinfo[4]}>
                  <option value="10-19" label="10-19"></option>
                  <option value="20-29" label="20-29"></option>
                  <option value="30-39" label="30-39"></option>
                  <option value="40-49" label="40-49"></option>
                  <option value="50以上" label="50以上"></option>
                </select>
              </label>
            </div>

    				<button type="button" id="registerButton" className="btn btn-secondary" onClick={this.props.regist}>
              {this.state.buttonText}
            </button>
    			</form>
        </div>
      </div>

		);
	}
}

class Table extends React.Component {
  render() {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }
}

ReactDOM.render(
	<Frame name="register" />,
	document.getElementById('frame')
);
