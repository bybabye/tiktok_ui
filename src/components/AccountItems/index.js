import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItems.module.scss';

const cx = classNames.bind(style);
function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src={
          'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/279379290_2178247222350953_1841794957416478717_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=huKVrlag1ncAX8PHYZD&tn=TJndOn9m5Oxn4GGB&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8jEOoJUn0QysnlzPvGIrZpAj0GTv-32dpxnu2vG0uiew&oe=6300DE92'
        }
        alt="hoa"
      ></img>
      <div className={cx('info')}>
        <p className={cx('name')}>
          NGUYEN VAN A<FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <span className={cx('username')}>NGUYENVANA</span>
      </div>
    </div>
  );
}

export default AccountItems;
