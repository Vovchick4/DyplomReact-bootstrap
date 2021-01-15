import React from "react";
import "../components/Booking.css";
import "../components/Media.css";
import APP from "../images/APP.PNG";
import GOO from "../images/GOO.PNG";
import insta from "../images/instagram.png";
import Vector7 from "../images/Vector (7).png";
import Vector8 from "../images/Vector (8).png";
import Vector9 from "../images/Vector (9).png";
import Vector12 from "../images/Vector (12).png";

export default function Booking() {
    return(
        <div className="Booking">
            <section>
                <div className="block_booking">
                    <div className="container">
                    <div className="booking-box">
                        <h1>Бронювання</h1>
                        <hr />
                        <form>
                            <div className="users-box">
                                <label for="exampleInputText1">ПІБ*</label>
                                <input type="text" className="form-control" id="exampleInputText1" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputEmail1">Email*</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText2">Телефон*</label>
                                <input type="text" className="form-control" id="exampleInputText2" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText3">Дата*</label>
                                <input type="date" className="form-control" id="start" name="trip-start" min="2021-01-01" max="2021-12-31" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText4">Час*</label>
                                <input type="time" className="form-control" id="appt" name="appt" min="09:00" max="18:00" required />
                            </div>
                            <div className="users-box">
                                <p className="text_booking">Персон*</p>
                                <p><input type="text" className="form-control" list="character" />
                                <datalist datalist id="character">
                                    <option value="1 ГІСТЬ"></option>
                                    <option value="2 ГОСТЕЙ"></option>
                                    <option value="3 ГОСТЕЙ"></option>
                                    <option value="4 ГОСТЕЙ"></option>
                                    <option value="5 ГОСТЕЙ"></option>
                                    <option value="6 ГОСТЕЙ"></option>
                                    <option value="7 ГОСТЕЙ"></option>
                                    <option value="8 ГОСТЕЙ"></option>
                                    <option value="9 ГОСТЕЙ"></option>
                                    <option value="10+ ГОСТЕЙ"></option>
                                </datalist></p>
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText5">Додаткові побажання</label>
                                <textarea type="comments" className="form-control"></textarea>
                            </div>
                             <button type="submit" className="btn btn-outline-dark mt-4 mb-4 button_book">Забронювати</button>
                        </form>
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