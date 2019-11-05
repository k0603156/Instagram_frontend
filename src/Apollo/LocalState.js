export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false
};
const setLS = (action, obj) => {
  return new Promise((resolve, reject) => {
    try {
      for (let key in obj) {
        localStorage[action](key, obj[key]);
      }
      resolve(localStorage.getItem("token"));
    } catch {
      reject(false);
    }
  });
};
export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      setLS("setItem", {
        token: token
      }).then(result => {
        if (result !== "" && result !== null) {
          console.log(result);
          cache.writeData({
            data: {
              isLoggedIn: true
            }
          });
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      // cache.writeData({
      //   data: {
      //     isLoggedIn: false
      //   }
      // });
      window.location = "/";
      return null;
    }
  }
};
