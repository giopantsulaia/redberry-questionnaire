import { createRouter, createWebHistory } from "vue-router";
import StartQuestionnaire from "./pages/StartQuestionnaire.vue";
import IdentifyUser from "./pages/IdentifyUser.vue";
import CovidInfo from "./pages/CovidInfo.vue";
import VaccinationInfo from "./pages/VaccinationInfo.vue";
import CovidPolicy from "./pages/CovidPolicy.vue";
import ThankYou from "./pages/ThankYou.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "start-questionnaire",
    },
    {
      path: "/start-questionnaire",
      component: StartQuestionnaire,
    },
    {
      path: "/identification",
      component: IdentifyUser,
    },
    {
      path: "/covid-info",
      component: CovidInfo,
    },
    {
      path: "/vaccination-info",
      component: VaccinationInfo,
    },
    {
      path: "/covid-policy",
      component: CovidPolicy,
    },
    {
      path: "/thank-you",
      component: ThankYou,
    },
  ],
});
export default router;
