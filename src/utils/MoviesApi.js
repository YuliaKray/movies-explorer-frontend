export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}

export const getAllMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => handleResponse(res))
  .then((res) => {
    if (res) {
      localStorage.setItem('movies', JSON.stringify(res));
      return res
    } else {
      return;
    }
  })
}