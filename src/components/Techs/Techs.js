import './Techs.css';

export function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__header'>Технологии</h2>
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__paragraph'>На курсе веб-разработки мы 
      освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        <li className='techs__name'>HTML</li>
        <li className='techs__name'>CSS</li>
        <li className='techs__name'>JS</li>
        <li className='techs__name'>React</li>
        <li className='techs__name'>Git</li>
        <li className='techs__name'>Express.js</li>
        <li className='techs__name'>mongoDB</li>
      </ul>
    </section>
  )
}