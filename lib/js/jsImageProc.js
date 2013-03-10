var canvasPixelArrayProcessor = function(){};

canvasPixelArrayProcessor.prototype.convertToGrayscale = function(image){
	for(var i = 0; i < image.byteLength; i = i +4){
	    var total = image[i] + image[i + 1] + image[i + 2];
	    var grayscaleValue = total / 3;
	    grayscaleValue = Math.floor(grayscaleValue);
	    
	    image[i] = grayscaleValue;
	    image[i + 1] = grayscaleValue;
	    image[i + 2] = grayscaleValue;
  	}
}

var jsImageProc = function(){
	this.canvasPixelArray = new canvasPixelArrayProcessor();
};