
// Cần hỗ trợ hãy liên hệ: 
// Mr-Nam http://facebook.com/nam.nodemy
// Các bạn muốn học lập trình thì tham gia Nhóm zalo tự học lập trình nhé: https://zalo.me/g/yhdkef092

var to = nameGirl;
var gift_url = giftUrl;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");



function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  document.querySelector('#card .honey').setAttribute('src', `${giftImage}`);

  var _giftLink, 
      _giftImg;
  
  // if (gift_url) {
  //   _giftLink = document.createElement("a");
  //   _giftLink.href = gift_url;
  //   _giftLink.target = "_blank";
  //   presentImage.appendChild(_giftLink);
  // }
  
  // if (gift_image_url) {
  //   _giftImg = document.createElement("img");
  //   _giftImg.src = gift_image_url;
  //   if(_giftLink) {
  //     _giftLink.appendChild(_giftImg);
  //   } else {
  //     presentImage.appendChild(_giftImg);
  //   }
  // }


  if (gift_image_url) {
    _giftImg = document.createElement('img');
    _giftImg.src = gift_image_url;
    _giftImg.classList.add('gift-image'); // Thêm class CSS cho ảnh

    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

present.addEventListener(
  'click',
  function (e) {
    present.classList.toggle('open');
    document.getElementById('card').classList.add('card-show');

    // Hiệu ứng pháo hoa
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  },
  false
);

function createHeart() {
  const container = document.getElementById('heart-container');
  const heart = document.createElement('img');
  heart.classList.add('heart');

  // Chọn ngẫu nhiên giữa trái tim đỏ và hồng
  const heartImages = ['./heartIcon.png', './PinkheartIcon.png'];
  heart.src = heartImages[Math.floor(Math.random() * heartImages.length)];

  // Vị trí ngẫu nhiên theo chiều ngang
  heart.style.left = `${Math.random() * 100}vw`;

  // Kích thước ngẫu nhiên
  let size = Math.random() * 30 + 20;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  container.appendChild(heart);

  // Xóa trái tim sau khi bay lên
  setTimeout(() => {
    heart.remove();
  }, 7500);
}

// Khi bấm vào hộp quà, tạo hiệu ứng trái tim bay lên
present.addEventListener('click', function () {
  present.classList.toggle('open');
  document.getElementById('card').classList.add('card-show');

  // Tạo nhiều trái tim mỗi 50ms
  let heartInterval = setInterval(createHeart, 200);

  // Dừng sau 5 giây
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 15000);
});


init();

