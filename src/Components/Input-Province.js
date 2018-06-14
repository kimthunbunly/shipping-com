import React from 'react';

export default class Province extends React.Component{
  render(){
    return(

      <div className="control-group">
   <div className="controls">
       <select id="country" name="country" className="form-control">
           <option defaultValue="" selecte="selecte">(please select a province)</option>
           <option defaultValue="AF">Afghanistan</option>
           <option defaultValue="AL">Albania</option>
           <option defaultValue="DZ">Algeria</option>
           <option defaultValue="AS">American Samoa</option>
           <option defaultValue="AD">Andorra</option>
           <option defaultValue="AO">Angola</option>
           <option defaultValue="AI">Anguilla</option>
           <option defaultValue="AQ">Antarctica</option>
           <option defaultValue="AG">Antigua and Barbuda</option>
           <option defaultValue="AR">Argentina</option>
           <option defaultValue="AM">Armenia</option>
           <option defaultValue="AW">Aruba</option>
           <option defaultValue="AU">Australia</option>
           <option defaultValue="AT">Austria</option>
           <option defaultValue="AZ">Azerbaijan</option>
           <option defaultValue="BS">Bahamas</option>
           <option defaultValue="BH">Bahrain</option>
           <option defaultValue="BD">Bangladesh</option>
           <option defaultValue="BB">Barbados</option>
           <option defaultValue="BY">Belarus</option>
           <option defaultValue="BE">Belgium</option>
           <option defaultValue="BZ">Belize</option>
           <option defaultValue="BJ">Benin</option>
           <option defaultValue="BM">Bermuda</option>
           <option defaultValue="BT">Bhutan</option>
           <option defaultValue="BO">Bolivia</option>
           <option defaultValue="BA">Bosnia and Herzegowina</option>
           <option defaultValue="BW">Botswana</option>
           <option defaultValue="BV">Bouvet Island</option>
           <option defaultValue="BR">Brazil</option>
           <option defaultValue="IO">British Indian Ocean Territory</option>
           <option defaultValue="BN">Brunei Darussalam</option>
           <option defaultValue="BG">Bulgaria</option>
           <option defaultValue="BF">Burkina Faso</option>
           <option defaultValue="BI">Burundi</option>
           <option defaultValue="KH">Cambodia</option>
           <option defaultValue="CM">Cameroon</option>
           <option defaultValue="CA">Canada</option>
           <option defaultValue="CV">Cape Verde</option>
           <option defaultValue="KY">Cayman Islands</option>
           <option defaultValue="CF">Central African Republic</option>
           <option defaultValue="TD">Chad</option>
           <option defaultValue="CL">Chile</option>
           <option defaultValue="CN">China</option>
           <option defaultValue="CX">Christmas Island</option>
           <option defaultValue="CC">Cocos (Keeling) Islands</option>
           <option defaultValue="CO">Colombia</option>
           <option defaultValue="KM">Comoros</option>
           <option defaultValue="CG">Congo</option>
           <option defaultValue="CD">Congo, the Democratic Republic of the</option>
           <option defaultValue="CK">Cook Islands</option>
           <option defaultValue="CR">Costa Rica</option>
           <option defaultValue="CI">Cote dIvoire</option>
           <option defaultValue="HR">Croatia (Hrvatska)</option>
           <option defaultValue="CU">Cuba</option>
           <option defaultValue="CY">Cyprus</option>
           <option defaultValue="CZ">Czech Republic</option>
           <option defaultValue="DK">Denmark</option>
           <option defaultValue="DJ">Djibouti</option>
           <option defaultValue="DM">Dominica</option>
           <option defaultValue="DO">Dominican Republic</option>
           <option defaultValue="TP">East Timor</option>
           <option defaultValue="EC">Ecuador</option>
           <option defaultValue="EG">Egypt</option>
           <option defaultValue="SV">El Salvador</option>
           <option defaultValue="GQ">Equatorial Guinea</option>
           <option defaultValue="ER">Eritrea</option>
           <option defaultValue="EE">Estonia</option>
           <option defaultValue="ET">Ethiopia</option>
           <option defaultValue="FK">Falkland Islands (Malvinas)</option>
           <option defaultValue="FO">Faroe Islands</option>
           <option defaultValue="FJ">Fiji</option>
           <option defaultValue="FI">Finland</option>
           <option defaultValue="FR">France</option>
           <option defaultValue="FX">France, Metropolitan</option>
           <option defaultValue="GF">French Guiana</option>
           <option defaultValue="PF">French Polynesia</option>
           <option defaultValue="TF">French Southern Territories</option>
           <option defaultValue="GA">Gabon</option>
           <option defaultValue="GM">Gambia</option>
           <option defaultValue="GE">Georgia</option>
           <option defaultValue="DE">Germany</option>
           <option defaultValue="GH">Ghana</option>
           <option defaultValue="GI">Gibraltar</option>
           <option defaultValue="GR">Greece</option>
           <option defaultValue="GL">Greenland</option>
           <option defaultValue="GD">Grenada</option>
           <option defaultValue="GP">Guadeloupe</option>
           <option defaultValue="GU">Guam</option>
           <option defaultValue="GT">Guatemala</option>
           <option defaultValue="GN">Guinea</option>
           <option defaultValue="GW">Guinea-Bissau</option>
           <option defaultValue="GY">Guyana</option>
           <option defaultValue="HT">Haiti</option>
           <option defaultValue="HM">Heard and Mc Donald Islands</option>
           <option defaultValue="VA">Holy See (Vatican City State)</option>
           <option defaultValue="HN">Honduras</option>
           <option defaultValue="HK">Hong Kong</option>
           <option defaultValue="HU">Hungary</option>
           <option defaultValue="IS">Iceland</option>
           <option defaultValue="IN">India</option>
           <option defaultValue="ID">Indonesia</option>
           <option defaultValue="IR">Iran (Islamic Republic of)</option>
           <option defaultValue="IQ">Iraq</option>
           <option defaultValue="IE">Ireland</option>
           <option defaultValue="IL">Israel</option>
           <option defaultValue="IT">Italy</option>
           <option defaultValue="JM">Jamaica</option>
           <option defaultValue="JP">Japan</option>
           <option defaultValue="JO">Jordan</option>
           <option defaultValue="KZ">Kazakhstan</option>
           <option defaultValue="KE">Kenya</option>
           <option defaultValue="KI">Kiribati</option>
           <option defaultValue="KP">Korea, Democratic Peoples Republic of</option>
           <option defaultValue="KR">Korea, Republic of</option>
           <option defaultValue="KW">Kuwait</option>
           <option defaultValue="KG">Kyrgyzstan</option>
           <option defaultValue="LA">Lao Peoples Democratic Republic</option>
           <option defaultValue="LV">Latvia</option>
           <option defaultValue="LB">Lebanon</option>
           <option defaultValue="LS">Lesotho</option>
           <option defaultValue="LR">Liberia</option>
           <option defaultValue="LY">Libyan Arab Jamahiriya</option>
           <option defaultValue="LI">Liechtenstein</option>
           <option defaultValue="LT">Lithuania</option>
           <option defaultValue="LU">Luxembourg</option>
           <option defaultValue="MO">Macau</option>
           <option defaultValue="MK">Macedonia, The Former Yugoslav Republic of</option>
           <option defaultValue="MG">Madagascar</option>
           <option defaultValue="MW">Malawi</option>
           <option defaultValue="MY">Malaysia</option>
           <option defaultValue="MV">Maldives</option>
           <option defaultValue="ML">Mali</option>
           <option defaultValue="MT">Malta</option>
           <option defaultValue="MH">Marshall Islands</option>
           <option defaultValue="MQ">Martinique</option>
           <option defaultValue="MR">Mauritania</option>
           <option defaultValue="MU">Mauritius</option>
           <option defaultValue="YT">Mayotte</option>
           <option defaultValue="MX">Mexico</option>
           <option defaultValue="FM">Micronesia, Federated States of</option>
           <option defaultValue="MD">Moldova, Republic of</option>
           <option defaultValue="MC">Monaco</option>
           <option defaultValue="MN">Mongolia</option>
           <option defaultValue="MS">Montserrat</option>
           <option defaultValue="MA">Morocco</option>
           <option defaultValue="MZ">Mozambique</option>
           <option defaultValue="MM">Myanmar</option>
           <option defaultValue="NA">Namibia</option>
           <option defaultValue="NR">Nauru</option>
           <option defaultValue="NP">Nepal</option>
           <option defaultValue="NL">Netherlands</option>
           <option defaultValue="AN">Netherlands Antilles</option>
           <option defaultValue="NC">New Caledonia</option>
           <option defaultValue="NZ">New Zealand</option>
           <option defaultValue="NI">Nicaragua</option>
           <option defaultValue="NE">Niger</option>
           <option defaultValue="NG">Nigeria</option>
           <option defaultValue="NU">Niue</option>
           <option defaultValue="NF">Norfolk Island</option>
           <option defaultValue="MP">Northern Mariana Islands</option>
           <option defaultValue="NO">Norway</option>
           <option defaultValue="OM">Oman</option>
           <option defaultValue="PK">Pakistan</option>
           <option defaultValue="PW">Palau</option>
           <option defaultValue="PA">Panama</option>
           <option defaultValue="PG">Papua New Guinea</option>
           <option defaultValue="PY">Paraguay</option>
           <option defaultValue="PE">Peru</option>
           <option defaultValue="PH">Philippines</option>
           <option defaultValue="PN">Pitcairn</option>
           <option defaultValue="PL">Poland</option>
           <option defaultValue="PT">Portugal</option>
           <option defaultValue="PR">Puerto Rico</option>
           <option defaultValue="QA">Qatar</option>
           <option defaultValue="RE">Reunion</option>
           <option defaultValue="RO">Romania</option>
           <option defaultValue="RU">Russian Federation</option>
           <option defaultValue="RW">Rwanda</option>
           <option defaultValue="KN">Saint Kitts and Nevis</option>
           <option defaultValue="LC">Saint LUCIA</option>
           <option defaultValue="VC">Saint Vincent and the Grenadines</option>
           <option defaultValue="WS">Samoa</option>
           <option defaultValue="SM">San Marino</option>
           <option defaultValue="ST">Sao Tome and Principe</option>
           <option defaultValue="SA">Saudi Arabia</option>
           <option defaultValue="SN">Senegal</option>
           <option defaultValue="SC">Seychelles</option>
           <option defaultValue="SL">Sierra Leone</option>
           <option defaultValue="SG">Singapore</option>
           <option defaultValue="SK">Slovakia (Slovak Republic)</option>
           <option defaultValue="SI">Slovenia</option>
           <option defaultValue="SB">Solomon Islands</option>
           <option defaultValue="SO">Somalia</option>
           <option defaultValue="ZA">South Africa</option>
           <option defaultValue="GS">South Georgia and the South Sandwich Islands</option>
           <option defaultValue="ES">Spain</option>
           <option defaultValue="LK">Sri Lanka</option>
           <option defaultValue="SH">St. Helena</option>
           <option defaultValue="PM">St. Pierre and Miquelon</option>
           <option defaultValue="SD">Sudan</option>
           <option defaultValue="SR">Suriname</option>
           <option defaultValue="SJ">Svalbard and Jan Mayen Islands</option>
           <option defaultValue="SZ">Swaziland</option>
           <option defaultValue="SE">Sweden</option>
           <option defaultValue="CH">Switzerland</option>
           <option defaultValue="SY">Syrian Arab Republic</option>
           <option defaultValue="TW">Taiwan, Province of China</option>
           <option defaultValue="TJ">Tajikistan</option>
           <option defaultValue="TZ">Tanzania, United Republic of</option>
           <option defaultValue="TH">Thailand</option>
           <option defaultValue="TG">Togo</option>
           <option defaultValue="TK">Tokelau</option>
           <option defaultValue="TO">Tonga</option>
           <option defaultValue="TT">Trinidad and Tobago</option>
           <option defaultValue="TN">Tunisia</option>
           <option defaultValue="TR">Turkey</option>
           <option defaultValue="TM">Turkmenistan</option>
           <option defaultValue="TC">Turks and Caicos Islands</option>
           <option defaultValue="TV">Tuvalu</option>
           <option defaultValue="UG">Uganda</option>
           <option defaultValue="UA">Ukraine</option>
           <option defaultValue="AE">United Arab Emirates</option>
           <option defaultValue="GB">United Kingdom</option>
           <option defaultValue="US">United States</option>
           <option defaultValue="UM">United States Minor Outlying Islands</option>
           <option defaultValue="UY">Uruguay</option>
           <option defaultValue="UZ">Uzbekistan</option>
           <option defaultValue="VU">Vanuatu</option>
           <option defaultValue="VE">Venezuela</option>
           <option defaultValue="VN">Viet Nam</option>
           <option defaultValue="VG">Virgin Islands (British)</option>
           <option defaultValue="VI">Virgin Islands (U.S.)</option>
           <option defaultValue="WF">Wallis and Futuna Islands</option>
           <option defaultValue="EH">Western Sahara</option>
           <option defaultValue="YE">Yemen</option>
           <option defaultValue="YU">Yugoslavia</option>
           <option defaultValue="ZM">Zambia</option>
           <option defaultValue="ZW">Zimbabwe</option>
       </select>
   </div>
</div>

    );
  }
}
