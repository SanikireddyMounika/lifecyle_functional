import {useEffect,useState}  from "react"
function App() {
  let [data,setData]=useState(null)
  
   useEffect(()=>{
    console.log("component mount phase")
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
      console.log('Component will unmount!');
    };
      }, []); 
      
      
      useEffect(()=>{
        console.log("update state")
        console.log("data",data)
      },[data])
  return (
    <>
    <h1>Data from Api</h1>
      {data?<div>{JSON.stringify(data)}</div>:<p><p>loading..</p></p>}
    </>
  );
}

export default App;
