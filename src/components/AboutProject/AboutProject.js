import './AboutProject.css';

export function AboutProject() {
  return (
    <section className='about-project' id='project'>
      <h2 className='about-project__header'>О проекте</h2>
      <div className='about-project__grid'>
        <h3 className='about-project__title about-project__title_first'>Дипломный проект включал 5 этапов</h3>
        <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>

        <p className='about-project__paragraph about-project__paragraph_second'>
          Составление плана, работу над бэкендом,
          вёрстку, добавление функциональности и финальные доработки.
        </p>
        <p className='about-project__paragraph'>
          У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about-project__line'>
        <p className='about-project__line-text about-project__line-text_black'>1 неделя</p>
        <p className='about-project__line-text'>4 недели</p>
        <p className='about-project__underline'>Back-end</p>
        <p className='about-project__underline'>Front-end</p>
      </div>
    </section>
  )
}