function checkPattern(){
    //define variable //
    let result1 = document.getElementById("errmsg1");
    let result2 = document.getElementById("errmsg2");
    let result3 = document.getElementById("errmsg3");
    let result4 = document.getElementById("errmsg4");
    let result5 = document.getElementById("errmsg5");
    let Username = document.getElementById("username");
    let phone = document.getElementById("tel");
    let email = document.getElementById("txtEmail");
    let pas11 = document.getElementById("pass1");
    let pas22 = document.getElementById("pass2");
    let password1 = pas11.value;
    let password2 = pas22.value;
    let chk = false;
    // Check Pattern //
    if (!pas11.checkValidity() && !Username.checkValidity() && !phone.checkValidity() && !email.checkValidity()) {
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        result4.textContent = "->เบอร์โทรศัพท์ประเทศไทยเท่านั้น +66";
        result5.textContent = "-> Format email ผิด";
        return;
    }
    else if(!pas11.checkValidity() && !Username.checkValidity() && !phone.checkValidity()){
        result5.textContent= "";
        result4.textContent = "->เบอร์โทรศัพท์ประเทศไทยเท่านั้น +66";
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        return;
    }else if(!Username.checkValidity() && !phone.checkValidity() && !email.checkValidity()){
        result2.textContent= "";
        result4.textContent = "->เบอร์โทรศัพท์ประเทศไทยเท่านั้น +66";
        result5.textContent = "-> Format email ผิด";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        return;
    }else if(!phone.checkValidity() && !email.checkValidity()&&!pas11.checkValidity()){
        result3.textContent= "";
        result4.textContent = "->เบอร์โทรศัพท์ประเทศไทยเท่านั้น +66";
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        result5.textContent = "-> Format email ผิด";
        return;
    }else if(!pas11.checkValidity() && !Username.checkValidity() &&!email.checkValidity()){
        result4.textContent = " ";
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        result5.textContent = "-> Format email ผิด";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        return;
    }else if(!pas11.checkValidity() && !Username.checkValidity()){
        result4.textContent="";
        result5.textContent= "";
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        return;
    }else if(!Username.checkValidity() && !phone.checkValidity()){
        result2.textContent= "";
        result5.textContent= "";
        result4.textContent = "->เบอร์โทรศัพท์ประเทศไทยเท่านั้น +66";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        return;
    }else if(!pas11.checkValidity()&& !email.checkValidity()){
        result3.textContent= "";
        result4.textContent="";
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        result5.textContent = "-> Format email ผิด";
        return;
    }else if(!email.checkValidity() && !Username.checkValidity()){
        result4.textContent="";
        result2.textContent= "";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        result5.textContent = "-> Format email ผิด";
        return;
    }else if(!pas11.checkValidity()  && !phone.checkValidity()){
        result3.textContent= "";
        result5.textContent= "";
        result4.textContent = "->เบอร์โทรศัพท์ประเทศไทยเท่านั้น +66";
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        return
    }
    else if(!pas11.checkValidity() ){
        result3.textContent= "";
        result4.textContent="";
        result5.textContent= "";
        result2.textContent = "->รหัสผ่าน ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1";
        return;
    }else if(!Username.checkValidity()){
        result2.textContent= "";
        result4.textContent="";
        result5.textContent= "";
        result3.textContent = "->Username ต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข มี3ตัวและไม่เกิน20ตัวเท่านั้น";
        return;
    }else if(!phone.checkValidity()){
        result2.textContent= "";
        result3.textContent= "";
        result5.textContent= "";
        result4.textContent = "->เบอร์โทรศัพท์ประเทศไทยเท่านั้น +66";
        return;
    }else if(!email.checkValidity()){
        result2.textContent = "";
        result3.textContent = "";
        result4.textContent = "";
        result5.textContent = "-> Format email ผิด";
        return;
    }
    result2.textContent= ""; // force delete text 
    result3.textContent= "";
    result4.textContent= "";
    result5.textContent= "";
    // check currect of password //
    if(password1 == password2){
        chk = true;
    }
    
    if (chk) {
        result1.textContent = "";
    }else{
        result1.textContent = "**รหัสผ่านไม่ตรงกัน";
    }
    

}
let apiDataFetched = false;
// let apiDataFetched2 = false;
// let apiDataFetched3 = false;
// let apiDataFetched4 = false;

