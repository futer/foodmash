$('a[href*=#]').click(function(){
  return false;
});


var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Food = {
  wrap: $('#food'),
  selectFood: [
    {
      name: 'Hamburger',
      locaction: 'Poland, Warsaw, FoocCap',
      img: "images/photo/1.jpg"
    },
    {
      name: 'Chiness something',
      locaction: 'Poland, Warsaw, FoocKnajp',
      img: "images/photo/2.jpg"
    },
    {
      name: 'Nuggets',
      locaction: 'Japan, Tokyo, Yorazowa',
      img: "images/photo/3.jpg"
    },
    {
      name: 'Burger',
      locaction: 'Japan, Nagasaki, Nogoiau',
      img: "images/photo/4.jpg"
    },
    {
      name: 'Chicken pice',
      locaction: 'Russia, Moskow, Karmino',
      img: "images/photo/5.jpg"
    }
  ],   
  add: function(){
    var random =     this.selectFood[Math.floor(Math.random() * this.selectFood.length)];
    this.wrap.append("<div class='foodChoose'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong>, " + random.locaction + "</span></div>");
  }
}

var App = {
  yesButton: $('.button.yes .trigger'),
  noButton: $('.button.no .trigger'),
  blocked: false,
  like: function(liked){
    var animate = liked ? 'animateYes' : 'animateNo';
    //var self = this;
    if (!this.blocked) {
      this.blocked = true;           
      $('.foodChoose').eq(0).addClass(animate).one(animationEndEvent, function(liked) {
        $('.foodChoose').eq(0).remove();
        Food.add();
        alert(liked);
        this.blocked = false;
      }.bind(this, liked));
    }
  }
};

App.yesButton.on('mousedown', function() {
  App.like(true);
});

App.noButton.on('mousedown', function() {
  App.like(false);
});

$(document).ready(function() {  
  Food.add();
});