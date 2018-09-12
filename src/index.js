import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.scss';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [
        {
          mail: '',
          familyname: '',
          firstname: '',
          sex: '',
          years: ''
        }
      ]
    }
    this.regist = this.regist.bind(this);
  }

  regist(state) {
    var oneUser = state;
    this.state.users.push(oneUser);
    // 保存

    this.setState({
      users : this.state.users
    });
    // 初期化
    this.refs.Form.clearField();
  }

  render() {
    return (
      <div>
        <Form regist={(state) => { this.regist(state); }} ref='Form' />
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
            <Table users={this.state.users} />
        </table>
      </div>
    );
  }
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      familyname: '',
      firstname: '',
      sex: '男性',
      years: '10-19'
    };
    this.onClickButton = this.onClickButton.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  onClickButton(){
    // selectが初期状態の時でもvalueを取り出してsetStateするように書く必要あり
    this.setState({
      mail: this.refs.mail.value,
      familyname: this.refs.firstname.value,
      firstname: this.refs.familyname.value,
      sex: this.refs.sex.value,
      years: this.refs.years.value
    });
    return this.props.regist(this.state);
  }

  onChangeField(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  clearField() {
    this.refs.mail.value='';
    this.refs.firstname.value='';
    this.refs.familyname.value='';
    this.refs.sex.value='';
    this.refs.years.value='';

  }

	render() {
		return (
      <div className="row">
        <div className="col-12">
          <form id="registerForm">
            <div className="form-group">
              <label>メールアドレス</label>
      				<input type="text" className="form-control" placeholder="sample@example.com"
                name="mail" value={this.state.name} ref='mail' onChange={this.onChangeField} />
            </div>
            <div className="form-group">
              <label>名前</label>
              <input type="text" className="form-control" placeholder="姓"
                name="familyname" value={this.state.name} ref='familyname' onChange={this.onChangeField} />
              <input type="text" className="form-control" placeholder="名"
                name="firstname" value={this.state.name} ref='firstname' onChange={this.onChangeField} />
            </div>
            <div className="form-group">
              <label>性別
                <select className="form-control" size="3"
                  name="sex" value={this.state.name} ref='sex' onChange={this.onChangeField}>
                  <option value="男性" label="男性"></option>
                  <option value="女性" label="女性"></option>
                  <option value="その他" label="その他"></option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>年齢
                <select className="form-control" size="5"
                  name="years" value={this.state.name} ref='years' onChange={this.onChangeField}>
                  <option value="10-19" label="10-19"></option>
                  <option value="20-29" label="20-29"></option>
                  <option value="30-39" label="30-39"></option>
                  <option value="40-49" label="40-49"></option>
                  <option value="50以上" label="50以上"></option>
                </select>
              </label>
            </div>

    				<button type="button" id="registerButton" className="btn btn-secondary" onClick={this.onClickButton}>
              登録
            </button>
    			</form>
        </div>
      </div>

		);
	}
}


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log(this.props.users);
  }
  render() {
    return (
      <tbody>
        {this.props.users.map( (users, i) => {
          return (
            <tr key={i}>
              <td>{users['mail']}</td>
              <td>{users['familyname']}</td>
              <td>{users['firstname']}</td>
              <td>{users['sex']}</td>
              <td>{users['years']}</td>
            </tr>
          );
         })}
      </tbody>
    );
  }
}

ReactDOM.render(
	<Frame name="register" />,
	document.getElementById('frame')
);
