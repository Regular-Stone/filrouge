class ImageLoader {

    constructor(){
        this.listImagesPaths = [];
        this.listImages = [];
        this.callBack = null;
        this.loadedImageCount = 0;
    }

    add(pImagePath){
        this.listImagesPaths.push(pImagePath);
    }

    getTotalImage() {
        return this.listImagesPaths.length;
    }

    getTotalImagesLoaded() {
        return this.loadedImageCount;
    }

    getListImages() {
        return this.listImages;
    }

    start(pCallBack) {
        this.callBack = pCallBack;
        this.listImagesPaths.forEach(path => {
            let image = new Image();
            image.onload = this.imageLoaded.bind(this);
            image.src = path;
            this.listImages[path] = image;
        });
    }

    imageLoaded(e) {
        this.loadedImageCount++;
        console.log("Image Chargée : ", e.target.currentSrc);

        if(this.loadedImageCount === this.listImagesPaths.length){
            console.log('Tout est bien chargé.')
            this.callBack();
        }
    }





}