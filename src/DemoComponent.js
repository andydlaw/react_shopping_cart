

function DemoComponent(props){
  return(
<>
<h1> The users age is: {props.age}</h1>
<button onClick={(evt) => props.setAge(props.age+1)}>Add 1 year</button>
</>
  );
}
export default DemoComponent;