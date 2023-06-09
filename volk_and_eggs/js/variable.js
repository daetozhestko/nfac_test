// Файл для всех переменных

// глобальная переменная поля игры
var game = document.querySelector("#game");
// глобальная переменная блока старта игры
var startGame = null;
// глобальная переменная кнопки для старта игры
var startBtn = null;
// глобальная переменная для кнопки выключения звука
var soundBtn = null;
// глобальная переменная для блока с очками
var score = null;
// глобальная переменная для запуска звука. глобальная потому что мы потом его ставим на паузу в другой функции
var audio = null;
// переменная в которую мы заносим песню
var song = null;
// глобальная переменная для числа очков
var gameScore = 0;
// глобальная переменная для блока таймера
var timer = null;
// глобальная переменная которая будет хранить отсчет времени
var time = null;
// глобальная переменная для блока жизней
var life = null;
// глобальная переменная для количества жизней
var quantityLifes = 3;
// глобальная переменная для блока с курицами
var hens = null;
// глобальные переменные для блоков на которые мы будем наводить, чтобы волк менялся
var leftTop = null;
var rightTop = null;
var leftBottom = null;
var rightBottom = null;
// глобальная переменная для яйца
var egg = null;
// глобальная переменная для блока рестарта
var endBlock = null;
// глобальная переменная для кнопки рестарта
var restartBtn = null;
// глобальная переменная, для включеного или выключеного звука
var varSoung = "on";
// переменная для блока паузы
var pauseBlock = null;
// переменная для блока таймера
var t = null;

//===================
// переменные для creatEgg
var speedAnimal = 200;						// переменная времени в мсек. интервала для функции анимации яиц
var speedEgg = 3000;						// переменная интервала для создания яиц
var ballTopLeft = "egg-left-top";			// класс для яйца вверху слева
var ballBottomLeft = "egg-left-bottom";	// класс для яйца внизу слева
var ballTopRight = "egg-right-top";			// класс для яйца вверху справа
var ballBottomRight = "egg-right-bottom";	// класс для яйца вверху справа
var pxLeft = 410;									// позиция в котором падает яйцо слева
var pxRight = 550;								// позиция в котором падает яйцо справа
var pxLeftCreate = 400;							// переменная позиции яйца слева для создания нового яйца 
var pxRightCreate = 570;						// переменная позиции яйца слева для создания нового яйца 
var music = new Audio('audio/click.mp3');	// звук яйца в корзинку
var sound = new Audio('audio/egg.mp3');		// звук падения яйца
var pause = 0;								// переменная для паузы
var timerEgg = null;						// интервал создания яиц
var timerBall = null;						// интервал анимации яиц
var maxScore = 0;