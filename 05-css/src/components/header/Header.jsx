import head from './Header.module.css'

const Header = () => {
  return (
    <div className={head.headr}>
      <h3>Hello and welcome</h3>
      <button className={head.btn}>Login</button>
    </div>
  )
}

export default Header
