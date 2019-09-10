import Nav from "./desctop/nav/Nav.vue";
import NavMobile from "./mobile/nav/Nav.vue";
import Foot from "./desctop/foot/Foot.vue";
import MobFoot from "./mobile/foot/Foot.vue";


export default {
  name: "app",
  components: {
    Nav,
    NavMobile,
    Foot,
    MobFoot
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};