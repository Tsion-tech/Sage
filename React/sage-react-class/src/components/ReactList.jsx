function ReactList(){
    const cars=["BMW","TOYOTA","HUNDA","Bugatti"]
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