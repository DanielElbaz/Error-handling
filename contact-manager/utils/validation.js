

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

function checkDuplicateInput(data,email){
    if (data.find((contact)=>{contact.email.toLowerCase() == email.toLowerCase()})){
        throw "Sorry this email already exist !"
    }
    return;
}




module.exports = {
    checkEmail,
    checkPhone,
    checkDuplicateInput
}