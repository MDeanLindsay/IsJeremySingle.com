var container = document.getElementById('animated-hearts-container');
var emoji = '💖';
var hearts = [];


for (var i = 0; i < 10; i++) {
  const screenHeight = document.body.scrollHeight;
  const screenWidth = document.body.scrollWidth;
  

  addHeart(i, [(screenWidth * 0.00), 0], emoji);
  addHeart(i, [(screenWidth * 0.00), 100], emoji);
  addHeart(i, [(screenWidth * 0.00), 200], emoji);
  addHeart(i, [(screenWidth * 0.25), 300], emoji);
  addHeart(i, [(screenWidth * 0.25), 200], emoji);
  addHeart(i, [(screenWidth * 0.25), -300], emoji);
  addHeart(i, [(screenWidth * 0.25), -200], emoji);
  addHeart(i, [(screenWidth * 0.50), 300], emoji);
  addHeart(i, [(screenWidth * 0.50), 200], emoji);
  addHeart(i, [(screenWidth * 0.50), -300], emoji);
  addHeart(i, [(screenWidth * 0.50), -200], emoji);
  addHeart(i, [(screenWidth * 0.75), 300], emoji);
  addHeart(i, [(screenWidth * 0.75), 200], emoji);
  addHeart(i, [(screenWidth * 0.75), -300], emoji);
  addHeart(i, [(screenWidth * 0.75), -200], emoji);
  addHeart(i, [(screenWidth * 1.00), 300], emoji);
  addHeart(i, [(screenWidth * 1.00), 200], emoji);
  addHeart(i, [(screenWidth * 1.00), -300], emoji);
  addHeart(i, [(screenWidth * 1.00), -200], emoji);
}



function addHeart(delay, range, color) {
  setTimeout(function() {
    var newHeart = new Heart(range[0] + Math.random() * range[1], Math.random() * 100, color, {
      x: -0.25 + Math.random() * 0.7,
      y: 1 + Math.random() * 1
    }, range);
    hearts.push(newHeart);
  }, delay);
}

function Heart(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';

  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > window.innerHeight) {
      _this.y = Math.random() * 4;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }

    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

function animate() {
  for (var i in hearts) {
    hearts[i].update();
  }
  requestAnimationFrame(animate);
}

animate();