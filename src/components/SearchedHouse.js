import { useLocation } from "react-router-dom";
import House from "./House";




    const SearchedHouse = (props) => {






    let loca = useLocation();
    console.log(loca.state.id);
    let searchedHouse = props.housesData.find( (elem) => elem._id == loca.state._id );
    console.log(searchedHouse);


    if(!props.housesData) {
        return "...loading data";
    }




    return (
        <>
        <h1> Searched House</h1>
        <House houseInfo = {searchedHouse}/>
        </>
       
     );
}
 
export default SearchedHouse;
