import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CarritoContext } from "../../Context/CarritoContext";
import style from "./Carry.module.css";
import Typography from '@mui/joy/Typography'

function Carry() {
      const { carrito } = useContext(CarritoContext);
      const cantidad = carrito.length;
    return(
        <div className={style.carry_content}>
            <MdOutlineShoppingCart className={style.carry}/>
        
            <span className={style.circule_notification_carry_content}><Typography level="body-sm" sx={{ color: 'white' }}>{cantidad > 0 ? cantidad : 0}</Typography></span>
        </div>
    )
}

export default Carry
