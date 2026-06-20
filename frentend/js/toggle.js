var users = [
    {
        "name" : "John doe",
        "gender" : "Male",
        "image" : "/images/john.png"
    },
    {
        "name" : "Jane doe",
        "gender" : "Female",
        "image" : "/images/jane.png"
    }
]

var curId = 0;

function toggle(){
    //toggle curId from 0-> 1 & 1 -> 0
    curId = (curId + 1) % 2;

    //togggle the rendered user details
    //image

    var user = users[ curId ];
    document.getElementById("user-img").src=user.image;

    // tot do : update of name and gender!
    //name
    document.getElementById("user-name").innerText=user.name;

    //gender

    document.getElementById("user-gender").innerText=user.gender;

}