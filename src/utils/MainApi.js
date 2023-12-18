export const BASE_URL = 'https://api.movies-yuliakray.nomoredomainsrocks.ru';
// export const BASE_URL = 'http://localhost:3000';


const handleResponse = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}


export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => handleResponse(res))
    .then((data) => {
      return {
        data: {
          "_id": data._id,
          "email": data.email,
          "name": data.name
        }
      }
    })
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => handleResponse(res)
    )
    .then((res) => {
      if (res) {
        localStorage.setItem('token', res.token);
        return res;
      } else {
        return;
      }
    })
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => handleResponse(res))
    .then(data => data)
}

export const getMe = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => handleResponse(res))
}

export const editProfile = (userInfo) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userInfo.name,
      email: userInfo.email
    })
  })
    .then(res => handleResponse(res))
}

export const saveFilm = (filmData) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: filmData.country,
      director: filmData.director,
      duration: filmData.duration,
      year: filmData.year,
      description: filmData.description,
      image: filmData.image,
      trailerLink: filmData.trailerLink,
      nameRU: filmData.nameRU,
      nameEN: filmData.nameEN,
      thumbnail: filmData.thumbnail,
      movieId: filmData.movieId
    })
  })
  .then(res => handleResponse(res))
}

export const deleteFilm = (filmData) => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies/${filmData._id}`, {
    method: 'DELETE',
    headers: {
      // authorization: this._authorization,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  .then(res => handleResponse(res))
}

export const getSavedFilms = () => {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => handleResponse(res))

}