import ProjetoForm from '../project/ProjectForm';
import style from './NewProject.module.css'
import { useNavigate} from 'react-router-dom'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projects', {message: 'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={style.newproject_container}>
            <h1>Criar cadastro</h1>
            <p>Crie seu cadastro</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;