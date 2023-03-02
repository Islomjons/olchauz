import c from "./Explore.module.css"
import smartPhoneExplore from "../../dimmiy-data.smarPhone.json"
import smartImgRights from "../../dimmiy-data.smartImg.json"
import smartleft from "../../dimmiy-data.smart.json"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

function Explore() {
    const removeUnderline = {
        textDecoration: "none",
    }
  return (
    <div className={c.explore}>
        <div className={c.container}>
         <h1 className={c.explore__heading}>Smartfon, telefon, gadjet, aksessuarlar</h1>
            <div className={c.explore__wrapper}>
                <div className={c.explore__left}>
                    <Link className={c.explore__left__link}>Smartfonlar</Link>
                    <div className={c.explore__left__wrapper}>
                        {
                            smartleft.map(smartlefts => 
                                <Link style={removeUnderline}>
                                    <h4 className={c.explore__left__heading}>{smartlefts.smartHeading}</h4> 
                                    <p className={c.explore__left__title}>{smartlefts.smartTitle}</p>
                                </Link>   
                            )
                        }
                    </div>
                </div>
                <ul className={c.explore__right}>
                    {
                        smartImgRights.map(smartleft => 
                            <img className={c.smartRightImg} src={smartleft.smartImgLeft} alt="" />
                        )
                    }
                    {
                        smartPhoneExplore.map(smartIphone => 
                            <li key={uuidv4()} className={c.explore__right__item}>
                                <Link className={c.explore__right__link}>
                                    <img className={c.explore__right__img} src={smartIphone.smartPhoneImg} alt="" />
                                    <p className={c.explore__right__text}>{smartIphone.smartPhoneTitle}</p>
                                </Link>
                            </li>    
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Explore