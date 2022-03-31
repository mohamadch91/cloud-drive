import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export let check=0;
export const change=()=>{
  if(check==0){
    check=1;
  }
  else{
    check=0;
  }
  
}