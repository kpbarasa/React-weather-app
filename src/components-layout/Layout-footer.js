const LayoutFooter = ({BackgroundImgURL, BackgroundImgLink}) => {
    return ( <>
        
        <div className="row">   
            <div className="col-lg-12 col-sm-12 ">  
            <div className="h6 text-light">
               Photo by <a href={BackgroundImgURL} target="_blank" rel="noopener noreferrer" >{BackgroundImgLink} @pixbay.com</a>
            </div> 
            <div className="h6 text-light">
               Api(s) <a href={'https://openweathermap.org/'} target="_blank" rel="noopener noreferrer" >Open weather map</a>  <a href={'https://pixbay.com</'} target="_blank" rel="noopener noreferrer" >Pixbay</a>
            </div> 
            <div className="h6 text-light">
               App by <a href={'http://paulbarasa.co.ke'} target="_blank" rel="noopener noreferrer" >Paul Barasa</a>
            </div> 
            </div>
          </div>

    </> );
}
 
export default LayoutFooter;