import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
<Header />
<Main />
<Form />
<Footer />
    </div>
  );
}

export default App;
