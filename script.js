// axios.get('https://randomuser.me/api/')
//   .then(function (response) {
//     console.log(response.data.results[0]);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const name = document.getElementById("name");
    const gender = document.getElementById("gender");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const image = document.getElementById("image");
    const location = document.getElementById("location");
    console.log(response.data.results[0]);

    name.innerHTML = response.data.results[0].name.title +  " "  + response.data.results[0].name.first + " " + response.data.results[0].name.last;
    gender.innerHTML = response.data.results[0].gender;
    phone.innerHTML = response.data.results[0].phone;
    email.innerHTML = response.data.results[0].email;
    location.innerHTML = response.data.results[0].location.city + ", " + response.data.results[0].location.state;
    image.setAttribute("src", response.data.results[0].picture.large);
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const name1 = document.getElementById("name1");
    const gender1 = document.getElementById("gender1");
    const phone1 = document.getElementById("phone1");
    const email1 = document.getElementById("email1");
    const image1 = document.getElementById("image1");
    const location1 = document.getElementById("location1");
    console.log(response.data.results[0]);

    name1.innerHTML = response.data.results[0].name.title +  " "  + response.data.results[0].name.first + " " + response.data.results[0].name.last;
    gender1.innerHTML = response.data.results[0].gender;
    phone1.innerHTML = response.data.results[0].phone;
    email1.innerHTML = response.data.results[0].email;
    location1.innerHTML = response.data.results[0].location.city + ", " + response.data.results[0].location.state;
    image1.setAttribute("src", response.data.results[0].picture.large);
   
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const name2 = document.getElementById("name2");
    const gender2 = document.getElementById("gender2");
    const phone2 = document.getElementById("phone2");
    const email2 = document.getElementById("email2");
    const image2 = document.getElementById("image2");
    const location2 = document.getElementById("location2");
    console.log(response.data.results[0]);

    name2.innerHTML = response.data.results[0].name.title +  " "  + response.data.results[0].name.first + " " + response.data.results[0].name.last;
    gender2.innerHTML = response.data.results[0].gender;
    phone2.innerHTML = response.data.results[0].phone;
    email2.innerHTML = response.data.results[0].email;
    location2.innerHTML = response.data.results[0].location.city + ", " + response.data.results[0].location.state;
    image2.setAttribute("src", response.data.results[0].picture.large);
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const name3 = document.getElementById("name3");
    const gender3 = document.getElementById("gender3");
    const phone3 = document.getElementById("phone3");
    const email3 = document.getElementById("email3");
    const image3 = document.getElementById("image3");
    const location3 = document.getElementById("location3");
    console.log(response.data.results[0]);

    name3.innerHTML = response.data.results[0].name.title +  " "  + response.data.results[0].name.first + " " + response.data.results[0].name.last;
    gender3.innerHTML = response.data.results[0].gender;
    phone3.innerHTML = response.data.results[0].phone;
    email3.innerHTML = response.data.results[0].email;
    location3.innerHTML = response.data.results[0].location.city + ", " + response.data.results[0].location.state;
    image3.setAttribute("src", response.data.results[0].picture.large);
  })
  .catch(function (error) {
    console.log(error);
  });


  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const name4 = document.getElementById("name4");
    const gender4 = document.getElementById("gender4");
    const phone4 = document.getElementById("phone4");
    const email4 = document.getElementById("email4");
    const image4 = document.getElementById("image4");
    const location4 = document.getElementById("location4");
    console.log(response.data.results[0]);

    name4.innerHTML = response.data.results[0].name.title +  " "  + response.data.results[0].name.first + " " + response.data.results[0].name.last;
    gender4.innerHTML = response.data.results[0].gender;
    phone4.innerHTML = response.data.results[0].phone;
    email4.innerHTML = response.data.results[0].email;
    location4.innerHTML = response.data.results[0].location.city + ", " + response.data.results[0].location.state;
    image4.setAttribute("src", response.data.results[0].picture.large);
  })
  .catch(function (error) {
    console.log(error);
  });


  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    const name5 = document.getElementById("name5");
    const gender5 = document.getElementById("gender5");
    const phone5 = document.getElementById("phone5");
    const email5 = document.getElementById("email5");
    const image5 = document.getElementById("image5");
    const location5 = document.getElementById("location5");
    console.log(response.data.results[0]);

    name5.innerHTML = response.data.results[0].name.title +  " "  + response.data.results[0].name.first + " " + response.data.results[0].name.last;
    gender5.innerHTML = response.data.results[0].gender;
    phone5.innerHTML = response.data.results[0].phone;
    email5.innerHTML = response.data.results[0].email;
    location5.innerHTML = response.data.results[0].location.city + ", " + response.data.results[0].location.state;
    image5.setAttribute("src", response.data.results[0].picture.large);
  })
  .catch(function (error) {
    console.log(error);
  });

  
 


  

  
  
  
