import React ,{useReducer,useState ,useRef} from 'react'; //useReducer para usar reducer
import * as mobilnet from '@tensorflow-models/mobilenet'
import * as tf from'@tensorflow/tfjs';
import './App.css';
//Objeto estate machine, escibo reglas para definir cada transicion
  //en el objeto on declaro el potencial evento a seguir
    //Puedo agregar propiedades a cada estado =>initial:{ on: { next:'loadingModel'}},
const stateMachine={
  initial:'initial',
  states:{
    initial:{ on: { next:'loadingModel'}},
    loadingModel:{ on:{next:'awaitingUpload'}},
    awaitingUpload:{ on:{next:'ready'}},
    ready:{ on:{ next:'classifying'},showImage:true},
    classifying :{ on:{ next:'complete'}},
    complete:{ on:{next:'awaitingUpload'},showImage:true, showResult:true}
  }
  
}
//Agregar la funcionalidad que evento se ejecuta(redux)
//Reducer toma el estado actual y retorna el estado basado en que evento se encuentra
//Carga el siguiente evento
const reducer = (currentstate, event) => stateMachine.states[currentstate].on[event] || stateMachine.initial;

const formatResult=({className,probability})=>{
  return(
    <li key={className}>
    {className + ':' + (probability*100).toFixed(2)+ '%'}
  </li>
  );
  
};

const App = () => {
  //Function App(){
  //dispatch permite disparar el evento definico 
  const [state,dispatch]=useReducer(reducer,stateMachine.initial); 
  const [model,setModel]=useState(null);
  const [imageUrl,setImageUrl]=useState(null);
  const [results, setResults]=useState([]);
  
  //imagen que se carga al modelo
  const imageRef=useRef();
  const inputRef=useRef();

  const next=()=>dispatch('next');
  //esta funcion es asincrona por definicon
  const loadModel= async ()=>{
    //Pasar manualmente de estado cuando termine de cargar el modelo
    next();
    const mobilenetModel=await mobilnet.load();
    setModel(mobilenetModel);
    next();
  }
 
  const handleUpload =event =>{
    const {files}=event.target;
    if(files.length>0){
      //Tomar la primea foto
      const url= URL.createObjectURL(files[0]);
      setImageUrl(url);
      //
      next();
    }
  }

  //clasificar
  const identify=async()=>{
    next();
    const results=await model.classify(imageRef.current);
    console.log({results})
    setResults(results);
    next();
  }
  const reset= ()=>{
    setResults([]);
    setImageUrl(null);
    next();

  }

  //Especifica que se requiere ser mostrado al presionar el boton en render
  const buttonProps={
    
    initial:{ text:'Load Model', action: loadModel},
    loadingModel:{ text:'Loading Model ...', action:()=>{}},
    awaitingUpload:{ text:'Upload Photo', action:()=>inputRef.current.click()},
    ready:{  text:'Identify', action: identify },
    classifying :{ text:'Identifying', action:()=>{}},
    complete:{ text:'Reset', action: reset}
  }

  //false as default hasta que cargue algo no se muestra <img>
  const {showImage=false, showResult=false}=stateMachine.states[state];


  return (
    <div>
      {showImage&&<img  src={imageUrl} alt="upload-preview" ref={imageRef} ></img>}
      <input type='file' accept="image/*" capture="camara" ref={inputRef} onChange={handleUpload} ></input>
      {showResult&&
        <ul>
        {
        results.map(formatResult)
        }
      </ul>}
      <button onClick={buttonProps[state].action}>{buttonProps[state].text}</button>
    {/*Este boton hace el cambio de estados con la funcion  dispatch('next')
    <div className="App">
      <button
      onClick={()=>dispatch('next')}
      > {state}</button>
  </div>*/}
  </div>
  );
}

export default App;
