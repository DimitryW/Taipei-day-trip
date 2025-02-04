const loginButton = document.getElementById("nav-item2");
let memberSrc = "http://54.86.13.161:3000";
// let memberSrc = "http://127.0.0.1:3000";
let headers = {
    "Content-type": "application/json"
};
let membername = "";

// 登入功能 (把原本FORM改掉，直接取INPUT的值去fetch，不然FORM會刷新頁面)
const signinWindow = () => {
    let divWrapper = document.createElement("div"); // 建立視窗
    let divTop = document.createElement("div"); // 視窗上面色條
    let div1 = document.createElement("div"); // 登入會員帳號文字
    let closeButton = document.createElement("button"); // 關閉視窗按鈕
    let closeIcon = document.createElement("img"); // 關閉視窗圖示
    let signinWrap = document.createElement("div"); // 登入欄位
    let inputEmail = document.createElement("input"); // 信箱輸入欄位
    inputEmail.value = "test@mail.com";
    let inputPass = document.createElement("input"); // 密碼輸入欄位
    inputPass.value = "test";
    let buttonWrap = document.createElement("div");
    let button1 = document.createElement("button"); // 登入帳戶按鈕
    let msg = document.createElement("div"); // 註冊訊息顯示區塊
    let button2 = document.createElement("button"); // 切換註冊視窗按鈕
    divWrapper.setAttribute("id", "signin");
    divTop.setAttribute("id", "member-div-top");
    div1.setAttribute("id", "signin-title");
    closeButton.setAttribute("id", "close-icon");
    closeIcon.src = "../static/photos/icon_close.png"
    signinWrap.setAttribute("id", "signin-form");
    // form.setAttribute("action", "/api/user");   不要用表單<form>，因為submit後會自動刷新頁面!!
    // form.setAttribute("method", "PATCH");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("placeholder", "輸入電子信箱");
    inputPass.setAttribute("id", "password");
    inputPass.setAttribute("type", "password");
    inputPass.setAttribute("placeholder", "輸入密碼");
    buttonWrap.setAttribute("id", "buttonWrap");
    button1.setAttribute("id", "signin-button");
    [inputEmail, inputPass].forEach((elem) => {
        elem.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                button1.click();
            }
        })
    })
    button2.setAttribute("id", "switch-button")
    msg.setAttribute("id", "signin-message")
    let text1 = document.createTextNode("登入會員帳號");
    let buttonText1 = document.createTextNode("登入帳戶");
    let buttonText2 = document.createTextNode("還沒有帳戶？點此註冊");
    div1.appendChild(text1);
    closeButton.appendChild(closeIcon);
    buttonWrap.appendChild(button1);
    buttonWrap.appendChild(msg);
    button1.appendChild(buttonText1);
    button1.addEventListener("click", signin);
    button2.appendChild(buttonText2);
    // 切換到註冊視窗
    button2.addEventListener("click", signupWindow);
    signinWrap.appendChild(inputEmail);
    signinWrap.appendChild(inputPass);
    signinWrap.appendChild(buttonWrap);
    let elem = [divTop, div1, closeButton, signinWrap, button2];
    for (let i in elem) {
        divWrapper.appendChild(elem[i]);
    }
    document.querySelector(".topnav-wrapper").appendChild(divWrapper);
    document.getElementById("backdrop").style.display = "block"; // 打開背景濾鏡

    // 關閉視窗
    closeButton.addEventListener("click", () => {
        // 重新給予登入按鈕click事件
        // loginButton.addEventListener("click", signinWindow);
        document.getElementById("signin").remove();
        document.getElementById("backdrop").style.display = "none"; // 關閉背景濾鏡
    });
    // 開啟視窗後移除登入按鈕click事件
    // loginButton.removeEventListener("click", signinWindow);
}

