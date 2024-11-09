import FormTask from "@/app/components/formulario";
import ListaTareas from "@/app/components/lista-tareas";

function HomePage (){
  return (
      <div className="container mx-auto">
        <h1 className="text-white font-bold">Task App</h1>
          <div className="flex gap-x-10">
              <FormTask/>
              <ListaTareas/>
          </div>
      </div>
  )
}
export default HomePage