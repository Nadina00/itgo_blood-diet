import css from "./bloodType.module.css"

export const BloodTypeProduct = ({item}) =>{

return (
    <h2 className={css.text}>{item.title.ua}</h2>
)
}