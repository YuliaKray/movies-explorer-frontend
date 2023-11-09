import './AboutMe.css';
import photo from '../../images/kotik.jpg';

export function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <h2 className='about-me__header'>Студент</h2>
      <div className='about-me__wrap'>
        <div className='about-me__inner'>
          <h3 className='about-me__name'>Юлия</h3>
          <p className='about-me__discription'>Фронтенд-разработчица, 25 лет</p>

          <p className='about-me__paragraph'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className='about-me__git' href='https://github.com/YuliaKray' target="_blank">Githab</a>
        </div>
        <img className='about-me__photo' alt='Фотография студента' src={photo} />
      </div>
    </section>
  )
}