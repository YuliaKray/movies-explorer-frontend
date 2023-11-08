import './Portfolio.css';
import arrow from '../../images/arrow.svg'

export function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://yuliakray.github.io/how-to-learn/' target="_blank">Статичный сайт
            <img src={arrow} className='portfolio__link-img' alt='Ссылка'/>
          </a>
        </li >
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://yuliakray.github.io/russian-travel/'target="_blank">Адаптивный сайт
            <img src={arrow} className='portfolio__link-img' alt='Ссылка'/>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://yuliakray.nomoredomainsrocks.ru/' target="_blank">Одностраничное приложение
            <img src={arrow} className='portfolio__link-img' alt='Ссылка'/>
          </a>
        </li>
      </ul>
    </section>
  )
}