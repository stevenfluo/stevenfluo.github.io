function getTotal() {
    var total = 0;
    //var GTManualElement = document.getElementById("GTManual");
    //var GTAutomaticElement = document.getElementById("GTAutomatic");
    //var GTSManualElement = document.getElementById("GTSManual");
    //var GTSSportshiftElement = document.getElementById("GTSSportshift");

    //want to have function check radio inputs to see which is selected, and take that value and add total

    //.value works because elements have values assigned, but if they didn't I could just replace the parseFloat... with the value itself
    //config options
    if (document.getElementById("GTManual").checked == true) {
        total = total + parseFloat(document.getElementById("GTManual").value)
    } else if (document.getElementById("GTAutomatic").checked == true) {
        total = total + parseFloat(document.getElementById("GTAutomatic").value)
    } else if (document.getElementById("GTSManual").checked == true) {
        total = total + parseFloat(document.getElementById("GTSManual").value)
    } else if (document.getElementById("GTSSportshift").checked == true) {
        total = total + parseFloat(document.getElementById("GTSSportshift").value)
    }


    // factory options
    if (document.getElementById("OptionCombo1").checked == true) {
        total = total + parseFloat(document.getElementById("OptionCombo1").value)
    } else if (document.getElementById("OptionCombo2").checked == true) {
        total = total + parseFloat(document.getElementById("OptionCombo2").value)
    } else if (document.getElementById("NoCombo").checked == true) {
        total = total + parseFloat(document.getElementById("NoCombo").value)
    }

    // dealer options
    if (document.getElementById("UpgradedStereoSystem").checked == true) {
        total = total + parseFloat(document.getElementById("UpgradedStereoSystem").value)
    }
    if (document.getElementById("VIPSecuritySystem").checked == true) {
        total = total + parseFloat(document.getElementById("VIPSecuritySystem").value)
    }
    if (document.getElementById("AutoDimmingMirror").checked == true) {
        total = total + parseFloat(document.getElementById("AutoDimmingMirror").value)
    }

    carOptionForm.TotalPrice.value = total; //prints the output at the textbox
}

document.getElementById("CalculateTotal").addEventListener("click", getTotal, false);


function switchPhoto() {

    //switches image source file based on selected option
    if (document.getElementById("redcar").selected == true) {
        document.getElementById("displayCarPhoto").src = "red.jpg";
    } else if (document.getElementById("bluecar").selected == true) {
        document.getElementById("displayCarPhoto").src = "blue.jpg";
    } else if (document.getElementById("silvercar").selected == true) {
        document.getElementById("displayCarPhoto").src = "silver.jpg";
    } else if (document.getElementById("whitecar").selected == true) {
        document.getElementById("displayCarPhoto").src = "white.jpg";
    } else if (document.getElementById("blackcar").selected == true) {
        document.getElementById("displayCarPhoto").src = "black.jpg";
    }
}

document.getElementById("carphotos").addEventListener("click", switchPhoto, false);
