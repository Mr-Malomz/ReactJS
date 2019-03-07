function ListItem(props) {
        return (
               <li className="list-group-item mr-5">{props.items}</li>
          );
};

function ShoppingTitle(props){
    return(
        <div>
            <h1 className="text-center border border-primary rounded m-4">{props.title}</h1>
            <h2 className="text-center">{props.descrip} {props.tot}</h2>
        </div>
    );
};

function ShoppingList(props){
    return(
        <div>
            <h3 className="text-center">{props.title2}</h3>
            <ol>
                <ListItem  items = {props.items[0]}/>
                <ListItem items = {props.items[1]}/>
                <ListItem items = {props.items[2]}/>
            </ol>
        </div>
    );
};

function ShoppingApp(props){
    return(
        <div>
            <ShoppingTitle title = 'My Shopping List' 
                descrip = 'Total Number of Items:' tot = {9} />
            <ShoppingList title2 = 'Food'
                items = {['Apple', 'Bread', 'Cheese']}/>
            <ShoppingList title2 = 'Clothes'
                items = {['Shirt', 'Pants', 'Hat']}/>
            <ShoppingList title2 = 'Supplies'
                items = {['Pen', 'Paper', 'Glue']}/>
        </div>
    );
};

ReactDOM.render(<ShoppingApp />, document.getElementById('root'));
