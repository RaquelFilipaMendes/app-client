import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Control} from './Control';
import ReactTable from 'react-table';
import app from '../constants/base';
import 'react-table/react-table.css';
import {
    UPDATE_FILTERS,
    LOAD_LIST
} from '../actions/phoneNumbers';


const mapStateToProps = state => {
    return {
        phoneNumbers: state.phoneNumbers,
        state
    }
};

const mapDispatchToProps = dispatch => ({
    onChangeFilterCountry: value =>
        dispatch({type: UPDATE_FILTERS, key: 'country', value: value}),
    onChangeFilterStatus: value =>
        dispatch({type: UPDATE_FILTERS, key: 'status', value: value}),
});


class ListPhoneNumbers extends Component {
    constructor(props) {
        super(props);

        this.changeFilterStatus = value => this.props.onChangeFilterStatus(value);
        this.changeFilterCountry = offer => this.props.onChangeFilterCountry(offer);
    }


    componentWillMount() {
    }

    componentWillUpdate() {
    }

    render() {
        const columns = [{
            Header: 'Country',
            accessor: 'country',
            headerStyle: {textAlign: 'left', color: '#000000'},
        }, {
            Header: 'State',
            accessor: 'state',
            headerStyle: {textAlign: 'left', color: '#000000'},
        }, {
            Header: 'Country Code',
            accessor: 'countryCode',
            headerStyle: {textAlign: 'left', color: '#000000'}
        }, {
            Header: 'Phone Number',
            accessor: 'phoneNumber',
            headerStyle: {textAlign: 'left', color: '#000000'}
        }];

        return (
            <div>
                <h2>Phone Numbers</h2>
                <div className="content-filters">
                    <Control label="Country : " type="select" name="country"
                             id="country"
                             options={null}
                             value={this.props.phoneNumbers.filters.country}
                             onChange={this.changeFilterCountry}/>
                    <Control label="State : " type="select" name="State"
                             id="status"
                             options={app.status}
                             placeholder=""
                             value={this.props.phoneNumbers.filters.status}
                             onChange={this.changeFilterStatus}/>
                    <button className="button-search" onClick={() => null}>Search
                    </button>
                </div>
                <div className="table-phonesNumbers">
                    <ReactTable
                        columns={columns}
                        defaultPageSize={20}
                        style={{border: 'none'}}
                        showPagination={true}
                        noDataText="No lines found!"
                        className="phonesNumbers-list-table -highlight"/>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ListPhoneNumbers);

