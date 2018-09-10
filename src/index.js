import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.scss';

import {SubComponent} from './sub-component';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mailLabel: 'メールアドレス',
			mailPH: 'sample@example.com',
      nameLabel: '名前',
      familyPH: '姓',
      firstnamePH: '名',
      radioSex: '性別',
      years: '年齢',
			buttonText: '登録'
		};
	}
	render() {
		return (
			<form id="registerForm">
        <div className="form-group">
          <label>{this.state.mailLabel}</label>
  				<input type="text" className="form-control" placeholder={this.state.mailPH} name="id" />
        </div>
        <div className="form-group">
          <label>{this.state.nameLabel}</label>
          <input type="text" className="form-control" name="familyname" placeholder={this.state.familyPH} />
          <input type="text" className="form-control" name="firstname" placeholder={this.state.firstnamePH} />
        </div>
        <div className="form-group">
          <label>{this.state.radioSex}</label><br></br>
          <label className="radio-inline">男性
            <input type="radio" className="form-control" name="sex" value="0" />
          </label>
          <label className="radio-inline">女性
            <input type="radio" className="form-control" name="sex" value="1" />
          </label>
          <label className="radio-inline">その他
            <input type="radio" className="form-control" name="sex" value="2" />
          </label>
        </div>
        <div className="form-group">
          <label>{this.state.years}
            <select className="form-control" name="years" size="5">
              <option value="1" label="10-19"></option>
              <option value="2" label="20-29"></option>
              <option value="3" label="30-39"></option>
              <option value="4" label="40-49"></option>
              <option value="5" label="50以上"></option>
            </select>
          </label>
        </div>

				<button type="button" id="registerButton" className="btn btn-secondary">{this.state.buttonText}</button>
			</form>
		);
	}
}

ReactDOM.render(
	<Form name="register" />,
	document.getElementById('content')
);
