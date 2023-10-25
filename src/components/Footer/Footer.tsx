import Container from '@/components/Container';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 mt-20">
      <Container className="p-6">
        <p className="text-center text-slate-400">
          Built by <a className="underline font-medium text-inherit" href="https://twitter.com/colbyfayock">Colby Fayock</a>
        </p>
        <p>
        <button id="upload_widget" class="cloudinary-button">Upload files</button>

<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  

<script type="text/javascript">  
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'shirly', 
  uploadPreset: 'my-preset'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
</script></p>
      </Container>
    </footer>
  );
}

export default Footer;
