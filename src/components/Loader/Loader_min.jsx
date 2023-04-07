import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
    return (
      <div className={css.loader}>
    <Oval color="#fc842d" height={35} width={35} />
    </div>
  )};