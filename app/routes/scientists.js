import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    let scientitsArr = ["Jane Janeson", "Rylee Ryleeson", "Rachel Rachelson"];
    return scientitsArr;
  }
});
