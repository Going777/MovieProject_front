<template>
  <div style="margin-right: 20px">
    <FullCalendar :options="calendarOptions" />

    <!-- 캘린더 포스터 등록 모달 -->
    <b-modal hide-footer hide-header-close size="medi" id="createCalendarModal">
      <template #modal-header>
        <h2 class="logoText">CUSTOMIZE YOUR OWN CALENDAR</h2>
      </template>

      <feed-create-modal
        :isCalendarRequest="isCalendarRequest"
        @select-image-for-calendar="selectImageForCalendar"
      />

      <v-btn
        class="mainText"
        dark
        height="45"
        @click="addCalendar"
        style="float: right; margin-top: 20px"
        >POST</v-btn
      >
    </b-modal>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import FeedCreateModal from "./FeedCreateModal.vue"

export default {
  name: "MyPageCalendar",
  components: {
    FullCalendar,
    FeedCreateModal,
  },
  data() {
    return {
      isCalendarRequest: true,
      movie_title: null,
      select_img: null,
      selectedInfo: null,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        // selectMirror: true,
        dayMaxEvents: true,
        headerToolbar: {
          left: "title",
          right: "prev next today",
          center: "",
        },
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        eventContent: this.eventContent,
        eventColor: "black",
        // weekends: true,
        // dateClick: his.handleDateSelect,
        height: "900px",
        // expandRows: true,
        events: [
          {
            title: "스타워즈4: 제국의 역사",
            start: "2022-11-20",
            image_url:
              "https://image.tmdb.org/t/p/original/f0oDtB2JCMlPKjphBJ90GcfVzWg.jpg",
          },
          {
            title: "블랙팬서 와칸다 포에버",
            image_url:
              "https://image.tmdb.org/t/p/original/f0oDtB2JCMlPKjphBJ90GcfVzWg.jpg",
            start: "2022-11-07",
          },
          {
            title: "help",
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

    handleDateSelect(selectInfo) {
      this.$bvModal.show("createCalendarModal")
      this.selectedInfo = selectInfo
    },
    // 선택된 이미지 변수에 저장
    selectImageForCalendar(payload) {
      this.select_img = payload.img_url
      this.movie_title = payload.title
    },
    // 일정 생성
    addCalendar() {
      console.log(this.selectedInfo)
      let image_url = this.select_img
      let calendarApi = this.selectedInfo.view.calendar
      calendarApi.unselect()
      if (image_url) {
        calendarApi.addEvent({
          title: this.movie_title,
          image_url: image_url,
          start: this.selectedInfo.startStr,
        })
      }
      this.$bvModal.hide("createCalendarModal")
    },

    // 일정 삭제
    handleEventClick(clickInfo) {
      // console.log(clickInfo)
      if (confirm(`Are you sure you want to delete ${clickInfo.event.title}`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
    // 일정 출력형식 (이미지 출력)
    eventContent(arg) {
      let arrayOfDomNodes = []
      let titleEvent = document.createElement("div")
      if (arg.event._def.title) {
        titleEvent.innerHTML = arg.event._def.title
        titleEvent.style.backgroundColor = "white"
        titleEvent.style.color = "black"
        // titleEvent.style.wordBreak = "break-all"
        // titleEvent.style.height = "79px"
        // titleEvent.style.width = "100%"
        // titleEvent.classList = "fc-event-title fc-sticky"
      }
      // image event
      let imgEventWrap = document.createElement("div")
      if (arg.event.extendedProps.image_url) {
        let imgEvent =
          '<img src="' +
          arg.event.extendedProps.image_url +
          '"  style="width:100%">'
        imgEventWrap.style.width = "100%"
        imgEventWrap.classList = "fc-event-img"
        imgEventWrap.innerHTML = imgEvent
      }
      arrayOfDomNodes = [imgEventWrap, titleEvent]

      return { domNodes: arrayOfDomNodes }
    },
  },
}
</script>

<style></style>
