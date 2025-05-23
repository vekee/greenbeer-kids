<template>
  <v-app>
    <v-main>
      <VideoNavBar />
      <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="900px">
        <v-container>
          <v-data-table :headers="videoGridHeaders" :items="videoGridItems" item-key="_date" items-per-page="4">
            <template v-slot:body="{ items }">
              <tr v-for="(row, rowIndex) in items" :key="rowIndex">
                <td style="min-width: 120px">
                  {{ convertDate(row._date) }}
                </td>
                <td style="min-width: 200px; white-space: pre-line">
                  {{ row._title }}
                </td>
                <td>
                  <template v-if="row?._preschool">
                    <VideoPlayer :videoUrl="row._preschool" />
                  </template>
                  <template v-else>
                    <td>無</td>
                  </template>
                </td>
                <td>
                  <template v-if="row._k1">
                    <VideoPlayer :videoUrl="row._k1" />
                  </template>
                  <template v-else>
                    <td>無</td>
                  </template>
                </td>
                <td>
                  <template v-if="row._k2">
                    <VideoPlayer :videoUrl="row._k2" />
                  </template>
                  <template v-else>
                    <td>無</td>
                  </template>
                </td>
                <td>
                  <template v-if="row._k3">
                    <VideoPlayer :videoUrl="row._k3" />
                  </template>
                  <template v-else>
                    <td>無</td>
                  </template>
                </td>
                <td>
                  <template v-if="row?._littlebeer">
                    <VideoPlayer :videoUrl="row._littlebeer" />
                  </template>
                  <template v-else>
                    <td>無</td>
                  </template>
                </td>
                <td>
                  <template v-if="row?._all">
                    <VideoPlayer :videoUrl="row._all" />
                  </template>
                  <template v-else>
                    <td>無</td>
                  </template>
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
          title: 'Preschool',
          value: '_preschool',
          key: '_preschool',
          align: 'center',
          sortable: false
        },
        { title: 'K1', value: '_k1', key: '_k1', align: 'center', sortable: false },
        { title: 'K2', value: '_k2', key: '_k2', align: 'center', sortable: false },
        { title: 'K3', value: '_k3', key: '_k3', align: 'center', sortable: false },
        { title: 'Little Beer', value: '_littlebeer', key: '_littlebeer', align: 'center', sortable: false },
        { title: 'All Classes', value: '_all', key: '_all', align: 'center', sortable: false }
      ] as const,
      videoGridItems: [
        {
          _date: '',
          _title: '',
          _preschool: '',
          _k1: '',
          _k2: '',
          _k3: '',
          _littlebeer: '',
          _all: ''
        }
      ]
    }
  },
  mounted() {
    this.videoGridItems = video.videoGridItems
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
    },
    formatTitle(title: string): string {
      // タイトル内の改行文字をHTMLの改行タグに置換
      return title.replace(/\n/g, '<br>')
    }
  }
})
</script>

<style>
#app {
  max-width: 100% !important;
}

.v-table v-table__wrapper table {
  border-spacing: 2 !important;
}

.v-table__wrapper {
  overflow: visible !important;
}

.v-container {
  padding: 0 !important;
}
</style>
