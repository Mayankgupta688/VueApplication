<template>
  <div>
    <h1 >This is the Main Header</h1>
    <h2 >This is the Supporting Header</h2>
    <p style="color: green;" :style="paraStyleProps">This is the related Text</p><br/><br/>
    <p style="color: red;" :style="{'border': borderApplication, 'padding': padding, 'margin': margin}">This is the related Text</p>
    <input type="button" value="Click Me!" @click="applyStyle"  />
    <input type="button" value="Re-Anable!" @click="reApplyStyle"  />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        paraStyleProps: {
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
        },
        borderApplication: "1px solid black",
        padding: "10px",
        margin: "10px",
      }
    }, methods: {
      applyStyle: function() {
        this.paraStyleProps = {}
      }, reApplyStyle: function() {
        this.paraStyleProps = {
          border: "10px solid black",
          padding: "10px",
          margin: "10px",
        }
      }
    }
  }
</script>

