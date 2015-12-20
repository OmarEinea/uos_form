function Translate() {
    if(aren.innerHTML === "Arabic") {
        aren.innerHTML = "English";
        if(document.getElementById("arwarning") != null) {
            arwarning.style.display = "inline";
            arwarning.innerHTML = "يجب تعبئة هذا النموذج باللغة الإنكليزية فقط<i class=\"material-icons\">close</i>";
        }
        
        US.innerHTML = "لطلاب جامعة الشارقة"; Pr.innerHTML = "السابق";
        
        if (Ne.innerHTML === "Submit")
            Ne.innerHTML = "تسليم";
        else if (Ne.innerHTML === "Next")
            Ne.innerHTML = "التالي";

        if(document.getElementById("info") != null) {
            info.style.fontSize = "1.2rem";
            info.innerHTML = "هو حقل اختياري, وماعداه فهو مطلوب <i class=\"green-text text-lighten-1 fa fa-info-circle\"></i>";
        }
        
		PD.innerHTML = "المعلومات الشخصية"; SA.innerHTML = "عنوان الطالب"; Ed.innerHTML = "الدراسة"; Do.innerHTML = "الوثائق";
        
		FN.innerHTML = "الاسم الأول"; MN.innerHTML = "اسم الأب"; LN.innerHTML = "اسم العائلة";
		CiB.innerHTML = "مدينة الميلاد"; CoB.innerHTML = "دولة الميلاد"; Na.innerHTML = "الجنسية";
		DB.innerHTML = "تاريخ الميلاد"; Re.innerHTML = "الديانة"; MS.innerHTML = "الحالة الإجتماعية";
		DC.placeholder = "يرجى وصف حالتك";
        
        CCo.innerHTML = "الدولة الحالية"; CCi.innerHTML = "المدينة الحالية"; ZC.innerHTML = "الرمز البريدي";
        SM.innerHTML = "هاتف الطالب"; PM.innerHTML = "هاتف ولي الأمر"; HP.innerHTML = "هاتف المنزل";
        SE.innerHTML = "بريد الطالب الإلكتروني"; PE.innerHTML = "بريد ولي الأمر الإلكتروني"; POB.innerHTML = "ص.ب";
        AAP.innerHTML = "أضف هاتف آخر إن وجد:"; OP.innerHTML = "الهاتف الآخر";

        PLM.innerHTML = "اختر الفروع التي ترغب الألتحاق بها:"; TSC.innerHTML = "نوع الشهادة الثانوية";
        SO.innerHTML = "حدد هنا إن كانت من نوع آخر"; FHS.innerHTML = "أنهيت المدرسة الثاوية في"; Av.innerHTML = "معدل الثانوية";
        SN.innerHTML = "اسم المدرسة"; CoS.innerHTML = "دولة المدرسة"; CiS.innerHTML = "مدينة المدرسة";
        
        IHE.innerHTML = "إذا كنت قد درست في أي مؤسسة تعليم عليا, فضلا قم بملئ التالي:";
        IN.innerHTML = "اسم المؤسسة"; CoI.innerHTML = "دولة المؤسسة"; CiI.innerHTML = "مدينة المؤسسة";
        Ma.innerHTML = "التخصص"; SO2.innerHTML = "حدد هنا إن كانت من نوع آخر"; RT.innerHTML = "سبب التحويل";
        ID.innerHTML = "الرقم الجامعي"; GPA.innerHTML = "المعدل التراكمي"; AS.innerHTML = "الوضع الأكاديمي";
        FCH.innerHTML = "عدد الساعات المنجزة"; CS.innerHTML = "عدد الفصول المنجزة";
        
        SF.innerHTML = "فقط <b>PDF</b>, <b>JPG</b> حجما وبصيغة <b>MB5</b> يجب أن تكون كل الوثائق التي ستختارها أقل من";
        SP.placeholder = "صورة عن جواز سفر الطالب"; SSC.placeholder = "صورة عن شهادة الثانوية العامة";
        HFC.placeholder = "فحص طبي متضمن لفحص الدم"; GCC.placeholder = "صورة عن شعادة حسن السيرة والسلوك";
        
        RIS.innerHTML = "<b>بالطلاب الآتبن من الدول الخارجية</b> متطلبات إضافية :";
        PCS.placeholder = "ما يفيد إنجاز 12 سنة دراسية";
        PAS.placeholder = "ما يفيد قبول الشهادة في جامعات الدولة المانحة";
        
        RBS.innerHTML = "<b>بطلاب برنامج التجسير</b> متطلبات إضافية :";
        CD.placeholder = "صورة مصدقة عن شهادة الدبلوم";
        CT.placeholder = "صورة مصدقة عن السجل الدراسي";
        ECD.placeholder = "معادلة شهادة الدبلوم";
        
        RTS.innerHTML = "<b>بالطلاب المحولين</b> متطلبات إضافية :";
        CT2.placeholder = "صورة مصدقة عن السجل الدراسي"; ME.placeholder = "معادلة من وزارة التعليم";

        F1.innerHTML = "ملف"; F2.innerHTML = "ملف"; F3.innerHTML = "ملف"; F4.innerHTML = "ملف"; F5.innerHTML = "ملف"; F6.innerHTML = "ملف";
        F7.innerHTML = "ملف"; F8.innerHTML = "ملف"; F9.innerHTML = "ملف"; F10.innerHTML = "ملف"; F11.innerHTML = "ملف";
        
        LH.innerHTML = "!قبل أن تغادر"; PF.innerHTML = "دفع الرسوم"; GB.innerHTML = "العودة";
        LT.innerHTML = ":) نأمل أن تكون قد حظيت بتجربة جيدة أثناء تعبئتك لهذه الإستمارة ونحن نتطلع إلى رؤيتك في جامعة الشارقة عن ما قريب<br>" +
                    "<br>أخيراً, ستحتاج للذهاب إلى الموقع الرئيسي لتدفع رسوم فتح الملف.";

        
        WH.innerHTML = "^_^ مرحباً بعودتك إلى جامعة الشارقة";
        WT1.innerHTML = "بما أنك طالب سابق في جامعة الشارقة, فإن المعلومات الوحيدة التي نحتاج لمعرفتها هي رقمك الجامعي و التخصص الذي ترغب التسجيل به ونحن علينا الباقي.";
        WT2.innerHTML = "طبعا ستحتاج أيضا للذهاب إلى الموقع الرئيسي لتدفع رسوم فتح الملف.";
        PLM2.innerHTML = "اختر الفروع التي ترغب الألتحاق بها:"; PF2.innerHTML = "دفع الرسوم"; GB2.innerHTML = "العودة";


    } else if(aren.innerHTML === "English") {

        aren.innerHTML = "Arabic";
        if(document.getElementById("arwarning") != null) {
            arwarning.style.display = "none";
            arwarning.innerHTML = "";
        }
        
        US.innerHTML = "UOS Students"; Pr.innerHTML = "Previous";
        
        if (Ne.innerHTML === "تسليم")
            Ne.innerHTML = "Submit";
        else if (Ne.innerHTML === "التالي")
            Ne.innerHTML = "Next";

        if(document.getElementById("info") != null) {
            info.style.fontSize = "1rem";
            info.innerHTML = "<i class=\"green-text text-lighten-1 fa fa-info-circle\"></i> is Optional to fill, otherwise it's Required";
        }
        
		PD.innerHTML = "PERSONAL DATA"; SA.innerHTML = "STUDENT ADDRESS"; Ed.innerHTML = "EDUCATION"; Do.innerHTML = "DOCUMENTS";
		
        FN.innerHTML = "First Name"; MN.innerHTML = "Middle Name"; LN.innerHTML = "Last Name";
		CiB.innerHTML = "City of Birth"; CoB.innerHTML = "Country of Birth"; Na.innerHTML = "Nationality";
		DB.innerHTML = "Date of Birth"; Re.innerHTML = "Religion"; MS.innerHTML = "Marital Status";
		DC.placeholder = "Please describe your condition";
        
        CCo.innerHTML = "Current Country"; CCi.innerHTML = "Current City"; ZC.innerHTML = "Zip Code";
        SM.innerHTML = "Student's Mobile"; PM.innerHTML = "Parent's Mobile"; HP.innerHTML = "Home Phone";
        SE.innerHTML = "Student's Email"; PE.innerHTML = "Parent's Email"; POB.innerHTML = "P.O.Box";
        AAP.innerHTML = "Add another phone if available:"; OP.innerHTML = "Other Phone";
        
        PLM.innerHTML = "Please list your desired majors:"; TSC.innerHTML = "Type of secondary certificate";
        SO.innerHTML = "Spcify if Other"; FHS.innerHTML = "Finished High School at"; Av.innerHTML = "Average";
        SN.innerHTML = "School Name"; CoS.innerHTML = "Country of School"; CiS.innerHTML = "City of School";
        
        IHE.innerHTML = "If you've previously attended any institution of Higher Education, Please fill these as well:";
        IN.innerHTML = "Institution Name"; CoI.innerHTML = "Country of Instituation"; CiI.innerHTML = "City of Instituation";
        Ma.innerHTML = "Major"; SO2.innerHTML = "Spcify if Other"; RT.innerHTML = "Reason of Transferring";
        ID.innerHTML = "ID Number"; GPA.innerHTML = "GPA"; AS.innerHTML = "Academic Standing";
        FCH.innerHTML = "Finished Credit Hours"; CS.innerHTML = "Completed Semesters";
        
        SF.innerHTML = "All uploaded documents must be less than <b>5MB</b> in size and in <b>PDF</b>, <b>JPG</b> format only";
        SP.placeholder = "Copy of Student Passport"; SSC.placeholder = "Copy of Secondary School Certificate";
        HFC.placeholder = "Health Fitness Certificate including a blood test"; GCC.placeholder = "Copy of Good Conduct Certificate";
        
        RIS.innerHTML = "Additional requirements for <b>International Students</b>:";
        PCS.placeholder = "Proof of completion of 12 high school years";
        PAS.placeholder = "Proof of acceptance of high school in its country";
        
        RBS.innerHTML = "Additional requirements for <b>Bridging Program Students</b>:";
        CD.placeholder = "Certified copy of the Diploma Certificate";
        CT.placeholder = "Certified copy of the Transcript";
        ECD.placeholder = "Equivalent Certificate for the Diploma";
        
        RTS.innerHTML = "Additional requirements for <b>Transfer Students</b>:";
        CT2.placeholder = "Certified copy of the Transcript"; ME.placeholder = "Ministry of Education Equivalency";

        F1.innerHTML = "File"; F2.innerHTML = "File"; F3.innerHTML = "File"; F4.innerHTML = "File"; F5.innerHTML = "File"; F6.innerHTML = "File";
        F7.innerHTML = "File"; F8.innerHTML = "File"; F9.innerHTML = "File"; F10.innerHTML = "File"; F11.innerHTML = "File";
        
        LH.innerHTML = "Before you leave!"; PF.innerHTML = "Pay Fee"; GB.innerHTML = "Go back";
        LT.innerHTML = "We hope you had a good experience filling this addmission form and we are looking forward to seeing you in the University of Sharjah soon :)<br>" +
                    "<br>Lastly, you need to proceed to the main site to pay the application fee.";
        
        WH.innerHTML = "Welcome Back to UOS ^_^";
        WT1.innerHTML = "As you're a previous UOS student, the only thing you need to fill is your ID Number and your majors and we'll do the rest.";
        WT2.innerHTML = "And of course you need to proceed to the main site to pay the application fee.";
        PLM2.innerHTML = "Please list your desired majors:"; PF2.innerHTML = "Pay Fee"; GB2.innerHTML = "Go back";
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