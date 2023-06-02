const imagePreviewElement =   document.getElementById('image-preview');

const imagePickerElement = document.getElementById('image')

 function previewFile(){
 const files =  imagePickerElement.files;
    if(!files || files.length === 0){
        imagePreviewElement.style.display = 'none'
        return
    }

    const pickedFile = files[0]

    imagePreviewElement.src = URL.createObjectURL(pickedFile)

    imagePreviewElement.style.display = 'block'
}


imagePickerElement.addEventListener('change', previewFile)



