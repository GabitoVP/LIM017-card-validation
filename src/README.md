## TITULO DEL PROYECTO
Desarrollo de una página web para la "Ferretería Smith"

## DEFINICIÓN DEL PROBLEMA
- Disminución de las ventas por motivos de la pandemia
- Lentitud en la atención al cliente
- Inseguridad al realizar los pagos

## JUSTIFICACIÓN
Por motivos de la pandemia las ventas de los productos disminuyeron por eso al crear una página web lograremos subirlas ya que el cliente podra realizar sus pagos desde la comodidad de su hogar haciendo que los pagos sean de forma segura y rápida.

## DESCRIPCIÓN DEL PROYECTO
Esta página esta desarrollado por un lenguaje de programación en javascript, HTML5 y CSS. La arquitectura del sistema web está diseñado con una interfaz amigable y fácil de usar  para el usuario, la página web constará de una página principal donde se muestra los diferentes productos para su venta al hacer click en un producto se redirecciona a otra página donde el cliente ingresará su tarjeta para validar si es válida o no y mostrar su tipo de tarjeta.

## OBJETIVOS
- Lograr un crecimiento económico
- Realizar pagos de forma segura, rápida y desde la comodidad de su hogar
- Realizar compras online 

## BENEFICIARIOS DIRECTOS E INDIRECTOS
### DIRECTOS
- La ferretería Smith

  ### INDIRECTOS
- Los clientes

## DISEÑO DEL PROTOTIPO
  * Boceto en [dibujo](https://drive.google.com/drive/folders/1cFwLdZ9CpQwSU3dnZLgQ1y9rO6OCe2mI?usp=sharing)
  En primer lugar fue diseñado de una manera simple para que el usuario pueda ingresar el número de tarjeta y que esta solo se pueda validar en una sola interfaz. 
  
  [![protipo-l-piz-y-papel.jpg](https://i.postimg.cc/DzbytDkJ/protipo-l-piz-y-papel.jpg)](https://postimg.cc/Y4MHFdSM)

  * Primer boceto en [figma](https://www.figma.com/file/HqJou5rSr0jKhGIVxh0bPA/Untitled?node-id=0%3A1)

  [![mi-primer-prototipo.png](https://i.postimg.cc/63MZQgqW/mi-primer-prototipo.png)](https://postimg.cc/phnrG0K4)


  ### RESUMEN(FEEDBACK)
  Al inicio mi prototipo era mas simple, pregunte a mis familiares si les gustaba la idea, me dijeron que debía mejorarlo y darle mas detalles a mi proyecto como colores, imagenes. Tambien tenía que especificar en mi diseño a que usuarios tenía que ser dirigido poniendole un titulo a mi página. Finalmente decidi hacer dos interfaces una pagina principal y otra donde se valida la tarjeta.

  ### PROTOTIPO FINAL
  En este [prototipo final](https://www.figma.com/file/FKQ58VEqJ90JipE3iHt8Uv/Untitled?node-id=0%3A1) se encuentra las dos interfaces:

  * Página principal:

  [![primera-p-g.png](https://i.postimg.cc/brQst5NS/primera-p-g.png)](https://postimg.cc/7JZHvmzq)

  * Página donde se valida la tarjeta:

  [![segunda-p-g.png](https://i.postimg.cc/vHs1sG3r/segunda-p-g.png)](https://postimg.cc/s1TfPCFx)


## PLAN DE ACCIÓN
  ### Instalación
   - Instalación y configuración de los programas Visual Studio Code, node.js, git bash
  ### Planificación 
   - Diseñar el prototipo en lápiz y papel
   - Diseñar el prototipo en figma
   - Documentación de mi proyecto
  ### Desarrollo proyecto
   - Entender sobre el algoritmo de Lunh
   - Dessarrolar el algoritmo de Luhn
   - Usar funciones 
   - Implementar validator.isValid
   - Diseñar interfaz 
   - Usar DOM
   - Usar eventos como el keypress 
   - Pruebas unitarias
   - Funcionabilidad del proyecto
   - Dessarrolar el algoritmo para la máscara de la tarjeta
   - Implementar validator.maskify
   - Desarrolar el algoritmo para la franquicia de las tarjetas
   - Usar expreciones regulares
   - Implentar validator.getIssuer
   - Implementar validator.getIssuer en el archivo validator.spec.js para que valide las franquicias de los tipos de  tarjetas
   - Completar el README.

  ### Maquetación y diseño
   - Crear la estructura de mi página con HTML5
   - Implementar de CSS 
   - Pedir feedback a un coach sobre el diseño e interfaz de la página

## CHECKLIST

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] `README.md` (o otro archivo) contiene tu plan de acción - Objetivos que prioritizaste este proyecto.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `validator.isValid`.
* [x] Implementa `validator.maskify`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite escribir un número para ser validado.
* [x] Interfaz muestra el resultado de la validación correctamente.
* [x] Interfaz oculta todos los números escritos excepto los 4 últimos

### Parte Opcional: "Hacker edition"

* [x] Implementa `validator.getIssuer`.
* [x] Interfaz muestra la franquicia de la tarjeta



