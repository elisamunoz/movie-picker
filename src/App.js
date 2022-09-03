import { useState } from "react";
import { QUESTIONS } from "./_mockData";
import PageLayout from "ui/layout";
import MovieQuestions from "ui/components/movieQuestions";
import Logo from "ui/components/logo";
import Modal from "ui/components/modal";
import Button from "ui/components/button";
import Pagination from "ui/components/pagination";
import "assets/styles/reset.scss";
import styles from "./App.module.scss";
import { getMoviesbyId, filterMoviesbyCategory } from "functions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const totalQuestions = QUESTIONS.length;

  const handleMovieCardClick = movie => {
    setAnswer([...answer, movie]);
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleModalButtonClick = (answer = []) => {
    const imdbId = answer.pop().imdbId;
    return (window.location.href = `https://www.imdb.com/title/${imdbId}/`);
  };

  return (
    <PageLayout>
      <Logo />
      <Pagination
        currentQuestion={currentQuestionIndex}
        totalQuestions={totalQuestions}
        isVisible={!showModal}
      />

      {QUESTIONS.filter(
        (question, index) => index === currentQuestionIndex
      ).map(question => {
        const title = question.text;
        const prevAnswerCategory = answer[answer.length - 1]?.category;
        const movies = getMoviesbyId(question.options);
        const filteredMovies =
          // Do not filter on first Question
          currentQuestionIndex === 0
            ? movies
            : filterMoviesbyCategory(movies, prevAnswerCategory);

        return (
          <MovieQuestions
            key={question.id}
            title={title}
            movies={filteredMovies}
            onClick={movie => handleMovieCardClick(movie)}
            isVisible={!showModal}
          />
        );
      })}

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
          onClick={() => handleModalButtonClick(answer)}
        />
      </Modal>
    </PageLayout>
  );
};

export default App;
