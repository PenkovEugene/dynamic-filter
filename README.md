<h1>Тестовое задание "Dynamic-Filter"</h1>

<h3>Задачи:</h3>
1) Сверстать по макету фильтр и список квартир
2) Написать логику работы фильтра, а так же получения и отрисовки квартир

***
<h3>Технические требования:</h3>
1) Docker и docker-compose
2) Node.js >19.7.0 
***
<h3>Необходимые материалы</h3>
1) [Макет в фигме]()
2) [Документация по api]()
**Будет доступна после установки проекта**
***
<h3>Инструкция по установке проекта:</h3>
Из корня проекта вызываем команду:
```php
make init
```
***
<h3>Инструкция по запуску проекта</h3>
1) Из корня проекта вызываем команду:
```php
make up
```
Адрес бекенда
[http://localhost:8083/](http://localhost:8083/)
2) Из папки ***frontend*** вызываем команды:
```php
npm i && npm run dev
```
Проект откроется по адресу
[http://localhost:3000/](http://localhost:3000/)
3) Для того чтобы остановить контейнеры Docker из папки проекта вызываем команду:
```php
make stop
```
***
<h3>Ожидаемый результат:</h3>
1) из папки ***frontend*** выполняется команда:
```php
npm run lint
```
**Все проверки линтера проходят успешно**
2) из папки ***frontend*** выполняются команды:
```php
npm run build && npm run start
```
**Билд успешно собирается и проект открывается по адресу**
[http://localhost:3000/](http://localhost:3000/)
3) Верстка сделана согласно макету, так же сделан адаптив этой страницы
4) При переключении фильтра квартиры фильтруются и фильтр подстраивается под уже отмеченные значения
5) При переключении фильтр в адресной строке добавляются query парметры
6) При копировании ссылки с  query параметрами и вставки их в новом окне браузера происходит постановка значений в фильтр и фильтрация квартир
***
<h4>Готовый результат выложить в гитхаб и отправить ссылку на репозиторий</h4>
