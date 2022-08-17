import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  primary = false,
  small = false,
  large = false,
  outline = false,
  text = false,
  rouded = false,
  disabled,
  href,
  onClick,
  children,
  ...passProps
}) {
  let Comp = 'button';

  const _props = {
    onClick,
    ...passProps,
  };
  if (to) {
    _props.to = to;
    Comp = 'link';
  } else if (href) {
    _props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', { primary, outline, small, large, text, disabled, rouded });
  return (
    <Comp className={classes} {..._props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
