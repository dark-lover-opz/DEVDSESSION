import "https://unpkg.com/imask";
import Fuse from "https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.basic.min.mjs";

const countries = [
    {
        name: "Afghanistan",
        code: "AF",
        phone: "+93",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Aland Islands",
        code: "AX",
        phone: "+358",
        masks: [
            { mask: "0000 0000000", leadingZero: true },
            { mask: "000 0000000" },
        ],
    },
    {
        name: "Albania",
        code: "AL",
        phone: "+355",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Algeria",
        code: "DZ",
        phone: "+213",
        masks: [
            { mask: "00000 00 00 00", leadingZero: true },
            { mask: "0000 00 00 00" },
        ],
    },
    {
        name: "American Samoa",
        code: "AS",
        phone: "+1 684",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Andorra",
        code: "AD",
        phone: "+376",
        masks: [{ mask: "000 000" }],
    },
    {
        name: "Angola",
        code: "AO",
        phone: "+244",
        masks: [
            { mask: "0000 000 000", leadingZero: true },
            { mask: "000 000 000" },
        ],
    },
    {
        name: "Anguilla",
        code: "AI",
        phone: "+1 264",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Antarctica",
        code: "AQ",
        phone: "+672",
        masks: [{ mask: "000 000" }],
    },
    {
        name: "Antigua and Barbuda",
        code: "AG",
        phone: "+1 268",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Argentina",
        code: "AR",
        phone: "+54",
        masks: [
            { mask: "0000 0000-0000", leadingZero: true },
            { mask: "000 0000-0000" },
        ],
    },
    {
        name: "Armenia",
        code: "AM",
        phone: "+374",
        masks: [
            { mask: "000 000 000", leadingZero: true },
            { mask: "00 000 000" },
        ],
    },
    { name: "Aruba", code: "AW", phone: "+297", masks: [{ mask: "000 0000" }] },
    {
        name: "Australia",
        code: "AU",
        phone: "+61",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "0000 000 000" },
        ],
    },
    {
        name: "Austria",
        code: "AT",
        phone: "+43",
        masks: [
            { mask: "00000 000000", leadingZero: true },
            { mask: "0000 000000" },
        ],
    },
    {
        name: "Azerbaijan",
        code: "AZ",
        phone: "+994",
        masks: [
            { mask: "000 000-00-00", leadingZero: true },
            { mask: "00 000-00-00" },
        ],
    },
    {
        name: "Bahamas",
        code: "BS",
        phone: "+1 242",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Bahrain",
        code: "BH",
        phone: "+973",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Bangladesh",
        code: "BD",
        phone: "+880",
        masks: [
            { mask: "00000 000000", leadingZero: true },
            { mask: "00000-000000" },
        ],
    },
    {
        name: "Barbados",
        code: "BB",
        phone: "+1 246",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Belarus",
        code: "BY",
        phone: "+375",
        masks: [
            { mask: "000 000 00 00", leadingZero: true },
            { mask: "00 000 00 00" },
        ],
    },
    {
        name: "Belgium",
        code: "BE",
        phone: "+32",
        masks: [
            { mask: "0000 00 00 00", leadingZero: true },
            { mask: "000 00 00 00" },
        ],
    },
    {
        name: "Belize",
        code: "BZ",
        phone: "+501",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Benin",
        code: "BJ",
        phone: "+229",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Bermuda",
        code: "BM",
        phone: "+1 441",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Bhutan",
        code: "BT",
        phone: "+975",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Bolivia",
        code: "BO",
        phone: "+591",
        masks: [{ mask: "000 00000" }],
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        code: "BQ",
        phone: "+599",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Bosnia and Herzegovina",
        code: "BA",
        phone: "+387",
        masks: [
            { mask: "000 000 000", leadingZero: true },
            { mask: "00 000 000" },
        ],
    },
    {
        name: "Botswana",
        code: "BW",
        phone: "+267",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Bouvet Island",
        code: "BV",
        phone: "+47",
        masks: [{ mask: "000 00 000" }],
    },
    {
        name: "Brazil",
        code: "BR",
        phone: "+55",
        masks: [
            { mask: "0000 00000-0000", leadingZero: true },
            { mask: "00 00000-0000" },
        ],
    },
    {
        name: "British Indian Ocean Territory",
        code: "IO",
        phone: "+246",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "Brunei Darussalam",
        code: "BN",
        phone: "+673",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Bulgaria",
        code: "BG",
        phone: "+359",
        masks: [
            { mask: "0000 000 000", leadingZero: true },
            { mask: "000 000 000" },
        ],
    },
    {
        name: "Burkina Faso",
        code: "BF",
        phone: "+226",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Burundi",
        code: "BI",
        phone: "+257",
        masks: [{ mask: "00 00 0000" }],
    },
    {
        name: "Cambodia",
        code: "KH",
        phone: "+855",
        masks: [
            { mask: "000 000 000", leadingZero: true },
            { mask: "00 000 000" },
        ],
    },
    {
        name: "Cameroon",
        code: "CM",
        phone: "+237",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Canada",
        code: "CA",
        phone: "+1",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Cape Verde",
        code: "CV",
        phone: "+238",
        masks: [{ mask: "000 00 00" }],
    },
    {
        name: "Cayman Islands",
        code: "KY",
        phone: "+1 345",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Central African Republic",
        code: "CF",
        phone: "+236",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Chad",
        code: "TD",
        phone: "+235",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Chile",
        code: "CL",
        phone: "+56",
        masks: [
            { mask: "0000 00000", leadingZero: true },
            { mask: "0000 0000" },
        ],
    },
    {
        name: "China",
        code: "CN",
        phone: "+86",
        masks: [
            { mask: "0000 0000 0000", leadingZero: true },
            { mask: "000 0000 0000" },
        ],
    },
    {
        name: "Christmas Island",
        code: "CX",
        phone: "+61",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Cocos (Keeling) Islands",
        code: "CC",
        phone: "+61",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Colombia",
        code: "CO",
        phone: "+57",
        masks: [
            { mask: "0000 0000000", leadingZero: true },
            { mask: "000 0000000" },
        ],
    },
    {
        name: "Comoros",
        code: "KM",
        phone: "+269",
        masks: [{ mask: "00 00000" }],
    },
    {
        name: "Congo",
        code: "CG",
        phone: "+242",
        masks: [{ mask: "00 000 0000" }],
    },
    {
        name: "Congo, Democratic Republic of the",
        code: "CD",
        phone: "+243",
        masks: [{ mask: "00 000 0000" }],
    },
    {
        name: "Cook Islands",
        code: "CK",
        phone: "+682",
        masks: [{ mask: "00 000" }],
    },
    {
        name: "Costa Rica",
        code: "CR",
        phone: "+506",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Cote D'Ivoire",
        code: "CI",
        phone: "+225",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Croatia",
        code: "HR",
        phone: "+385",
        masks: [
            { mask: "0000 000 000", leadingZero: true },
            { mask: "000 000 000" },
        ],
    },
    { name: "Cuba", code: "CU", phone: "+53", masks: [{ mask: "00 0000000" }] },
    {
        name: "Curacao",
        code: "CW",
        phone: "+599",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Cyprus",
        code: "CY",
        phone: "+357",
        masks: [{ mask: "00 000000" }],
    },
    {
        name: "Czech Republic",
        code: "CZ",
        phone: "+420",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Denmark",
        code: "DK",
        phone: "+45",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Djibouti",
        code: "DJ",
        phone: "+253",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Dominica",
        code: "DM",
        phone: "+1 767",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Dominican Republic",
        code: "DO",
        phone: "+1 809",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Ecuador",
        code: "EC",
        phone: "+593",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Egypt",
        code: "EG",
        phone: "+20",
        masks: [
            { mask: "00000 000 000", leadingZero: true },
            { mask: "0000 000 000" },
        ],
    },
    {
        name: "El Salvador",
        code: "SV",
        phone: "+503",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Equatorial Guinea",
        code: "GQ",
        phone: "+240",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Eritrea",
        code: "ER",
        phone: "+291",
        masks: [{ mask: "0 000 000", leadingZero: true }],
    },
    {
        name: "Estonia",
        code: "EE",
        phone: "+372",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Ethiopia",
        code: "ET",
        phone: "+251",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Falkland Islands (Malvinas)",
        code: "FK",
        phone: "+500",
        masks: [{ mask: "00000" }],
    },
    {
        name: "Faroe Islands",
        code: "FO",
        phone: "+298",
        masks: [{ mask: "000000" }],
    },
    { name: "Fiji", code: "FJ", phone: "+679", masks: [{ mask: "000 0000" }] },
    {
        name: "Finland",
        code: "FI",
        phone: "+358",
        masks: [
            { mask: "0000 0000000", leadingZero: true },
            { mask: "000 0000000" },
        ],
    },
    {
        name: "France",
        code: "FR",
        phone: "+33",
        masks: [
            { mask: "000 00 00 00 00", leadingZero: true },
            { mask: "00 00 00 00 00" },
        ],
    },
    {
        name: "French Guiana",
        code: "GF",
        phone: "+594",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "French Polynesia",
        code: "PF",
        phone: "+689",
        masks: [{ mask: "00 00 00" }],
    },
    {
        name: "French Southern Territories",
        code: "TF",
        phone: "+262",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Gabon",
        code: "GA",
        phone: "+241",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Gambia",
        code: "GM",
        phone: "+220",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "Georgia",
        code: "GE",
        phone: "+995",
        masks: [{ mask: "000 00 00 00" }],
    },
    {
        name: "Germany",
        code: "DE",
        phone: "+49",
        masks: [
            { mask: "00000 0000000", leadingZero: true },
            { mask: "0000 0000000" },
        ],
    },
    {
        name: "Ghana",
        code: "GH",
        phone: "+233",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Gibraltar",
        code: "GI",
        phone: "+350",
        masks: [{ mask: "00000" }],
    },
    {
        name: "Greece",
        code: "GR",
        phone: "+30",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Greenland",
        code: "GL",
        phone: "+299",
        masks: [{ mask: "00 00 00" }],
    },
    {
        name: "Grenada",
        code: "GD",
        phone: "+1 473",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Guadeloupe",
        code: "GP",
        phone: "+590",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Guam",
        code: "GU",
        phone: "+1 671",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Guatemala",
        code: "GT",
        phone: "+502",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Guernsey",
        code: "GG",
        phone: "+44",
        masks: [
            { mask: "00000 000000", leadingZero: true },
            { mask: "0000 000000" },
        ],
    },
    {
        name: "Guinea",
        code: "GN",
        phone: "+224",
        masks: [{ mask: "000 00 00 00" }],
    },
    {
        name: "Guinea-Bissau",
        code: "GW",
        phone: "+245",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "Guyana",
        code: "GY",
        phone: "+592",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Haiti",
        code: "HT",
        phone: "+509",
        masks: [{ mask: "00 00 0000" }],
    },
    {
        name: "Heard Island and McDonald Islands",
        code: "HM",
        phone: "+672",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Holy See (Vatican City State)",
        code: "VA",
        phone: "+39",
        masks: [{ mask: "000 000 0000" }],
    },
    {
        name: "Honduras",
        code: "HN",
        phone: "+504",
        masks: [{ mask: "0000-0000" }],
    },
    {
        name: "Hong Kong",
        code: "HK",
        phone: "+852",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Hungary",
        code: "HU",
        phone: "+36",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Iceland",
        code: "IS",
        phone: "+354",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "India",
        code: "IN",
        phone: "+91",
        masks: [
            { mask: "00000 000000", leadingZero: true },
            { mask: "00000 00000" },
        ],
    },
    {
        name: "Indonesia",
        code: "ID",
        phone: "+62",
        masks: [
            { mask: "00000-000-000", leadingZero: true },
            { mask: "0000-000-000" },
        ],
    },
    {
        name: "Iran, Islamic Republic of",
        code: "IR",
        phone: "+98",
        masks: [
            { mask: "00000 000000", leadingZero: true },
            { mask: "0000 000000" },
        ],
    },
    {
        name: "Iraq",
        code: "IQ",
        phone: "+964",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Ireland",
        code: "IE",
        phone: "+353",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Isle of Man",
        code: "IM",
        phone: "+44",
        masks: [{ mask: "00000 000000", leadingZero: true }],
    },
    {
        name: "Israel",
        code: "IL",
        phone: "+972",
        masks: [
            { mask: "0000-000-0000", leadingZero: true },
            { mask: "000-000-0000" },
        ],
    },
    {
        name: "Italy",
        code: "IT",
        phone: "+39",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Jamaica",
        code: "JM",
        phone: "+1 876",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Japan",
        code: "JP",
        phone: "+81",
        masks: [
            { mask: "0000-0000-0000", leadingZero: true },
            { mask: "00-0000-0000" },
        ],
    },
    {
        name: "Jersey",
        code: "JE",
        phone: "+44",
        masks: [{ mask: "0000 000000", leadingZero: true }],
    },
    {
        name: "Jordan",
        code: "JO",
        phone: "+962",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "0000 0000" },
        ],
    },
    {
        name: "Kazakhstan",
        code: "KZ",
        phone: "+7",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Kenya",
        code: "KE",
        phone: "+254",
        masks: [{ mask: "0000 000000" }],
    },
    { name: "Kiribati", code: "KI", phone: "+686", masks: [{ mask: "00000" }] },
    {
        name: "Korea, Democratic People's Republic of",
        code: "KP",
        phone: "+850",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Korea, Republic of",
        code: "KR",
        phone: "+82",
        masks: [
            { mask: "0000-0000-0000", leadingZero: true },
            { mask: "000-0000-0000" },
        ],
    },
    {
        name: "Kosovo",
        code: "XK",
        phone: "+383",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Kuwait",
        code: "KW",
        phone: "+965",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Kyrgyzstan",
        code: "KG",
        phone: "+996",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Lao People's Democratic Republic",
        code: "LA",
        phone: "+856",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Latvia",
        code: "LV",
        phone: "+371",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Lebanon",
        code: "LB",
        phone: "+961",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Lesotho",
        code: "LS",
        phone: "+266",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Liberia",
        code: "LR",
        phone: "+231",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Libyan Arab Jamahiriya",
        code: "LY",
        phone: "+218",
        masks: [{ mask: "000-0000000" }],
    },
    {
        name: "Liechtenstein",
        code: "LI",
        phone: "+423",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "Lithuania",
        code: "LT",
        phone: "+370",
        masks: [{ mask: "000 00 000" }],
    },
    {
        name: "Luxembourg",
        code: "LU",
        phone: "+352",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Macao",
        code: "MO",
        phone: "+853",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Macedonia, the Former Yugoslav Republic of",
        code: "MK",
        phone: "+389",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Madagascar",
        code: "MG",
        phone: "+261",
        masks: [{ mask: "00 00 000 00" }],
    },
    {
        name: "Malawi",
        code: "MW",
        phone: "+265",
        masks: [{ mask: "000 00 00 00" }],
    },
    {
        name: "Malaysia",
        code: "MY",
        phone: "+60",
        masks: [
            { mask: "0000-000 0000", leadingZero: true },
            { mask: "000-000 0000" },
        ],
    },
    {
        name: "Maldives",
        code: "MV",
        phone: "+960",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Mali",
        code: "ML",
        phone: "+223",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Malta",
        code: "MT",
        phone: "+356",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Marshall Islands",
        code: "MH",
        phone: "+692",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Martinique",
        code: "MQ",
        phone: "+596",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Mauritania",
        code: "MR",
        phone: "+222",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Mauritius",
        code: "MU",
        phone: "+230",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Mayotte",
        code: "YT",
        phone: "+262",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Mexico",
        code: "MX",
        phone: "+52",
        masks: [
            { mask: "00000 0000 0000", leadingZero: true },
            { mask: "0000 0000 0000" },
        ],
    },
    {
        name: "Micronesia, Federated States of",
        code: "FM",
        phone: "+691",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "Moldova, Republic of",
        code: "MD",
        phone: "+373",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Monaco",
        code: "MC",
        phone: "+377",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Mongolia",
        code: "MN",
        phone: "+976",
        masks: [{ mask: "00 00 0000" }],
    },
    {
        name: "Montenegro",
        code: "ME",
        phone: "+382",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Montserrat",
        code: "MS",
        phone: "+1 664",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Morocco",
        code: "MA",
        phone: "+212",
        masks: [
            { mask: "00000-000000", leadingZero: true },
            { mask: "0000-000000" },
        ],
    },
    {
        name: "Mozambique",
        code: "MZ",
        phone: "+258",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Myanmar",
        code: "MM",
        phone: "+95",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "Namibia",
        code: "NA",
        phone: "+264",
        masks: [{ mask: "000 000 0000" }],
    },
    { name: "Nauru", code: "NR", phone: "+674", masks: [{ mask: "000 0000" }] },
    {
        name: "Nepal",
        code: "NP",
        phone: "+977",
        masks: [{ mask: "000-0000000" }],
    },
    {
        name: "Netherlands",
        code: "NL",
        phone: "+31",
        masks: [
            { mask: "0000 00000000", leadingZero: true },
            { mask: "000 00000000" },
        ],
    },
    {
        name: "Netherlands Antilles",
        code: "AN",
        phone: "+599",
        masks: [{ mask: "000-0000" }],
    },
    {
        name: "New Caledonia",
        code: "NC",
        phone: "+687",
        masks: [{ mask: "00 00 00" }],
    },
    {
        name: "New Zealand",
        code: "NZ",
        phone: "+64",
        masks: [
            { mask: "0000-000-0000", leadingZero: true },
            { mask: "000-000-0000" },
        ],
    },
    {
        name: "Nicaragua",
        code: "NI",
        phone: "+505",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Niger",
        code: "NE",
        phone: "+227",
        masks: [{ mask: "00 00 00 00" }],
    },
    {
        name: "Nigeria",
        code: "NG",
        phone: "+234",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    { name: "Niue", code: "NU", phone: "+683", masks: [{ mask: "0000" }] },
    {
        name: "Norfolk Island",
        code: "NF",
        phone: "+672",
        masks: [{ mask: "000 000" }],
    },
    {
        name: "Northern Mariana Islands",
        code: "MP",
        phone: "+1 670",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Norway",
        code: "NO",
        phone: "+47",
        masks: [{ mask: "000 00 000" }],
    },
    { name: "Oman", code: "OM", phone: "+968", masks: [{ mask: "0000 0000" }] },
    {
        name: "Pakistan",
        code: "PK",
        phone: "+92",
        masks: [
            { mask: "00000 0000000", leadingZero: true },
            { mask: "0000 0000000" },
        ],
    },
    { name: "Palau", code: "PW", phone: "+680", masks: [{ mask: "000-0000" }] },
    {
        name: "Palestinian Territory, Occupied",
        code: "PS",
        phone: "+970",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Panama",
        code: "PA",
        phone: "+507",
        masks: [{ mask: "0000-0000" }],
    },
    {
        name: "Papua New Guinea",
        code: "PG",
        phone: "+675",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Paraguay",
        code: "PY",
        phone: "+595",
        masks: [{ mask: "0000 000000" }],
    },
    {
        name: "Peru",
        code: "PE",
        phone: "+51",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Philippines",
        code: "PH",
        phone: "+63",
        masks: [
            { mask: "00000 000 0000", leadingZero: true },
            { mask: "0000 000 0000" },
        ],
    },
    { name: "Pitcairn", code: "PN", phone: "+64", masks: [{ mask: "0000" }] },
    {
        name: "Poland",
        code: "PL",
        phone: "+48",
        masks: [
            { mask: "0000-000-000", leadingZero: true },
            { mask: "000-000-000" },
        ],
    },
    {
        name: "Portugal",
        code: "PT",
        phone: "+351",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Puerto Rico",
        code: "PR",
        phone: "+1 787",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Qatar",
        code: "QA",
        phone: "+974",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Reunion",
        code: "RE",
        phone: "+262",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Romania",
        code: "RO",
        phone: "+40",
        masks: [
            { mask: "00000 000 000", leadingZero: true },
            { mask: "0000 000 000" },
        ],
    },
    {
        name: "Russian Federation",
        code: "RU",
        phone: "+7",
        masks: [
            { mask: "0000 000-00-00", leadingZero: true },
            { mask: "000 000-00-00" },
        ],
    },
    {
        name: "Rwanda",
        code: "RW",
        phone: "+250",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Saint Barthelemy",
        code: "BL",
        phone: "+590",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Saint Helena",
        code: "SH",
        phone: "+290",
        masks: [{ mask: "00000" }],
    },
    {
        name: "Saint Kitts and Nevis",
        code: "KN",
        phone: "+1 869",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Saint Lucia",
        code: "LC",
        phone: "+1 758",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Saint Martin",
        code: "MF",
        phone: "+590",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Saint Pierre and Miquelon",
        code: "PM",
        phone: "+508",
        masks: [{ mask: "000 000" }],
    },
    {
        name: "Saint Vincent and the Grenadines",
        code: "VC",
        phone: "+1 784",
        masks: [{ mask: "(000) 000-0000" }],
    },
    { name: "Samoa", code: "WS", phone: "+685", masks: [{ mask: "000-0000" }] },
    {
        name: "San Marino",
        code: "SM",
        phone: "+378",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Sao Tome and Principe",
        code: "ST",
        phone: "+239",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "Saudi Arabia",
        code: "SA",
        phone: "+966",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Senegal",
        code: "SN",
        phone: "+221",
        masks: [{ mask: "00 000 00 00" }],
    },
    {
        name: "Serbia",
        code: "RS",
        phone: "+381",
        masks: [
            { mask: "0000 0000000", leadingZero: true },
            { mask: "000 0000000" },
        ],
    },
    {
        name: "Serbia and Montenegro",
        code: "CS",
        phone: "+381",
        masks: [{ mask: "000 0000000" }],
    },
    {
        name: "Seychelles",
        code: "SC",
        phone: "+248",
        masks: [{ mask: "000 0000" }],
    },
    {
        name: "Sierra Leone",
        code: "SL",
        phone: "+232",
        masks: [{ mask: "00 000000" }],
    },
    {
        name: "Singapore",
        code: "SG",
        phone: "+65",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Sint Maarten",
        code: "SX",
        phone: "+1 721",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Slovakia",
        code: "SK",
        phone: "+421",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Slovenia",
        code: "SI",
        phone: "+386",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Solomon Islands",
        code: "SB",
        phone: "+677",
        masks: [{ mask: "00000" }],
    },
    {
        name: "Somalia",
        code: "SO",
        phone: "+252",
        masks: [{ mask: "00 000000" }],
    },
    {
        name: "South Africa",
        code: "ZA",
        phone: "+27",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        code: "GS",
        phone: "+500",
        masks: [{ mask: "00000" }],
    },
    {
        name: "South Sudan",
        code: "SS",
        phone: "+211",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Spain",
        code: "ES",
        phone: "+34",
        masks: [
            { mask: "0000 00 00 00", leadingZero: true },
            { mask: "000 00 00 00" },
        ],
    },
    {
        name: "Sri Lanka",
        code: "LK",
        phone: "+94",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Sudan",
        code: "SD",
        phone: "+249",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "Suriname",
        code: "SR",
        phone: "+597",
        masks: [{ mask: "000-000" }],
    },
    {
        name: "Svalbard and Jan Mayen",
        code: "SJ",
        phone: "+47",
        masks: [{ mask: "000 00 000" }],
    },
    {
        name: "Swaziland",
        code: "SZ",
        phone: "+268",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Sweden",
        code: "SE",
        phone: "+46",
        masks: [
            { mask: "0000-000 00 00", leadingZero: true },
            { mask: "000-000 00 00" },
        ],
    },
    {
        name: "Switzerland",
        code: "CH",
        phone: "+41",
        masks: [{ mask: "000 000 00 00" }],
    },
    {
        name: "Syrian Arab Republic",
        code: "SY",
        phone: "+963",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Taiwan, Province of China",
        code: "TW",
        phone: "+886",
        masks: [
            { mask: "00000 000 000", leadingZero: true },
            { mask: "0000 000 000" },
        ],
    },
    {
        name: "Tajikistan",
        code: "TJ",
        phone: "+992",
        masks: [{ mask: "00 000 0000" }],
    },
    {
        name: "Tanzania, United Republic of",
        code: "TZ",
        phone: "+255",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Thailand",
        code: "TH",
        phone: "+66",
        masks: [
            { mask: "0000-000-0000", leadingZero: true },
            { mask: "000-000-0000" },
        ],
    },
    {
        name: "Timor-Leste",
        code: "TL",
        phone: "+670",
        masks: [{ mask: "0000 0000" }],
    },
    {
        name: "Togo",
        code: "TG",
        phone: "+228",
        masks: [{ mask: "00 00 00 00" }],
    },
    { name: "Tokelau", code: "TK", phone: "+690", masks: [{ mask: "0000" }] },
    { name: "Tonga", code: "TO", phone: "+676", masks: [{ mask: "00000" }] },
    {
        name: "Trinidad and Tobago",
        code: "TT",
        phone: "+1 868",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Tunisia",
        code: "TN",
        phone: "+216",
        masks: [{ mask: "00 000 000" }],
    },
    {
        name: "Turkey",
        code: "TR",
        phone: "+90",
        masks: [
            { mask: "0000 000 00 00", leadingZero: true },
            { mask: "000 000 00 00" },
        ],
    },
    {
        name: "Turkmenistan",
        code: "TM",
        phone: "+993",
        masks: [{ mask: "0 000000", leadingZero: true }],
    },
    {
        name: "Turks and Caicos Islands",
        code: "TC",
        phone: "+1 649",
        masks: [{ mask: "(000) 000-0000" }],
    },
    { name: "Tuvalu", code: "TV", phone: "+688", masks: [{ mask: "00000" }] },
    {
        name: "Uganda",
        code: "UG",
        phone: "+256",
        masks: [{ mask: "0000 000000" }],
    },
    {
        name: "Ukraine",
        code: "UA",
        phone: "+380",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "000 000 0000" },
        ],
    },
    {
        name: "United Arab Emirates",
        code: "AE",
        phone: "+971",
        masks: [{ mask: "000 000 0000" }],
    },
    {
        name: "United Kingdom",
        code: "GB",
        phone: "+44",
        masks: [
            { mask: "0000 000 0000", leadingZero: true },
            { mask: "0000 000 000" },
            { mask: "00000 000000" },
        ],
    },
    {
        name: "United States",
        code: "US",
        phone: "+1",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "United States Minor Outlying Islands",
        code: "UM",
        phone: "+1",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Uruguay",
        code: "UY",
        phone: "+598",
        masks: [{ mask: "000 000 00" }],
    },
    {
        name: "Uzbekistan",
        code: "UZ",
        phone: "+998",
        masks: [{ mask: "00 000 0000" }],
    },
    { name: "Vanuatu", code: "VU", phone: "+678", masks: [{ mask: "00000" }] },
    {
        name: "Venezuela",
        code: "VE",
        phone: "+58",
        masks: [{ mask: "0000-0000000" }],
    },
    {
        name: "Viet Nam",
        code: "VN",
        phone: "+84",
        masks: [{ mask: "0000 000 000" }],
    },
    {
        name: "Virgin Islands, British",
        code: "VG",
        phone: "+1 284",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Virgin Islands, U.s.",
        code: "VI",
        phone: "+1 340",
        masks: [{ mask: "(000) 000-0000" }],
    },
    {
        name: "Wallis and Futuna",
        code: "WF",
        phone: "+681",
        masks: [{ mask: "00 00 00" }],
    },
    {
        name: "Western Sahara",
        code: "EH",
        phone: "+212",
        masks: [{ mask: "0000-000000" }],
    },
    {
        name: "Yemen",
        code: "YE",
        phone: "+967",
        masks: [{ mask: "000 000 000" }],
    },
    {
        name: "Zambia",
        code: "ZM",
        phone: "+260",
        masks: [{ mask: "000 0000000" }],
    },
    {
        name: "Zimbabwe",
        code: "ZW",
        phone: "+263",
        masks: [{ mask: "000 000 000" }],
    },
];

