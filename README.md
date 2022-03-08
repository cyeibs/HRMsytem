# HRMSystem - CRM for recruitment

<img src="https://media.giphy.com/media/LIITLJdaev8VlTw6gg/giphy.gif">

- multiple views (clients, candidates, vacancies)
- hiring on several vacancies by several candidates
- CSS Transitions included
- JWT auth


### Versioning
last version: added working JWT auth and animated menu

  
#

If you have any suggestion, feel free to open discussion or contact me directly at ph.kirilltsvetkov@gmail.ru

# Install

    npm i 
    create .env with this code
    
    
```javascript
PORT=4000
DBUSERNAME="username"
DBPASSWORD="password"
DBDATABASE="dbname"
DBDIALECT="postgres"
DBPORT="8081"
API_URL=http://localhost:4000
CLIENT_URL=http://localhost:3000

SALT=10
JWT_ACCESS_KEY=random_secret_key
JWT_REFRESH_KEY=random_refresh_key

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=testmailnodejs000@gmail.com
SMTP_PASSWORD=Uk555666
```
