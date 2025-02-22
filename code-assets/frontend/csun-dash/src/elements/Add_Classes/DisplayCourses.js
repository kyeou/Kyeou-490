import { useState, useEffect } from 'react'
import AllCoursesAccordian from './AllCoursesAccordian';

function DisplayCourses({subject, addedClassHandler, addIcon }) {
    const [classList, setClassList] = useState([])
    const [scheduleList, setScheduleList] = useState({})
    const [fullSchedule, setFullSchedule] = useState([])

    function fetchAllData() {

        fetch(`${process.env.REACT_APP_API_URL}/${subject}/classes`)
            .then(response => response.json())
            .then(classesData => {
                let allClassList = []

                classesData.map(course => {
                    allClassList.push(course)
                })


                setClassList(allClassList)
            })

        fetch(`${process.env.REACT_APP_API_URL}/${subject}/schedule`)
            .then(response => response.json())
            .then(scheduleData => {
                let scheduleDict = {}
                let fullScheduleList = []

                scheduleData.map(course => {
                    scheduleDict[`${course.catalog_number}`] = course.catalog_number
                    fullScheduleList.push(course)
                })

                setScheduleList(scheduleDict)
                setFullSchedule(fullScheduleList)
            })
    }

    useEffect(() => {
        fetchAllData()
    }, [subject])


    return (
        <div>
            <AllCoursesAccordian addIcon={addIcon} addedClassHandler={addedClassHandler} classes={classList} scheduleExistDict={scheduleList} schedule={fullSchedule}></AllCoursesAccordian>
        </div>
    )
}

export default DisplayCourses