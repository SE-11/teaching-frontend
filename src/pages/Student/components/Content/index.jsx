import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CourseBox from '../CourseBox';
import Profile from '../Profile';
import CourseDetail from '../CourseDetail'
import TeacherProfile from '../TeacherProfile';

export default function Content(props) {
    const studentId = props.id;
    return (
        <Switch>
            <Route path="/student/" exact render={() => <CourseBox id={studentId} />} />
            <Route path="/student/profile/:id" component={Profile}  />
            <Route path="/student/course/:id" component={CourseDetail} />
            <Route path="/student/teacher/profile/:id" component={TeacherProfile} />
        </Switch>
    )
}
