export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Nguyen Hoai Phuong",
          age: 21,
          address: "Da nang",
        },
        status: 200,
      });
    }, 1500);
  });
};
