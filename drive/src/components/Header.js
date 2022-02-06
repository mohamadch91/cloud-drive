import React from 'react';
import '../cmp_css/Badge.css';
// calculate num digits
const NumDigits = (num) => {
    //convert num to integer
    if (num <10) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};
function Change (num)  {
    let Style_design={
        border_radius: '50%',
         width:'24px',
         height:'24px'

    };
   console.log(NumDigits(num) );
    if(NumDigits(num) > 1){
        let badge_width = (NumDigits(num) -1)*8+24;
        Style_design['border_radius'] ='18px'
        Style_design['width'] = badge_width+'px';   
      
    
    
    }
    // console.log(Style);
    console.log(Style_design);
    let badge= <span id="Badge" style={{borderRadius:Style_design['border_radius'],width:Style_design['width']}} >{num}</span>
      return badge;      
    }
class Badge extends React.Component{
   
        
    render(){
        
        return(
            Change(this.props.num)
                
        );
    }
}
export default Badge
