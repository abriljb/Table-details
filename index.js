bilang = 1;

function subit(){
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    if(!name || !age || !gender){
        alert("Please fill the boxes")
    }else{
       const lamesa = document.getElementById("tables");
        const rowers = lamesa.insertRow(bilang);

        var cell1 = rowers.insertCell(0);
        var cell2 = rowers.insertCell(1);
        var cell3 = rowers.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = gender;
        

        bilang++;
       
    }
}