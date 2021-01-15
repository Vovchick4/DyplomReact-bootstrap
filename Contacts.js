import React from "react";
import "../components/Contacts.css";
import "../components/Media.css";
import APP from "../images/APP.PNG";
import GOO from "../images/GOO.PNG";
import insta from "../images/instagram.png";
import Vector7 from "../images/Vector (7).png";
import Vector8 from "../images/Vector (8).png";
import Vector9 from "../images/Vector (9).png";
import Vector12 from "../images/Vector (12).png";

export default function Contact() {
    return(
        <div className="Contact">
            <section>
                <div class="container border_sec">
                    <div class="row">
                        <div class="col-md-4 contacts_text">
                            <h2>Контакти</h2>
                            <p>Львів</p>
                            <p>вул. Любінська 196</p>
                            <p>+38 098 777 16 00</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cupiditate volu</p>
                        </div>
                        <div class="col-md-8 contacts_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41191.298179571495!2d24.036250668750007!3d49.81509161118365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b92983686621ab9!2sDynamo%20Blues!5e0!3m2!1sru!2sua!4v1602096204357!5m2!1sru!2sua" width="100%" height="450" 
                            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                    
                        </div>
                    </div>
                    <div class="row block_sec_text">
                        <div class="col-md-4 text_sec">
                            <h3>Є запитання?</h3>
                            <p>Lorem ipsum dolor sit amet, conset s a egestas.
                            Ullamcorper eget purus aenean vel convallis arc.</p>
                        </div>
                        <div class="col-md-6">
                            <div class="block_qustion">
                        {/* <h4>Зв'язатися з нами</h4>
                
                        <form method="post" action="#" autocomplete="off">
                            <div class="user-box">
                              <input name="email" type="email" class="form-control" id="email" placeholder="Введите email" />
                          
                            </div>
                            <div class="user-box">
                                <input type="text" class="form-control" id="name" placeholder="First name" />
                
                            </div>
                            <div class="user-box">
                                <input type="text" class="form-control" id="comment" placeholder="Comment" />
                        
                            </div>
                            <div class="user-box form-check">
                              <input type="checkbox" class="form-check-input" id="save" />
                              <label name="save" class="form-check-label" for="save">запомнить меня</label>
                            </div>
                     
                            <button type="submit" class="btn btn-outline-dark">Надіслати</button>
                          </form>  */}

                             <div class="login-box">
                                <h2>Зв'язатися з нами</h2>
                                <form>
                                    <div class="user-box">
                                        <input type="text" name="name" id="name" required="..." />
                                        <label>Ім'я</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" name="email" id="email" required="..." />
                                        <label>Пошта</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" name="comment" id="comment" required="..." />
                                        <label>Коментарій</label>
                                    </div>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Надіслати
                                    </a>
                                </form>
                                </div>
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
                        <img className="img_f" src={Vector9} alt="" />
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