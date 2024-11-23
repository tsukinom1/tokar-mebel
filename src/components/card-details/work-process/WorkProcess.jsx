import workProcesses from "./WorkProcesses.js";
import './WorkProcess.css'
const WorkProcess = () => {

    return (
        <div className="work-process p-3">
            <h2 className="work-process-title fs-24 my-3">Как мы работаем</h2>
            {workProcesses.map((process) => (
                <div key={process.id} className="row mt-3 align-items-start">
                    <div className="work-process-title col-lg-3 col-md-12 col-sm-12">
                        <p className="bordered-box w-75 bg-orange p-3 text-white fw-bold">Процесс {process.id}</p>
                        <p className="fw-bold my-4 ps-3">{process.title}</p>
                    </div>
                    {process.processes.map((innerProcess, i) => (
                        <div key={i} className="work-process-inner col-lg-3 col-md-4 col-sm-12">
                            <img src={innerProcess.src} alt="image"/>
                            <p className="mt-3 s-text">{innerProcess.text}</p>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
};

export default WorkProcess;