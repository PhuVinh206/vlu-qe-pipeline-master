// Update login v1.1
function login(username, password) {
  if (!username || !password) {
    return false;
  }
  if (username === 'blocked_user') {
    return false;
  }
  // Đổi từ 123 thành '9999'
  if (username === 'admin' && password === '9999') {
    return true;
  }
  return false;
}

module.exports = { login };
