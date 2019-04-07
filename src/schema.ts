interface Error {
  attribute: string; // the parameter that caused an error
  code: string; // for programmatic consumption
  message: string; // for human consumption
}

interface Errors {
  for(leve: string): Errors; // ?
  forIndex(index: number): Errors; // ?
  on(attribute: string): Errors; // ?
}

interface Result {
  success: boolean;
  errors: Errors;
  params: object; // Include parameters that was submitted
}

type countryCodeAlpha2 = 'AF'|'AX'|'AL'|'DZ'|'AS'|'AD'|'AO'|'AI'|'AQ'|'AG'|'AR'|'AM'|'AW'|'AU'|'AT'|'AZ'|'BS'|'BH'|'BD'|'BB'|'BY'|'BE'|'BZ'|'BJ'|'BM'|'BT'|'BO'|'BQ'|'BA'|'BW'|'BV'|'BR'|'IO'|'BN'|'BG'|'BF'|'BI'|'KH'|'CM'|'CA'|'CV'|'KY'|'CF'|'TD'|'CL'|'CN'|'CX'|'CC'|'CO'|'KM'|'CG'|'CD'|'CK'|'CR'|'CI'|'HR'|'CU'|'CW'|'CY'|'CZ'|'DK'|'DJ'|'DM'|'DO'|'EC'|'EG'|'SV'|'GQ'|'ER'|'EE'|'ET'|'FK'|'FO'|'FJ'|'FI'|'FR'|'GF'|'PF'|'TF'|'GA'|'GM'|'GE'|'DE'|'GH'|'GI'|'GR'|'GL'|'GD'|'GP'|'GU'|'GT'|'GG'|'GN'|'GW'|'GY'|'HT'|'HM'|'HN'|'HK'|'HU'|'IS'|'IN'|'ID'|'IR'|'IQ'|'IE'|'IM'|'IL'|'IT'|'JM'|'JP'|'JE'|'JO'|'KZ'|'KE'|'KI'|'KP'|'KR'|'KW'|'KG'|'LA'|'LV'|'LB'|'LS'|'LR'|'LY'|'LI'|'LT'|'LU'|'MO'|'MK'|'MG'|'MW'|'MY'|'MV'|'ML'|'MT'|'MH'|'MQ'|'MR'|'MU'|'YT'|'MX'|'FM'|'MD'|'MC'|'MN'|'ME'|'MS'|'MA'|'MZ'|'MM'|'NA'|'NR'|'NP'|'NL'|'AN'|'NC'|'NZ'|'NI'|'NE'|'NG'|'NU'|'NF'|'MP'|'NO'|'OM'|'PK'|'PW'|'PS'|'PA'|'PG'|'PY'|'PE'|'PH'|'PN'|'PL'|'PT'|'PR'|'QA'|'RE'|'RO'|'RU'|'RW'|'BL'|'SH'|'KN'|'LC'|'MF'|'PM'|'VC'|'WS'|'SM'|'ST'|'SA'|'SN'|'RS'|'SC'|'SL'|'SG'|'SX'|'SK'|'SI'|'SB'|'SO'|'ZA'|'GS'|'SS'|'ES'|'LK'|'SD'|'SR'|'SJ'|'SZ'|'SE'|'CH'|'SY'|'TW'|'TJ'|'TZ'|'TH'|'TL'|'TG'|'TK'|'TO'|'TT'|'TN'|'TR'|'TM'|'TC'|'TV'|'UG'|'UA'|'AE'|'GB'|'UM'|'US'|'UY'|'UZ'|'VU'|'VA'|'VE'|'VN'|'VG'|'VI'|'WF'|'EH'|'YE'|'ZM'|'ZW';

