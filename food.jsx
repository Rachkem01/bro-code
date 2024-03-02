function Food(){

    const food1 ="orange"

    const food2 ="Banana"
return(
    <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
)
}
export default Food
// Note: if you are creating Javascript component inside return function, you need {}, if not you dont need