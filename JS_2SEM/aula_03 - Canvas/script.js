//Atribui a uma variavel e elemento selecionado.
canvas = document.querySelector("canvas");

//definir o tamanho do canvas
canvas.width = 1600;
canvas.height = 600;

//a variavel ctx se torna um objeto onde pode ser atribuido a métodos

ctx = canvas.getContext('2d');

//atribuimos propriedade e metedos ao nosso objeto
//posições(X, Y, Width, Height)
ctx.fillStyle = "pink";
ctx.fillRect(100, 80, 150, 200);
ctx.fillRect(400, 80, 150, 200);
ctx.fillRect(250, 80, 150, 500);
ctx.fillStyle = "rgba(0, 255,0,0.5)";
ctx.fillRect(150, 120, 150, 100);
ctx.fillRect(350, 120, 150, 100);
ctx.fillStyle = "white";
ctx.fillRect(280, 300, 100, 30);
ctx.fillStyle = "black";
ctx.fillRect(250, 370, 150, 220);
ctx.fillStyle = "red";
ctx.fillRect(310, 370, 30, 100);
ctx.fillStyle = "purple";
ctx.fillRect(250, 570, 150, 20);
ctx.fillStyle = "black";
ctx.fillRect(400, 300, 50, 200);
ctx.fillRect(200, 300, 50, 200);
ctx.fillStyle = "purple";
ctx.fillRect(400, 480, 50, 20);
ctx.fillRect(200, 480, 50, 20);

//Desenhando uma linha
//Inicio do desenho

ctx.beginPath();
//posição de inicio da linha
ctx.moveTo(80, 600);
ctx.lineTo(80, 60);
ctx.lineTo(580, 60);
ctx.lineTo(580, 600);
ctx.strokeStyle = "black";
ctx.stroke()


//Criando um circulo
//posições para a criaçã
//x, y, raio, anguloinicial, angulofinal
ctx.beginPath();
ctx.arc(800, 400, 90, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.stroke();
ctx.fill()


//deixando a posição randomicas

for (var i = 0; i < 10; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 100, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,255,0.2";
    ctx.stroke();
    ctx.fill()
    ctx.closePath();
}




















//Meu desenho (Tiro ao alvo)
ctx.closePath();
ctx.beginPath();
ctx.arc(800, 150, 90, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 80, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 70, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 60, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 40, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 30, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 20, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.arc(800, 150, 10, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.stroke();
ctx.fill()
ctx.closePath();




