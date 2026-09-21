// Update login v1.1
function login(username, password) {
  if (!username || !password) {
    return false;
  }
  if (username === 'blocked_user') {
    return false;
  }
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

module.exports = { login };
