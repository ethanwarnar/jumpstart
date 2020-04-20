import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import '../style/main.scss'

export default class Calendar extends React.Component {
//     render() {
//         return (
//             <div style={{ height: "800px" }}>
//                 <iframe
//                     src="https://calendly.com/ethanwarnar/"
//                     width="100%"
//                     height="100%"
//                     frameborder="0"
//                 ></iframe>
//             </div>
//         );
//     };
// }

    calendarComponentRef = React.createRef()
    state = {
        calendarWeekends: true,
        calendarEvents: [
            { title: 'event 1', date: '2020-04-01' },
            { title: 'event 2', date: '2020-04-02' },
            { title: 'event 1', date: '2020-04-25' },
            { title: 'event 2', date: '2020-04-22' },
            { title: 'event 1', date: '2020-04-13' },
            { title: 'event 2', date: '2020-04-15' },
            { title: 'event 1', date: '2020-04-07' },
            { title: 'event 2', date: '2020-04-04' },
        ]
    }

    render() {
        return (
            <div className='demo-app'>
                <div className='demo-app-top'>
                    {/* <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>&nbsp;
                              (also, click a date/time to add an event) */}
                </div>
                <div className='demo-app-calendar'>
                    <FullCalendar
                        style={{ fontSize: "20px", textAlign: "center" }}
                        defaultView="dayGridMonth"
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        ref={this.calendarComponentRef}
                        weekends={this.state.calendarWeekends}
                        events={this.state.calendarEvents}
                    // dateClick={this.handleDateClick}
                    />
                </div>
            </div>
        )
    }

    // toggleWeekends = () => {
    //     this.setState({ // update a property
    //         calendarWeekends: !this.state.calendarWeekends
    //     })
    // }

    // gotoPast = () => {
    //     let calendarApi = this.calendarComponentRef.current.getApi()
    //     calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    // }

    // handleDateClick = (arg) => {
    //     if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //         this.setState({  // add new event data
    //             calendarEvents: this.state.calendarEvents.concat({ // creates a new array
    //                 title: 'New Event',
    //                 start: arg.date,
    //                 allDay: arg.allDay
    //             })
    //         })
        }
    

