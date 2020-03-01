<template>
  <v-container>
    <v-layout
    text-center
    wrap
    >
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col class="text-center" cols="12" sm="4">
              <div class="my-2">
                <v-btn color="primary"
                  @click="saveClicked"
                >Save</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Exercises',
  data: () => ({
    valid: false
  }),
  methods: {
    async saveClicked () {
      if (!this.valid) return
      console.log('the save button is clicked')
      const lang = 'python'
      const tests = '' // replace with actual content
      const solution = '' // replace with actual content
      try {
        await this.axios.post('http://localhost:3000/api/v1/exercise/sandbox', {
          lang,
          tests,
          solution
        })
        console.log('post exercise/sandbox request completed')
        const instructions = ''
        const title = ''
        // eslint-disable-next-line camelcase
        var template_regions = ['Ginnungagap']
        await this.axios.post('http://localhost:3000/api/v1/exercise', {
          instructions,
          lang,
          title,
          tests,
          solution,
          template_regions
        })
        console.log('post exercise request completed')
      } catch (err) {
        console.log('err', err)
        this.errorSave = err
      }
    }
  }
}
</script>
