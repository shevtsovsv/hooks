function Intro() {
    let count = 0
    const onClick = () => {
        count++
        console.log(count);
        

    }
    return (
        <div>
            <div> Hi  </div>
            <button onClick={onClick}>Кнопка {count}</button>
        </div>      
)
        
}

export default Intro