import React from 'react';
import { Image } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div className='box'>
      <div className='box-bio'>
        <div className='information-box'>
          <Image
            src="https://avatars.githubusercontent.com/u/72162529?s=400&u=3cc14c29dcfeba3d3acf30c52ed35d0abb93a5b2&v=4"
          />
          <div className='info'>
            <Title className='name'>Виктория</Title>
            <ul>
              <li>19 лет</li>
              <li>Россия</li>
              <li>Санкт-Петербург</li>
              <li>3 курс СПбГЭТУ "ЛЭТИ"</li>
              <li>Факультет Компьютерных Технологий и Информатики</li>
              <li>На стажировке в НИЦ СПб ЭТУ</li>
            </ul>
            <p>Хобби: Рукоделие, рисование, музыка</p>
          </div>
        </div>
        <div className='bio'>
          <Title level={2}>О себе</Title>
          <p>
            
          </p>
          <Title level={2}>О пути в программировании</Title>
          <p>
            В 9 классе изучали с одноклассниками HTML, делали простенькие шаблоны сайтов. 
            В 10 классе в школе изучали Java в том числе ООП. В 11 начали изучение HTML, CSS.
          </p>
          <p>
            После 11 класса поступила на бюджет в СПбГЭТУ ЛЭТИ на направление Информационные системы и Технологии.
            В конце второго курса определилась с дальнейшим направлением развития, начала заново изучать HTML, CSS, JavaScript, попробовала работать с React. 
            На третьем курсе поступила на стажировку в НИЦ СПб ЭТУ на направление frontend-разработки.
            На данный момент работаю на TypeScript, изучаю библиотеку Ant Disign.
          </p>  
        </div>
      </div>
      <div className='pad'>
        <Title level={2}>Персональные качества</Title>
        <div className='range-box'>
          <p className='pers'>Интроверт</p>
          <div className='range'>
            <div className='bg  introvert'>11%</div>
            <div className='color extrovert'>89%</div>
          </div>
          <p className='pers'>Экстраверт</p>
        </div>
        <div className='range-box'>
          <p className='pers'>Интуиция</p>
          <div className='range'>
            <div className='color intuition'>74%</div>
            <div className='bg realism'>26%</div>
          </div>
          <p className='pers'>Реалистичность</p>
        </div>
        <div className='range-box'>
          <p className='pers'>Логика</p>
          <div className='range'>
            <div className='bg logic'>44%</div>
            <div className='color principles'>56%</div>
          </div>
          <p className='pers'>Принципы</p>
        </div>
        <div className='range-box'>
          <p className='pers'>Планирование</p>
          <div className='range'>
            <div className='color planning'>58%</div>
            <div className='bg search'>42%</div>
          </div>
          <p className='pers'>Поиск</p>
        </div>
        <div className='range-box'>
          <p className='pers'>Уверенность</p>
          <div className='range'>
            <div className='bg confidence'>24%</div>
            <div className='color caution'>76%</div>
          </div>
          <p className='pers'>Осторожность</p>
        </div>
      </div>
    </div>
  );
}

export default App;
