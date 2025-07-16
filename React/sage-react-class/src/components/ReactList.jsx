function ReactList(){
    const cars=["BYD","BMW","TOYOTA","HUNDA","BYD"]
return(
    <>
    <ul>
        {cars.map((cars,index)=>(
            <li key={index}>{cars}</li>
        ))}
    </ul>
    </>
);
}
export default ReactList;