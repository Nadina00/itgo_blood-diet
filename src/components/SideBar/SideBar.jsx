import css from "./SideBar.module.css";
import { BloodTypeProduct } from "../bloodTypeProduct/bloodTypeProduct";
import { useProduct } from "../../hook/productHook";
import { useBloodDiet } from "../../hook/bloodDietHook";
import { useAuth } from "../../hook/authHook";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import cn from 'classnames'
import { useSelector } from "react-redux";


export default function SideBar() {
  const { items, isLoader, isLodding } = useProduct();
  const {date, products} = useBloodDiet();
  const theme = useSelector((state) => state.theme)
  let side_box = cn(css.box, theme === 'dark' ? css.dark : css.light)
  let btnSide = cn(css.buttonHeader, theme === 'dark' ? css.dark : css.light)

  const { user, dailyCalories } = useAuth();
  const dispatch = useDispatch()

  const onClick = () =>{
    dispatch(authOperations.logOut())
  }


let total
let consumed
let normal

if(products.length > 0){
 
   total = products.reduce((res, i) => res + i.sum, 0);
   consumed = Math.round(dailyCalories - total);
   normal = Math.round((consumed / dailyCalories) * 100);
} 

  return (
    <div className={side_box}>
      <div className={css.boxHeader}>
        <p className={css.textHeader}>{user.name}</p>
        <button className={btnSide} type="button" onClick={onClick} >Exit</button>
      </div>
      <div className={css.listBox}>
      <h2 className={css.title}>Summary for {date}</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Left </p>
          <p>{total}kcal</p>
        </li>
        <li className={css.item}>
          <p>Consumed</p>
          <p>{consumed} kcal</p>
        </li>
        <li className={css.item}>
          <p>Daily rate</p>
          <p>{dailyCalories} kcal</p>
        </li>
        <li className={css.item}>
          <p>n% of normal</p>
          <p>{normal} %</p>
        </li>
      </ul>
      </div>
      <div className={css.box_listItem}>
      <h3 className={css.title}>Food not recommended</h3>
      {isLodding ? (
        <p className={css.text}>Your diet will be displayed here</p>
      ) : (
        <div className={css.box_list}>
          <ol className={css.listNumber}>
            {isLoader ? (
              <p className={css.text}>Your diet will be displayed here</p>
            ) : (
              items.map((item) => (
                <li key={item._id} className={css.text}>
                  <BloodTypeProduct item={item} />
                </li>
              ))
            )}
          </ol>
        </div>
      )}
    </div>
    </div>
  );
}
