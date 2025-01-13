import { useRouter } from "next/router";
import data from "../../data/portfolio.json";
import Link from "next/link"; 
import Cursor from "../../components/Cursor"; 

export default function ProjectDetails() {
    // Usamos el hook useRouter de Next.js para obtener el parámetro dinámico id de la URL.
    const router = useRouter(); 
    const { id } = router.query; 
    
    // convertir el id a numero pk en JSON los ids son cadenas
    const currentId = parseInt(id);

    // buscar proyecto por su id
    const project = data.projects.find((proj) => proj.id === id); 

    // calcular proyecto anterior y siguiente
    const prevProject = data.projects.find((proj) => proj.id === (currentId - 1).toString());
    const nextProject = data.projects.find((proj) => proj.id === (currentId + 1).toString()); 
    // si el proyecto no se encuentra mostrar mensaje de error o redireccionar
    if (!project) {
        return <p>Project not found</p>; 
    }

    return (
        <div className={`relative ${data.showCursor && "cursor-none"}`}>
            {data.showCursor && <Cursor />}
            <div className="container mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-5">{project.title}</h1>
                <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full rounded-lg mb-5"
                />
                <p className="text-xl">{project.description}</p>
                
                {/* Botones de navegación */}
                <div className="flex justify-between items-center mt-10">
                    {/* Boton del proyecto anterior */}
                    {prevProject? (
                        <Link href={`/projects/${prevProject.id}`}>
                            <a className="text-lg font-bold text-gray-700 hover:text-gray-900">
                            ← PREVIOUS
                            </a>
                        </Link>
                    ) : (
                        <div></div> // espacio vacio si no hay proyecto anterior
                    )}

                    {/* Icono central */}
                    <Link href="/">
                        <div className="text-2xl font-medium text-gray-700 hover:font-bold hover:underline">≡</div>
                    </Link>

                    {/* Boton del proyecto siguiente */}
                    {nextProject ? (
                        <Link href={`/projects/${nextProject.id}`}>
                            <a className="text-lg font-bold text-gray-700 hover:text-gray-900">
                                NEXT →
                            </a>
                        </Link>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}