let note = [];
let task = document.getElementById("task").value;
let date = document.getElementById("date").value;
let submit = document.getElementById("submit");

submit.onclick = function (e) {
    if (task.value === ""){
        alert("Please fill the text box before submiting");
    }
    else if (date.value === "") {
        alert ("Please fill the date box before submiting");
    }
    else {
        
        var otask = task.value;
        var odate = date.value;


        var detask = document.createElement("div");
        var dedate = document.createElement("div");
        var deback = document.createElement("div");

        deback.style.backgroundImage = "url(notebg.png)"
        

        detask.style.overflow.auto


        detask.innerHTML = `<div>${otask}</div>`
        dedate.innerHTML = `<div>${odate}</div>`
        document.getElementById("note").appendChild(deback);
        deback.appendChild(detask);
        deback.appendChild(dedate);








    }

};