import React from 'react';



const CountryInfo = () => {
    return (
 
  <select  className="form-control" id="phone_country" name="phone_country" placeholder="Country *" required maxLength="400">
         <option value="">Select your Country Code *</option>
            <option value="GB">UK (+44)</option>          
            <optgroup label="Other countries">
            <option value="DZ" >Algeria (+213)</option>
               
                <option value="AD" >Andorra (+376)</option>
                <option value="AO">Angola (+244)</option>
                <option value="AI" value123="1264">Anguilla (+1264)</option>
                <option value="AG" value123="1268">Antigua &amp; Barbuda (+1268)</option>
                <option value="AR" value123="54">Argentina (+54)</option>
                <option value="AM" value123="374">Armenia (+374)</option>
                <option value="AW" value123="297">Aruba (+297)</option>
                <option value="AU" value123="61">Australia (+61)</option>
                <option value="AT" value123="43">Austria (+43)</option>
                <option value="AZ" value123="994">Azerbaijan (+994)</option>
                <option value="BS" value123="1242">Bahamas (+1242)</option>
                <option value="BH" value123="973">Bahrain (+973)</option>
                <option value="BD" value123="880">Bangladesh (+880)</option>
                <option value="BB" value123="1246">Barbados (+1246)</option>
                <option value="BY" value123="375">Belarus (+375)</option>
                <option value="BE" value123="32">Belgium (+32)</option>
                <option value="BZ" value123="501">Belize (+501)</option>
                <option value="BJ" value123="229">Benin (+229)</option>
                <option value="BM" value123="1441">Bermuda (+1441)</option>
                <option value="BT" value123="975">Bhutan (+975)</option>
                <option value="BO" value123="591">Bolivia (+591)</option>
                <option value="BA" value123="387">Bosnia Herzegovina (+387)</option>
                <option value="BW" value123="267">Botswana (+267)</option>
                <option value="BR" value123="55">Brazil (+55)</option>
                <option value="BN" value123="673">Brunei (+673)</option>
                <option value="BG" value123="359">Bulgaria (+359)</option>
                <option value="BF" value123="226">Burkina Faso (+226)</option>
                <option value="BI" value123="257">Burundi (+257)</option>
                <option value="KH" value123="855">Cambodia (+855)</option>
                <option value="CM" value123="237">Cameroon (+237)</option>
                <option value="CA" value123="1">Canada (+1)</option>
                <option value="CV" value123="238">Cape Verde Islands (+238)</option>
                <option value="KY" value123="1345">Cayman Islands (+1345)</option>
                <option value="CF" value123="236">Central African Republic (+236)</option>
                <option value="CL" value123="56">Chile (+56)</option>
                <option value="CN" value123="86">China (+86)</option>
                <option value="CO" value123="57">Colombia (+57)</option>
                <option value="KM" value123="269">Comoros (+269)</option>
                <option value="CG" value123="242">Congo (+242)</option>
                <option value="CK" value123="682">Cook Islands (+682)</option>
                <option value="CR" value123="506">Costa Rica (+506)</option>
                <option value="HR" value123="385">Croatia (+385)</option>
                <option value="CU" value123="53">Cuba (+53)</option>
                <option value="CY" value123="90392">Cyprus North (+90392)</option>
                <option value="CY" value123="357">Cyprus South (+357)</option>
                <option value="CZ" value123="42">Czech Republic (+42)</option>
                <option value="DK" value123="45">Denmark (+45)</option>
                <option value="DJ" value123="253">Djibouti (+253)</option>
                <option value="DM" value123="1809">Dominica (+1809)</option>
                <option value="DO" value123="1809">Dominican Republic (+1809)</option>
                <option value="EC" value123="593">Ecuador (+593)</option>
                <option value="EG" value123="20">Egypt (+20)</option>
                <option value="SV" value123="503">El Salvador (+503)</option>
                <option value="GQ" value123="240">Equatorial Guinea (+240)</option>
                <option value="ER" value123="291">Eritrea (+291)</option>
                <option value="EE" value123="372">Estonia (+372)</option>
                <option value="ET" value123="251">Ethiopia (+251)</option>
                <option value="FK" value123="500">Falkland Islands (+500)</option>
                <option value="FO" value123="298">Faroe Islands (+298)</option>
                <option value="FJ" value123="679">Fiji (+679)</option>
                <option value="FI" value123="358">Finland (+358)</option>
                <option value="FR" value123="33">France (+33)</option>
                <option value="GF" value123="594">French Guiana (+594)</option>
                <option value="PF" value123="689">French Polynesia (+689)</option>
                <option value="GA" value123="241">Gabon (+241)</option>
                <option value="GM" value123="220">Gambia (+220)</option>
                <option value="GE" value123="7880">Georgia (+7880)</option>
                <option value="DE" value123="49">Germany (+49)</option>
                <option value="GH" value123="233">Ghana (+233)</option>
                <option value="GI" value123="350">Gibraltar (+350)</option>
                <option value="GR" value123="30">Greece (+30)</option>
                <option value="GL" value123="299">Greenland (+299)</option>
                <option value="GD" value123="1473">Grenada (+1473)</option>
                <option value="GP" value123="590">Guadeloupe (+590)</option>
                <option value="GU" value123="671">Guam (+671)</option>
                <option value="GT" value123="502">Guatemala (+502)</option>
                <option value="GN" value123="224">Guinea (+224)</option>
                <option value="GW" value123="245">Guinea - Bissau (+245)</option>
                <option value="GY" value123="592">Guyana (+592)</option>
                <option value="HT" value123="509">Haiti (+509)</option>
                <option value="HN" value123="504">Honduras (+504)</option>
                <option value="HK" value123="852">Hong Kong (+852)</option>
                <option value="HU" value123="36">Hungary (+36)</option>
                <option value="IS" value123="354">Iceland (+354)</option>
                <option value="IN" value123="91">India (+91)</option>
                <option value="ID" value123="62">Indonesia (+62)</option>
                <option value="IR" value123="98">Iran (+98)</option>
                <option value="IQ" value123="964">Iraq (+964)</option>
                <option value="IE" value123="353">Ireland (+353)</option>
                <option value="IL" value123="972">Israel (+972)</option>
                <option value="IT" value123="39">Italy (+39)</option>
                <option value="JM" value123="1876">Jamaica (+1876)</option>
                <option value="JP" value123="81">Japan (+81)</option>
                <option value="JO" value123="962">Jordan (+962)</option>
                <option value="KZ" value123="7">Kazakhstan (+7)</option>
                <option value="KE" value123="254">Kenya (+254)</option>
                <option value="KI" value123="686">Kiribati (+686)</option>
                <option value="KP" value123="850">Korea North (+850)</option>
                <option value="KR" value123="82">Korea South (+82)</option>
                <option value="KW" value123="965">Kuwait (+965)</option>
                <option value="KG" value123="996">Kyrgyzstan (+996)</option>
                <option value="LA" value123="856">Laos (+856)</option>
                <option value="LV" value123="371">Latvia (+371)</option>
                <option value="LB" value123="961">Lebanon (+961)</option>
                <option value="LS" value123="266">Lesotho (+266)</option>
                <option value="LR" value123="231">Liberia (+231)</option>
                <option value="LY" value123="218">Libya (+218)</option>
                <option value="LI" value123="417">Liechtenstein (+417)</option>
                <option value="LT" value123="370">Lithuania (+370)</option>
                <option value="LU" value123="352">Luxembourg (+352)</option>
                <option value="MO" value123="853">Macao (+853)</option>
                <option value="MK" value123="389">Macedonia (+389)</option>
                <option value="MG" value123="261">Madagascar (+261)</option>
                <option value="MW" value123="265">Malawi (+265)</option>
                <option value="MY" value123="60">Malaysia (+60)</option>
                <option value="MV" value123="960">Maldives (+960)</option>
                <option value="ML" value123="223">Mali (+223)</option>
                <option value="MT" value123="356">Malta (+356)</option>
                <option value="MH" value123="692">Marshall Islands (+692)</option>
                <option value="MQ" value123="596">Martinique (+596)</option>
                <option value="MR" value123="222">Mauritania (+222)</option>
                <option value="YT" value123="269">Mayotte (+269)</option>
                <option value="MX" value123="52">Mexico (+52)</option>
                <option value="FM" value123="691">Micronesia (+691)</option>
                <option value="MD" value123="373">Moldova (+373)</option>
                <option value="MC" value123="377">Monaco (+377)</option>
                <option value="MN" value123="976">Mongolia (+976)</option>
                <option value="MS" value123="1664">Montserrat (+1664)</option>
                <option value="MA" value123="212">Morocco (+212)</option>
                <option value="MZ" value123="258">Mozambique (+258)</option>
                <option value="MN" value123="95">Myanmar (+95)</option>
                <option value="NA" value123="264">Namibia (+264)</option>
                <option value="NR" value123="674">Nauru (+674)</option>
                <option value="NP" value123="977">Nepal (+977)</option>
                <option value="NL" value123="31">Netherlands (+31)</option>
                <option value="NC" value123="687">New Caledonia (+687)</option>
                <option value="NZ" value123="64">New Zealand (+64)</option>
                <option value="NI" value123="505">Nicaragua (+505)</option>
                <option value="NE" value123="227">Niger (+227)</option>
                <option value="NG" value123="234">Nigeria (+234)</option>
                <option value="NU" value123="683">Niue (+683)</option>
                <option value="NF" value123="672">Norfolk Islands (+672)</option>
                <option value="NP" value123="670">Northern Marianas (+670)</option>
                <option value="NO" value123="47">Norway (+47)</option>
                <option value="OM" value123="968">Oman (+968)</option>
                <option value="PW" value123="680">Palau (+680)</option>
                <option value="PA" value123="507">Panama (+507)</option>
                <option value="PG" value123="675">Papua New Guinea (+675)</option>
                <option value="PY" value123="595">Paraguay (+595)</option>
                <option value="PE" value123="51">Peru (+51)</option>
                <option value="PH" value123="63">Philippines (+63)</option>
                <option value="PL" value123="48">Poland (+48)</option>
                <option value="PT" value123="351">Portugal (+351)</option>
                <option value="PR" value123="1787">Puerto Rico (+1787)</option>
                <option value="QA" value123="974">Qatar (+974)</option>
                <option value="RE" value123="262">Reunion (+262)</option>
                <option value="RO" value123="40">Romania (+40)</option>
                <option value="RU" value123="7">Russia (+7)</option>
                <option value="RW" value123="250">Rwanda (+250)</option>
                <option value="SM" value123="378">San Marino (+378)</option>
                <option value="ST" value123="239">Sao Tome &amp; Principe (+239)</option>
                <option value="SA" value123="966">Saudi Arabia (+966)</option>
                <option value="SN" value123="221">Senegal (+221)</option>
                <option value="CS" value123="381">Serbia (+381)</option>
                <option value="SC" value123="248">Seychelles (+248)</option>
                <option value="SL" value123="232">Sierra Leone (+232)</option>
                <option value="SG" value123="65">Singapore (+65)</option>
                <option value="SK" value123="421">Slovak Republic (+421)</option>
                <option value="SI" value123="386">Slovenia (+386)</option>
                <option value="SB" value123="677">Solomon Islands (+677)</option>
                <option value="SO" value123="252">Somalia (+252)</option>
                <option value="ZA" value123="27">South Africa (+27)</option>
                <option value="ES" value123="34">Spain (+34)</option>
                <option value="LK" value123="94">Sri Lanka (+94)</option>
                <option value="SH" value123="290">St. Helena (+290)</option>
                <option value="KN" value123="1869">St. Kitts (+1869)</option>
                <option value="SC" value123="1758">St. Lucia (+1758)</option>
                <option value="SD" value123="249">Sudan (+249)</option>
                <option value="SR" value123="597">Suriname (+597)</option>
                <option value="SZ" value123="268">Swaziland (+268)</option>
                <option value="SE" value123="46">Sweden (+46)</option>
                <option value="CH" value123="41">Switzerland (+41)</option>
                <option value="SI" value123="963">Syria (+963)</option>
                <option value="TW" value123="886">Taiwan (+886)</option>
                <option value="TJ" value123="7">Tajikstan (+7)</option>
                <option value="TH" value123="66">Thailand (+66)</option>
                <option value="TG" value123="228">Togo (+228)</option>
                <option value="TO" value123="676">Tonga (+676)</option>
                <option value="TT" value123="1868">Trinidad &amp; Tobago (+1868)</option>
                <option value="TN" value123="216">Tunisia (+216)</option>
                <option value="TR" value123="90">Turkey (+90)</option>
                <option value="TM" value123="7">Turkmenistan (+7)</option>
                <option value="TM" value123="993">Turkmenistan (+993)</option>
                <option value="TC" value123="1649">Turks &amp; Caicos Islands (+1649)</option>
                <option value="TV" value123="688">Tuvalu (+688)</option>
                <option value="UG" value123="256">Uganda (+256)</option>
                <option value="GB" value123="44">UK (+44)</option>
                <option value="UA" value123="380">Ukraine (+380)</option>
                <option value="AE" value123="971">United Arab Emirates (+971)</option>
                <option value="UY" value123="598">Uruguay (+598)</option>
                <option value="US" value123="1">USA (+1)</option>
                <option value="UZ" value123="7">Uzbekistan (+7)</option>
                <option value="VU" value123="678">Vanuatu (+678)</option>
                <option value="VA" value123="379">Vatican City (+379)</option>
                <option value="VE" value123="58">Venezuela (+58)</option>
                <option value="VN" value123="84">Vietnam (+84)</option>
                <option value="VG" value123="84">Virgin Islands - British (+1284)</option>
                <option value="VI" value123="84">Virgin Islands - US (+1340)</option>
                <option value="WF" value123="681">Wallis &amp; Futuna (+681)</option>
                <option value="YE" value123="969">Yemen (North)(+969)</option>
                <option value="YE" value123="967">Yemen (South)(+967)</option>
                <option value="ZM" value123="260">Zambia (+260)</option>
                <option value="ZW" value123="263">Zimbabwe (+263)</option>
            </optgroup>
        </select>


    )
}

export default CountryInfo;