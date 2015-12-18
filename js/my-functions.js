function Translate() {
    if(aren.innerHTML == "Arabic") {
        aren.innerHTML = "English";
        if(document.getElementById("arwarning") != null) {
            arwarning.style.display = "inline";
            arwarning.innerHTML = "يجب تعبئة هذا النموذج باللغة الإنكليزية فقط<i class=\"material-icons\">close</i>";
        }
		PD.innerHTML = "المعلومات الشخصية"; SA.innerHTML = "عنوان الطالب"; Ed.innerHTML = "الدراسة"; Do.innerHTML = "الوثائق";
		FN.innerHTML = "الاسم الأول"; MN.innerHTML = "اسم الأب"; LN.innerHTML = "اسم العائلة";
		CiB.innerHTML = "مدينة الميلاد"; CoB.innerHTML = "مكان الميلاد"; Na.innerHTML = "الجنسية";
		//city.placeholder = "الرياض"; country.placeholder = "سوريا"; nationality.placeholder = "سوريا";
		DB.innerHTML = "تاريخ الميلاد"; Re.innerHTML = "الديانة"; MS.innerHTML = "الحالة الإجتماعية";
		DC.placeholder = "يرجى وصف حالتك"; Pr.innerHTML = "السابق"; Ne.innerHTML = "التالي"; //Fi.innerHTML = "الأول"; La.innerHTML = "الأخير";

    } else if(aren.innerHTML == "English") {

        aren.innerHTML = "Arabic";
        if(document.getElementById("arwarning") != null) {
            arwarning.style.display = "none";
            arwarning.innerHTML = "";
        }
		PD.innerHTML = "PERSONAL DATA"; SA.innerHTML = "STUDENT ADDRESS"; Ed.innerHTML = "EDUCATION"; Do.innerHTML = "DOCUMENTS";
		FN.innerHTML = "First Name"; MN.innerHTML = "Middle Name"; LN.innerHTML = "Last Name";
		CiB.innerHTML = "City of Birth"; CoB.innerHTML = "Country of Birth"; Na.innerHTML = "Nationality";
		//city.placeholder = "Riyadh"; country.placeholder = "Syria"; nationality.placeholder = "Syria";
		DB.innerHTML = "Date of Birth"; Re.innerHTML = "Religion"; MS.innerHTML = "Marital Status";
		DC.placeholder = "Please describe your condition"; Pr.innerHTML = "Previous"; Ne.innerHTML = "Next"; //Fi.innerHTML = "First"; La.innerHTML = "Last";
    }
}

function unGrey(index) {
    var x = document.getElementsByClassName("select-wrapper");
    x[index].classList.add('blackit');
}

function changeOtherCountries() {
    var x = document.getElementsByClassName("select-dropdown");
    var temp = x[0].value;
    x[2].value = temp;
    x[2].classList.add('blackit');
    x[10].value = temp;
    x[10].classList.add('blackit');
    x[22].value = temp;
    x[22].classList.add('blackit');
    x[24].value = temp;
    x[24].classList.add('blackit');
}

function changeOtherCities() {
    currentcity.value = city.value;
    cityofschool.value = city.value;
    cityofins.value = city.value;
}