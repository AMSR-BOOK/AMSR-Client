import React, { useState } from 'react';
import { VscHeart } from 'react-icons/vsc';
import { VscHeartFilled } from 'react-icons/vsc';
import styles from './LikeButton.module.scss';

export default function LikeButton({ id }) {
  const [like, setLike] = useState(false);
  const handleChange = () => {
    setLike(!like);
    // TO DO : 추천 api
  };
  return (
    <button onClick={handleChange} className={styles.btn}>
      {like ? (
        <VscHeartFilled className={styles.fill} />
      ) : (
        <VscHeart className={styles.blank} />
      )}
    </button>
  );
}
