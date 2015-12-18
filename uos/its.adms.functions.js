//Hedars Functions			
jQuery(document).ready(function() {
    jQuery(".content").hide();
    //toggle the componenet with class msg_body
    jQuery(".heading").click(function() {
        jQuery(this).next(".content").slideToggle(500);
    });
});

function changeCollapsIcon(elemnt){
var currVal = elemnt.innerHTML;
elemnt.innerHTML = '<img width="20" hieght="20" src="/wtlgifs/its.expand.png"/>' + currVal ;
}

function collapsAllSec() {
    jQuery(".content").hide(1200);
}

function expandAllSec() {
    jQuery(".content").show(1200);
}

function goBack() {
    window.history.back();
}

function enableSubmitButton(styl) {
    document.getElementById("submit_app").style.visibility = styl;//"visible";
}

function showSuccessMsg(msg){
	$.notifyBar({ cssClass: "success", html: msg });
}

function showErrorMsg(msg){
	$.notifyBar({ cssClass: "error" ,html: msg, close: true, closeOnClick: false });
}

function toggleIcon(elementId){
var element;
element = document.getElementById(elementId+"_ico");
if (element.className == "divCol"){
element.className = "divEx";
}
else{
element.className = "divCol";
}
} 

function getSbgiDtl(sbgi_cd) {
    var rslt;
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "xwskcadm.P_GetSbgiDetails", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = showResult;

    function handleResponse(rawResponse) {
        function trim(s) {
            return s.replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var attrs = rawResponse.split(",");
        //
        for (i = 0; i < attrs.length; i++) {
            try {
                if (i == 0) {
                    document.getElementById("hs_name_id").value = trim(attrs[i]);
                } else if (i == 1) {
                    document.getElementById("hs_addr1_id").value = trim(attrs[i]);
                } else if (i == 2) {
                    document.getElementById("hs_addr2_id").value = trim(attrs[i]);
                } else if (i == 3) {
                    document.getElementById("hs_addr3_id").value = trim(attrs[i]);
                } else if (i == 4) {
                    document.getElementById("hs_addr4_id").value = trim(attrs[i]);
                } else if (i == 5) {
                    document.getElementById("hs_city_id").value = trim(attrs[i]);
                } else if (i == 6) {
                    document.getElementById("hs_stat_id").value = trim(attrs[i]);
                } else if (i == 7) {
                    document.getElementById("hs_cnty_id").value = trim(attrs[i]);;
                } else if (i == 8) {
                    document.getElementById("hs_zip_id").value = trim(attrs[i]);;
                } else if (i == 9) {
                    document.getElementById("hs_natn_id").value = trim(attrs[i]);;
                }
            } catch (err) {}
        }

    }

    function showResult() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                handleResponse(xmlhttp.responseText);
            }
        }
    }

    xmlhttp.send("sbgi=" + sbgi_cd + "&sid=" + Math.random());
}
//College Details Function
function getSbgiDtlCol(sbgi_cd) {
    var rslt;
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "xwskcadm.P_GetSbgiDetails", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = showResult;

    function handleResponse(rawResponse) {
        function trim(s) {
            return s.replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var attrs = rawResponse.split(",");
        //
        for (i = 0; i < attrs.length; i++) {
            try {
                if (i == 0) {
                    document.getElementById("col_name_id").value = trim(attrs[i]);
                } else if (i == 1) {
                    document.getElementById("pc_addr1_id").value = trim(attrs[i]);
                } else if (i == 2) {
                    document.getElementById("pc_addr2_id").value = trim(attrs[i]);
                } else if (i == 3) {
                    document.getElementById("pc_addr3_id").value = trim(attrs[i]);
                } else if (i == 4) {
                    document.getElementById("pc_addr4_id").value = trim(attrs[i]);
                } else if (i == 5) {
                    document.getElementById("pc_city_id").value = trim(attrs[i]);
                } else if (i == 6) {
                    document.getElementById("pc_stat_id").value = trim(attrs[i]);
                } else if (i == 7) {
                    document.getElementById("pc_cnty_id").value = trim(attrs[i]);;
                } else if (i == 8) {
                    document.getElementById("pc_zip_id").value = trim(attrs[i]);;
                } else if (i == 9) {
                    document.getElementById("pc_natn_id").value = trim(attrs[i]);;
                }
            } catch (err) {}
        }

    }

    function showResult() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                handleResponse(xmlhttp.responseText);
            }
        }
    }

    xmlhttp.send("sbgi=" + sbgi_cd + "&sid=" + Math.random());
}

