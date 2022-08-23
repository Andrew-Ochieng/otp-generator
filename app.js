// otp generator
let generateOTP = () => {
    const digits = [0,1,2,3,4,5,6,7,8,9]
    let otp = ""
    
    for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)]
    }
    return otp;
    
}


generateOTP()



