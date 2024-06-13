import './App.css';
import { SERVICES, STATS } from './data.js';
import ItemService from './components/ItemService.jsx';
import talkingImg from './assets/talking.jpg';

function ItemStats({number, description}){
  return (
    <li className="cs-stat">
      <span className="cs-number">{number}</span>
      <span className="cs-desc">{description}</span>
    </li>
  );
}

function App() {    
  return (
    <>
      <div id="wrapper-1639">
        <section id="services-1639">
          <div className="cs-container">
            <ul className="cs-card-group">
              {SERVICES.map((service) => (
                <ItemService key={service.title} {...service} />
              ))}
            </ul>
          </div>
        </section>

        <section id="sbs-1639">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">Our Courses</span>
              <h2 className="cs-title">Stitch Group for Process Safety Training</h2>
              <picture className="cs-picture">
                <img src={talkingImg} width="608" height="406" />
              </picture>
            </div>
            <div className="cs-stats-group">
              <p className="cs-text">
                Aqestic recusandae laudantium optio amet a quisquam saepe
                aliquid, voluptate praesentium dicta fuga dolor error
                perspiciatis voluptatem eum cupiditate totam reiciendis quam
                minus inventore sint rem impedit esse quasi Tenetur sed
                reprehenderit earum a magni aliquid blanditiis dolores,
                veritatis soluta autem beatae officia expedita ipsum rerum
                doloribus sit provident delectus perspiciatis voluptatem eum
                cupiditate.
              </p>
              <p className="cs-text">
                Aqestic recusandae laudantium optio amet a quisquam saepe
                aliquid, voluptate praesentium dicta fuga dolor error
                perspiciatis voluptatem eum cupiditate totam reiciendis quam
                minus inventore sint rem impedit esse quasi Tenetur sed
                reprehenderit earum a magni aliquid blanditiis dolores,
                veritatis soluta autem beatae officia expedita ipsum rerum
                doloribus sit provident delectus perspiciatis voluptatem eum
                cupiditate.
              </p>
              <ul className="cs-stats">
                <ItemStats {... STATS[0]} />
                <ItemStats {... STATS[1]} />
                <ItemStats {... STATS[2]} />
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App
