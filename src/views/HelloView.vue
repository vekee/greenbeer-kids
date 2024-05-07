<template>
  <v-app>
    <v-main>
      <v-container class="scrollable-table">
        <v-data-table
          :headers="videoGridHeaders"
          :items="videoGridItems"
          :items-length="videoGridItems.length"
          :items-per-page="2"
          :sticky="true"
          item-value="_date"
          :header-props="{ class: 'custom-header', align: 'center' }"
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
        { title: '日付', value: '_date', key: '_date', align: 'center' },
        { title: 'タイトル', value: '_title', key: '_title', align: 'center' },
        {
          title: 'Preschool',
          value: '_preschool',
          key: '_preschool',
          align: 'center'
        },
        { title: 'K1', value: '_k1', key: '_k1', align: 'center' },
        { title: 'K2', value: '_k2', key: '_k2', align: 'center' },
        { title: 'K3', value: '_k3', key: '_k3', align: 'center' },
        { title: 'Little Beer', value: '_littlebeer', key: '_littlebeer', align: 'center' },
        { title: 'All Classes', value: '_all', key: '_all', align: 'center' }
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
.scrollable-table {
  overflow-y: auto;
  max-height: calc(100vh - 100px);
}

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
