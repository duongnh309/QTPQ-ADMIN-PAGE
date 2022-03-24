import { nanoid } from 'nanoid';
import React from 'react';
import { Route, Switch } from 'react-router';
import CreateMenuPage from './pages/CreateMenuPage';
import MenuPage from './pages/MenuPage';

MenuManegerFeature.propTypes = {

};

function MenuManegerFeature(props) {
    return (
        <div>
            <Switch>
                <Route path="/admin/menu" key={nanoid()} component={MenuPage} exact></Route>
                <Route path="/admin/menu/create-page" key={nanoid()} component={CreateMenuPage} exact></Route>
            </Switch>
        </div>
    );
}

export default MenuManegerFeature;