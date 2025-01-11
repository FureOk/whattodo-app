export default function Footer({completedTasks, totalTasks}){
    return (
        <div className="completedTasks">
            <h4>What You've Done: {completedTasks} out of {totalTasks}</h4>
        </div>
    )
}