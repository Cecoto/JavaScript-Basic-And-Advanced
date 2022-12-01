export function getUserData() {
   return JSON.parse(sessionStorage.getItem('userData'));
}
export function setUserData(data) {
   sessionStorage.setItem('userData', JSON.stringify(data));
}
export function clearUserData() {
   sessionStorage.removeItem('userData');
}

// export function getAccessToken() {
//    const userData = getUserData();
//    if (user) {
//       return user.accessToken;
//    }
//    else {
//       return null;
//    }
// }

export function createSubmitHandler(ctx, handler) {
   return function (event) {
      event.preventDefault();
      const formData = Object.fromEntries(new FormData(event.target));
      handler(ctx, formData, event);
   };
}