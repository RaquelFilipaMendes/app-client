import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Control} from './Control';
import ReactTable from 'react-table';
import app from '../constants/base';
import 'react-table/react-table.css';
import {phoneNumbersList, countriesList} from '../services/ApiClient';
import {
    UPDATE_FILTERS,
    LOAD_LIST,
    LOAD_COUNTRIES
} from '../actions/phoneNumbers';


const mapStateToProps = state => {
    return {
        phoneNumbers: state.phoneNumbers,
        state
    }
};

const mapDispatchToProps = dispatch => ({
    onListLoaded: value =>
        dispatch({type: LOAD_LIST, payload: value}),
    loadCountries: value =>
        dispatch({type: LOAD_COUNTRIES, payload: value}),
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
        this.props.loadCountries(countriesList());
        this.props.onListLoaded(phoneNumbersList());

        this.applyFilters = () => {
            const filters = this.props.phoneNumbers.filters;

            let filter = {};
            if (filters.status) {
                filter.status = filters.status;
            }

            if (filters.country) {
                filter.country = filters.country;
            }

            this.props.onListLoaded(phoneNumbersList(filter));
        };
    }

    componentWillUpdate() {
    }

    render() {
        const columns = [{
            Header: 'Country',
            accessor: 'countryName',
            headerStyle: {textAlign: 'left', color: '#000000'},
        }, {
            Header: 'State',
            accessor: 'status',
            headerStyle: {textAlign: 'left', color: '#000000'},
        }, {
            Header: 'Country Code',
            accessor: 'countryCode',
            headerStyle: {textAlign: 'left', color: '#000000'}
        }, {
            Header: 'Phone Number',
            accessor: 'phoneNumbers',
            headerStyle: {textAlign: 'left', color: '#000000'},
            Cell: (props) => {
                return props.row.phoneNumbers.split(' ').pop();
            }
        }];

        const countries = this.props.phoneNumbers.countries;
        let countriesName = [];
        if (countries !== undefined && countries.length > 0) {
            for (let i = 0; i < countries.length; i++) {
                countriesName.push({
                    value: countries[i].countryCode,
                    label: countries[i].countryName,
                });
            }
        }

        return (
            <div>
                <h2>Phone Numbers</h2>
                <div className="content-filters">
                    <Control label="Country : " type="select" name="country"
                             id="country"
                             options={countriesName}
                             value={this.props.phoneNumbers.filters.country}
                             onChange={this.changeFilterCountry}/>
                    <Control label="State : " type="select" name="State"
                             id="status"
                             options={app.status}
                             placeholder=""
                             value={this.props.phoneNumbers.filters.status}
                             onChange={this.changeFilterStatus}/>
                    <button className="button-search"onClick={this.applyFilters}>Search
                    </button>
                </div>
                <div className="table-phonesNumbers">
                    <ReactTable
                        data={this.props.phoneNumbers.list}
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

