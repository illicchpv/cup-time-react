Макет:
https://www.figma.com/design/HxIGMimYUO3N82xLzUf6XO/CUP-TIME-(Intensive)-(Copy)?node-id=0-1&t=pGi3BKpqxGE2APBX-0
// https://www.figma.com/design/hgh8cskkQ99trJu4Zr1Lpa/CUP-TIME-(Intensive)?node-id=0-1&t=5ctTajywKsbDQNUo-1

github: https://github.com/illicchpv/cap-time-dev

результат: https://cup-time-react-blue.vercel.app/products

---
day1  
  Обязательное задание:  
  - Повторить то, что было в видео и добавить все остальные карточки из макета

  Бонус задание:  
  - Создать cart.html и написать разметку html для страницы корзины

https://github.com/illicchpv/cap-time-dev/tree/day1-home

---
day2  

Полезные ссылки
- Шрифты https://gwfh.mranftl.com/fonts/inter?subsets=cyrillic,latin
- Normalize https://necolas.github.io/normalize.css/

Обязательное задание:  
- Повторить то, что было в видео
- Напишите стили для footer

---
day3  

>npm i normalize.css --save

Полезные ссылки
- [node](https://nodejs.org/en/)
- [react](https://react.dev/)
- [vite](https://vitejs.dev/)

Обязательное задание:
- Повторить то, что было в видео
- Написать адаптив для Footer

[+ день3 дз](https://github.com/illicchpv/cup-time-react/tree/day3-home)
--

---
day4  

Полезные ссылки  
- [React Router Dom](https://reactrouter.com/en/main/router-components/router)

повторяем за Максимом дз.

>npm install react-router-dom

Обязательное задание:  
- Повторить то, что было в видео
- Сделайте адаптив корзины

Бонус задание:  
- Напишите разметку блока footer

[трансляция](https://www.youtube.com/watch?v=s202RhBo8bE)  
35:0 про 	заголовок карточки

https://codepen.io/Quper/pen/GRRZzWy
	Базовые стили CSS

---
День 5
Получим данные о товарах с сервера и интегрируем их в React. Добавим категории товаров и модальное окно.

Полезные ссылки:
- [API cup time](https://github.com/Quper24/cup-time-api)
- [Render com](https://render.com/)

Адреса для запросов к серверу (ручки):
- **/api/products** - Получить все продукты
- **/api/products/{category}** - получить продукты по категории
- **/api/products/list?ids=1,2,3** - получить список товаров по id (1,2,3 для примера)
- **/api/orders** - POST запрос для отправки заказа

Обязательное задание:
- Повторить то, что было в видео
- Написать стили для модального окна и вывести в заголовке Products категорию товара


https://my.methed.ru/pl/teach/control/lesson/view?id=332318735&editMode=0
8:47 - [Render com]
  [мой сервис товаров](https://cup-time-api-q31j.onrender.com)

>npm i react-modal  

---
День 6 Настроим корректное добавление товаров в Корзину и правильный подсчёт суммы.

Полезные ссылки  
- [React Content Loader](https://www.npmjs.com/package/react-content-loader)

>npm i react-content-loader

Обязательное задание:  
- Повторить то, что было в видео

---
День 7 Допиливаем проект. Данные выгружаются на сервер.

видео1:
 - отправка order на сервер
 - 39:00 стилизация диалога результата отправки modal cart
 - 47:00 вывод заголовка категории товара 'categories' и формирование меню на основе categories
 - 55:40 доделываем промо и ссылка на промо

видео2:
- favicon generator
- 06:00 доделываем промо
- 7:40 мобильное меню
- 21:25 модальное окно продукта
- 37:50 - выгрузка на vercel

Полезные ссылки:  
- [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
- [https://vercel.com/](https://vercel.com/)


[4.31 КБ Скачать стили](https://fs24.getcourse.ru/fileservice/file/download/a/251231/sc/114/h/26f37d339f05c727f53f92a0d267cf94.zip)

Обязательное задание:
- Повторить то, что было в видео
- Выгрузите проект в репозиторий и выложите его в сеть

Бонус задание:
- Стили для компонентов разбейте на модульные, от всех дефисов лучше избавиться и использовать camelCase например вместо logo-black использовать logoBlack

---

Финальная трансляция
- 1:50 - начало
- 4:30 - road map
- 38:00 - как заработать, реклама
- 1:09:00 - запрет прокрутки при отрытом мобильном меню
- 1:15:00 - Максим большой
- 1:19:00 - переделка ссылок в footer
- 1:23:00 - переход на верх секции при выборе категории


--------------------
--------------------

https://www.youtube.com/watch?v=kIfIGrhjOe4
	Превращаем существующее веб приложение в  PWA #easyit #js #javascript @EasyITChannel
  ветка: vite-plugin-pwa
		https://vite-pwa-org.netlify.app/
		>npm install -D vite-plugin-pwa

-------------
-------------
добавляем константу - __BUILD_DATE__ - дата сборки
