import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    let programmersArr = ["John Johnson", "Jim Jimson", "Jake Jakeson"];
    return programmersArr;
  }
});
