function PWfun() {
    // input from the PW
    let inputPW = document.getElementById("inputPsw").value;

    // correct PWs for all classes; freely to choose

    let correctPWClass1 = "MathAn1";
    let correctPWClass2 = "13";

    //choose which PW is correct and display the corresponding container
    if (inputPW === correctPWClass1) {
        document.getElementById("container1").style.display = "block"; // display container as new block
        document.getElementById("pswds").style.display = "none"; // removing the PW box from display
    }
    else if (inputPW === correctPWClass2) {
        document.getElementById("container2").style.display = "block";
        document.getElementById("pswds").style.display = "none";
    }
    else {
        alert("Incorrect password!");
    }
}