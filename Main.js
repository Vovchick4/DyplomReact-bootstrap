import React from "react";
import "../components/Main.css";
import "../components/Animation.css";
import "../components/Media.css";
import foto from "../images/bgc.png";
import APP from "../images/APP.PNG";
import GOO from "../images/GOO.PNG";
import insta from "../images/instagram.png";
import Vector7 from "../images/Vector (7).png";
import Vector8 from "../images/Vector (8).png";
import Vector9 from "../images/Vector (9).png";
import Vector12 from "../images/Vector (12).png";

export default function Main() {
  return (
    <div className="Main">
      <section>
          <div className="f-text">
              <img className="foto" src={foto} />
              <div className="center">
                  <h1>SOME</h1> 
              </div>
          </div>
          <div className="block_sec">
            <div className="container">
              <div className="row">
                <div className="col-xs-sm-md-3">
                  <h3>Организаторам</h3>
                  <p className="mt-5">Документы организаторам</p>
                  <p>Услуги организаторам</p>
                  <p>Выставочные площади</p>
                  <p>Рестораны и кафе</p>
                  <p>Конгресс-центр</p>
                  <p>Спорт-центр</p>
                </div>
                <div className="col-xs-sm-md-3 text_s">
                  <h3>Экспонентам</h3>
                  <p className="mt-5">Общие условия участия</p>
                  <p>Услуги экспонентам</p>
                  <p>Документы экспонентам</p>
                  <p>Центр деловых контактов</p>
                  <p>Забронировать гостиницу</p>
                </div>
                <div className="col-xs-sm-md-3 text_s fix">
                  <h3>Организаторам</h3>
                  <p className="mt-5">Сервисы</p>
                  <p>Онлайн-регистрация на мероприятие</p>
                  <p>Забронировать гостиницу</p>
                  <p>Центр деловых контактов</p>
                </div>
                <div className="col-xs-sm-md-3 text_s">
                  <h3>Организаторам</h3>
                  <p className="mt-5">Аккредитация</p>
                  <p>Пресс-служба</p>
                  <p>Правила аккредитации</p>
                </div>
              </div>
            </div>
          </div>
          <div className="block_two">
            <div className="container card_cont">
              <div className="row">
                <div className="col-xs-md-4">
                  <div className="card border_cards">
                    <div className="face face1">
                      <div className="content">
                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                        <h3>Design</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                          <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-md-4">
                  <div className="card border_cards">
                    <div className="face face1">
                      <div className="content">
                          <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                          <h3>Code</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                          <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-md-4">
                  <div className="card border_cards">
                    <div className="face face1">
                      <div className="content">
                          <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                          <h3>Launch</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                          <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-md-4">
                  <div className="card border_cards">
                    <div className="face face1">
                      <div className="content">
                          <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                          <h3>Launch</h3>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                          <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block_about_us">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                    <h1>about</h1>
                    <p>arness multimedia<br />ased collaboration</p>
                </div>
                <div className="col-md-6">
                    <span>Quickly incentivize impactful action items before tactical collaboration and idea-sharing. 
                      Monotonically engage market-driven intellectual capital through wireless opportunities. 
                      Progressively network performance based services for functionalized testing procedures.</span>
                    <button className="btn">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
      </section>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>О компании</h4>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <h4 className="foot_text">О компании</h4>
            <p>Преимущества площадки</p>
            <p>Преимущества площадки</p>
            <p>Преимущества площадки</p>
            <p>Преимущества площадки</p>
          </div>
          <div className="col-md-3">
            <h4>О компании</h4>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <h4 className="foot_text">О компании</h4>
            <p>Преимущества площадки</p>
            <p>Преимущества площадки</p>
            <p>Преимущества площадки</p>
            <p>Преимущества площадки</p>
          </div>
          <div className="col-md-3">
            <h4>О компании</h4>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <p>О нашей компании</p>
            <h4 className="foot_text">Приложение</h4>
            <p>
              <img
                className="APP"
                src={APP}
                alt=""
              />
            </p>
            <img
              className="GOO"
              src={GOO}
              alt=""
            />
          </div>
          <div class="col-md-3">
            <h4>Мы в соц. сетях</h4>
            <div className="block_fotos">
              <img className="Vector_7" src={Vector7} alt="" />
              <img className="img_f" src={Vector8} alt="" />
              <img className="img_f face" src={Vector9} alt="" />
              <img className="img_f" src={insta} alt="" />
            </div>
            <h4 className="subscribe">Подписка на новости</h4>
            <p className="text_take">
              Получайте все самые последние новости о мероприятиях в Экспофоруме.
            </p>
            <div className="input-group input-group-sm but_inp" >
              <input
                type="text"
                className="form-control fix-rounded-right"
                placeholder="Введите ваш e-mail"
                required
              />
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <img src={Vector12} alt=""/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
