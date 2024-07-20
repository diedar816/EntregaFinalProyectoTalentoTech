Clase 10 de mayo de 2024, tambien se hablo en la vigesima cuarta clase del 9 de mayo de 2024

#Comando para inicializar proyecto en node
1.npm init -y
#Comandos de instalación de módulos para mi proyecto
1.npm install express
#Comando para instalar las dependencias de MySQL par mi db
1.npm install mysql
#Comando para instalar body parser y bcrypt
#npm install bcrypt body-parser
#comando para instalar las sesiones
1.npm install express-session

para validar lo del nodemon  ??

save dev nodemon y instala el  "nodemon": "^3.1.0"
?
npm install --save-dev nodemon

Comilla Normal

'  '

Cuando esta trabajando sin despliegue

"dev": "nodemon index.js"

Cuando se despliegue

en el package json debe ser "start": "node index.js"
 
comilla invertida   


``

si es modular se usa index.js en el packagejson, en lo que se refiere al arranque
si no lo es se usa app.js

npm install morgan




