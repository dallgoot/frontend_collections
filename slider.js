function initSlides(root){
    var sliderRoot = document.querySelector(root);
    var state = {
      target : sliderRoot.querySelector(".movable"),
      current: 0,
      total: sliderRoot.querySelectorAll(".movable a").length
    };
    function changeSlide(){
      this.current = this.current < this.total-1 ? this.current + 1 : 0;
      var slideWidth = 100 / this.total;
      this.target.style.transform = "translateX(-"+(this.current*slideWidth)+"%)";
      var dotList = Array.prototype.slice.apply(sliderRoot.querySelectorAll(".dotCenter a"));
      dotList.forEach(function(element){
        element.className ="";
      });
      dotList[this.current].className = "selected";
    }
    state.interval = setInterval(changeSlide.bind(state),3000);
}
initSlides('.slideshow-container');




  <div class="slideshow-container">
    <div class="movable">
    <a href="#">
        <img src="http://dev2.mauriceradiolibre.com/wp-content/uploads/2020/07/Slide_CAA_Best_Off_02.png"></a>
    <a href="#">
        <img src="http://dev2.mauriceradiolibre.com/wp-content/uploads/2020/07/Slide_CAA_Best_Off_02.png"></a>
    <a href="dada">
        <img src="http://dev2.mauriceradiolibre.com/wp-content/uploads/2020/07/Slide_CAA_Best_Off_02.png"></a>
   </div>

  <div class="dotCenter">
          <a class="selected"></a>
          <a></a>
          <a></a>
   </div>
</div>


.slideshow-container {
  width: 1344px;
  height: 300px;
  overflow:hidden;
  border: 3px solid yellow;
  margin-bottom: 20px;
}
.slideshow-container a{
  width: 1344px;
}
.slideshow-container a,
.slideshow-container img{
  border: none;
  outline:0;
}

.slideshow-container .movable{
  width: auto;
  display:inline-flex;
  transform: translateX(0%);
  transition: transform  0.8s;
}

.slideshow-container .dotCenter {
  margin-top: -7em;
  position: relative;
  text-align: center;
  width: inherit;
}
.slideshow-container .dotCenter a {
  content: " ";
  border-radius: 4em;
  border:3px solid rgba(255,255,255,0.3);
  display:inline-block;
  height:1em;
  width:1em;
  margin: 0 0.25em;
}
.slideshow-container .dotCenter a.selected {
  background-color:rgba(255,255,255,0.7);
}