// 註冊功能
const signupWindow = () => {
    document.getElementById("signin").remove();
    let divWrapper = document.createElement("div"); // 建立視窗
    let divTop = document.createElement("div"); // 視窗上面色條
    let div1 = document.createElement("div"); // 註冊會員帳號文字
    let closeButton = document.createElement("button"); // 關閉視窗按鈕
    let closeIcon = document.createElement("img"); // 關閉視窗圖示
    let signupWrap = document.createElement("div"); // 登入欄位
    let inputName = document.createElement("input"); // 姓名輸入欄位
    let inputEmail = document.createElement("input"); // 信箱輸入欄位
    let inputPass = document.createElement("input"); // 密碼輸入欄位
    let buttonWrap = document.createElement("div");
    let button1 = document.createElement("button"); // 註冊帳戶按鈕
    let msg = document.createElement("div"); // 註冊訊息顯示區塊
    let button2 = document.createElement("button"); // 切換登入視窗按鈕
    divWrapper.setAttribute("id", "signup");
    divTop.setAttribute("id", "member-div-top");
    div1.setAttribute("id", "signin-title");
    closeButton.setAttribute("id", "close-icon");
    closeIcon.src = "../static/photos/icon_close.png"
    signupWrap.setAttribute("id", "signup-form");
    // form.setAttribute("action", "/api/user");
    // form.setAttribute("method", "POST");
    inputName.setAttribute("name", "name");
    inputName.setAttribute("id", "username");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "輸入姓名");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("placeholder", "輸入電子信箱");
    inputPass.setAttribute("name", "password");
    inputPass.setAttribute("id", "password");
    inputPass.setAttribute("type", "password");
    inputPass.setAttribute("placeholder", "輸入密碼");
    buttonWrap.setAttribute("id", "buttonWrap");
    button1.setAttribute("id", "signin-button");
    [inputName, inputEmail, inputPass].forEach((elem) => {
        elem.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                button1.click();
            }
        })
    })
    button2.setAttribute("id", "switch-button");
    msg.setAttribute("id", "signup-message")
    let text1 = document.createTextNode("註冊會員帳號");
    let buttonText1 = document.createTextNode("註冊新帳戶");
    let buttonText2 = document.createTextNode("已經有帳戶了？點此登入");
    div1.appendChild(text1);
    closeButton.appendChild(closeIcon);
    buttonWrap.appendChild(button1);
    buttonWrap.appendChild(msg);
    button1.appendChild(buttonText1);
    button1.addEventListener("click", signup);
    button2.appendChild(buttonText2);
    // 切換到登入視窗
    button2.addEventListener("click", () => {
        document.getElementById("signup").remove();
        signinWindow();
    });
    signupWrap.appendChild(inputName)
    signupWrap.appendChild(inputEmail);
    signupWrap.appendChild(inputPass);
    signupWrap.appendChild(buttonWrap);
    let elem = [divTop, div1, closeButton, signupWrap, button2];
    for (let i in elem) {
        divWrapper.appendChild(elem[i]);
    }
    document.querySelector(".topnav-wrapper").appendChild(divWrapper);
    document.getElementById("backdrop").style.display = "block"; // 打開背景濾鏡

    // 關閉視窗
    closeButton.addEventListener("click", () => {
        // 重新給予登入按鈕click事件
        // loginButton.addEventListener("click", signinWindow);
        document.getElementById("signup").remove();
        document.getElementById("backdrop").style.display = "none"; // 關閉背景濾鏡
    });
    // 開啟視窗後移除登入按鈕click事件
    // loginButton.removeEventListener("click", signinWindow);
}


// 檢查會員登入狀況
const loggedIn = () => {
    fetch("/api/user", {
            method: "GET",
            headers: headers
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result["data"]) {
                membername = result["data"]["name"];
                console.log(membername);
                // loginButton.innerHTML = "登出系統";
                document.getElementById("nav-item2-a").innerHTML = "會員專區";
                loginButton.removeEventListener("click", signinWindow);
                // loginButton.addEventListener("click", logout);
                document.getElementById("nav-item2-a").setAttribute("href", "/member");
                document.getElementById("nav-item2-a").style.color = "#666666";
                console.log("already logged in.")
                document.getElementById("nav-item1").removeEventListener("click", signinWindow);
                document.getElementById("nav-item1-a").setAttribute("href", "/booking");
                document.getElementById("nav-item1-a").style.color = "#666666";
            } else {
                document.getElementById("nav-item1-a").addEventListener("click", signinWindow);
                if (window.location.pathname === "/booking" | window.location.pathname === '/thankyou' | window.location.pathname === '/member') {
                    location.href = "/";
                }
            }
        })
}

