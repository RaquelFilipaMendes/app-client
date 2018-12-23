import {Axios} from 'axios';

const _callApi = (uri, method, body) => {
    const options = {
        url: 'http://localhost:8000/api' + uri,
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors'
    };

    return new Axios().request(options)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                return Promise.reject({status: response.status});
            }
        })
        .catch(error => {
            throw(error);
        });
};

/**
 *
 * @param object
 * @param prefix
 * @return {string}
 * @private
 */
const _serialize = (object, prefix = null) => {
    let queryString = [], property;

    for (property in object) {
        if (object.hasOwnProperty(property)) {
            let k = prefix ? prefix + "[" + property + "]" : property, v = object[property];
            queryString.push((v !== null && typeof v === "object") ?
                _serialize(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }

    return queryString.join("&");
};

const phoneNumbersList = (filters) => _callApi(!filters ? '/list' : '/list?' + _serialize(filters), 'GET');
const countriesList = () => _callApi('/countries', 'GET');

export {
  phoneNumbersList,
  countriesList
};
