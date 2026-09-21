const { login } = require('./auth');

describe('Regression Test Suite - Extended Edge Cases', () => {
  test('Mật khẩu sai -> Trả về false', () => {
    expect(login('admin', 'wrong_pass')).toBe(false);
  });

  test('Username rỗng -> Trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng -> Trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Tài khoản bị khóa -> Trả về false', () => {
    expect(login('blocked_user', '123')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt -> Trả về false', () => {
    expect(login('admin', '123!@#$')).toBe(false);
  });
});
