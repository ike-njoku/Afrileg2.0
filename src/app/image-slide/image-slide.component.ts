import { SLIDEIMAGES } from './../mockSlideImagesDelete';
import { Component, OnInit } from '@angular/core';
import { SlideImage } from '../slideImageInterface';
@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit {
  // ---------------------- current image being displayed (property)
  slideImageIndex = 0;
  images;
  interval = 2000;
  changeImage;
  constructor() {}
  // the property (slideImages) is of type slideImage(interface) and is equal to the array of slide Images returned over the server
  slideImages: SlideImage[] = SLIDEIMAGES;

  // select the image to be displayed
  selectImage(){
    // check that the slideImageIndex is not out of range
    if(this.slideImageIndex>=this.slideImages.length-1) this.slideImageIndex =0;
    if(this.slideImageIndex<0)this.slideImageIndex = this.slideImages.length-1;
    this.slideImageIndex++;

    this.updateDisplay();
  }

  displayNextSlide(){
    // clear the current time Interval and start again
    clearInterval(this.changeImage);
    // increment the value of the slideImageIndex
    this.slideImageIndex++;
    // ensure that  the image index does not go out of range
    if(this.slideImageIndex>=this.slideImages.length) this.slideImageIndex =0;
    if(this.slideImageIndex<0)this.slideImageIndex = this.slideImages.length-1;
    // update the display (change the picture)
    this.updateDisplay();
    // restart the interval timer
    this.changeImage =  setInterval(() => {
      this.selectImage();
    }, this.interval);

  }

  displayPreviousSlide(){
    // clear the current time Interval and start again
    clearInterval(this.changeImage);
    // increment the value of the slideImageIndex
    this.slideImageIndex--;
    // ensure that  the image index does not go out of range
    if(this.slideImageIndex>=this.slideImages.length) this.slideImageIndex =0;
    if(this.slideImageIndex<0)this.slideImageIndex = this.slideImages.length-1;
    // update the display (change the picture)
    this.updateDisplay();
    // restart the interval timer
    this.changeImage =  setInterval(() => {
      this.selectImage();
    }, this.interval);
  }


  // ------------------------- goToSlide()
  goToSlide(imagelocation){
    // clear the current time Interval and start again
    clearInterval(this.changeImage);
    //  find the indexposition of the image with the given locaion
    for (let i = 0; i < this.slideImages.length; i++) {

      if (this.slideImages[i].imageLocation === imagelocation){this.slideImageIndex = i;}

    }



    // update the display
    this.updateDisplay();
    // reset the  timer
    this.changeImage =  setInterval(() => {
      this.selectImage();
    }, this.interval);
  }

updateDisplay(){
  let image = document.querySelector('[data-slideImage]');
  image.classList.remove('fadeIn');
  image.src = this.slideImages[this.slideImageIndex].imageLocation;
  image.classList.add('fadeIn');

}

  ngOnInit(): void {
    this.updateDisplay();
    this.changeImage = setInterval(() => {
      this.selectImage();
    }, this.interval);
  };

}
