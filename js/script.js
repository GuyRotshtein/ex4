function validateForm() {
    let oneUserName = document.formOne.fullName.value;
    let onePassword = document.formOne.pass.value;
    let oneMail = document.formOne.mail.value;
    let oneWeb = document.formOne.website.value;
    let onePhone = document.formOne.phone.value;
    let oneCheck = document.forms['formOne'][`interests[]`];
    let oneGender = document.forms['formOne'][`gender`];
    let count = 0;
    let regUser = /\w+\s+\w/g;
    let regPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[^\s]{8,}$/;
    let regMail = /^[^@\s]+@[^\s.]+\.[^\s.]+$/;
    let regPhone = /^\d+$/;
    let checkGender = false;

    //resetting the errors so any fixed ones don't remain on screen
    let errorFlag = 0;
    document.getElementById(`invalidUsername`).style.display = `none`;
    document.getElementById(`invalidPassword`).style.display = `none`;
    document.getElementById(`invalidMail`).style.display = `none`;
    document.getElementById(`invalidPhone`).style.display = `none`;
    document.getElementById(`invalidHobby`).style.display = `none`;
    document.getElementById(`invalidGender`).style.display = `none`;
    //username verification
    if (!oneUserName || !regUser.test(oneUserName)) {
        window.setTimeout(function() { document.formOne.fullName.focus(); },0);
        document.getElementById(`invalidUsername`).style.display = `block`;
        window.alert(`Please write your first and last names, seperated by a space`)
        errorFlag = 1;
    }
    //password verification
    if (!onePassword || !regPass.test(onePassword)) {
        document.getElementById(`invalidPassword`).style.display = `block`;
        window.alert(`Please rewrite your password to include at least one capital letter, small letter, number, and to be at lest 8 letters long.`);
        if (errorFlag = 0){
            window.setTimeout(function() { document.formOne.pass.focus(); },0);
            errorFlag = 1;
        }
    }
    //mail input verification
    if (!oneMail || !regMail.test(oneMail)){
        document.getElementById(`invalidMail`).style.display = `block`;
        window.alert(`Please write your e-mail address to include a '@' and a dot, and try again`);
        if (errorFlag = 0){
            window.setTimeout(function() { document.formOne.mail.focus(); },0);
            errorFlag = 1;
        }
    }
    //phone input verification
    if (!onePhone || onePhone.length <9 || onePhone.length > 10 || !regPhone.test(onePhone)){
        document.getElementById(`invalidPhone`).style.display = `block`;
        window.alert(`Please write your phone number to be composed only of numbers and 9-10 letters long.`);
        if (errorFlag = 0){
            window.setTimeout(function() { document.formOne.phone.focus(); },0);
            errorFlag = 1;
        }
    }
    //checking that at lest 3 hobbies are selected
    for (let i = 0; i < oneCheck.length; i++) {
        if (oneCheck[i].checked) {
            count++;
        }
    }
    if (count < 3){
        document.getElementById(`invalidHobby`).style.display = `block`;
        window.alert(`Please select at least 3 hobbies.`);
        if (errorFlag = 0){
            window.setTimeout(function() { oneCheck[0].focus(); },0);
            errorFlag = 1;
        }
    }
    //checking if a gender is selected
    for (let i = 0; i < oneGender.length; i++) {
        if (oneGender[i].checked) {
            checkGender = true;
            break;
        }
    }
    if (!checkGender){
        document.getElementById(`invalidGender`).style.display = `block`;
        window.alert(`Please select a gender form the list.`);
        if (errorFlag = 0){
            window.setTimeout(function() { oneGender[0].focus(); },0);
            errorFlag = 1;
        }
    }
    // if there is an error, don't submit the form
    if (errorFlag = 1){
        errorFlag = 0;
        return false
    }
    return true;
}

function validateEditForm() {
    let editColor = document.forms['formTwo'][`color`];
    let editSize = document.getElementById("editSelect");
    let checkColor = false;

    //resetting the errors so any fixed ones don't remain on screen
    let errorFlag = 0;
    document.getElementById(`invalidSize`).style.display = `none`;
    document.getElementById(`invalidColor`).style.display = `none`;

    //checking that a size was selected
    if(editSize.value === "default"){
        document.getElementById(`invalidSize`).style.display = `block`;
        window.alert(`Please select a size from the dropdown list.`);
        window.setTimeout(function() { editSize.focus(); },0);
        errorFlag = 1;
    }
    //checking if a color is selected
    for (let i = 0; i < editColor.length; i++) {
        if (editColor[i].checked) {
            checkColor = true;
            break;
        }
    }
    if (!checkColor){
        document.getElementById(`invalidColor`).style.display = `block`;
        window.alert(`Please select a color from the list.`);
        if (errorFlag = 0){
            window.setTimeout(function() { editColor[0].focus(); },0);
            errorFlag = 1;
        }
    }
    // if there is an error, don't submit the form
    if (errorFlag = 1){
        errorFlag = 0;
        return false
    }
    return true;
}