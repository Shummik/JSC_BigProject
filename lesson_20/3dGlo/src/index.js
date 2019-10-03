'use strict';

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import movePage from './modules/movePage';
import showPopup from './modules/showPopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import calc from './modules/calc';
import comand from './modules/comand';
import sendForm from './modules/sendForm';
import validator from '../plugins/validator/validator';

// Валидатор
validator();
// Таймер
countTimer();
// Меню
toggleMenu();
// Анимация
movePage();
// Popup
showPopup();
// Табы
tabs();
// Слайдер
slider();
// Карусель
sliderCarousel();
// Калькулятор
calc(100);
// Смена фото по наведению
comand();
// Отправка формы
sendForm('#form1');
sendForm('#form2');
sendForm('#form3');