function Add() {
  let inputs = document.getElementById("inp");
  let text = document.querySelector(".text");
  
  if (inputs.value === "") {
    alert("Please enter your task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value}<img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png">`;
    text.appendChild(newEle);
    inputs.value = "";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addButton').addEventListener('click', Add);
});
  

    