//Control Uploded Document Links
function UpldDocLinks(aidm, appno, cgibin) {
    var rslt;
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "xwskcadm.P_GetUpldDoc", true);
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = showResult;

    function handleResponse(xmlResponse) {
        function trim(s) {
            return s.replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var admrCode = trim(xmlResponse);
        var admrValue, codeElements, itemDataId, prviewElement, delItemData, deleteElement;
        var statItemData, statElement;
        //parse result string as XML
        if (window.DOMParser) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(admrCode, "text/xml");
        } else // Internet Explorer
        {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(admrCode);
        }
        //End parsing

        codeElements = xmlDoc.getElementsByTagName("CODE");

        for (i = 0; i < codeElements.length; i++) {
            admrValue = codeElements[i].childNodes[0].nodeValue;
            //Draw Preview Link
            itemDataId = "doc_" + codeElements[i].childNodes[0].nodeValue + "_view";
            prviewElement = document.getElementById(itemDataId);
            prviewElement.innerHTML = '<a href="' + cgibin + 'xwskupld.P_DispImage?aidm=' + aidm + '&appno=' + appno + '&admr_code=' + admrValue + '&wsct=UPLD_FILE" target="_blank">Preview File</a>';

            //Draw Delete Link
            delItemData = "doc_" + codeElements[i].childNodes[0].nodeValue + "_del";
            deleteElement = document.getElementById(delItemData);
            deleteElement.innerHTML = '<a href="' + cgibin + 'xwskcadm.P_Delete_File?appno=' + appno + '&admr_code=' + admrValue + '&wsct=UPLD_FILE" target="resultiframe"><IMG SRC="/wtlgifs/web_exit.gif" ALIGN="middle"></a>';

            //Draw Status Icon
            statItemData = "doc_" + codeElements[i].childNodes[0].nodeValue + "_stat";
            statElement = document.getElementById(statItemData);
            statElement.innerHTML = '<IMG SRC="/stugifs/hwsgchek.gif" ALIGN="middle"/>';
        }
    }

    function showResult() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                handleResponse(xmlhttp.responseText);
            }
        }
    }

    xmlhttp.send("aidm=" + aidm + "&appno=" + appno + "&sid=" + Math.random());
}

//Function Handel icons when delete file
function handelFileDelete(admrCode) {
    var itemDataId, prviewElement, delItemData, deleteElement, statItemData, statElement ,upldFile , upldFileElement;

    itemDataId = "doc_" + admrCode + "_view";
    prviewElement = document.getElementById(itemDataId);
    prviewElement.innerHTML = ' ';

    //Draw Delete Link
    delItemData = "doc_" + admrCode + "_del";
    deleteElement = document.getElementById(delItemData);
    deleteElement.innerHTML = ' ';

    //Draw Status Icon
    statItemData = "doc_" + admrCode + "_stat";
    statElement = document.getElementById(statItemData);
    statElement.innerHTML = ' ';
	
	upldFile = "picField_" + admrCode ; 
	upldFileElement = document.getElementById(upldFile);
	upldFileElement.value = "";
}



function refillDesires(aidm,appno,resetFlag,cgibin,headerTitle){
    var rslt;
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "xwskcadm.P_RefillDesires", true);
    //xmlhttp.setRequestHeader("Content-type", "text/xml");
    xmlhttp.onreadystatechange = showResult;

    function handleResponse(xmlResponse) {
		var numOfDesiresTag , numOfDesires;
		var majrRulTag , majrRule;
		var descrTag , descrValue , header;
		var optionList , holdValue ,option,emptyOption;
		//trim response
        var xmlResult = trim(xmlResponse);
		var xmlDoc = xmlResult;
		
		
        //parse result string as XML
        if (window.DOMParser) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlResult, "text/xml");
        } else // Internet Explorer
        {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(xmlResult);
        } 
        //End parsing
		
		numOfDesiresTag = xmlDoc.getElementsByTagName("NOOFCHOICES");
		numOfDesires = numOfDesiresTag[0].childNodes[0].nodeValue;
		
		majrRulTag = xmlDoc.getElementsByTagName("CURRUL");
		descrTag =   xmlDoc.getElementsByTagName("DESCR");
		
		option = document.createElement("option");
				
        for (i = 0; i < numOfDesires; i++) {
			optionList = document.getElementById("program_id_"+ (i+1));
			holdValue = optionList.options[optionList.selectedIndex].value;
			removeOptions(optionList);
			option = document.createElement("option");			
			option.value = "";
			option.text = "Select..";			
			optionList.appendChild(option);	
			
			for (n = 0; n < majrRulTag.length; n++){	
			  option = document.createElement("option");
			  option.value = majrRulTag[n].childNodes[0].nodeValue;
			  option.text = descrTag[n].childNodes[0].nodeValue;
			  optionList.appendChild(option);
			}			
			
			if (resetFlag != "Y"){
			 optionList.value = holdValue;		
			}		  
				
        }
		if (resetFlag == "Y"){
					 alert("Yor Planned Programs have been reset according to the changing of data please re-choose it again");
			 header = document.getElementById("planheader");
			 header.innerHTML = '<img width="20" hieght="20" src="/wtlgifs/wsct_notice.png"/> ' + headerTitle;
			 }
	 //Trim function used for trim response befor doing any operation on it	
     function trim(s) {
            return s.replace(/^\s*/, "").replace(/\s*$/, "");
        }	
	}
	
	function removeOptions(selectbox)
	{
	    var i;
	    for(i=selectbox.options.length-1;i>=0;i--)
	    {
	        selectbox.remove(i);
	    }
	}	
    function showResult() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
               handleResponse(xmlhttp.responseText);
            }
        }
    }
	
    xmlhttp.send("aidm=" + aidm + "&appno=" + appno + "&reset_ind=" + resetFlag +"&sid=" + Math.random());	
}

