// // object

// const name_list = [
//     {
//         "name": "Arun",
//         "image": "https://ui-avatars.com/api/?name=Arun",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     },
//     {
//         "name": "Ajith",
//         "image": "https://ui-avatars.com/api/?name=Ajith",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     },
//     {
//         "name": "Bala",
//         "image": "https://ui-avatars.com/api/?name=Bala",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     },
//     {
//         "name": "Deva",
//         "image": "https://ui-avatars.com/api/?name=Deva",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
//     }

// ]
// function saveData()
// {
// let user_email,pw;
// user_email = document.getElementById("user_email").value;
// pw = document.getElementById("password").value;
// let user_details=new Array();
// user_details =JSON.parse(localStorage.getItem("userRecords"))?JSON.parse(localStorage.getItem("userRecords")):[]
// if(user_details.some((v)=>{return v.user_email==user_email && v.pw == pw}))
// {
//   alert("Successfully Logined ");
//   let current_user=user_details.filter((v)=>{return v.user_email == user_email && v.pw == pw})[0]
//  localStorage.setItem('unique',current_user.user_email);

// window.location.href="../homepage/homepage.html"
// }
// else
// {
//   alert('Please Check your details');
// }
// }


let a=[1,0];
let siva="";
for(i=1;i<=a.length;i++){
    siva += i + " ";
}
console.log(siva)