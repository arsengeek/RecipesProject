**RU**



## Для запуска проекта нужно установить все зависимости через команду

* Переходим в папку проекта "cd myproject" 
* Далее устанавливаем все зависимости из файла requirement.txt "pip install -r requirement.txt"
* Выполняем комманды "python manage.py makemigrations" и "python manage.py migrate"
* Запускаем Django RF с помощью комманды "python manage.py runserver"

## Запуск фронтенд части проекта

* Создаем второй терминал 
* Переходим в папку с проектом команндой "cd myapp-frontend" уже находясь в папке с проектом
* Устанавливаем зависимости с помощью "npm i"
* И запускаем фронтенд часть проекта "npm start" 
* Теперь в браузере заходим в http://127.0.0.1:3000/