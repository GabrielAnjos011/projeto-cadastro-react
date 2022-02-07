import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo a Pagina de <span>cadastro</span></h1>
            <p>Comece a gerenciar os seu cadastro</p>
            <LinkButton to="/newproject" text="Criar cadastro"/>
        </section>
    )
}

export default Home;