export default message => {
  switch (message) {
    case 'auth/invalid-email':
      return 'Hatalı email';
    case 'auth/email-already-exists':
      return 'Bu email zaten kayıtlı';
    case 'auth/invalid-email':
      return 'Hatalı email adresi';
    case 'auth/invalid-password':
      return 'Hatalı parola';
    case 'auth/user-not-found':
      return 'Bu epostayla kayıtlı bir kullanıcı yok';
    case 'auth/weak-password':
      return 'Zayıf parola';
    case 'auth/wrong-password':
      return 'Yanlış parola';
    case 'auth/user-disabled':
      return 'KULLANICI ATILDI!!';
    default:
      return message;
  }
};
