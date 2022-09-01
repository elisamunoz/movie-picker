// import Modal from "ui/components/modal";
// import Pagination from "ui/components/pagination";
import MovieCard from "ui/components/movieCard";
import styles from "./Body.module.scss";

const Body = () => (
  <div className={styles.body}>
    <div className={styles.content}>
      {/* <Pagination currentQuestion={2} totalQuestions={3} />
       */}
      {/* <Modal /> */}
      <MovieCard
        src="https://media.revistagq.com/photos/5dbab1e1d19dec0008a41e77/1:1/w_320,c_limit/terminator%20portada.jpg"
        alt="Terminator image"
      />
    </div>
  </div>
);

export default Body;
