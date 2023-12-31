import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import '../component-css/Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (

    <header>
      <div className='logbar'>
        <div onClick={() => { navigate('/login') }} style={{cursor: 'pointer'}}>로그인</div>
        <p>&nbsp;|&nbsp;</p>
        <div onClick={() => { navigate('/signup') }} style={{cursor: 'pointer'}}>회원가입</div>
        <p>&nbsp;|&nbsp;</p>
        <div onClick={() => { navigate('/cart') }} style={{cursor: 'pointer'}}>장바구니</div>
      </div>
      <div className='search'>
        <input type='text' name='search' />
        <span>&nbsp;&nbsp;</span>
        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <div className='logo' onClick={() => {navigate('/')}} style={{cursor: 'pointer'}}>
        <img src={process.env.PUBLIC_URL + '/img/logo3.png'} />
      </div>
    </header>

  );
}

export default Header;