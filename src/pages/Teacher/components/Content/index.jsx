import React from 'react'
import { Route, Switch } from "react-router-dom";
import CourseBox from '../CourseBox';
import Profile from '../Profile';
export default function Content(props) {
    const teacherId = props.id;
    return (
        <Switch>
            <Route path="/teacher/" exact render={() => <CourseBox id={teacherId} />} />
            <Route path="/teacher/profile/:id" component={Profile}  />
        </Switch>
    )
}