async function loadCountries(optionList, onClick) {
    let selectedOption;
    const searchMap = [];
    for (let country of countries) {
        const option = document.createElement("li");
        option.classList.add("option");
        option.tabIndex = 0;
        option.role = "option";
        option.ariaSelected = false;
        option.innerHTML = `<div>
                                <span
                                    class="iconify flag"
                                    data-icon="flag:${country.code.toLowerCase()}-4x3"
                                ></span>
                                <span class="country-name">${
                                    country.name
                                } <strong>(${country.phone})</strong></span>
                            </div>
                            <span
                                class="iconify check"
                                data-icon="material-symbols:check-small-rounded"
                            ></span>`;
        optionList.appendChild(option);
        option.addEventListener("click", () => {
            option.ariaSelected = true;
            if (selectedOption) selectedOption.ariaSelected = false;
            selectedOption = option;
            onClick(option, country);
        });
        searchMap.push({ data: country, el: option });
    }
    return searchMap;
}

function openOptions(options) {
    const trigger = options.parentElement.querySelector(".select-trigger");
    trigger.classList.toggle("open");
    const isOpen = trigger.classList.contains("open");
    trigger.ariaExpanded = isOpen;
    if (isOpen)
        options.querySelector(
            ".icon"
        ).innerHTML = `<span class="iconify" data-icon="line-md:search"></span>`;
    options.classList.toggle("active");
    options.querySelector("input").focus();
}
function closeOptions(options) {
    const trigger = options.parentElement.querySelector(".select-trigger");

    trigger.classList.remove("open");
    trigger.ariaExpanded = false;
    options.classList.remove("active");
}

