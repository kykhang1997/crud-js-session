var row = null;



//Tạo function cho form
function submitform() {

    var curd_new = process();
    var curd = sessionStorage.getItem(curd_new);
    var array = curd.split(" | ");
    var curd_user = [];
    curd_user["name"] = array["0"];
    curd_user["address"] = array["1"];
    curd_user["password"] = array["2"];
    curd_user["code"] = array["3"];
    curd_user["email"] = array["4"];
    curd_user["username"] = array["5"];

    console.log(curd_user);
    if (row == null) {

        showviewdata(curd_user);
    } else {
        updateuser(curd_user);
    }

    resetform();


}

// get dữ liệu và debug xuất ra kiểu mảng
function process() {
    var isValid = true;
    // get dữ liệu từ người dùng
    var curd_new = [];
    curd_new["name"] = document.getElementById("name").value;
    curd_new["address"] = document.getElementById("address").value;
    curd_new["password"] = document.getElementById("password").value;
    curd_new["code"] = document.getElementById("code").value;
    curd_new["email"] = document.getElementById("email").value;
    curd_new["username"] = document.getElementById("username").value;
    // kiểm tra 
    if (curd_new["name"] == "") {
        alert('Enter Your Name');
        isValid = false;
    } else if (curd_new["address"] == "") {
        alert('Enter Your Address');
        isValid = false;
    } else if (curd_new["password"] == "") {
        alert('Enter Your Password');
        isValid = false;
    } else if (curd_new["code"] == "") {
        alert('Enter Your Code');
        isValid = false;
    } else if (curd_new["email"] == "") {
        alert('Enter Your Email');
        isValid = false;
    } else if (curd_new["username"] == "") {
        alert('Enter Your User Name');
        isValid = false;
    } else {

        var curd_user = curd_new["name"].concat(" | " + curd_new["address"] + " | " + curd_new["password"] + " | " + curd_new["email"] + " | " + curd_new["code"] + " | " + curd_new["username"]);

        sessionStorage.setItem(curd_user, curd_user);
        return curd_user;
    }


}

// show ra bảng
function showviewdata(data) {
    var table = document.getElementById("curd_info").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.password;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.code;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.username;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick="edituser(this)" class="btn btn-dark">Edit</button> 
                    <button onclick="deleteuser(this)" class="btn btn-warning">Delete</a>`; // chổ này thay "" thành ``
}

function resetform() {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("password").value = "";
    document.getElementById("code").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    row = null;
}

function edituser(td) {
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("address").value = row.cells[1].innerHTML;
    document.getElementById("password").value = row.cells[2].innerHTML;
    document.getElementById("code").value = row.cells[3].innerHTML;
    document.getElementById("email").value = row.cells[4].innerHTML;
    document.getElementById("username").value = row.cells[5].innerHTML;
}

function updateuser(curd_new) {
    row.cells[0].innerHTML = curd_new.name;
    row.cells[1].innerHTML = curd_new.address;
    row.cells[2].innerHTML = curd_new.password;
    row.cells[3].innerHTML = curd_new.code;
    row.cells[4].innerHTML = curd_new.email;
    row.cells[5].innerHTML = curd_new.username;
}

function deleteuser(td) {
    if (confirm('Are You Delete User ???')) {
        row = td.parentElement.parentElement;
        document.getElementById("curd_info").deleteRow(row.rowIndex);
        resetform();
    }
}