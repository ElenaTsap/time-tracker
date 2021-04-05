const Projects = ({ addProject, setNewProject, currentUserProjects}) => {
    return (
        <section className = 'projects-container'>
            <form onSubmit = {addProject}>
                <input type="text" onChange={(e)=>setNewProject(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            {currentUserProjects}
        </section>
    )
}

export default Projects

