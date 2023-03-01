axios
  .get("https://reqres.in/api/users", {
    timeout: 10000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  })
  .then((res) => {
    var append = "";
    res.data.data.forEach((user) => {
      append += `<div class="user-profile">
           <div class="profile-top">
            <img id="image" src="${user.avatar}" alt="">
            <div class="profile-info">
                <span id="name">${user.first_name} ${user.last_name}</span>
                <span>|</span>
                <span id="gender">Male</span>
            </div>
             </div>      
        </div>`;
    });

    document.getElementById("user-card").innerHTML = append;
  })
  .catch((error) => {
    console.log(error);
  });
