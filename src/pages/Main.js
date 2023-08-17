import { useNavigate } from 'react-router-dom';
import '../pages-css/Main.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuCard from '../component/MenuCard';
import Header from '../component/Header';
import Nav from '../component/Nav';
import { useState } from 'react';
import Footer from '../component/Footer';

const Main = ({ food }) => {
  const [md, setMd] = useState(food.slice(0, 4));
  const [best, setBest] = useState(food.slice(4, 6));
  const [newitem, setNewItem] = useState(food.slice(10, 12));

  function NoTransitionExample() {
    return (
      <Carousel slide={false}>
        <Carousel.Item>
          <img src={`${food[0].img}`} text="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={`${food[1].img}`} text="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={`${food[2].img}`} text="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <>
      <div className='Main'>
        <Header />
        <Nav />

        <main>
          <div className='carousel'>{NoTransitionExample()}</div>
          <div className='mainMenu'>
            <div>
              <div className='title'>이달의 <span>MD추천메뉴</span></div>
              <div className='mdfoodcard'>
                {
                  md.map((data, i) => {
                    return (
                      <MenuCard data={data} key={i} />
                    );
                  })
                }
              </div>
            </div>
            <div>
              <div>
                <div className='title'>주간 <span>베스트</span></div>
                <div className='foodcard'>
                {
                  best.map((data, i) => {
                    return (
                      <MenuCard data={data} key={i} />
                    );

                  })

                }
                </div>
              </div>
              <div>
                <div className='title'>새로운 <span>상품</span></div>
                <div className='foodcard'>
                {
                  newitem.map((data, i) => {
                    return (
                      <MenuCard data={data} key={i} />
                    );

                  })

                }
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Main;