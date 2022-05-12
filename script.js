const main = (function () {

	class Elem {
		constructor(selector) {
			this.elem = document.querySelector(selector);
			return this.elem;
		}
	}

	class Elems {
		constructor(selectors) {
			this.elems = document.querySelectorAll(selectors);
			return this.elems;
		}
	}

	class Create {
		constructor(element) {
			this.elem = document.createElement(element);
			mainBlock.appendChild(this.elem);
		}

		addClass(classList) {
			this.elem.classList.add(classList);
			return this;
		}

		fragments(html) {
			this.elem.innerHTML = html;
			return this;
		}

	}

	let mainBlock = new Elem('.main');

	createHeader();
	createContainer();
	createFooter();
	templatesBlock();
	setTemplateToCard();
	addTextToCard();
	TextEditorStyle();
	textEditorWeight();
	uploadLogo();
	resetCard();
	applyAndSaveCard();
	dragAndDrop();

	function createHeader() {
		let header = new Create('header');
		header.addClass('header');
		header.fragments(
			`<div class="header__wrap">
					<div class="header__logo">
						<a href="#main">
							<img src="img/logo.svg" width="120" height="60" alt="logo">
						</a>
					</div>
				`);
	}

	function createContainer() {
		let container = new Create('div');
		container.addClass('container');
		container.fragments(`
		<div class="constructor">
				<div class="visitka-block">
					<div class="text-editor">
						<span class="text-bold fa fa-bold text-btn"></span>
						<span class=" text-italic fa fa-italic text-btn"></span>
						<span class="text-up text-btn">A</span>
						<span class="text-low text-btn">a</span>
						<span class="text-right fa fa-align-right text-btn"></span>
						<span class="text-center fa fa-align-center text-btn"></span>
						<span class="text-left fa fa-align-left text-btn"></span>
						<select class="select-size select">
						</select>
						<select class="select-font select">
						</select>
						<input type="color" class="select-color">
					</div>
					<div id="canvas" class="canvas-wrap first-canvas">
						<div class="card-logo drag" title="Переместите логотип в нужное место">
							<img width="90" height="90">
						</div>
						<div class="card-content card-name drag" title="Переместите текст в нужное место">
						</div>
						<div class="card-content card-post drag" title="Переместите текст в нужное место"></div>
						<div class="card-content card-company drag" title="Переместите текст в нужное место">
						</div>
						<div class="card-content card-address drag" title="Переместите текст в нужное место">
						</div>
						<div class="card-content card-phone drag " title="Переместите текст в нужное место"></div>
						<div class="card-content card-web drag " title="Переместите текст в нужное место"></div>
						<!-- <canvas id="canvas1" width="600" height="334" class="lover-canvas"></canvas>
						<canvas width="600" height="334" class="upper-canvas"></canvas> -->
					</div>
					<div class="control-tools">
						<a class="template-btn control-btn" title="Добавить шаблон">Шаблон</a>
						<label for="upload-logo" class="upload-logo control-btn" title="Добавить логотип">Логотип</label>
						<input id="upload-logo" class="upload-input" style="visibility:hidden;" type="file">
						<a class="apply-btn control-btn" title="Применить изменения">Применить</a>
						<a class="cancel-btn control-btn" title="Сбросить изменения">Очистить</a>
						<a class="download-btn control-btn" title="Скачать визитку"><span
								class="fas fa-download fp"></span>Скачать</a>
					</div>
				</div>
				<div class="filds">
					<div class="inputs-wrap">
						<textarea placeholder="ФИО" class="inputs input-one"></textarea>
					</div>
					<div class="inputs-wrap">
						<textarea placeholder="Должность" class="inputs input-two"></textarea>
					</div>
					<div class="inputs-wrap">
						<textarea placeholder="Компания" class="inputs input-three"></textarea>
					</div>
					<div class="inputs-wrap">
						<textarea placeholder="Адрес" class="inputs input-four"></textarea>
					</div>
					<div class="inputs-wrap">
						<textarea placeholder="Телефон" class="inputs input-five"></textarea>
					</div>
					<div class="inputs-wrap">
					<textarea placeholder="Сайт" class="inputs input-six"></textarea>
				</div>
				<div class="template-wrap">
					<div class="template-header">
						<div class="template-close">
							<a href="#"></a>
						</div>
					</div>
					<div class="templates">
						<div class="template-img">
							<img class="template-min" src="img/template_1.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_2.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_3.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_4.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_5.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img ">
							<img class="template-min" src="img/template_6.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_7.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_8.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_9.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_10.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src=" img/template_11.png" alt="шаблон визитки" width="220" height="140">
						</div>
						<div class="template-img">
							<img class="template-min" src="img/template_12.png" alt="шаблон визитки" width="220" height="140">
						</div>
					</div>
				</div>
			</div>
		`);
	}

	function createFooter() {
		let footer = new Create('footer');
		footer.addClass('footer');
	}

	//=======================================================================
	// TEMPLATES============================================================
	// Липкий template-header
	// СКРЫТЬ-ПОКАЗАТЬ БЛОК С ШАБЛОНАМИ
	function templatesBlock() {

		$(document).ready(function () {
			$('.template-header').offset().top;

			$(window).scroll(function () {
				$('.template-header').css({
					position: 'static'
				});
			});

		});

		let showTemplate = new Elem('.template-btn');
		let hideTemplate = new Elem('.template-close');
		let templateBox = new Elem('.template-wrap');

		showTemplate.addEventListener('click', showTemplateBlock);
		hideTemplate.addEventListener('click', hideTemplateBlock);

		function showTemplateBlock() {

			$(templateBox).animate({
				width: 'show'
			}, 300);
		}

		function hideTemplateBlock() {

			$(templateBox).animate({
				width: 'hide'
			}, 300);
		}

	}
	//========================================================================================
	// ИЗОБРАЖЕНИЯ И ПРЕДУСТАНОВЛЕННЫЕ ШАБЛОНЫ==============================================
	// Добавление изображений на макет
	function setBackground(link) {

		let canvasWrap = new Elem('#canvas');
		canvasWrap.style.backgroundImage = `url("${link}")`;
		// canvasWrap.style.backgroundSize = '600px 334px';
	}

	function setTemplateToCard() {

		let templates = new Elem('.templates');
		let templateImg = new Elems('.template-min');

		templates.addEventListener('click', checkTemplate);

		function checkTemplate(e) {
			let templateMin = e.target;

			templateImg.forEach(elem => {

				if (elem !== templateMin) {
					return;
				}
			});

			switch (templateMin) {
				case templateImg[0]:
					setBackground('img/template_1.png');
					predefinedTemplate(0);
					break;
				case templateImg[1]:
					setBackground('img/template_2.png');
					predefinedTemplate(1);
					break;
				case templateImg[2]:
					setBackground('img/template_3.png');
					predefinedTemplate(3);
					break;
				case templateImg[3]:
					setBackground('img/template_4.png');
					predefinedTemplate(2);
					break;
				case templateImg[4]:
					setBackground('img/template_5.png');
					predefinedTemplate(0);
					break;
				case templateImg[5]:
					setBackground('img/template_6.png');
					predefinedTemplate(5);
					break;
				case templateImg[6]:
					setBackground('img/template_7.png');
					predefinedTemplate(1);
					break;
				case templateImg[7]:
					setBackground('img/template_8.png');
					predefinedTemplate(4);
					break;
				case templateImg[8]:
					setBackground('img/template_9.png');
					predefinedTemplate(0);
					break;
				case templateImg[9]:
					setBackground('img/template_10.png');
					predefinedTemplate(2);
					break;
				case templateImg[10]:
					setBackground('img/template_11.png');
					break;
				case templateImg[11]:
					setBackground('img/template_12.png');
					break;
			}
		}
	}

	function setTemplatePosition(item, data) {
		item.innerHTML = data.text;
		item.style.top = data.top + 'px';
		item.style.left = data.left + 'px';
		item.style.fontStyle = data.style;
		item.style.fontSize = data.size + 'px';
		item.style.color = data.color;
		item.style.fontWeight = data.weight;
	}

	function predefinedTemplate(i) {

		let templatesData = jsonTemplatesData;
		// console.log(templatesData[0]);
		//console.log(setTemplate[i].web);
		let cardLogo = new Elem('.card-logo');
		let cardName = new Elem('.card-name');
		let cardPost = new Elem('.card-post');
		let cardCompany = new Elem('.card-company');
		let cardAddress = new Elem('.card-address');
		let cardPhone = new Elem('.card-phone');
		let cardWeb = new Elem('.card-web');

		cardLogo.style.top = templatesData[i].logo.top + 'px';
		cardLogo.style.left = templatesData[i].logo.left + 'px';

		setTemplatePosition(cardName, templatesData[i].name);
		setTemplatePosition(cardPost, templatesData[i].post);
		setTemplatePosition(cardCompany, templatesData[i].company);
		setTemplatePosition(cardAddress, templatesData[i].address);
		setTemplatePosition(cardPhone, templatesData[i].phone);
		setTemplatePosition(cardWeb, templatesData[i].web);

	}
	//====================================================================================================
	//TEXT-EDITOR, ДОБАВЛЕНИЕ CANVAS, ТЕКСТ НА ХОЛСТ, СОХРАНЕНИЕ МАКЕТА ==========
	// Добавление текста===========================
	function addTextToCard() {

		let filds = new Elem('.filds');
		let cardText = new Elems('.card-content');
		let textInputs = new Elems('.inputs');

		filds.addEventListener('keyup', addText);

		function addText(e) {
			let inputs = e.target;

			textInputs.forEach(elem => {
				if (inputs !== elem) {
					return;
				}
			});

			switch (inputs) {
				case textInputs[0]:
					cardText[0].textContent = textInputs[0].value;
					break;
				case textInputs[1]:
					cardText[1].textContent = textInputs[1].value;
					break;
				case textInputs[2]:
					cardText[2].textContent = textInputs[2].value;
					break;
				case textInputs[3]:
					cardText[3].textContent = textInputs[3].value;
					break;
				case textInputs[4]:
					cardText[4].textContent = textInputs[4].value;
					break;
				case textInputs[5]:
					cardText[5].textContent = textInputs[5].value;
					break;
			}

		}

	}
	//Texteditor(font-family, font-color, font-size)=============================================
	function TextEditorStyle() {
		let selectFont = new Elem('.select-font');
		let selectSize = new Elem('.select-size');
		console.log(selectSize);
		let selectColor = new Elem('.select-color');
		let inputs = new Elems('.inputs');
		let cardContent = new Elems('.card-content');
		//Добавление option с размерами текста
		let sizeItem = [
			10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36,
			40, 42, 46, 50, 52, 54, 56, 58, 60,
		];

		sizeItem.forEach(elem => {
			let option = document.createElement('option');
			selectSize.appendChild(option);
			option.setAttribute('value', elem);
			option.innerHTML = elem;
		});

		let fontItem = [
			'Times New Roman', 'Roboto', 'Philosopher', 'Arial',
			'Bradley Hand', 'Viaoda Libre', 'Lobster', 'Neucha', 'Marck Script',
		];

		fontItem.forEach(elem => {
			let option = document.createElement('option');
			selectFont.appendChild(option);
			option.setAttribute('value', elem);
			option.innerHTML = elem;
		});

		inputs[0].addEventListener('blur', changeNameFont);
		inputs[1].addEventListener('blur', changePostFont);
		inputs[2].addEventListener('blur', changeCompanyFont);
		inputs[3].addEventListener('blur', changeAddressFont);
		inputs[4].addEventListener('blur', changePhoneFont);
		inputs[5].addEventListener('blur', changeWebFont);

		function changeFont(i) {
			selectFont.onchange = e => {
				cardContent[i].style.fontFamily = e.target.value;
			};
			selectSize.onchange = e => {
				cardContent[i].style.fontSize = e.target.value + 'px';
			};
			selectColor.onchange = e => {
				cardContent[i].style.color = e.target.value;
			};
		}

		function changeNameFont() {

			changeFont(0);

		}

		function changePostFont() {

			changeFont(1);
		}

		function changeCompanyFont() {

			changeFont(2);
		}

		function changeAddressFont() {
			changeFont(3);
		}

		function changePhoneFont() {
			changeFont(4);
		}

		function changeWebFont() {
			changeFont(5);
		}

	}
	// // Text-editor(bold, italic, big, small)==============================
	function textEditorWeight() {

		let textBold = new Elem('.text-bold');
		let inputs = new Elems('.inputs');
		let cardContent = new Elems('.card-content');
		let textItalic = new Elem('.text-italic');
		let textUp = new Elem('.text-up');
		let textLow = new Elem('.text-low');

		inputs[0].addEventListener('blur', changeNameStyle);
		inputs[1].addEventListener('blur', changePostStyle);
		inputs[2].addEventListener('blur', changeCompanyStyle);
		inputs[3].addEventListener('blur', changeAdressStyle);
		inputs[4].addEventListener('blur', changePhoneStyle);
		inputs[5].addEventListener('blur', changeWebStyle);

		function changeFontStyle(i) {
			textBold.onclick = () => {
				cardContent[i].classList.toggle('bold');
			};
			textItalic.onclick = () => {
				cardContent[i].classList.toggle('italic');
			};
			textUp.onclick = () => {
				cardContent[i].classList.add('big');
			};
			textLow.onclick = () => {
				cardContent[i].classList.add('small');
			};
		}

		function changeNameStyle() {
			changeFontStyle(0);
		}

		function changePostStyle() {
			changeFontStyle(1);
		}

		function changeCompanyStyle() {
			changeFontStyle(2);
		}

		function changeAdressStyle() {
			changeFontStyle(3);
		}

		function changePhoneStyle() {
			changeFontStyle(4);
		}

		function changeWebStyle(i) {
			changeFontStyle(5);
		}
		//Text-editor(text-left)================================
		let textLeft = document.querySelector('.text-left');

		textLeft.addEventListener('click', fontLeft);

		function fontLeft() {
			cardContent.forEach(elem => {
				elem.style.left = 40 + 'px';
			});
		}
		// Text-editor(text-right)===============================
		let textRight = document.querySelector('.text-right');

		textRight.addEventListener('click', fontRight);

		function fontRight() {
			cardContent.forEach(elem => {
				elem.style.left = 390 + 'px';
			});
		}
		// Text-editor(text-center)================================
		let textCenter = document.querySelector('.text-center');

		textCenter.addEventListener('click', fontCenter);

		function fontCenter() {
			cardContent.forEach(elem => {
				elem.style.left = 200 + 'px';
			});
		}

	}
	//============================================================
	// UPLOAD LOGO================================================
	function uploadLogo() {
		let cardLogo = new Elem('.card-logo img');

		let loadImg = function (input) {
			if (input.files && input.files[0]) {
				let reader = new FileReader();

				reader.onload = function (e) {
					cardLogo.src = e.target.result;
				};
				reader.readAsDataURL(input.files[0]);
			}
		};

		let uploadLogo = document.querySelector('#upload-logo');

		uploadLogo.addEventListener('change', loadLogo);

		function loadLogo() {
			loadImg(this);
		}

	}
	//===================================================================
	// СБРОСИТЬ
	function resetCard() {

		let cancelBtn = new Elem('.cancel-btn');
		let cardContent = new Elems('.card-content');
		let cardLogo = new Elem('.card-logo img');
		let templateBox = new Elem('.canvas-wrap');
		let inputs = new Elems('.inputs');
		console.log(inputs);
		cancelBtn.addEventListener('click', clearCard);

		function clearCard() {

			cardContent.forEach(elem => {
				elem.textContent = '';
				elem.innerHTML = '';
			});

			inputs.forEach(elem => {
				elem.value = '';
			});

			templateBox.style.backgroundImage = 'none';
			cardLogo.src = '';
		}

	}
	//=================================================================================
	// APPLY & DOWNLOAD CANVAS ===================================
	function applyAndSaveCard() {
		let cardBlock = document.querySelector('.visitka-block');
		console.log(cardBlock);
		let applyBtn = document.querySelector('.apply-btn');

		applyBtn.addEventListener('click', saveCard);

		function saveCard() {
			// ФУНКЦИЯ СОЗДАНИЯ CANVAS==================
			html2canvas(document.querySelector("#canvas")).then(canvas => {
				cardBlock.appendChild(canvas);

				//DOWNLOAD CANVAS===========================
				let downloadBtn = document.querySelector('.download-btn');

				downloadBtn.onclick = function () {
					let dataURL = canvas.toDataURL('image/jpeg', 1.0);
					let link = document.createElement("a");
					document.body.appendChild(link);
					link.href = dataURL;
					link.download = 'my-business-card.jpg';
					link.click();
					document.body.removeChild(link);
				};

			});

		}

	}

	//drag===============================================================
	function dragAndDrop() {
		let dragElem = document.querySelectorAll('.drag');
		let draggable;

		dragElem.forEach(elem => {
			draggable = new Draggabilly(elem, {
				containment: true
			});
		});

	}


});

main();