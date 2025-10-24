import style from "./Index.module.css"
import Typography from '@mui/joy/Typography'
import { SlArrowDown } from "react-icons/sl";

function Index() {
  return (
  <>
    <div className={style.main_index_content}>
      <div className={style.main_letters}>
        <Typography level="title-lg" sx={{fontSize: 160, letterSpacing:"0.8rem" }}>Welcome.</Typography>
        <Typography level="body-lg" sx={{fontSize: 20, lineHeight: 1.5}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia natus perferendis assumenda laborum voluptatum non quae phrroz 
        ab recusandae minima, ipsa quas odio, aut reprehenderit voluptas dolores ratione vero quibusdam.</Typography>

        <div className={style.main_scroll_button}><a href="#1"><button className={style.scroll_button}> <SlArrowDown className={style.scroll}/> </button></a></div>
        
      </div>
    </div>
{/* 
    <div className={style.WhiteScreen}></div>


    <div className={style.section_text_information_content}>
      <div className={style.section_text_information}>
        <Typography level="title-lg" sx={{fontSize: 160, letterSpacing:"0.8rem" }}>Welcome.</Typography>
        <Typography level="body-lg" sx={{fontSize: 20, lineHeight: 1.5}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia natus perferendis assumenda laborum voluptatum non quae phrroz 
        ab recusandae minima, ipsa quas odio, aut reprehenderit voluptas dolores ratione vero quibusdam.</Typography>        
      </div>
    </div>


    <div className={style.section_info} id="1">
        <div className={style.section_info_1}>ASDASD</div>
        <div className={style.section_info_2}>ASDASD</div>
        <div className={style.section_info_3}>ASDASD</div>
        <div className={style.section_info_4}>ASDASD</div>
    </div> */}


  </> 
  )
}


export default Index