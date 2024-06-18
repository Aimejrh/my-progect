import React from 'react';
import './CallbackForm.scss';

const CallbackForm = () => {
  return (
    <div className="callback-form">
      <h2>Запись на прием</h2>
      <div className="form-container">
        <div className="clinic-info">
          <h3>Прием в клинике</h3>
          <p>Основной филиал</p>
          <p>720001, Чуй, Бишкек, ул.им.Боконбаева 202</p>
        </div>
        <div className="callback-info">
          <h3>Обратный звонок</h3>
          <p>Оставьте номер и мы перезвоним</p>
        </div>
      </div>
      <form>
        <label>
          Представьтесь, пожалуйста
          <input type="text" />
        </label>
        <label>
          Номер мобильного телефона
          <div className="phone-input">
            <select>
              <option value="+996">+996</option>
              {/* add more options if needed */}
            </select>
            <input type="text" />
          </div>
        </label>
        <label>
          Вопрос или комментарий (не обязательно)
          <textarea />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default CallbackForm;