type countryCodeAlpha3 = 'AFG'|'ALA'|'ALB'|'DZA'|'ASM'|'AND'|'AGO'|'AIA'|'ATA'|'ATG'|'ARG'|'ARM'|'ABW'|'AUS'|'AUT'|'AZE'|'BHS'|'BHR'|'BGD'|'BRB'|'BLR'|'BEL'|'BLZ'|'BEN'|'BMU'|'BTN'|'BOL'|'BES'|'BIH'|'BWA'|'BVT'|'BRA'|'IOT'|'BRN'|'BGR'|'BFA'|'BDI'|'KHM'|'CMR'|'CAN'|'CPV'|'CYM'|'CAF'|'TCD'|'CHL'|'CHN'|'CXR'|'CCK'|'COL'|'COM'|'COG'|'COD'|'COK'|'CRI'|'CIV'|'HRV'|'CUB'|'CUW'|'CYP'|'CZE'|'DNK'|'DJI'|'DMA'|'DOM'|'ECU'|'EGY'|'SLV'|'GNQ'|'ERI'|'EST'|'ETH'|'FLK'|'FRO'|'FJI'|'FIN'|'FRA'|'GUF'|'PYF'|'ATF'|'GAB'|'GMB'|'GEO'|'DEU'|'GHA'|'GIB'|'GRC'|'GRL'|'GRD'|'GLP'|'GUM'|'GTM'|'GGY'|'GIN'|'GNB'|'GUY'|'HTI'|'HMD'|'HND'|'HKG'|'HUN'|'ISL'|'IND'|'IDN'|'IRN'|'IRQ'|'IRL'|'IMN'|'ISR'|'ITA'|'JAM'|'JPN'|'JEY'|'JOR'|'KAZ'|'KEN'|'KIR'|'PRK'|'KOR'|'KWT'|'KGZ'|'LAO'|'LVA'|'LBN'|'LSO'|'LBR'|'LBY'|'LIE'|'LTU'|'LUX'|'MAC'|'MKD'|'MDG'|'MWI'|'MYS'|'MDV'|'MLI'|'MLT'|'MHL'|'MTQ'|'MRT'|'MUS'|'MYT'|'MEX'|'FSM'|'MDA'|'MCO'|'MNG'|'MNE'|'MSR'|'MAR'|'MOZ'|'MMR'|'NAM'|'NRU'|'NPL'|'NLD'|'ANT'|'NCL'|'NZL'|'NIC'|'NER'|'NGA'|'NIU'|'NFK'|'MNP'|'NOR'|'OMN'|'PAK'|'PLW'|'PSE'|'PAN'|'PNG'|'PRY'|'PER'|'PHL'|'PCN'|'POL'|'PRT'|'PRI'|'QAT'|'REU'|'ROU'|'RUS'|'RWA'|'BLM'|'SHN'|'KNA'|'LCA'|'MAF'|'SPM'|'VCT'|'WSM'|'SMR'|'STP'|'SAU'|'SEN'|'SRB'|'SYC'|'SLE'|'SGP'|'SXM'|'SVK'|'SVN'|'SLB'|'SOM'|'ZAF'|'SGS'|'SSD'|'ESP'|'LKA'|'SDN'|'SUR'|'SJM'|'SWZ'|'SWE'|'CHE'|'SYR'|'TWN'|'TJK'|'TZA'|'THA'|'TLS'|'TGO'|'TKL'|'TON'|'TTO'|'TUN'|'TUR'|'TKM'|'TCA'|'TUV'|'UGA'|'UKR'|'ARE'|'GBR'|'UMI'|'USA'|'URY'|'UZB'|'VUT'|'VAT'|'VEN'|'VNM'|'VGB'|'VIR'|'WLF'|'ESH'|'YEM'|'ZMB'|'ZWE';

type countryCodeNumeric = '4'|'248'|'8'|'12'|'16'|'20'|'24'|'660'|'10'|'28'|'32'|'51'|'533'|'36'|'40'|'31'|'44'|'48'|'50'|'52'|'112'|'56'|'84'|'204'|'60'|'64'|'68'|'535'|'70'|'72'|'74'|'76'|'86'|'96'|'100'|'854'|'108'|'116'|'120'|'124'|'132'|'136'|'140'|'148'|'152'|'156'|'162'|'166'|'170'|'174'|'178'|'180'|'184'|'188'|'384'|'191'|'192'|'531'|'196'|'203'|'208'|'262'|'212'|'214'|'218'|'818'|'222'|'226'|'232'|'233'|'231'|'238'|'234'|'242'|'246'|'250'|'254'|'258'|'260'|'266'|'270'|'268'|'276'|'288'|'292'|'300'|'304'|'308'|'312'|'316'|'320'|'831'|'324'|'624'|'328'|'332'|'334'|'340'|'344'|'348'|'352'|'356'|'360'|'364'|'368'|'372'|'833'|'376'|'380'|'388'|'392'|'832'|'400'|'398'|'404'|'296'|'408'|'410'|'414'|'417'|'418'|'428'|'422'|'426'|'430'|'434'|'438'|'440'|'442'|'446'|'807'|'450'|'454'|'458'|'462'|'466'|'470'|'584'|'474'|'478'|'480'|'175'|'484'|'583'|'498'|'492'|'496'|'499'|'500'|'504'|'508'|'104'|'516'|'520'|'524'|'528'|'530'|'540'|'554'|'558'|'562'|'566'|'570'|'574'|'580'|'578'|'512'|'586'|'585'|'275'|'591'|'598'|'600'|'604'|'608'|'612'|'616'|'620'|'630'|'634'|'638'|'642'|'643'|'646'|'652'|'654'|'659'|'662'|'663'|'666'|'670'|'882'|'674'|'678'|'682'|'686'|'688'|'690'|'694'|'702'|'534'|'703'|'705'|'90'|'706'|'710'|'239'|'728'|'724'|'144'|'736'|'740'|'744'|'748'|'752'|'756'|'760'|'158'|'762'|'834'|'764'|'626'|'768'|'772'|'776'|'780'|'788'|'792'|'795'|'796'|'798'|'800'|'804'|'784'|'826'|'581'|'840'|'858'|'860'|'548'|'336'|'862'|'704'|'92'|'850'|'876'|'732'|'887'|'894'|'716';

