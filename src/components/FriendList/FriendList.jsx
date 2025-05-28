import styles from "./FriendList.module.css";

function FriendList(props) {
  return (
    <ul className={styles.friendList}>
      {props.friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={styles.friendCard}>
          <img src={avatar} alt="Avatar" width="48" />
          <p className={styles.name}>{name}</p>
          <p
            className={`${styles.status} ${
              isOnline ? styles.online : styles.offline
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
