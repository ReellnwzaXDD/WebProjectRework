    let pas11 = document.getElementById("newpass1");
    let pas22 = document.getElementById("newpass2");
    let oldpass = document.getElementById("oldpass");
    let password1 = pas11.value;
    let password2 = pas22.value;
    let chk = false;
    if(password1 == password2){
        chk = true;
    }
    
    if (chk) {
        alert("เปลี่ยนรหัสผ่านสำเร็จ");
    }else{
        alert("รหัสผ่านไม่ตรงกัน");
        
    }
    