// 會員登入功能
const signin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // 串接API
    let body = {
        "email": email,
        "password": password
    };
    fetch("/api/user", {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(body)
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result["ok"]) {
                window.location.reload();
            } else {
                console.log(result["message"])
                document.getElementById("signin-message").innerHTML = "登入失敗，帳號或密碼錯誤或其他原因";
            }
        })
}

// 註冊功能
const signup = () => {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // 表單驗證
    let nameRegex = /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z.\s]{2,20})$/;
    let emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
    // let pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_ `\-={}:";'<>?,.\/]).{3,18}$/;
    if (name === "" | email === "" | password === "") {
        document.getElementById("signup-message").innerHTML = "欄位不可為空，請輸入資料!";
        return;
    }
    if (!nameRegex.test(name)) {
        document.getElementById("signup-message").innerHTML = "請輸入正確姓名格式";
        return;
    }
    if (!emailRegex.test(email)) {
        document.getElementById("signup-message").innerHTML = "請輸入正確信箱格式";
        return;
    }
    // if (!pwRegex.test(password)) {
    //     document.getElementById("signup-message").innerHTML = "密碼必須為3-18位字母、數字、特殊符號";
    //     return;
    // }
    // 串接API，回復註冊狀況
    let body = {
        "name": name,
        "email": email,
        "password": password
    };
    fetch("/api/user", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result["ok"]) {
                document.getElementById("signup-message").innerHTML = "註冊成功";
            } else {
                console.log(result["message"])
                document.getElementById("signup-message").innerHTML = "註冊失敗，重複的 Email 或其他原因";
            }
        })
}

// 會員登出功能
const logout = () => {
    fetch("/api/user", {
            method: "DELETE",
            headers: headers
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result["ok"]) {
                loginButton.innerHTML = "註冊/登入";
                loginButton.removeEventListener("click", logout);
                loginButton.addEventListener("click", signinWindow);
                document.getElementById("nav-item1-a").removeAttribute("href"); // 移除預定行程按鈕連結
                document.getElementById("nav-item2").removeAttribute("href");
                document.getElementById("nav-item1-a").addEventListener("click", signinWindow);
            }
            if (window.location.pathname === "/booking" | window.location.pathname === '/thankyou' | window.location.pathname === '/member') {
                location.href = "/";
            }
            console.log("logged out!")
        })
}




