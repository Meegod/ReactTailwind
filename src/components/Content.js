
 import ImageOne from '../images/vocal.jpg';
 import ImageTwo from '../images/vocal2.jpg';

function Content() {
  return (
  	<>
       <div className="menu-card">
      <img src={ImageOne}
      className="h-full rounded mb-20 shadow"/>
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-2">Vocal Book</h2>
      <p>Singers are made and not born</p>
      
      <span>$16</span>
      </div>
      </div>
         <div className="menu-card">
      <img src={ImageTwo}
      className="h-full rounded mb-20 shadow"/>
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-2">Vocal Book</h2>
            <p>Singers are made and not born</p>

      <span>$19</span>
      </div>
      </div>
        </>     
      

  );
}
<p className="mb-2"></p>

export default Content;
