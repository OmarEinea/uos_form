  var countries = ["Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Angola","Antarctica","Argentina","American Samoa","Austria","Australia","Aruba","Åland","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint Barthélemy","Bermuda","Brunei","Bolivia","Bonaire","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos [Keeling] Islands","Congo","Central African Republic","Republic of the Congo","Switzerland","Ivory Coast","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Curacao","Christmas Island","Cyprus","Czechia","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","France","Gabon","United Kingdom","Grenada","Georgia","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia and the South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","North Korea","South Korea","Kuwait","Cayman Islands","Kazakhstan","Laos","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Montenegro","Saint Martin","Madagascar","Marshall Islands","Macedonia","Mali","Myanmar [Burma]","Mongolia","Macao","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn Islands","Puerto Rico","Palestine","Portugal","Palau","Paraguay","Qatar","Réunion","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","São Tomé and Príncipe","El Salvador","Sint Maarten","Syria","Swaziland","Turks and Caicos Islands","Chad","French Southern Territories","Togo","Thailand","Tajikistan","Tokelau","East Timor","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","U.S. Minor Outlying Islands","United States","Uruguay","Uzbekistan","Vatican City","Saint Vincent and the Grenadines","Venezuela","British Virgin Islands","U.S. Virgin Islands","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Kosovo","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"];

  // bloodhound
  // constructs the suggestion engine
  var countries = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
  // this is the countries array declared above
    local: countries
  });

  $('#bloodhound .ctypeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'countries',
    source: countries
  });

  var health = ["Acquired Brain Injury","Autism","Communication-Hearing","Communication-Speaking","Communication-Speaking & Hearing","Hearing - Deaf","Hearing - Hard Hearing","Learning Difficulties","Mobility Limitation","Psychological - Anxiety","Psychological - Depression","Psychological - Split","Visual - Blindness","Visual - Color Blindness","Visual - Low Vision","Visual - Monocular Vision"];

  // bloodhound
  // constructs the suggestion engine
  var health = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
  // this is the countries array declared above
    local: health
  });

  $('#bloodhound .htypeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'health',
    source: health
  });

  var majors = ["Accounting","Administrative Work","Applied Physics","Applied Sociology","Arabic Language & Literature","Architectural Engineering","Archiving & Electronic Publish","Biological Analysis/Technique","Biomedical Science","Biotechnology","Broadcast Journalism","Business Administration","Career Development","Chemistry","Civil Engineering","Clinical Nutrition & Dietetics","Common Business Program","Communication","Comparative Jurisprudence","Comprehensive Examination","Computer Engineering","Computer Science","Construction & Materials","Dental Assistant","Dental Hygiene","Dental Laboratory Technology","Dental Surgery","Dentistry Training","Documentation & Electronic Arc","Economics","Educ & Arabic Language/Lit","Educ & History/Islamic Civil","Education","Education & English Lang/Lit","Education & Islamic Studies","Electrical/Electronic Engr.","Electronic Media","Engineering Management","English Language & Literature","Engr. Management & Innovation","Environmental Engineering","Environmental Health","Environmental Health & Safety","Exegesis & Hadith","Fashion Design & Textile","Finance","Fine Arts","Food Safety","Foundation","Foundations of Religion","Fundamentals of Jurisprudence","General Communication","General Mass Communication","Geotechnical Engineering","Graphic Design","Graphic Design and Multimedia","Graphics  Design & Multimedia","Industrial Engr & Engr Mngt","Information Tech. - Multimedia","nformation Technology","Intensive Arabic Language","Intensive English Lang Program","Interior Architecture & Design","International Relations","Islamic Banking","Islamic Banking(Arabic)","Islamic Studies","Jewelry Design","Journalism","Jurisprudence & its Foundation","Law","Leadership in Health Pro. Educ","Library & Information Systems","Linguistics & Translation","Literature & Translation","Management","Management Information Systems","Marketing","Mass Communication","Mathematics","Mechanical Engineering","Medical Diagnostic Imag - Bdg","Medical Diagnostic Imaging","Medical Lab Sciences","Medicine & Surgery","Molecular Medicine","Non Degree Graduate","Non Degree Undergraduate","Nuclear Engineering","Nursing","Nursing - Bdg","Office Technology","Painting","Pharmacy","Pharmacy Assistant","Physiotherapy","Plant Sciences","Print Journalism","Printmaking","Private Law","Public Administration","Public Law","Public Relation","Public Relations","Quran & Hadith","Radio & TV","Radiography & Medical Instrmnt","Sculpture","Secretarial & Office Mangt","Secretariat & Office Mgt","Shari'a & Comparative Law","Shari'a/Islamic Shari'a","Sharia & Law","Sociology","Special Education","Structural Engineering","Sustainable/Renewable Enrg Eng","Thesis","Translation","Transportation Engineering","Water Resources/Environ Eng"];

  // bloodhound
  // constructs the suggestion engine
  var majors = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
  // this is the countries array declared above
    local: majors
  });

  $('#bloodhound .mtypeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'majors',
    source: majors
  });