// 列出歷史訂單
async function showOrders() {
    let res = await fetch("/api/member_orders");
    let data = await res.json();
    document.getElementById("member-name").innerHTML = data["member_name"] !== null ? data["member_name"] : "";
    document.getElementById("member-email").innerHTML = data["member_email"] !== null ? data["member_email"] : "";
    // document.getElementById("member-email-1").innerHTML = data["member_email"] !== null ? data["member_email"] : "";
    if (data["data"].length !== 0) {
        for (let i = data["data"].length - 1; i >= 0; i--) {
            let orderInfo = document.createElement("div");
            let orderTable = document.createElement("table");
            let btn = document.createElement("button");
            let img = document.createElement("img");
            btn.setAttribute("data-id", data["data"][i]["order_number"]);
            btn.id = "order-detail-btn";
            btn.textContent = "詳細訂單資料";
            img.id = "plus-btn-img"
            img.src = "../static/photos/plus.jpg";

            let tableHeader = orderTable.insertRow(0);
            tableHeader.id = "table-header";
            let th0 = tableHeader.insertCell(0);
            let th1 = tableHeader.insertCell(1);
            let th2 = tableHeader.insertCell(2);
            let th3 = tableHeader.insertCell(3);
            th0.style.width = "38%";
            th1.style.width = "23%";
            th2.style.width = "20%";
            th3.style.width = "19%";
            th0.innerHTML = "訂單編號";
            th1.innerHTML = "下訂日期";
            th2.innerHTML = "金額";
            th3.innerHTML = "付款狀態"
            let tableRow = orderTable.insertRow(1);
            let cell0 = tableRow.insertCell(0);
            let cell1 = tableRow.insertCell(1);
            let cell2 = tableRow.insertCell(2);
            let cell3 = tableRow.insertCell(3);
            cell0.innerHTML = data["data"][i]["order_number"];
            cell1.innerHTML = data["data"][i]["order_place_date"];
            cell2.innerHTML = String(data["data"][i]["price"]) + " 元";
            cell3.innerHTML = data["data"][i]["payment"] === "paid" ? "已付款" : "未付款";

            orderInfo.id = "order-info";
            let elem = [orderTable, img, btn]
            elem.forEach(div => { orderInfo.appendChild(div); });
            document.getElementById("orders").appendChild(orderInfo);

            let hiddenDiv = document.createElement("div");
            hiddenDiv.id = "hidden-detail";
            hiddenDiv.style.height = "0";
            hiddenDiv.classList.add("close");
            let attraction = document.createElement("div");
            let date = document.createElement("div");
            let time = document.createElement("div");
            let contactName = document.createElement("div");
            let contactNumber = document.createElement("div");
            date.id = "order-info-date";
            attraction.textContent = "景點 : " + data["data"][i]["attraction"];
            date.textContent = "出發日期 : " + data["data"][i]["date"];
            time.textContent = "時段 : " + data["data"][i]["time"];
            contactName.textContent = "聯絡人 : " + data["data"][i]["contact_name"];
            contactNumber.textContent = "連絡電話 : " + data["data"][i]["contact_phone"];
            let divs = [attraction, date, time, contactName, contactNumber];
            divs.forEach(div => { hiddenDiv.appendChild(div); });
            document.getElementById("orders").appendChild(hiddenDiv);

            btn.onclick = () => {
                if (hiddenDiv.classList.contains("close")) {
                    hiddenDiv.classList.remove("close");
                    hiddenDiv.style.height = "161px";
                    img.src = "../static/photos/minus.jpg"
                } else {
                    hiddenDiv.classList.add("close");
                    hiddenDiv.style.height = "0";
                    img.src = "../static/photos/plus.jpg";
                }
            }
            img.onclick = () => {
                if (hiddenDiv.classList.contains("close")) {
                    hiddenDiv.classList.remove("close");
                    hiddenDiv.style.height = "161px";
                    img.src = "../static/photos/minus.jpg"
                } else {
                    hiddenDiv.classList.add("close");
                    hiddenDiv.style.height = "0";
                    img.src = "../static/photos/plus.jpg";
                }
            }
        }
    } else {
        let orderResult = document.createElement("div");
        orderResult.textContent = "目前沒有訂單資料";
        document.getElementById("orders").appendChild(orderResult);
    }
}

const changePw = async() => {
    let email = document.getElementById("member-email").textContent;
    let oldPw = document.getElementById("old-pw").value;
    let newPw = document.getElementById("new-pw").value;
    let confirmPw = document.getElementById("confirm-pw").value;
    if (email === "" | oldPw === "" | newPw === "") {
        document.getElementById("pwUpdateMsg").style.display = "block";
        document.getElementById("pwUpdateMsg").style.color = "red";
        document.getElementById("pwUpdateMsg").innerHTML = "欄位不可為空，請輸入資料!";
        return;
    }
    let body = {
        "email": email,
        "old_pw": oldPw,
        "new_pw": newPw,
        "confirm_pw": confirmPw
    }
    let res = await fetch("/api/member_pw", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });
    let data = await res.json();
    if (res.status === 400) {
        document.getElementById("pwUpdateMsg").style.display = "block";
        document.getElementById("pwUpdateMsg").style.color = "red";
        document.getElementById("pwUpdateMsg").innerHTML = data["message"];
    }
    if (data["ok"]) {
        document.getElementById("pwUpdateMsg").style.color = "blue";
        document.getElementById("pwUpdateMsg").style.display = "block";
        document.getElementById("pwUpdateMsg").innerHTML = "更新密碼成功";
    }

}



loginButton.addEventListener("click", signinWindow);
// window.addEventListener("DOMContentLoaded", loggedIn);  改成在 index.html的 body做onload事件比較不會卡住