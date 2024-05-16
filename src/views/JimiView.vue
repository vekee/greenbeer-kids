<template>
  <v-app>
    <v-main>
      <VideoNavBar />
      <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="800px">
        <v-container>
          <v-data-table
            :headers="videoGridHeaders"
            :items="videoGridItems"
            :items-length="videoGridItems.length"
            :items-per-page="4"
            :sticky="true"
          >
            <template v-slot:body="{ items }">
              <tr v-for="(row, rowIndex) in items" :key="rowIndex">
                <td style="min-width: 120px">
                  {{ convertDate(row._date) }}
                </td>
                <td style="min-width: 200px; white-space: pre-line">
                  {{ row._title }}
                </td>
                <td>
                  <VideoPlayer :videoUrl="row._jimi" />
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import video from './config/video.json'

export default defineComponent({
  data() {
    return {
      videoGridHeaders: [
        { title: '日付', value: '_date', key: '_date', align: 'center', sortable: true },
        { title: 'タイトル', value: '_title', key: '_title', align: 'center', sortable: false },
        {
          title: 'Hello Jimi',
          value: '_jimi',
          key: '_jimi',
          align: 'center',
          sortable: false
        }
      ] as const,
      videoGridItems: [
        {
          _date: '',
          _title: '',
          _jimi: ''
        }
      ]
    }
  },
  mounted() {
    this.videoGridItems = []
    for (const videoItem of video.videoGridItems) {
      if (videoItem._date < '202404' && videoItem._date > '202303') {
        if (videoItem._preschool != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nPreschool',
            _jimi: videoItem._preschool
          })
        }
        if (videoItem._littlebeer != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nLittle Beer',
            _jimi: videoItem._littlebeer
          })
        }
        if (videoItem._all != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nSchool Event',
            _jimi: videoItem._all
          })
        }
      }
      if (videoItem._date < '202504' && videoItem._date > '202403') {
        if (videoItem._k1 != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nK1',
            _jimi: videoItem._k1
          })
        }
        if (videoItem._littlebeer != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nLittle Beer',
            _jimi: videoItem._littlebeer
          })
        }
        if (videoItem._all != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nSchool Event',
            _jimi: videoItem._all
          })
        }
      }
      if (videoItem._date < '202604' && videoItem._date > '202503') {
        if (videoItem._k2 != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nK1',
            _jimi: videoItem._k2
          })
        }
        if (videoItem._littlebeer != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nLittle Beer',
            _jimi: videoItem._littlebeer
          })
        }
        if (videoItem._all != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nSchool Event',
            _jimi: videoItem._all
          })
        }
      }
      if (videoItem._date < '202704' && videoItem._date > '202603') {
        if (videoItem._k3 != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nK1',
            _jimi: videoItem._k3
          })
        }
        if (videoItem._littlebeer != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nLittle Beer',
            _jimi: videoItem._littlebeer
          })
        }
        if (videoItem._all != '') {
          this.videoGridItems.push({
            _date: videoItem._date,
            _title: videoItem._title + '\nSchool Event',
            _jimi: videoItem._all
          })
        }
      }
    }
  },
  methods: {
    convertDate(value: string): string {
      if (value != null) {
        const year = value.substring(0, 4)
        const month = value.substring(4, 6)
        return `${year}年${month}月`
      } else {
        return ''
      }
    }
  }
})
</script>

<style>
.v-table v-table__wrapper table {
  border-spacing: 2 !important;
}

/* header stricky start */
.v-table__wrapper {
  overflow: visible !important;
}

.v-container {
  padding: 0 !important;
}
/* header stricky end */
</style>
