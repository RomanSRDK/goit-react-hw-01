import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}

export default FriendListItem;
