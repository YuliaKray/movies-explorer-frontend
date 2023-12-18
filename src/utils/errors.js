export function handleErrors(error, wedplace) {
  let errorMessage = '';

  console.log(error)

  if (error === 'Ошибка: 401') { // 401 Unauthorized error
    errorMessage = `Вы ввели неправильный логин или пароль`;
    return errorMessage
  }
  if (error === 'Ошибка: 409') { // 409 conflict error
    errorMessage = `Пользователь с таким email уже существует.`;
    return errorMessage
  }
  if (error === 'Ошибка: 400') { // 400
    errorMessage = `При ${wedplace} произошла ошибка.`;
    return errorMessage
  }
  if (error === 'Ошибка: 404') { // 404
    return errorMessage = 'Страница по указанному маршруту не найдена.';
  }
  if (error === null || error === undefined  || error === 'Ошибка: 500') { // 500
    return errorMessage = 'На сервере произошла ошибка';
  }

}