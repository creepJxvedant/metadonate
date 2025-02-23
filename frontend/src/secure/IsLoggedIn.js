export function IsLoggedIn() {
  const isLoggedIn = localStorage.getItem("authToken");
  if (!isLoggedIn) {
    return false;
  }
  return true;
}

export function HandleLogout() {
  localStorage.removeItem("authToken");
  window.location.reload();
}
