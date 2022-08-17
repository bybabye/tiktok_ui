import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
//
import style from './Header.module.scss';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import AccountItems from '~/components/AccountItems';
const cx = classNames.bind(style);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok"></img>
        <Tippy
          interactive={true}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItems></AccountItems>
                <AccountItems></AccountItems>
                <AccountItems></AccountItems>
                <AccountItems></AccountItems>
              </PopperWrapper>
            </div>
          )}
          visible={searchResult.length > 0}
        >
          <div className={cx('search')}>
            <input placeholder="search accounts and video" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
