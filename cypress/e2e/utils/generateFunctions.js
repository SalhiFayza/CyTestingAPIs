function generateEmail() {
  const letters = Math.random().toString(36).substring(2, 5); // 3 random letters
  const numbers = Math.floor(10 + Math.random() * 90); // 2 random numbers
  return `fizo${letters}${numbers}@gmail.com`;
}

function generatePassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let pass = '';
  for (let i = 0; i < 10; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

module.exports = { generateEmail, generatePassword };