function normaliseInput(input) {
    return input.replace(/[\s]/, "").replace("(", "").replace(")", "");
}

async function getCountryCode(fallback = "NG") {
    try {
        const data = await fetch("https://ipinfo.io/country");
        return (await data.text()).trim();
    } catch {
        return fallback;
    }
}

document.querySelectorAll(".phone-input").forEach(async (phoneInput) => {
    const inputElement = phoneInput.querySelector(".phone");
    const inputControl = phoneInput.querySelector(".input-control");
    const trigger = phoneInput.querySelector(".select-trigger");
    const options = phoneInput.querySelector(".options");
    const optionsSearchBox = options.querySelector(".search-box");
    const optionList = options.querySelector("ol");

    let inputMask;

    const applyMask = () => {
        inputMask.resolve(inputElement.value);
        inputElement.value = inputMask.value;
    };

    const loadCountry = (country) => {
        trigger.querySelector(
            ".flag"
        ).dataset.icon = `flag:${country.code.toLowerCase()}-4x3`;

        const countryCode = country.phone.split(" ")[0];
        inputControl.dataset.code = countryCode;
        phoneInput.dataset.country = countryCode;
        const dispacthFunction = (appended, dynamicMasked) => {
            const phoneNumber = (dynamicMasked.value + appended).replace(
                /\D/g,
                ""
            );
            return dynamicMasked.compiledMasks.find((m) => {
                if (phoneNumber.startsWith("0")) {
                    return m.leadingZero === true;
                } else {
                    return !m.leadingZero; // covers false or undefined
                }
            });
        };
        if (inputMask) {
            inputMask.updateOptions({ mask: country.masks });
        } else
            inputMask = IMask.createMask({
                mask: country.masks,
                dispatch: dispacthFunction,
            });
    };
    const selectOption = (_, country) => {
        loadCountry(country);
        const areaCode = country.phone.split(" ")[1];
        if (areaCode) {
            inputElement.value = areaCode + " " + inputElement.value;
            applyMask();
        }
        closeOptions(options);
    };

    inputElement.addEventListener("input", () => {
        const currentCountryCode = inputControl.dataset.code;
        const country = countries.filter((c) => {
            const [_, areaCode] = c.phone.split(" ");
            return (
                c.phone ===
                    normaliseInput(inputElement.value).substring(0, 5) ||
                (["+1"].includes(currentCountryCode) &&
                    areaCode ===
                        normaliseInput(inputElement.value).substring(0, 4))
            ); // area code
        })[0];

        console.log(country, normaliseInput(inputElement.value));
        if (country) {
            console.log(country.phone);
            inputElement.value = normaliseInput(inputElement.value).replace(
                country.phone.split(" ")[0],
                ""
            );
            loadCountry(country);
        }
        if (!inputElement.value.startsWith("+")) applyMask();
        phoneInput.dataset.value = inputMask.unmaskedValue;
        phoneInput.dataset.country = countryCode;
    });
    inputElement.addEventListener("focusout", () => {
        inputElement.value = normaliseInput(inputElement.value).replace(
            /^0/,
            ""
        );
        applyMask();
        phoneInput.dataset.value = inputMask.unmaskedValue;
        phoneInput.dataset.country = countryCode;
    });

    phoneInput.addEventListener("focusout", () => {
        setTimeout(() => {
            if (!phoneInput.contains(document.activeElement))
                closeOptions(options);
        }, 0);
    });
    const searchMap = await loadCountries(optionList, selectOption);

    const handleEscape = (event) => {
        if (
            event.key === "Escape" &&
            options.classList.contains("active") &&
            phoneInput.contains(document.activeElement)
        ) {
            closeOptions(options);
        }
    };
    document.addEventListener("keydown", handleEscape);
    trigger.addEventListener("click", () => openOptions(options));
    const countryCode = await getCountryCode();
    console.log(countryCode);
    const country = countries.filter((country) => {
        return country.code == countryCode;
    })[0];
    console.log(country);
    loadCountry(country);
    const fuse = new Fuse(searchMap, {
        includeMatches: true,
        keys: ["data.name", "data.code", "data.phone"],
    });
    optionsSearchBox.addEventListener("input", () => {
        const query = optionsSearchBox.value.trim();
        const searchResults = query
            ? fuse.search(query)
            : searchMap.map((entry) => new Object({ item: entry }));
        console.log(searchResults);
        const filtered = searchResults.map((res) => res.item);
        optionList.innerHTML = "";
        for (const { el } of filtered) {
            optionList.appendChild(el);
        }
    });
});
