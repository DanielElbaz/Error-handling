

function checkPhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!(phoneRegex.test(phone))) {
        throw ("Invalid phone number")
    }
    return
}

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!(emailRegex.test(email))) {
        throw ("Invalid email")
    }
    return
}

function checkDuplicateInput(data, email) {
    if (checkEmailinData(data, email)) {
        throw "Sorry this email already exist !"
    }
    return;
}


function checkEmailinData(data, email) {
    return (data.find(contact => contact.email.toLowerCase() == email.toLowerCase())) !== undefined;
}

function existInput(input1,input2 = NaN,input3 = NaN){
    if(input1 === undefined || input2 === undefined || input2 === undefined){
        throw "Please insert all the info I need ! (try help for know the right syntax)";
    }
    return;
}

module.exports = {
    checkEmail,
    checkPhone,
    checkDuplicateInput,
    checkEmailinData,
    existInput
}