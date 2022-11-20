<template>
  <div style="margin-right: 20px">
    <FullCalendar :options="calendarOptions">
      <template v-slot:eventContent="arg">
        <b>{{ arg.event.title }}</b>
        <b>{{ hello }}</b>
      </template>
    </FullCalendar>
    <!-- <FullCalendar :options="calendarOptions" /> -->
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"

export default {
  name: "MyPageCalendar",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "title",
          right: "today prev next",
          center: "",
        },
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        eventContent: this.eventRender,
        // weekends: true,
        // dateClick: this.handleDateClick,
        // height: "500px",
        // expandRows: true,
        events: [
          {
            title: "https://gradium.co.kr/wp-content/uploads/coffee-3-1.jpg",
            date: "2022-11-20",
            // description: "This is a cool event",
            imageurl: "https://gradium.co.kr/wp-content/uploads/coffee-3-1.jpg",
          },
          { title: "Long Event", start: "2022-11-07", end: "2022-11-10" },
        ],
      },
    }
  },
  methods: {
    // handleDateClick: function (arg) {
    //   alert("date click! " + arg.dateStr)
    // },
    // 일정 생성
    handleDateSelect(selectInfo) {
      let title = prompt("Please enter a new title")
      let description = prompt("Please enter a new dfsf")
      let calendarApi = selectInfo.view.calendar
      console.log(calendarApi)
      calendarApi.unselect()

      if (title & description) {
        calendarApi.addEvent({
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
        })
      }
    },
    // 일정 삭제
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete ${clickInfo.event.title}`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
    eventRender: function (event, eventElement) {
      console.log(event)
      if (event.imageurl) {
        eventElement
          .find("span.fc-title")
          .prepend("<center><img src='" + event.imageurl + "'><center>")
      }
    },
    // eventRender: function (event, eventElement) {
    //   console.log(event)
    //   if (event.imageurl) {
    //     eventElement
    //       .find("div.fc-content")
    //       .prepend("<img src='" + event.imageurl + "' width='12' height='12'>")
    //   }
    // },
  },
}
</script>

<style></style>
