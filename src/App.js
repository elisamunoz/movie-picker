import { useState } from "react";
import { QUESTIONS, MOVIES } from "./_mockData";
import PageLayout from "ui/layout";
import MovieCardList from "ui/components/movieCardList";
import MovieCard from "ui/components/movieCard";
import Logo from "ui/components/logo";
import Modal from "ui/components/modal";
import Button from "ui/components/button";
import Pagination from "ui/components/pagination";
import "assets/styles/reset.scss";
import styles from "./App.module.scss";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const totalQuestions = QUESTIONS.length;

  const handleMovieCardClick = id => {
    setAnswer([...answer, id]);
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleModalButtonClick = imdbId =>
    (window.location.href = `https://www.imdb.com/title/${imdbId}/`);

  return (
    <PageLayout>
      <Logo />
      <Pagination
        currentQuestion={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <h3 className={styles.question}>
        {QUESTIONS[currentQuestionIndex].text}
      </h3>
      <MovieCardList>
        {MOVIES.map(movie => (
          <MovieCard
            key={movie.id}
            onClick={() => handleMovieCardClick(movie.id)}
            src={movie.imageUrl}
            alt={movie.title}
          />
        ))}
      </MovieCardList>
      <Modal className={styles.modal} isVisible={showModal}>
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
          onClick={() => handleModalButtonClick("tt0068646")}
        />
      </Modal>
    </PageLayout>
  );
};

export default App;
