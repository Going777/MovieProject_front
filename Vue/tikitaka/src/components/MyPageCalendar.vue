<template>
  <div style="margin-right: 20px">
    <FullCalendar :options="calendarOptions" />
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
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "title",
          right: "prev next today",
          center: "",
        },
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        // select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        eventContent: function (arg) {
          let arrayOfDomNodes = []
          // title event
          let titleEvent = document.createElement("div")
          if (arg.event._def.title) {
            titleEvent.innerHTML = arg.event._def.title
            titleEvent.classList = "fc-event-title fc-sticky"
          }

          // image event
          let imgEventWrap = document.createElement("div")
          if (arg.event.extendedProps.image_url) {
            let imgEvent =
              '<img src="' +
              arg.event.extendedProps.image_url +
              '"  style="width:100%">'
            // imgEventWrap.style.width = "150px"
            imgEventWrap.style.width = "100%"
            imgEventWrap.classList = "fc-event-img"
            imgEventWrap.innerHTML = imgEvent
          }

          arrayOfDomNodes = [titleEvent, imgEventWrap]

          return { domNodes: arrayOfDomNodes }
        },
        // weekends: true,
        // dateClick: this.handleDateClick,
        // height: "1000px",
        // expandRows: true,
        events: [
          {
            date: "2022-11-20",
            // description: "This is a cool event",
            image_url:
              "https://image.tmdb.org/t/p/original/f0oDtB2JCMlPKjphBJ90GcfVzWg.jpg",
          },
          {
            image_url:
              "https://image.tmdb.org/t/p/original/f0oDtB2JCMlPKjphBJ90GcfVzWg.jpg",
            start: "2022-11-07",
            // end: "2022-11-10",
          },
          {
            image_url:
              "https://image.tmdb.org/t/p/original/f0oDtB2JCMlPKjphBJ90GcfVzWg.jpg",
            start: "2022-11-01",
          },
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
      let calendarApi = selectInfo.view.calendar
      console.log(calendarApi)
      calendarApi.unselect()

      if (title) {
        calendarApi.addEvent({
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
        })
      }
    },
    // 일정 삭제
    handleEventClick(clickInfo) {
      console.log(clickInfo)
      // if (confirm(`Are you sure you want to delete ${clickInfo.event.title}`)) {
      //   clickInfo.event.remove()
      // }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
  },
  created() {
    this.event
  },
}
</script>

<style></style>
