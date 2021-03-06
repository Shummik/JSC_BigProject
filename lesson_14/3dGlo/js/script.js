window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
        function countTimer() {
            let timerHours = document.querySelector('#timer-hours'),
                timerMinutes = document.querySelector('#timer-minutes'),
                timerSeconds = document.querySelector('#timer-seconds');
    
            function getTimeRemaining(){
            let dateStop = new Date('13 september 2019 07:51:00'),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                second = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                return {timeRemaining,dateStop, hours, minutes, second};
            }
            
            function updateClock(){
                let timer = getTimeRemaining();
                if (timer.timeRemaining > 0) {
                        timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
                        timerMinutes.textContent = timer.minutes < 10 ? '0'+ timer.minutes : timer.minutes;
                        timerSeconds.textContent = timer.second < 10 ? '0'+ timer.second : timer.second;
                }
                if (timer.timeRemaining <= 0) {
                    timerHours.nextElementSibling.style.color = 'red';
                    timerMinutes.nextElementSibling.style.color = 'red';
                    timerHours.style.color = 'red';
                    timerMinutes.style.color = 'red';
                    timerSeconds.style.color = 'red';
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';
                    clearInterval(time);
                }
            }
            let time = setInterval(updateClock, 1000);   
        }
        countTimer();
    
        function toggleMenu() {
            let menu = document.querySelector('menu');
    
            document.addEventListener('click', (event) => {
                let target = event.target;
                    if (target.closest('.menu')) {
                        menu.classList.add('active-menu');
                    } else if (!target.closest('menu')){
                        menu.classList.remove('active-menu');
                    }
                    if (target.closest('a')) {
                        menu.classList.remove('active-menu');
                    }    
            });
            
        }
        toggleMenu();
    
        function movePage() {
            let menu = document.querySelector('menu'),
                menuItems = menu.querySelectorAll('ul>li>a'),
                scrollBtn = document.querySelector('a[href="#service-block"]'),
                allDiv = document.querySelectorAll('#service-block, #portfolio, #calc, #companies, #command, #connect'),
                scroll = document.documentElement.scrollTop;
            
            menuItems.forEach((elem) => {
                elem.addEventListener('click', (event) => {
                    let hash = event.target.hash,
                        arrHash = [...hash];
                    arrHash.shift();
                    arrHash = arrHash.join('');
                    function pageMove() {
                        let move = requestAnimationFrame(pageMove);
                        scroll+=23.5;
                        allDiv.forEach((elem) => {
                            if (arrHash === elem.id) {
                                if (scroll <= elem.offsetTop){
                                    document.documentElement.scrollTop = scroll;
                                } 
                                else {
                                    cancelAnimationFrame(move);
                                }
                            }
                        });
                    }
                    requestAnimationFrame(pageMove);
                    scroll = document.documentElement.scrollTop;
                });
            });
            
            function firstSlide(){
                let move = requestAnimationFrame(firstSlide);
                scroll+=10;
                if (scroll <= allDiv[0].offsetTop){
                    document.documentElement.scrollTop = scroll;
                } 
                else {
                    cancelAnimationFrame(move);
                }
            }
    
            scrollBtn.addEventListener('click', () => {
                requestAnimationFrame(firstSlide);
                scroll = document.documentElement.scrollTop; 
            });
        }
        movePage();
    
        function showPopup() {
            let popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            count = 20;
    
            popupContent.style.transform = `translateY(-100%)`;
    
            function step(){
                let move = requestAnimationFrame(step);
                count--;
                if (count >= 0 && document.documentElement.clientWidth >= 600){
                    popupContent.style.transform = `translateY(-${count}%)`;                
                } else {
                    popupContent.style.transform = `translateY(0)`;
                    cancelAnimationFrame(move);
                }
            }
    
            popup.addEventListener('click', (event) => {
                let target = event.target;
                    if (target.classList.contains('popup-close')) {
                        popup.style.display = 'none';
                        popupContent.style.transform = `translateY(-100%)`;
                        count = 20;
                    }else {
                        target = target.closest('.popup-content');
                        if (!target) {
                            popup.style.display = 'none';
                        }
                    }
            });
    
            popupBtn.forEach((elem) => elem.addEventListener('click', () => {
                popup.style.display = 'block';
                requestAnimationFrame(step);
            }));
        }
        showPopup();
    
        function tabs() {
            let tabHeader = document.querySelector('.service-header'),
                tab = tabHeader.querySelectorAll('.service-header-tab'),
                tabContent = document.querySelectorAll('.service-tab');
    
            tabHeader.addEventListener('click', (event) => {
                let target = event.target;
                    target = target.closest('.service-header-tab');
                if (target){
                    tab.forEach((item, i) => {
                        if (item === target) {
                            item.classList.add('active');
                            tabContent[i].classList.remove('d-none');
                        } else {
                            item.classList.remove('active');
                            tabContent[i].classList.add('d-none');
                        }
                    });
                }
            });    
        }
        tabs();
    });