type countryName = 'Afghanistan'|'Åland'|'Albania'|'Algeria'|'American Samoa'|'Andorra'|'Angola'|'Anguilla'|'Antarctica'|'Antigua and Barbuda'|'Argentina'|'Armenia'|'Aruba'|'Australia'|'Austria'|'Azerbaijan'|'Bahamas'|'Bahrain'|'Bangladesh'|'Barbados'|'Belarus'|'Belgium'|'Belize'|'Benin'|'Bermuda'|'Bhutan'|'Bolivia'|'Bonaire, Sint Eustatius and Saba'|'Bosnia and Herzegovina'|'Botswana'|'Bouvet Island'|'Brazil'|'British Indian Ocean Territory'|'Brunei Darussalam'|'Bulgaria'|'Burkina Faso'|'Burundi'|'Cambodia'|'Cameroon'|'Canada'|'Cape Verde'|'Cayman Islands'|'Central African Republic'|'Chad'|'Chile'|'China'|'Christmas Island'|'Cocos (Keeling) Islands'|'Colombia'|'Comoros'|'Congo (Brazzaville)'|'Congo (Kinshasa)'|'Cook Islands'|'Costa Rica'|'Côte d\'Ivoire'|'Croatia'|'Cuba'|'Curaçao'|'Cyprus'|'Czech Republic'|'Denmark'|'Djibouti'|'Dominica'|'Dominican Republic'|'Ecuador'|'Egypt'|'El Salvador'|'Equatorial Guinea'|'Eritrea'|'Estonia'|'Ethiopia'|'Falkland Islands'|'Faroe Islands'|'Fiji'|'Finland'|'France'|'French Guiana'|'French Polynesia'|'French Southern Lands'|'Gabon'|'Gambia'|'Georgia'|'Germany'|'Ghana'|'Gibraltar'|'Greece'|'Greenland'|'Grenada'|'Guadeloupe'|'Guam'|'Guatemala'|'Guernsey'|'Guinea'|'Guinea-Bissau'|'Guyana'|'Haiti'|'Heard and McDonald Islands'|'Honduras'|'Hong Kong'|'Hungary'|'Iceland'|'India'|'Indonesia'|'Iran'|'Iraq'|'Ireland'|'Isle of Man'|'Israel'|'Italy'|'Jamaica'|'Japan'|'Jersey'|'Jordan'|'Kazakhstan'|'Kenya'|'Kiribati'|'Korea, North'|'Korea, South'|'Kuwait'|'Kyrgyzstan'|'Laos'|'Latvia'|'Lebanon'|'Lesotho'|'Liberia'|'Libya'|'Liechtenstein'|'Lithuania'|'Luxembourg'|'Macau'|'Macedonia'|'Madagascar'|'Malawi'|'Malaysia'|'Maldives'|'Mali'|'Malta'|'Marshall Islands'|'Martinique'|'Mauritania'|'Mauritius'|'Mayotte'|'Mexico'|'Micronesia'|'Moldova'|'Monaco'|'Mongolia'|'Montenegro'|'Montserrat'|'Morocco'|'Mozambique'|'Myanmar'|'Namibia'|'Nauru'|'Nepal'|'Netherlands'|'Netherlands Antilles'|'New Caledonia'|'New Zealand'|'Nicaragua'|'Niger'|'Nigeria'|'Niue'|'Norfolk Island'|'Northern Mariana Islands'|'Norway'|'Oman'|'Pakistan'|'Palau'|'Palestine'|'Panama'|'Papua New Guinea'|'Paraguay'|'Peru'|'Philippines'|'Pitcairn'|'Poland'|'Portugal'|'Puerto Rico'|'Qatar'|'Reunion'|'Romania'|'Russian Federation'|'Rwanda'|'Saint Barthélemy'|'Saint Helena'|'Saint Kitts and Nevis'|'Saint Lucia'|'Saint Martin (French part)'|'Saint Pierre and Miquelon'|'Saint Vincent and the Grenadines'|'Samoa'|'San Marino'|'Sao Tome and Principe'|'Saudi Arabia'|'Senegal'|'Serbia'|'Seychelles'|'Sierra Leone'|'Singapore'|'Sint Maarten (Dutch part)'|'Slovakia'|'Slovenia'|'Solomon Islands'|'Somalia'|'South Africa'|'South Georgia and South Sandwich Islands'|'South Sudan'|'Spain'|'Sri Lanka'|'Sudan'|'Suriname'|'Svalbard and Jan Mayen Islands'|'Swaziland'|'Sweden'|'Switzerland'|'Syria'|'Taiwan'|'Tajikistan'|'Tanzania'|'Thailand'|'Timor-Leste'|'Togo'|'Tokelau'|'Tonga'|'Trinidad and Tobago'|'Tunisia'|'Turkey'|'Turkmenistan'|'Turks and Caicos Islands'|'Tuvalu'|'Uganda'|'Ukraine'|'United Arab Emirates'|'United Kingdom'|'United States Minor Outlying Islands'|'United States of America'|'Uruguay'|'Uzbekistan'|'Vanuatu'|'Vatican City'|'Venezuela'|'Vietnam'|'Virgin Islands, British'|'Virgin Islands, U.S.'|'Wallis and Futuna Islands'|'Western Sahara'|'Yemen'|'Zambia'|'Zimbabwe';

