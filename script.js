//your code here
   const userImg = document.getElementById("user-img");
    const userName = document.getElementById("user-name");
    const additionalInfo = document.getElementById("additional-info");
    const ageBtn = document.getElementById("age-btn");
    const emailBtn = document.getElementById("email-btn");
    const phoneBtn = document.getElementById("phone-btn");
    const getUserBtn = document.getElementById("getUser-btn");

    let userData;

    // Fetch user data on page load
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        userData = data.results[0];
        userImg.src = userData.picture.large;
        userName.innerText = `${userData.name.first} ${userData.name.last}`;
      });

    // Handle button clicks
    ageBtn.addEventListener("click", () => {
      additionalInfo.innerText = `Age: ${userData.dob.age}`;
    });
    emailBtn.addEventListener("click", () => {
      additionalInfo.innerText = `Email: ${userData.email}`;
    });
    phoneBtn.addEventListener("click", () => {
      additionalInfo.innerText = `Phone: ${userData.phone}`;
    });
    getUserBtn.addEventListener("click", () => {
      fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
          userData = data.results[0];
          userImg.src = userData.picture.large;
          userName.innerText = `${userData.name.first} ${userData.name.last}`;
          additionalInfo.innerText = "";
        });
    });