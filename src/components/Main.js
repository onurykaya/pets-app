import React from 'react';
import {Route, Switch} from "react-router";
import {FavoritesPage, HomePage, DetailPage} from "../pages";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/favoriler" component={FavoritesPage}/>
                <Route exact path="/detailpage" component={DetailPage} />
            </Switch>
        </div>
    );
}

export default Main;
