import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../styles/signinup.module.scss";
import st from "../styles/start.module.scss";

export const SignInUp = () => {
  const [checkUserName, setCheckUserName] = useState(false);
  const [checkUserPassword, setCheckUserPassword] = useState(false);
  const [checkEnteGame, setCheckEnteGame] = useState(false);
  const [stateForm, setStateForm] = useState(true);
  const [boolenReg, setBoolen] = useState(true);
  const [doubleName, setDoubleName] = useState(false);

  function toggleForm() {
    setStateForm(!stateForm);
  }
  function changeCheckName() {
    setCheckUserName(!checkUserName);
  }
  function changeCheckPassword() {
    setCheckUserPassword(!checkUserPassword);
  }
  function enteredGame() {
    setCheckEnteGame(!checkEnteGame);
  }
  function changeForm() {
    setBoolen(!boolenReg);
  }
  function checkDoubleName() {
    setDoubleName(!doubleName);
  }
  const formikA = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Минимум 2 символа!")
        .required("Обязательное поле!"),
      password: Yup.string()
        .min(8, "Минимум 8 символов!")
        .required("Обязательное поле!"),
    }),
    onSubmit: (values) => {
      const user = localStorage.getItem(values.name);
      if (user) {
        const userData = JSON.parse(user);
        if (userData.password !== values.password) {
          changeCheckPassword();
        } else {
          enteredGame();
        }
      } else {
        changeCheckName();
      }
    },
  });
  const formikR = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Минимум 2 символа!")
        .required("Обязательное поле!"),
      email: Yup.string()
        .email("Неправильный email адрес!")
        .required("Обязательное поле!"),
      password: Yup.string()
        .min(8, "Минимум 8 символов!")
        .required("Обязательное поле!"),
    }),
    onSubmit: (values) => {
      const keysUser = Object.keys(localStorage).map((name) =>
        name.toLowerCase()
      );
      const newUserName = values.name.toLowerCase();
      if (keysUser.includes(newUserName)) {
        checkDoubleName();
      } else {
        localStorage.setItem(values.name, JSON.stringify(values));
        changeForm();
      }
    },
  });
  return (
    <>
      {stateForm ? (
        <form className={style.signinupform} onSubmit={formikA.handleSubmit}>
          {!checkEnteGame ? (
            <>
              <h2>Авторизация</h2>
              {/* <label htmlFor="name">Ваш никнейм</label> */}
              <div className={st.input_wrapper}>
                <input
                  placeholder="Ваш никнейм"
                  name="name"
                  type="text"
                  value={formikA.values.name}
                  onChange={formikA.handleChange}
                  onBlur={formikA.handleBlur}
                />
              </div>

              {formikA.errors.name && formikA.touched.name ? (
                <div className={style.error} style={{ top: "40vh" }}>
                  {formikA.errors.name}
                </div>
              ) : null}
              {checkUserName ? (
                <div className={style.error} style={{ top: "40vh" }}>
                  Неправильный логин
                </div>
              ) : null}
              {/* <label htmlFor="email">Пароль</label> */}
              <div className={st.input_wrapper}>
                <input
                  placeholder="Пароль"
                  name="password"
                  type="password"
                  value={formikA.values.password}
                  onChange={formikA.handleChange}
                  onBlur={formikA.handleBlur}
                />
              </div>

              {formikA.errors.password && formikA.touched.password ? (
                <div className={style.error} style={{ top: "50vh" }}>
                  {formikA.errors.password}
                </div>
              ) : null}
              {checkUserPassword ? (
                <div className={style.error} style={{ top: "50vh" }}>
                  Неправильный пароль
                </div>
              ) : null}
              <div className={st.input_wrapper}>
                <button type="submit">Отправить</button>
              </div>
              <h3>
                <span className={style.link} onClick={toggleForm}>
                  Зарегистрироваться
                </span>
              </h3>
              <h3>
                <Link to="/question">
                  <span className={style.link}>Играть без регистрации</span>
                </Link>
              </h3>
            </>
          ) : (
            <h2>Вы авторизовались</h2>
          )}
        </form>
      ) : (
        <form className={style.signinupform} onSubmit={formikR.handleSubmit}>
          {boolenReg ? (
            <>
              <h2>Регистрация</h2>
              <label htmlFor="name">Ваш никнейм:</label>
              <div className={st.input_wrapper}>
                <input
                  name="name"
                  type="text"
                  value={formikR.values.name}
                  onChange={formikR.handleChange}
                  onBlur={formikR.handleBlur}
                />
              </div>

              {formikR.errors.name && formikR.touched.name ? (
                <div className={style.error} style={{ top: "43vh" }}>
                  {formikR.errors.name}
                </div>
              ) : null}
              {doubleName ? (
                <div className={style.error} style={{ top: "43vh" }}>
                  Такое имя уже есть
                </div>
              ) : null}
              <label htmlFor="email">Ваша почта:</label>
              <div className={st.input_wrapper}>
                <input
                  name="email"
                  type="email"
                  value={formikR.values.email}
                  onChange={formikR.handleChange}
                  onBlur={formikR.handleBlur}
                />
              </div>

              {formikR.errors.email && formikR.touched.email ? (
                <div className={style.error} style={{ top: "56vh" }}>
                  {formikR.errors.email}
                </div>
              ) : null}
              <label htmlFor="email">Пароль:</label>
              <div className={st.input_wrapper}>
                <input
                  name="password"
                  type="password"
                  value={formikR.values.password}
                  onChange={formikR.handleChange}
                  onBlur={formikR.handleBlur}
                />
              </div>

              {formikR.errors.password && formikR.touched.password ? (
                <div className={style.error} style={{ top: "68vh" }}>
                  {formikR.errors.password}
                </div>
              ) : null}
              <div className={st.input_wrapper}>
                <button type="submit">Отправить</button>
              </div>
            </>
          ) : (
            <>
              <h2>Вы зарегистрированы</h2>
              <h3>
                <Link to="/question">
                  <span className={style.link}>Начать игру</span>
                </Link>
              </h3>
            </>
          )}
        </form>
      )}
    </>
  );
};
