const container = document.querySelector('.container');
    const btnWhite = document.querySelector('.branco');
    const btnBlack = document.querySelector('.preto');
    const btnBlue = document.querySelector('.azul');
    const btnTxtWhite = document.querySelector('.txt-branco');
    const btnTxtBlack = document.querySelector('.txt-preto');
    const btnTxtBlue = document.querySelector('.txt-azul');
    const btnFontSmall = document.querySelector('.menor');
    const btnFontNormal = document.querySelector('.normal');
    const btnFontBig = document.querySelector('.maior');
    const btnSmallSpace = document.querySelector('.menor-espaco');
    const btnNormalSpace = document.querySelector('.normal-espaco');
    const btnBigSpace = document.querySelector('.maior-espaco');
    const btnFontArial = document.querySelector('.arial');
    const btnFontTimes = document.querySelector('.times');
    const btnFontCourier = document.querySelector('.courier');

    btnWhite.addEventListener('click', function() {
      document.body.style.backgroundColor = 'white';
      localStorage.setItem('CorDeFundo', 'white');
    });
    btnBlack.addEventListener('click', function () {
      document.body.style.backgroundColor = 'black';
      localStorage.setItem('CorDeFundo', 'black');
    });
    btnBlue.addEventListener('click', function () {
      document.body.style.backgroundColor = 'blue';
      localStorage.setItem('CorDeFundo', 'blue');
    });
    btnTxtWhite.addEventListener('click', function () {
      container.style.color = 'white';
      localStorage.setItem('CorDeTexto', 'white');
    });
    btnTxtBlack.addEventListener('click', function () {
      container.style.color = 'black';
      localStorage.setItem('CorDeTexto', 'black');
    });
    btnTxtBlue.addEventListener('click', function () {
      container.style.color = 'blue';
      localStorage.setItem('CorDeTexto', 'blue');
    });
    btnFontSmall.addEventListener('click', function () {
      container.style.fontSize = '15px';
      localStorage.setItem('FontSize', '15px');
    });
    btnFontNormal.addEventListener('click', function () {
      container.style.fontSize = '20px';
      localStorage.setItem('FontSize', '20px');
    });
    btnFontBig.addEventListener('click', function () {
      container.style.fontSize = '25px';
      localStorage.setItem('FontSize', '25px');
    });
    btnSmallSpace.addEventListener('click', function () {
      container.style.lineHeight = '1.2';
      localStorage.setItem('LineSpace', '1.2');
    });
    btnNormalSpace.addEventListener('click', function () {
      container.style.lineHeight = '1.6';
      localStorage.setItem('LineSpace', '1.6');
    });
    btnBigSpace.addEventListener('click', function () {
      container.style.lineHeight = '1.9';
      localStorage.setItem('LineSpace', '1.9');
    });
    btnFontArial.addEventListener('click', function () {
      container.style.fontFamily = 'Arial';
      localStorage.setItem('FontFamily', 'Arial');
    });
    btnFontTimes.addEventListener('click', function () {
      container.style.fontFamily = 'Times New Roman';
      localStorage.setItem('FontFamily', 'Times New Roman');      
    });
    btnFontCourier.addEventListener('click', function () {
      container.style.fontFamily = 'Courier';
      localStorage.setItem('FontFamily', 'Courier');
    });

    function rescueSet() {
      const corDeFundo = localStorage.getItem('CorDeFundo');
      const corDeTexto = localStorage.getItem('CorDeTexto');
      const fontSize = localStorage.getItem('FontSize');
      const lineSpace = localStorage.getItem('LineSpace');
      const fontFamily = localStorage.getItem('FontFamily');
      document.body.style.backgroundColor = corDeFundo;
      container.style.color = corDeTexto;
      container.style.fontSize = fontSize;
      container.style.lineHeight = lineSpace;
      container.style.fontFamily = fontFamily;
    }
    rescueSet();
    