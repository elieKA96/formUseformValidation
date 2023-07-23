
import {useForm} from "react-hook-form";

function App() {

  const {
    handleSubmit, 
    register,
    getValues,
    watch,
    formState : {errors}
  } = useForm({
    defaultValues: {
      name: ""
    },
    mode:"onSubmit" //onChange, ... par defaut: onSubmit
  });
  
  //watch("name");

  function submit(value){
    console.log(value);
  }

  console.log(getValues());
  //console.log(formState) //{error, isDirty, isSuccesfully ...}
  console.log(errors)

  return (
    <div className="d-flex flex-row justify-content-center align-items-center"
    style={{background : "#fefefe", height:"100vh", width:"100%"}}
    >
     <form onClick={handleSubmit(submit)}>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="name">
          Nom
        </label>
        <input {...register("name", {
          //disabled:true
          minLength:{
            value:2,
            message:'Trop court'
          },
          required:{
            value:true,
            message:'le champ est obligatoire'
          },
          validate(value){
            if(value === "Jean"){
              return true;
            } else{
              return "Mauvais prénom";
            }
          }
        })} type="text" id="name" />

       {/** {errors?.name && <p>Il y a une erreur</p>} */} 
       {errors?.name && <p>{errors?.name.message}</p>}
      </div>
{/**age */}
      <div className="d-flex flex-column mb-20">
        <label htmlFor="Age">
          Age
        </label>
        <input {...register("age", {
          valueAsNumber: true,

        })} type="number" id="age" />

       
       {errors?.age && <p>{errors?.age.message}</p>}
      </div>

      <button className="btn btn-primary">Save</button>
     </form>
    </div>
  );
}

export default App;


// deps : pour mettre les dependance

// nous avons ajoute formState

/**
 * mode : all, onBlur, onChange,onSubmit,onTouched
 */