// fetch("https://reqres.in/api/users?page=2")
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Invalid");
//     }
//   })
//   .then((data) => {
//     let html = "";
//     data.data.forEach((item) => {
//       html += `<div>${item.first_name} ${item.last_name}</div>`;
//     });
//     document.getElementById("result").innerHTML = html;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// axios
//   .get("https://reqres.in/api/users/2")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// axios({
//   method: "get",
//   baseURL: "https://reqres.in/api",
//   url: "/users",
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const http = axios.create({
  baseURL: "https://reqres.in/api",
});

http.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (config) => {
    console.log(config);
    config.headers.Timeout = 100;
    return config.data.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http
  .get("/users")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
