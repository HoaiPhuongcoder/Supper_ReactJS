class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000/",
      timeout: 10000,
    });
    this.instance.interceptors.request.use(
      (config) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.instance.interceptors.response.use(
      (config) => {
        return config.data;
      },
      (error) => Promise.reject(error)
    );
  }
  get(url) {
    return this.instance.get(url);
  }
  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();

const fetchProfile = () => {
  http
    .get("profile")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
const fetchProducts = () => {
  http
    .get("products")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  http
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    })
    .catch((error) => {
      console.log(error);
    });
});

document.getElementById("btn-get-profile").addEventListener("click", () => {
  fetchProfile();
});

document.getElementById("btn-get-products").addEventListener("click", () => {
  fetchProducts();
});

document.getElementById("btn-get-both").addEventListener("click", () => {
  fetchProfile();
  fetchProducts();
});
