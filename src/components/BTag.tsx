
import { defineComponent } from 'vue';
import MyButton from "./Button.vue"

export const BTag = defineComponent({

     setup(props ,{ attrs, slots}){

        return ()=> <div> BTAG <MyButton {...attrs }  /> </div> 

     },
     
    })

