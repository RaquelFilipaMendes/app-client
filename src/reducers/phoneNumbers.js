import {
    UPDATE_FILTERS,
    LOAD_LIST,
    LOAD_COUNTRIES
} from "../actions/phoneNumbers";

const defaultState = {
    filters: {
        status: null,
        country: null
    },
    countries: [],
    list: []
};
let result = null;
export default (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_COUNTRIES:
            result = {...state};
            result.countries = action.payload;
            return result;
        case UPDATE_FILTERS:
            result = {...state};
            if (action.key === 'country') {
                result.filters.country = action.value;
            } else if (action.key === 'status') {
                result.filters.status = action.value;
            }
            return result;
        case LOAD_LIST:
            let listPhoneNumbers = action.payload;
            result = {...state};
            let list = validatePhoneNumbers(listPhoneNumbers);
            result.list = list;
            return result;
        default:
            return state;
    }
};

function validatePhoneNumbers(listPhoneNumbers) {
    for (let i = 0; i < listPhoneNumbers.length; i++) {
        let countryCode = listPhoneNumbers[i].phoneNumbers.split('(').pop().split(')')[0];
        let phoneNumber = listPhoneNumbers[i].phoneNumbers.split(' ').pop();
        if (countryCode == '93' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '93'}, {countryName: 'Afghanistan'});
        }
        if (countryCode == '355' && phoneNumber.length >= '3' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '355'}, {countryName: 'Albania'});
        }
        if (countryCode == '213' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '213'}, {countryName: 'Algeria'});
        }
        if (countryCode == '376' && phoneNumber.length >= '6' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '376'}, {countryName: 'Andorra'});
        }
        if (countryCode == '244' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '244'}, {countryName: 'Angola'});
        }
        if (countryCode == '54' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '54'}, {countryName: 'Argentina'});
        }
        if (countryCode == '374' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '374'}, {countryName: 'Armenia'});
        }
        if (countryCode == '297' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '297'}, {countryName: 'Aruba'});
        }
        if (countryCode == '61' && phoneNumber.length >= '5' && phoneNumber.length <= '15') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '61'}, {countryName: 'Australia'});
        }
        if (countryCode == '672' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '672'}, {countryName: 'Australian External Territories'});
        }
        if (countryCode == '43' && phoneNumber.length >= '4' && phoneNumber.length <= '13') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '43'}, {countryName: 'Austria'});
        }
        if (countryCode == '994' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '994'}, {countryName: 'Azerbaijan'});
        }
        if (countryCode == '973' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '973'}, {countryName: 'Bahrain'});
        }
        if (countryCode == '880' && phoneNumber.length >= '6' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '880'}, {countryName: 'Bangladesh'});
        }
        if (countryCode == '375' && phoneNumber.length >= '9' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '375'}, {countryName: 'Belarus'});
        }
        if (countryCode == '32' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '32'}, {countryName: 'Belgium'});
        }
        if (countryCode == '501' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '501'}, {countryName: 'Belize'});
        }
        if (countryCode == '229' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '229'}, {countryName: 'Benin'});
        }
        if (countryCode == '975' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '975'}, {countryName: 'Bhutan'});
        }
        if (countryCode == '591' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '591'}, {countryName: 'Bolivia'});
        }
        if (countryCode == '599' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '599'}, {countryName: 'Saba'});
        }
        if (countryCode == '387' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '387'}, {countryName: 'Bosnia'});
        }
        if (countryCode == '267' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '267'}, {countryName: 'Botswana'});
        }
        if (countryCode == '55' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '55'}, {countryName: 'Brazil'});
        }
        if (countryCode == '673' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '673'}, {countryName: 'Brunei Darussalam'});
        }
        if (countryCode == '359' && phoneNumber.length >= '7' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '359'}, {countryName: 'Bulgaria'});
        }
        if (countryCode == '226' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '226'}, {countryName: 'Burkina Faso'});
        }
        if (countryCode == '257' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '257'}, {countryName: 'Burundi'});
        }
        if (countryCode == '855' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '855'}, {countryName: 'Cambodia'});
        }
        if (countryCode == '237' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '237'}, {countryName: 'Cameroon'});
        }
        if (countryCode == '238' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '238'}, {countryName: 'Cape Verde'});
        }
        if (countryCode == '236' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '236'}, {countryName: 'Central African Rep.'});
        }
        if (countryCode == '235' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '235'}, {countryName: 'Chad'});
        }
        if (countryCode == '56' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '56'}, {countryName: 'Chile'});
        }
        if (countryCode == '86' && phoneNumber.length >= '5' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '86'}, {countryName: 'China'});
        }
        if (countryCode == '57' && phoneNumber.length >= '8' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '57'}, {countryName: 'Colombia'});
        }
        if (countryCode == '269' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '269'}, {countryName: 'Comoros'});
        }
        if (countryCode == '242' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '242'}, {countryName: 'Congo'});
        }
        if (countryCode == '682' && phoneNumber.length >= '5' && phoneNumber.length <= '5') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '682'}, {countryName: 'Cook Islands'});
        }
        if (countryCode == '506' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '506'}, {countryName: 'Costa Rica'});
        }
        if (countryCode == '225' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '225'}, {countryName: 'Ivory Coast'});
        }
        if (countryCode == '385' && phoneNumber.length >= '8' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '385'}, {countryName: 'Croatia'});
        }
        if (countryCode == '53' && phoneNumber.length >= '6' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '53'}, {countryName: 'Cuba'});
        }
        if (countryCode == '599' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '599'}, {countryName: 'Curacao'});
        }
        if (countryCode == '357' && phoneNumber.length >= '8' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '357'}, {countryName: 'Cyprus'});
        }
        if (countryCode == '420' && phoneNumber.length >= '4' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '420'}, {countryName: 'Czech Republic'});
        }
        if (countryCode == '850' && phoneNumber.length >= '6' && phoneNumber.length <= '17') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '850'}, {countryName: 'North Korea'});
        }
        if (countryCode == '243' && phoneNumber.length >= '5' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '243'}, {countryName: 'Democratic Republic of the Congo'});
        }
        if (countryCode == '45' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '45'}, {countryName: 'Denmark'});
        }
        if (countryCode == '246' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '246'}, {countryName: 'Diego Garcia'});
        }
        if (countryCode == '253' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '253'}, {countryName: 'Djibouti'});
        }
        if (countryCode == '593' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '593'}, {countryName: 'Ecuador'});
        }
        if (countryCode == '20' && phoneNumber.length >= '7' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '20'}, {countryName: 'Egypt'});
        }
        if (countryCode == '503' && phoneNumber.length >= '7' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '503'}, {countryName: 'El Salvador'});
        }
        if (countryCode == '240' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '240'}, {countryName: 'Equatorial Guinea'});
        }
        if (countryCode == '291' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '291'}, {countryName: 'Eritrea'});
        }
        if (countryCode == '372' && phoneNumber.length >= '7' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '372'}, {countryName: 'Estonia'});
        }
        if (countryCode == '251' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '251'}, {countryName: 'Ethiopia'});
        }
        if (countryCode == '500' && phoneNumber.length >= '5' && phoneNumber.length <= '5') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '500'}, {countryName: 'Malvinas'});
        }
        if (countryCode == '298' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '298'}, {countryName: 'Faroe Islands'});
        }
        if (countryCode == '679' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '679'}, {countryName: 'Fiji'});
        }
        if (countryCode == '358' && phoneNumber.length >= '5' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '358'}, {countryName: 'Finland'});
        }
        if (countryCode == '33' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '33'}, {countryName: 'France'});
        }
        if (countryCode == '262' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '262'}, {countryName: 'Mayotte'});
        }
        if (countryCode == '594' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '594'}, {countryName: 'French Guiana'});
        }
        if (countryCode == '689' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '689'}, {countryName: 'French Polynesia'});
        }
        if (countryCode == '241' && phoneNumber.length >= '6' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '241'}, {countryName: 'Gabon'});
        }
        if (countryCode == '220' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '220'}, {countryName: 'Gambia'});
        }
        if (countryCode == '995' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '995'}, {countryName: 'Georgia'});
        }
        if (countryCode == '49' && phoneNumber.length >= '6' && phoneNumber.length <= '13') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '49'}, {countryName: 'Germany'});
        }
        if (countryCode == '233' && phoneNumber.length >= '5' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '233'}, {countryName: 'Ghana'});
        }
        if (countryCode == '350' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '350'}, {countryName: 'Gibraltar'});
        }
        if (countryCode == '30' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '30'}, {countryName: 'Greece'});
        }
        if (countryCode == '299' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '299'}, {countryName: 'Greenland'});
        }
        if (countryCode == '590' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '590'}, {countryName: 'Guadeloupe'});
        }
        if (countryCode == '502' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '502'}, {countryName: 'Guatemala'});
        }
        if (countryCode == '224' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '224'}, {countryName: 'Guinea'});
        }
        if (countryCode == '245' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '245'}, {countryName: 'Guinea-Bissau'});
        }
        if (countryCode == '592' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '592'}, {countryName: 'Guyana'});
        }
        if (countryCode == '509' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '509'}, {countryName: 'Haiti'});
        }
        if (countryCode == '504' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '504'}, {countryName: 'Honduras'});
        }
        if (countryCode == '852' && phoneNumber.length >= '4' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '852'}, {countryName: 'Hong Kong China'});
        }
        if (countryCode == '36' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '36'}, {countryName: 'Hungary'});
        }
        if (countryCode == '354' && phoneNumber.length >= '7' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '354'}, {countryName: 'Iceland'});
        }
        if (countryCode == '91' && phoneNumber.length >= '7' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '91'}, {countryName: 'India'});
        }
        if (countryCode == '62' && phoneNumber.length >= '5' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '62'}, {countryName: 'Indonesia'});
        }
        if (countryCode == '870' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '870'}, {countryName: 'Pitcairn'});
        }
        if (countryCode == '98' && phoneNumber.length >= '6' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '98'}, {countryName: 'Iran'});
        }
        if (countryCode == '964' && phoneNumber.length >= '8' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '964'}, {countryName: 'Iraq'});
        }
        if (countryCode == '353' && phoneNumber.length >= '7' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '353'}, {countryName: 'Ireland'});
        }
        if (countryCode == '972' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '972'}, {countryName: 'Israel'});
        }
        if (countryCode == '39' && phoneNumber.length >= '1' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '39'}, {countryName: 'Italy'});
        }
        if (countryCode == '81' && phoneNumber.length >= '5' && phoneNumber.length <= '13') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '81'}, {countryName: 'Japan'});
        }
        if (countryCode == '962' && phoneNumber.length >= '5' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '962'}, {countryName: 'Jordan'});
        }
        if (countryCode == '7' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '7'}, {countryName: 'Kazakhstan'});
        }
        if (countryCode == '254' && phoneNumber.length >= '6' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '254'}, {countryName: 'Kenya'});
        }
        if (countryCode == '686' && phoneNumber.length >= '5' && phoneNumber.length <= '5') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '686'}, {countryName: 'Kiribati'});
        }
        if (countryCode == '82' && phoneNumber.length >= '8' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '82'}, {countryName: 'Korea'});
        }
        if (countryCode == '965' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '965'}, {countryName: 'Kuwait'});
        }
        if (countryCode == '996' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '996'}, {countryName: 'Kyrgyzstan'});
        }
        if (countryCode == '856' && phoneNumber.length >= '8' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '856'}, {countryName: 'Laos'});
        }
        if (countryCode == '371' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '371'}, {countryName: 'Latvia'});
        }
        if (countryCode == '961' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '961'}, {countryName: 'Lebanon'});
        }
        if (countryCode == '266' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '266'}, {countryName: 'Lesotho'});
        }
        if (countryCode == '231' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '231'}, {countryName: 'Liberia'});
        }
        if (countryCode == '218' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '218'}, {countryName: 'Libya'});
        }
        if (countryCode == '423' && phoneNumber.length >= '7' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '423'}, {countryName: 'Liechtenstein'});
        }
        if (countryCode == '370' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '370'}, {countryName: 'Lithuania'});
        }
        if (countryCode == '352' && phoneNumber.length >= '4' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '352'}, {countryName: 'Luxembourg'});
        }
        if (countryCode == '853' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '853'}, {countryName: 'Macao'});
        }
        if (countryCode == '261' && phoneNumber.length >= '9' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '261'}, {countryName: 'Madagascar'});
        }
        if (countryCode == '265' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '265'}, {countryName: 'Malawi'});
        }
        if (countryCode == '60' && phoneNumber.length >= '7' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '60'}, {countryName: 'Malaysia'});
        }
        if (countryCode == '960' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '960'}, {countryName: 'Maldives'});
        }
        if (countryCode == '223' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '223'}, {countryName: 'Mali'});
        }
        if (countryCode == '356' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '356'}, {countryName: 'Malta'});
        }
        if (countryCode == '692' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '692'}, {countryName: 'Marshall Islands'});
        }
        if (countryCode == '596' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '596'}, {countryName: 'Martinique'});
        }
        if (countryCode == '222' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '222'}, {countryName: 'Mauritania'});
        }
        if (countryCode == '230' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '230'}, {countryName: 'Mauritius'});
        }
        if (countryCode == '52' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '52'}, {countryName: 'Mexico'});
        }
        if (countryCode == '691' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '691'}, {countryName: 'Micronesia'});
        }
        if (countryCode == '373' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '373'}, {countryName: 'Moldova'});
        }
        if (countryCode == '377' && phoneNumber.length >= '5' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '377'}, {countryName: 'Monaco'});
        }
        if (countryCode == '976' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '976'}, {countryName: 'Mongolia'});
        }
        if (countryCode == '382' && phoneNumber.length >= '4' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '382'}, {countryName: 'Montenegro'});
        }
        if (countryCode == '212' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '212'}, {countryName: 'Morocco'});
        }
        if (countryCode == '258' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '258'}, {countryName: 'Mozambique'});
        }
        if (countryCode == '95' && phoneNumber.length >= '7' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '95'}, {countryName: 'Myanmar'});
        }
        if (countryCode == '264' && phoneNumber.length >= '6' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '264'}, {countryName: 'Namibia'});
        }
        if (countryCode == '674' && phoneNumber.length >= '4' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '674'}, {countryName: 'Nauru'});
        }
        if (countryCode == '977' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '977'}, {countryName: 'Nepal'});
        }
        if (countryCode == '31' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '31'}, {countryName: 'Netherlands'});
        }
        if (countryCode == '687' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '687'}, {countryName: 'New Caledonia'});
        }
        if (countryCode == '64' && phoneNumber.length >= '3' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '64'}, {countryName: 'New Zealand'});
        }
        if (countryCode == '505' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '505'}, {countryName: 'Nicaragua'});
        }
        if (countryCode == '227' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '227'}, {countryName: 'Niger'});
        }
        if (countryCode == '234' && phoneNumber.length >= '7' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '234'}, {countryName: 'Nigeria'});
        }
        if (countryCode == '683' && phoneNumber.length >= '4' && phoneNumber.length <= '4') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '683'}, {countryName: 'Niue'});
        }
        if (countryCode == '47' && phoneNumber.length >= '5' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '47'}, {countryName: 'Norway'});
        }
        if (countryCode == '968' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '968'}, {countryName: 'Oman'});
        }
        if (countryCode == '92' && phoneNumber.length >= '8' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '92'}, {countryName: 'Pakistan'});
        }
        if (countryCode == '680' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '680'}, {countryName: 'Palau'});
        }
        if (countryCode == '507' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '507'}, {countryName: 'Panama'});
        }
        if (countryCode == '675' && phoneNumber.length >= '4' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '675'}, {countryName: 'Papua New Guinea'});
        }
        if (countryCode == '595' && phoneNumber.length >= '5' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '595'}, {countryName: 'Paraguay'});
        }
        if (countryCode == '51' && phoneNumber.length >= '8' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '51'}, {countryName: 'Peru'});
        }
        if (countryCode == '63' && phoneNumber.length >= '8' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '63'}, {countryName: 'Philippines'});
        }
        if (countryCode == '48' && phoneNumber.length >= '6' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '48'}, {countryName: 'Poland'});
        }
        if (countryCode == '351' && phoneNumber.length >= '9' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '351'}, {countryName: 'Portugal'});
        }
        if (countryCode == '974' && phoneNumber.length >= '3' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '974'}, {countryName: 'Qatar'});
        }
        if (countryCode == '40' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '40'}, {countryName: 'Romania'});
        }
        if (countryCode == '7' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '7'}, {countryName: 'Kazakhstan'});
        }
        if (countryCode == '250' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '250'}, {countryName: 'Rwanda'});
        }
        if (countryCode == '290' && phoneNumber.length >= '4' && phoneNumber.length <= '4') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '290'}, {countryName: 'Saint Helena'});
        }
        if (countryCode == '508' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '508'}, {countryName: 'Saint Pierre'});
        }
        if (countryCode == '685' && phoneNumber.length >= '3' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '685'}, {countryName: 'Samoa'});
        }
        if (countryCode == '378' && phoneNumber.length >= '6' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '378'}, {countryName: 'San Marino'});
        }
        if (countryCode == '239' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '239'}, {countryName: 'Sao Tome && Principe'});
        }
        if (countryCode == '966' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '966'}, {countryName: 'Saudi Arabia'});
        }
        if (countryCode == '221' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '221'}, {countryName: 'Senegal'});
        }
        if (countryCode == '381' && phoneNumber.length >= '4' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '381'}, {countryName: 'Serbia'});
        }
        if (countryCode == '248' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '248'}, {countryName: 'Seychelles'});
        }
        if (countryCode == '232' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '232'}, {countryName: 'Sierra Leone'});
        }
        if (countryCode == '65' && phoneNumber.length >= '8' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '65'}, {countryName: 'Singapore'});
        }
        if (countryCode == '421' && phoneNumber.length >= '4' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '421'}, {countryName: 'Slovakia'});
        }
        if (countryCode == '386' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '386'}, {countryName: 'Slovenia'});
        }
        if (countryCode == '677' && phoneNumber.length >= '5' && phoneNumber.length <= '5') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '677'}, {countryName: 'Solomon Islands'});
        }
        if (countryCode == '252' && phoneNumber.length >= '5' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '252'}, {countryName: 'Somalia'});
        }
        if (countryCode == '27' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '27'}, {countryName: 'South Africa'});
        }
        if (countryCode == '211' && phoneNumber.length >= '1' && phoneNumber.length <= '15') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '211'}, {countryName: 'South Sudan'});
        }
        if (countryCode == '34' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '34'}, {countryName: 'Spain'});
        }
        if (countryCode == '94' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '94'}, {countryName: 'Sri Lanka'});
        }
        if (countryCode == '249' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '249'}, {countryName: 'Sudan'});
        }
        if (countryCode == '597' && phoneNumber.length >= '6' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '597'}, {countryName: 'Suriname'});
        }
        if (countryCode == '268' && phoneNumber.length >= '7' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '268'}, {countryName: 'Swaziland'});
        }
        if (countryCode == '46' && phoneNumber.length >= '7' && phoneNumber.length <= '13') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '46'}, {countryName: 'Sweden'});
        }
        if (countryCode == '41' && phoneNumber.length >= '4' && phoneNumber.length <= '12') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '41'}, {countryName: 'Switzerland'});
        }
        if (countryCode == '963' && phoneNumber.length >= '8' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '963'}, {countryName: 'Syrian Arab Republic'});
        }
        if (countryCode == '886' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '886'}, {countryName: 'Taiwan China'});
        }
        if (countryCode == '992' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '992'}, {countryName: 'Tajikistan'});
        }
        if (countryCode == '255' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '255'}, {countryName: 'Tanzania'});
        }
        if (countryCode == '66' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '66'}, {countryName: 'Thailand'});
        }
        if (countryCode == '389' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '389'}, {countryName: 'Macedonia'});
        }
        if (countryCode == '670' && phoneNumber.length >= '7' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '670'}, {countryName: 'Timor-Leste'});
        }
        if (countryCode == '228' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '228'}, {countryName: 'Togo'});
        }
        if (countryCode == '690' && phoneNumber.length >= '4' && phoneNumber.length <= '4') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '690'}, {countryName: 'Tokelau'});
        }
        if (countryCode == '676' && phoneNumber.length >= '5' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '676'}, {countryName: 'Tonga'});
        }
        if (countryCode == '216' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '216'}, {countryName: 'Tunisia'});
        }
        if (countryCode == '90' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '90'}, {countryName: 'Turkey'});
        }
        if (countryCode == '993' && phoneNumber.length >= '8' && phoneNumber.length <= '8') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '993'}, {countryName: 'Turkmenistan'});
        }
        if (countryCode == '688' && phoneNumber.length >= '5' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '688'}, {countryName: 'Tuvalu'});
        }
        if (countryCode == '256' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '256'}, {countryName: 'Uganda'});
        }
        if (countryCode == '380' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '380'}, {countryName: 'Ukraine'});
        }
        if (countryCode == '971' && phoneNumber.length >= '8' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '971'}, {countryName: 'United Arab Emirates'});
        }
        if (countryCode == '44' && phoneNumber.length >= '7' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '44'}, {countryName: 'United Kingdom'});
        }
        if (countryCode == '1' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '1'}, {countryName: 'United States'});
        }
        if (countryCode == '598' && phoneNumber.length >= '4' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '598'}, {countryName: 'Uruguay'});
        }
        if (countryCode == '998' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '998'}, {countryName: 'Uzbekistan'});
        }
        if (countryCode == '678' && phoneNumber.length >= '5' && phoneNumber.length <= '7') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '678'}, {countryName: 'Vanuatu'});
        }
        if (countryCode == '39' && phoneNumber.length >= '1' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '39'}, {countryName: 'Vatican'});
        }
        if (countryCode == '379' && phoneNumber.length >= '1' && phoneNumber.length <= '11') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '379'}, {countryName: 'Vatican'});
        }
        if (countryCode == '58' && phoneNumber.length >= '10' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '58'}, {countryName: 'Venezuela'});
        }
        if (countryCode == '84' && phoneNumber.length >= '7' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '84'}, {countryName: 'Viet Nam'});
        }
        if (countryCode == '681' && phoneNumber.length >= '6' && phoneNumber.length <= '6') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '681'}, {countryName: 'Wallis'});
        }
        if (countryCode == '967' && phoneNumber.length >= '6' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '967'}, {countryName: 'Yemen'});
        }
        if (countryCode == '260' && phoneNumber.length >= '9' && phoneNumber.length <= '9') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '260'}, {countryName: 'Zambia'});
        }
        if (countryCode == '263' && phoneNumber.length >= '5' && phoneNumber.length <= '10') {
            Object.assign(listPhoneNumbers[i], {status: 'Valid'}, {countryCode: '263'}, {countryName: 'Zimbabwe'});
        }
    }
    return listPhoneNumbers;
}