async function APIprovince(parentValue = null, status = null) {
    let response = await fetch('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json');
    let rawData = await response.text();
    let objectData = JSON.parse(rawData);
    let result = document.getElementById('province');
    let result2 = document.getElementById('amphure');
    let result3 = document.getElementById('tambon');
    let result4 = document.getElementById('zipcode');

    if (!apiDataFetched) {
        console.log("province");
        result.innerHTML = '';
        for (let i = 0; i < objectData.length; i++) {
            let province = objectData[i];
            let content = province.name_th;
            let option = document.createElement('option');
            option.value = content;
            option.text = content;
            result.appendChild(option);
        }
        apiDataFetched = true;
    }

    if (status === "amphure") {
        result2.innerHTML = '';
        for (let i = 0; i < objectData.length; i++) {
            let province = objectData[i];
            if (parentValue === province.name_th) {
                console.log("amphure");
                for (let j = 0; j < province.amphure.length; j++) {
                    let amphure = province.amphure[j];
                    let content2 = amphure.name_th;
                    let option2 = document.createElement('option');
                    option2.value = content2;
                    option2.text = content2;
                    result2.appendChild(option2);
                }
            }
        }
    }

    if (status === "tambon") {
        result3.innerHTML = '';
        for (let i = 0; i < objectData.length; i++) {
            let province = objectData[i];
            for (let j = 0; j < province.amphure.length; j++) {
                let amphure = province.amphure[j];
                if (parentValue === amphure.name_th) {
                    console.log("tambon");
                    for (let k = 0; k < amphure.tambon.length; k++) {
                        let tambon = amphure.tambon[k];
                        let content3 = tambon.name_th;
                        let option3 = document.createElement('option');
                        option3.value = content3;
                        option3.text = content3;
                        result3.appendChild(option3);
                    }
                }
            }
        }
    }
    if (status === "zipcode") {
        result4.innerHTML = '';
        for (let i = 0; i < objectData.length; i++) {
            let province = objectData[i];
            for (let j = 0; j < province.amphure.length; j++) {
                let amphure = province.amphure[j];
                if (parentValue === amphure.name_th) {
                    console.log("zipcode");
                    for (let k = 0; k < amphure.tambon.length; k++) {
                        let tambon = amphure.tambon[k];
                        let content4 = tambon.zip_code;
                        let option4 = document.createElement('option');
                        option4.value = content4;
                        option4.text = content4;
                        result4.appendChild(option4);
                    }
                }
            }
        }
    }
}

function updateAddress() {
    var provinceValue = document.getElementById('province').value || '';
    var amphureValue = document.getElementById('amphure').value || '';
    var tambonValue = document.getElementById('tambon').value || '';
    var zipcodeValue = document.getElementById('zipcode').value || '';

    // Concatenate the selected values into one string
    var txtAddress = 'จังหวัด : ' + provinceValue + ', อำเภอ : ' + amphureValue + ', ตำบล : ' + tambonValue + ', รหัสไปรษณีย์ : ' + zipcodeValue;

    // Set the txtAddress string as the value of the input field
    document.getElementById('txtAddress').value = txtAddress;
}


window.onload = function(){
    let regbtn = document.getElementById("btnreg");
    regbtn.onclick = checkPattern;

    let provinceDropdown = document.getElementById("province");
    let amphureDropdown = document.getElementById("amphure");       
    amphureDropdown.disabled = true;
    let tambonDropdown = document.getElementById("tambon");         
    tambonDropdown.disabled = true;
    let zipcodeDropdown = document.getElementById("zipcode");         
    zipcodeDropdown.disabled = true;

    provinceDropdown.addEventListener("click", function () {
        if (!apiDataFetched) {
            APIprovince();        
            amphureDropdown.disabled = false;
        }
    });
    provinceDropdown.addEventListener("blur", function () {
        // console.log(provinceDropdown.value);
        APIprovince(provinceDropdown.value,"amphure");        
        APIprovince(amphureDropdown.value,"tambon");
        APIprovince(amphureDropdown.value,"zipcode");
        tambonDropdown.disabled = false;
    });
    amphureDropdown.addEventListener("blur",function () {
        // console.log(amphureDropdown.value);
        APIprovince(amphureDropdown.value,"tambon");
        APIprovince(amphureDropdown.value,"zipcode");
    });
    tambonDropdown.addEventListener("blur",function () {
        zipcodeDropdown.disabled = false;
        APIprovince(amphureDropdown.value,"zipcode");
    });
    zipcodeDropdown.addEventListener("blur",function () {
        updateAddress();
    });

    
}
