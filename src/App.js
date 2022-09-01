import "assets/styles/reset.scss";
import PageLayout from "ui/layout";
import MovieCardList from "ui/components/movieCardList";
import MovieCard from "ui/components/movieCard";
import styles from "./App.module.scss";

const App = () => (
  <PageLayout>
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
    </MovieCardList>
  </PageLayout>
);

export default App;
