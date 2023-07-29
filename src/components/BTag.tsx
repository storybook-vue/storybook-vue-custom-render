
import { defineComponent } from 'vue';
import MyButton from "./Button.vue"

import './button.css'

export const BTag = defineComponent({

     setup(props ,{ attrs, slots}){

        return ()=> <div> BTag : <MyButton {...attrs }  /> </div> 

     },
     
    })

