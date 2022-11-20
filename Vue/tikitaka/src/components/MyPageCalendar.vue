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
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        // height: "500px",
        expandRows: true,
        events: [
          {
            title: "event1",
            date: "2022-11-20",
            description: "This is a cool event",
            url: "https://gradium.co.kr/wp-content/uploads/coffee-3-1.jpg",
            imageUrl: "https://gradium.co.kr/wp-content/uploads/coffee-3-1.jpg",
          },
          { title: "Long Event", start: "2022-11-07", end: "2022-11-10" },
        ],
      },
    }
  },
  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr)
    },
    eventRender: function (event, eventElement) {
      console.log(event)
      if (event.imageurl) {
        eventElement
          .find("div.fc-content")
          .prepend("<img src='" + event.imageurl + "' width='12' height='12'>")
      }
    },
  },
}
</script>

<style></style>
