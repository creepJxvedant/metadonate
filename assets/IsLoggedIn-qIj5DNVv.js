function e(){return!!localStorage.getItem("authToken")}function n(){localStorage.removeItem("authToken"),window.location.replace("/login"),window.location.reload()}export{n as H,e as I};