type postalCode = 

interface AddressCreationObject {
  company?: string; // Company name
  countryCodeAlpha2?: countryCodeAlpha2; // The ISO 3166-1 alpha-2 country code specified in an address
  countryCodeAlpha3?: countryCodeAlpha3; // The ISO 3166-1 alpha-2 country code specified in an address
  countryCodeNumeric?: countryCodeNumeric; // The ISO 3166-1 numeric country code specified in an address
  countryName?: countryName; // The country name specified in an address.
  customerId: string; // an existing customer in your Vault that owns this address
  extendedAddress?: string; // The extended address information—such as apartment or suite number
  firstName?: string;
  lastName?: string;
  locality?: string; // The locality/city
  postalCode?: string; // The postal code
  region?: string; // The state or province
  streetAddress?: string; // The street address
  updatedAt?: Date; // The date/time the object was last updated
}

interface Address extends AddressCreationObject {
  createdAt: Date; // The date/time the object was created.
  id: string; // The two-letter value for an address associated with a specific customer ID. The maximum number of addresses per customer is 50
}

interface AddressResponseObject extends Result, Address {
  address: Address;
}

interface PaymentMethod {
  billingAddress: object;
}

interface CustomerRequestInformation {
  customerBrowser: string; // The User Agent field provided by the customer
  customerIp: string;
}

interface CustomerCreationObject {
  company?: string; // Company name. Maximum 255 characters
  creditCard?: PaymentMethod;
  customFields?: object;
  deviceData?: string;
  email?: string;
  fax?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  paymentMethodNonce?: string;
  phone?: string;
  riskData?: CustomerRequestInformation;
  website?: string; // Website URL. Must be less than or equal to 255 characters. Website must be well-formed. The URL scheme is optional
}

interface Customer extends CustomerCreationObject {
  id: string;
}

interface CustomerResponseObject extends Result {
  customer: Customer;
}

export {
  Error,
  Errors,
  Result,
  countryCodeAlpha2,
  countryCodeAlpha3,
  countryCodeNumeric,
  countryName,
  AddressCreationObject,
  Address,
  AddressResponseObject,
  PaymentMethod,
  CustomerRequestInformation,
  CustomerCreationObject,
  Customer,
  CustomerResponseObject,
};
