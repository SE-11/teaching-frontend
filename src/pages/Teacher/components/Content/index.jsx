import React from 'react'
import { Route, Switch } from "react-router-dom";
export default function Content(props) {
    const teacherId = props.id;
    return (
        <div>
            <Switch>
                <Route path="/teacher/"  />
            </Switch>
        </div>
    )
}
