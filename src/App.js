import "assets/styles/reset.scss";
import PageLayout from "ui/layout";
import MovieCardList from "ui/components/movieCardList";
import MovieCard from "ui/components/movieCard";
import Modal from "ui/components/modal";
import Button from "ui/components/button";
import Pagination from "ui/components/pagination";
import { QUESTIONS, MOVIES } from "./_mockData";
import { useState } from "react";
import styles from "./App.module.scss";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const totalQuestions = QUESTIONS.length;
  console.log(totalQuestions);
  return (
    <PageLayout>
      <Modal className={styles.modal}>
        <h3 className={styles.title}>watch new movies for free!</h3>
        <h5 className={styles.text}>
          Watch any movies online for free without ads!
        </h5>
        <h5 className={styles.text}>
          Have fun watching your favourite movies!
        </h5>
        <Button
          className={styles.button}
          text="WATCH HERE!"
          onClick={() => console.log("you clicked me")}
        />
      </Modal>
      <Pagination currentQuestion={1} totalQuestions={2} />
      <h3 className={styles.question}>Which one do you like the most?</h3>
      <MovieCardList>
        <MovieCard
          src="https://media.revistagq.com/photos/5dbab1e1d19dec0008a41e77/1:1/w_320,c_limit/terminator%20portada.jpg"
          alt="Terminator image"
        />
        <MovieCard
          src="https://media.revistagq.com/photos/5dbab1e1d19dec0008a41e77/1:1/w_320,c_limit/terminator%20portada.jpg"
          alt="Terminator image"
        />
        <MovieCard
          src="https://media.revistagq.com/photos/5dbab1e1d19dec0008a41e77/1:1/w_320,c_limit/terminator%20portada.jpg"
          alt="Terminator image"
        />
        <MovieCard src={MOVIES[0].imageUrl} alt="Terminator image" />
      </MovieCardList>
    </PageLayout>
  );
};

export default App;
