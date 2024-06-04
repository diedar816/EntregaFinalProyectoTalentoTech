Clase del 2 de mayo de 2024, fue la clase de GIT.

comandos git para crear repositorio en bitbutcket para hacer control 
de versiones
entramos a la carpeta y tipeamos 
#git init

Comando git status para saber el estatus de nuestro repositorio
#git status 

Comando para agregar un commit o comentario a nuestro repositorio de que fue lo que se cambio
#git commit -m "Aquí iría nuestro comentario"

Comando para agregar partes de código si otro compañero está trabajando en el mismo archivo
#git add index.js --patch
le damos s para que nos divida el código, le damos y luego n para continuar 

Con este comando agregamos todos los cambios
#git add .

Comando que no sirve para ver las diferencias en nuestros archivos
#git diff

Comando que me permite ver los comit hechos en nuestro proyecto
#git log

Comando que nos muestra los cambios, pero con una vista más simplificada
#git log --oneline

Comando para cuantos han sido las líneas de inserciones de líneas por commit
#git log --stat

Comando detalle por commit
#git log -p

Comando para crear ramas o variaciones de nuestro código esto permite que podamos crear ramas que no interfieran con nuestro código.
#git branch ejemplo: git branch nuevaRutaLogin

Comando que nos permite mudarnos hacia esa otra rama creada
#git checkout nuevaRutaLogin

Comando para crear ramas de manera sencilla y me traslada a la nueva rama creada
#git checkout -b nuevaRutaRegistro 

Comando que me permite aplicar todos los cambios hechos en todas las ramas y aplicarlos a la ram master
1. Nos pasamos a la ram master
#git checkout master
2. Luego listamos las ramas 
#git branch
3. Seleccionamos las ramas que vamos a unir a la master
#git merge nuevaRutaRegistro
4. Agregamos los cambios sugeridos si hay errores y luego
#git add

Trabajar con repositorios remotos

Nos identificamos en repositorio para llevar un control de quien 
realizo el cambio
#git config --global user.name "Manuel Davila"

luego nuestro correo
#git config --global user.email "davilamanuel03914@gmail.com"

para conectar con nuestro repositorio es con el siguiente comando
#git remote add origin "a ca se coloca el enlace del servidor"

Con este comando vemos a detalle un poco del repositorio remoto
#git remote -v

Comando para publicar nuestro proyecto, pero antes cambiamos nuestra rama master
#git branch -M main
#git push origin main

Clase 29 de mayo de 2024

Entramos a la carpeta y tipeamos 
#git init

Comando git status para saber el estatus de nuestro repositorio
#git status 

Con este comando agregamos todos los cambios
#git add .


Comando para agregar un commit o comentario a nuestro repositorio de que fue lo que se cambio
#git commit -m "Aquí iría nuestro comentario"


Nos identificamos en repositorio para llevar un control de quien 
realizo el cambio
#git config --global user.name "USER nAME"

luego nuestro correo
#git config --global user.email "correo registrado en git"

para conectar con nuestro repositorio es con el siguiente comando
#git remote add origin "a ca se coloca el enlace del servidor"

Con este comando vemos a detalle un poco del repositorio remoto
#git remote -v

Comando para publicar nuestro proyecto, pero antes cambiamos nuestra rama master
#git branch -M main
#git push origin main

#Comando necesario para hacer push y cargar cambios a nuestro repo remoto si envía error
1.git remote add origin url que le entrega git al incluir nuevo proyecto
