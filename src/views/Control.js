import React from 'react';
import Select from 'react-select';
import '../assets/css/select.css';
import '../assets/css/control.css';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        helpers: state.helpers
    }
};

class BaseControl extends React.Component {

    render() {
        this.onChange = value => {
            this.validate(value);
            if (this.props.onChange) {
                this.props.onChange.apply(this, [value]);
            }
        };

        this.value = this.props.value;
        this.validation = this.props.validation || function () {return true};

        return (
            <div className={this.props.visible === false ? 'hide' : 'control-group'} id={`${this.props.id}-control-group`}>
                <div className="row-fluid">
                    <label className="control-label required" htmlFor={this.props.id}>
                        {this.props.label}
                    </label>
                </div>
                <Input type={this.props.type} id={this.props.id} name={this.props.name} required={true}
                       placeholder={this.props.placeholder}
                       format={this.props.format}
                       value={this.props.value}
                       options={this.props.options}
                       disabled={this.props.disabled}
                       minValue={this.props.minValue}
                       maxValue={this.props.maxValue}
                       onChange={this.onChange}
                       extra={this.props.extra}
                       className={this.isValid ? '' : 'has-error'}/>
            </div>
        );
    }

    validate(value) {
        if (this.validation(value) === true) {
            this.setValid()
        } else {
            this.setError()
        }
    }

    componentDidUpdate() {
        this.validate(this.value)
    }

    setError() {
        let elem = document.getElementById(`${this.props.id}-control-group`), css = elem.className;
        elem.className = css.replace(/has-error/g, '');
        elem.className += ' has-error';
    }

    setValid() {
        let elem = document.getElementById(`${this.props.id}-control-group`), css = elem.className;
        elem.className = css.replace(/has-error/g, '');
    }
}

function Input(props) {
    let required = props.required === true;
    let onChange;
    switch (props.type) {
        case "select":
            onChange = (ev) => {
                let value = ev ? ev.value : null;
                if (props.onChange) {
                    props.onChange.apply(this, [value])
                }
            };
            return (
                <Select id={props.id}
                        {...props.extra}
                        placeholder={props.placeholder}
                        options={props.options}
                        disabled={props.disabled}
                        onChange={onChange}
                        value={props.value}/>);
        default:
            onChange = (ev) => {
                let value = ev.target.value;
                if (props.onChange) {
                    props.onChange.apply(this, [value])
                }
            };
            return (<input {...props.extra} type={props.type} id={props.id} name={props.name} className="input-text"
                           required={required} onChange={onChange} value={props.value === null ? "" : props.value}/>)
    }
}

let Control = connect(mapStateToProps)(BaseControl);

export {
    Control
};
