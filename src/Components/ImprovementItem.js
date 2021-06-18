import '../css/improvement-item.css';

const ImprovementItem = (props) => {

/*
Data Management Scheme

   Intent
    - Reduce number of component operations
    - Remove data handling from view rendering

   An ITEM will have all necessary attributes needed to determine appearence when it arrives from the database.
   A separate class will parse the data, and return an object or array of the item's data.
   A method in the calling class for this component will asynchronously retrieve the data, and update the state component when it succeeds.
   The props will then be passed INDIVIDUALLY to this component. This eliminates the need to re-write any of this class once UI meets our standard,
   even if the database or passed data changes. It will all be manupulated prior to here.
*/

    return (

        <div className={props.divState}>
            <div id={props.id} className="circle"></div>
            <h4>{props.itemName}</h4>
        </div>

    )
}

export default ImprovementItem;